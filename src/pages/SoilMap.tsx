import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ArrowLeft, Search, Layers, X, Loader2 } from "lucide-react";

// Fix default marker icon
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const SEMARNAT_BASE =
  "https://gisviewer.semarnat.gob.mx/ArcGIS/rest/services/INFOTECA/suelos/MapServer";

interface LayerConfig {
  id: string;
  label: string;
  layers: string; // comma-separated ArcGIS layer ids
  active: boolean;
}

interface IdentifyResult {
  layerName: string;
  attributes: Record<string, any>;
}

const INITIAL_LAYERS: LayerConfig[] = [
  { id: "dominantes", label: "Suelos Dominantes", layers: "3,4", active: true },
  { id: "textura", label: "Textura de Suelos", layers: "6,7", active: false },
  { id: "degradacion", label: "Degradación física", layers: "8", active: false },
  { id: "erosion_h", label: "Erosión hídrica", layers: "11", active: false },
];

const SoilMap = () => {
  const navigate = useNavigate();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const overlayRef = useRef<L.TileLayer | null>(null);
  const searchMarkerRef = useRef<L.Marker | null>(null);

  const [layerConfigs, setLayerConfigs] = useState<LayerConfig[]>(INITIAL_LAYERS);
  const [showLayers, setShowLayers] = useState(false);
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [popup, setPopup] = useState<IdentifyResult | null>(null);
  const [identifying, setIdentifying] = useState(false);

  // Build the active layer list string
  const activeLayers = layerConfigs
    .filter((l) => l.active)
    .flatMap((l) => l.layers.split(","))
    .join(",");

  // Create/update the ArcGIS export overlay
  const updateOverlay = useCallback(
    (map: L.Map) => {
      if (overlayRef.current) {
        map.removeLayer(overlayRef.current);
        overlayRef.current = null;
      }
      if (!activeLayers) return;

      // Use ArcGIS REST export as a tile layer
      const layer = L.tileLayer(
        `${SEMARNAT_BASE}/export?dpi=96&transparent=true&format=png32&layers=show:${activeLayers}&bbox={bbox}&bboxSR=4326&imageSR=4326&size=256,256&f=image`,
        {
          attribution: "SEMARNAT · INEGI",
          opacity: 0.65,
          maxZoom: 18,
          // Custom tile URL with bbox
          // We override getTileUrl to compute bbox from tile coords
        }
      );

      // Override getTileUrl to build proper bbox
      (layer as any).getTileUrl = function (coords: L.Coords) {
        const map = this._map as L.Map;
        const tileSize = this.getTileSize();
        const nwPoint = coords.scaleBy(tileSize);
        const sePoint = nwPoint.add(tileSize);
        const nw = map.unproject(nwPoint, coords.z);
        const se = map.unproject(sePoint, coords.z);
        const bbox = `${nw.lng},${se.lat},${se.lng},${nw.lat}`;
        return `${SEMARNAT_BASE}/export?dpi=96&transparent=true&format=png32&layers=show:${activeLayers}&bbox=${bbox}&bboxSR=4326&imageSR=4326&size=${tileSize.x},${tileSize.y}&f=image`;
      };

      layer.addTo(map);
      overlayRef.current = layer;
    },
    [activeLayers]
  );

  // Init map
  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: [23.6345, -102.5528], // Mexico center
      zoom: 5,
      zoomControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "© OpenStreetMap",
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    mapInstance.current = map;
    setTimeout(() => map.invalidateSize(), 100);

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  // Update overlay when layers change
  useEffect(() => {
    if (mapInstance.current) {
      updateOverlay(mapInstance.current);
    }
  }, [activeLayers, updateOverlay]);

  // Click identify
  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;

    const handleClick = async (e: L.LeafletMouseEvent) => {
      if (!activeLayers) return;
      setIdentifying(true);
      setPopup(null);

      const bounds = map.getBounds();
      const size = map.getSize();
      const point = map.latLngToContainerPoint(e.latlng);

      const params = new URLSearchParams({
        geometry: `${e.latlng.lng},${e.latlng.lat}`,
        geometryType: "esriGeometryPoint",
        sr: "4326",
        layers: `visible:${activeLayers}`,
        tolerance: "10",
        mapExtent: `${bounds.getWest()},${bounds.getSouth()},${bounds.getEast()},${bounds.getNorth()}`,
        imageDisplay: `${size.x},${size.y},96`,
        returnGeometry: "false",
        f: "json",
      });

      try {
        const res = await fetch(`${SEMARNAT_BASE}/identify?${params}`);
        const data = await res.json();

        if (data.results && data.results.length > 0) {
          const r = data.results[0];
          setPopup({
            layerName: r.layerName || "Suelo",
            attributes: r.attributes || {},
          });

          // Show popup on map
          const popupContent = buildPopupHtml(r.layerName, r.attributes);
          L.popup()
            .setLatLng(e.latlng)
            .setContent(popupContent)
            .openOn(map);
        }
      } catch {
        // Service may be unavailable
      } finally {
        setIdentifying(false);
      }
    };

    map.on("click", handleClick);
    return () => {
      map.off("click", handleClick);
    };
  }, [activeLayers]);

  // Search by place name
  const handleSearch = async () => {
    if (!query.trim()) return;
    setSearching(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query + ", México")}&limit=1`
      );
      const results = await res.json();
      if (results.length > 0) {
        const { lat, lon, display_name } = results[0];
        const map = mapInstance.current;
        if (map) {
          map.setView([parseFloat(lat), parseFloat(lon)], 10);
          if (searchMarkerRef.current) {
            map.removeLayer(searchMarkerRef.current);
          }
          searchMarkerRef.current = L.marker([parseFloat(lat), parseFloat(lon)])
            .addTo(map)
            .bindPopup(`<b>${display_name}</b>`)
            .openPopup();
        }
      }
    } catch {
      // geocoding failed silently
    } finally {
      setSearching(false);
    }
  };

  const toggleLayer = (id: string) => {
    setLayerConfigs((prev) =>
      prev.map((l) => (l.id === id ? { ...l, active: !l.active } : l))
    );
  };

  return (
    <div className="app-shell flex flex-col">
      {/* Header */}
      <header className="gradient-header pt-safe flex-shrink-0 z-30 relative">
        <div className="flex items-center gap-2 px-3 py-3">
          <button
            onClick={() => navigate("/opciones")}
            className="no-tap w-9 h-9 rounded-full bg-white/10 flex items-center justify-center active:scale-90 transition-transform flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <div className="flex-1 min-w-0">
            <h2 className="font-display text-lg font-bold text-primary-foreground leading-tight">
              Mapa de Suelos
            </h2>
            <p className="text-primary-foreground/70 text-[10px] font-body">
              SEMARNAT · INEGI · Datos oficiales
            </p>
          </div>
          <button
            onClick={() => setShowLayers(!showLayers)}
            className={`no-tap w-9 h-9 rounded-full flex items-center justify-center active:scale-90 transition-transform ${
              showLayers ? "bg-accent/30" : "bg-white/10"
            }`}
          >
            <Layers className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>

        {/* Search bar */}
        <div className="px-3 pb-3">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Buscar localidad (ej. Bacalar)"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 pl-9 text-sm text-primary-foreground placeholder:text-primary-foreground/40 font-body focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/50" />
            </div>
            <button
              onClick={handleSearch}
              disabled={searching}
              className="no-tap bg-accent/80 hover:bg-accent rounded-xl px-3 py-2 text-xs font-body font-semibold text-accent-foreground active:scale-95 transition-transform disabled:opacity-50"
            >
              {searching ? <Loader2 className="w-4 h-4 animate-spin" /> : "Buscar"}
            </button>
          </div>
        </div>
      </header>

      {/* Layer selector panel */}
      {showLayers && (
        <div className="absolute top-28 right-3 z-40 bg-card border border-border rounded-xl shadow-card p-3 w-56">
          <div className="flex items-center justify-between mb-2">
            <p className="font-body font-semibold text-foreground text-xs">Capas</p>
            <button onClick={() => setShowLayers(false)} className="text-muted-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>
          {layerConfigs.map((l) => (
            <label
              key={l.id}
              className="flex items-center gap-2 py-1.5 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={l.active}
                onChange={() => toggleLayer(l.id)}
                className="rounded border-border accent-primary w-4 h-4"
              />
              <span className="text-foreground text-xs font-body">{l.label}</span>
            </label>
          ))}
          <p className="text-muted-foreground text-[10px] font-body mt-2">
            Toca el mapa para identificar el suelo
          </p>
        </div>
      )}

      {/* Identify loading indicator */}
      {identifying && (
        <div className="absolute top-28 left-1/2 -translate-x-1/2 z-40 bg-card border border-border rounded-full px-3 py-1.5 shadow-card flex items-center gap-2">
          <Loader2 className="w-3 h-3 animate-spin text-primary" />
          <span className="text-xs font-body text-foreground">Identificando suelo…</span>
        </div>
      )}

      {/* Map */}
      <div ref={mapRef} className="flex-1 w-full" />
    </div>
  );
};

function buildPopupHtml(layerName: string, attrs: Record<string, any>): string {
  const SKIP_KEYS = ["OBJECTID", "Shape", "Shape_Length", "Shape_Area", "FID", "OBJECTID_1"];
  const entries = Object.entries(attrs).filter(
    ([k, v]) => !SKIP_KEYS.includes(k) && v !== null && v !== "" && v !== "Null"
  );

  let html = `<div style="font-family:Inter,sans-serif;max-width:220px">`;
  html += `<p style="font-weight:700;font-size:13px;margin:0 0 6px">${layerName}</p>`;
  entries.forEach(([k, v]) => {
    html += `<p style="margin:2px 0;font-size:11px"><b>${k.replace(/_/g, " ")}:</b> ${v}</p>`;
  });
  if (entries.length === 0) {
    html += `<p style="font-size:11px;color:#888">Sin datos disponibles en este punto</p>`;
  }
  html += `</div>`;
  return html;
}

export default SoilMap;
