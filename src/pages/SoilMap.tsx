import { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ArrowLeft, Search, Loader2, MapPin, Layers } from "lucide-react";
import {
  SOILS_BY_STATE,
  SOIL_COLORS,
  SOIL_NAMES,
  getAllSoilTypes,
  getStatesBySoilType,
  getSoilsByState,
} from "@/data/soilsByState";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MEXICO_GEOJSON_URL =
  "https://raw.githubusercontent.com/angelnmara/geojson/master/mexicoHigh.json";

type SearchMode = "soil" | "state";

const SoilMap = () => {
  const navigate = useNavigate();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const geoLayerRef = useRef<L.GeoJSON | null>(null);
  const [geoData, setGeoData] = useState<any>(null);

  const [mode, setMode] = useState<SearchMode>("soil");
  const [selectedSoil, setSelectedSoil] = useState("");
  const [stateQuery, setStateQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [selectedState, setSelectedState] = useState("");

  const soilTypes = useMemo(() => getAllSoilTypes(), []);

  // Load GeoJSON
  useEffect(() => {
    fetch(MEXICO_GEOJSON_URL)
      .then((r) => r.json())
      .then(setGeoData)
      .catch(() => {});
  }, []);

  // Init map
  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;
    const map = L.map(mapRef.current, {
      center: [23.63, -102.55],
      zoom: 5,
      zoomControl: false,
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "© OpenStreetMap",
    }).addTo(map);
    L.control.zoom({ position: "bottomright" }).addTo(map);
    mapInstance.current = map;
    setTimeout(() => map.invalidateSize(), 200);
    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  // Helper: find matching state data
  const findStateData = (geoName: string) => {
    const n = geoName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return SOILS_BY_STATE.find((s) => {
      const sn = s.estado.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return sn === n || sn.includes(n) || n.includes(sn);
    });
  };

  // Update map when soil type selected
  useEffect(() => {
    const map = mapInstance.current;
    if (!map || !geoData || mode !== "soil" || !selectedSoil) return;

    if (geoLayerRef.current) {
      map.removeLayer(geoLayerRef.current);
    }

    const statesWithSoil = getStatesBySoilType(selectedSoil);
    const stateMap = new Map(statesWithSoil.map((s) => [s.estado, s.porcentaje]));

    const layer = L.geoJSON(geoData, {
      style: (feature) => {
        const name = feature?.properties?.name || feature?.properties?.NAME || feature?.properties?.ESTADO || "";
        const stateData = findStateData(name);
        const pct = stateData ? stateMap.get(stateData.estado) : undefined;

        if (pct !== undefined && pct > 0) {
          const opacity = Math.min(0.3 + (pct / 40) * 0.7, 1);
          return {
            fillColor: SOIL_COLORS[selectedSoil] || "#800080",
            fillOpacity: opacity,
            color: "#333",
            weight: 1.5,
          };
        }
        return {
          fillColor: "#e5e7eb",
          fillOpacity: 0.3,
          color: "#999",
          weight: 1,
        };
      },
      onEachFeature: (feature, layer) => {
        const name = feature?.properties?.name || feature?.properties?.NAME || feature?.properties?.ESTADO || "";
        const stateData = findStateData(name);
        const pct = stateData ? stateMap.get(stateData.estado) : undefined;

        if (pct !== undefined && pct > 0) {
          layer.bindPopup(
            `<div style="font-family:Inter,sans-serif">
              <p style="font-weight:700;font-size:14px;margin:0 0 4px">${stateData?.estado}</p>
              <p style="font-size:12px;margin:0;color:#800080"><b>${SOIL_NAMES[selectedSoil]}</b>: ${pct}% de la superficie</p>
              <p style="font-size:10px;margin:4px 0 0;color:#666">Fuente: INEGI Serie II</p>
            </div>`
          );
        } else {
          layer.bindPopup(
            `<div style="font-family:Inter,sans-serif">
              <p style="font-weight:700;font-size:13px;margin:0">${name}</p>
              <p style="font-size:11px;color:#888;margin:2px 0 0">Sin presencia significativa de ${SOIL_NAMES[selectedSoil]}</p>
            </div>`
          );
        }
      },
    });

    layer.addTo(map);
    geoLayerRef.current = layer;
    setResults(statesWithSoil);
    map.setView([23.63, -102.55], 5);
  }, [selectedSoil, geoData, mode]);

  // Search by state
  const handleStateSearch = () => {
    if (!stateQuery.trim()) return;
    setSearching(true);

    const soils = getSoilsByState(stateQuery.trim());
    const stateData = SOILS_BY_STATE.find(
      (s) =>
        s.estado.toLowerCase().includes(stateQuery.toLowerCase()) ||
        s.abreviatura.toLowerCase() === stateQuery.toLowerCase()
    );

    if (stateData && soils.length > 0 && mapInstance.current && geoData) {
      setSelectedState(stateData.estado);
      setResults(soils);

      if (geoLayerRef.current) {
        mapInstance.current.removeLayer(geoLayerRef.current);
      }

      const suelosMap = new Map(soils.map((s) => [s.suelo, s]));

      // Color the selected state with its dominant soil color
      const dominantSoil = soils[0]?.suelo;

      const layer = L.geoJSON(geoData, {
        style: (feature) => {
          const name = feature?.properties?.name || feature?.properties?.NAME || feature?.properties?.ESTADO || "";
          const sd = findStateData(name);

          if (sd && sd.estado === stateData.estado) {
            return {
              fillColor: SOIL_COLORS[dominantSoil] || "#800080",
              fillOpacity: 0.7,
              color: "#800080",
              weight: 3,
            };
          }
          return {
            fillColor: "#e5e7eb",
            fillOpacity: 0.2,
            color: "#ccc",
            weight: 1,
          };
        },
        onEachFeature: (feature, lyr) => {
          const name = feature?.properties?.name || feature?.properties?.NAME || feature?.properties?.ESTADO || "";
          const sd = findStateData(name);

          if (sd && sd.estado === stateData.estado) {
            let html = `<div style="font-family:Inter,sans-serif;max-width:220px">`;
            html += `<p style="font-weight:700;font-size:14px;margin:0 0 6px">${stateData.estado}</p>`;
            html += `<p style="font-size:11px;font-weight:600;margin:0 0 4px;color:#666">Suelos dominantes:</p>`;
            soils.slice(0, 6).forEach((s) => {
              html += `<div style="display:flex;align-items:center;gap:6px;margin:2px 0">
                <span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:${SOIL_COLORS[s.suelo] || '#888'};flex-shrink:0"></span>
                <span style="font-size:11px"><b>${s.nombre}</b>: ${s.porcentaje}%</span>
              </div>`;
            });
            html += `<p style="font-size:9px;margin:6px 0 0;color:#999">Fuente: INEGI Serie II</p></div>`;
            lyr.bindPopup(html);
          }
        },
      });

      layer.addTo(mapInstance.current);
      geoLayerRef.current = layer;
      mapInstance.current.setView(stateData.centro, 7);
    } else {
      setResults([]);
      setSelectedState("");
    }

    setSearching(false);
  };

  // Clear when mode changes
  useEffect(() => {
    if (geoLayerRef.current && mapInstance.current) {
      mapInstance.current.removeLayer(geoLayerRef.current);
      geoLayerRef.current = null;
    }
    setResults([]);
    setSelectedSoil("");
    setStateQuery("");
    setSelectedState("");
  }, [mode]);

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
              Datos oficiales INEGI · Serie II · Escala 1:250,000
            </p>
          </div>
        </div>

        {/* Mode selector */}
        <div className="px-3 pb-2">
          <div className="flex gap-1 bg-white/10 rounded-xl p-1">
            <button
              onClick={() => setMode("soil")}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-body font-semibold transition-all ${
                mode === "soil"
                  ? "bg-accent/80 text-accent-foreground"
                  : "text-primary-foreground/70"
              }`}
            >
              <Layers className="w-3 h-3 inline mr-1" />
              Por tipo de suelo
            </button>
            <button
              onClick={() => setMode("state")}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-body font-semibold transition-all ${
                mode === "state"
                  ? "bg-accent/80 text-accent-foreground"
                  : "text-primary-foreground/70"
              }`}
            >
              <MapPin className="w-3 h-3 inline mr-1" />
              Por estado
            </button>
          </div>
        </div>

        {/* Search controls */}
        <div className="px-3 pb-3">
          {mode === "soil" ? (
            <select
              value={selectedSoil}
              onChange={(e) => setSelectedSoil(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-sm text-primary-foreground font-body focus:outline-none focus:ring-1 focus:ring-accent appearance-none"
            >
              <option value="" className="text-foreground bg-card">
                Selecciona un tipo de suelo...
              </option>
              {soilTypes.map((code) => (
                <option key={code} value={code} className="text-foreground bg-card">
                  {SOIL_NAMES[code] || code} ({code})
                </option>
              ))}
            </select>
          ) : (
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={stateQuery}
                  onChange={(e) => setStateQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleStateSearch()}
                  placeholder="Buscar estado (ej. Tabasco)"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 pl-9 text-sm text-primary-foreground placeholder:text-primary-foreground/40 font-body focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/50" />
              </div>
              <button
                onClick={handleStateSearch}
                disabled={searching}
                className="no-tap bg-accent/80 hover:bg-accent rounded-xl px-3 py-2 text-xs font-body font-semibold text-accent-foreground active:scale-95 transition-transform disabled:opacity-50"
              >
                {searching ? <Loader2 className="w-4 h-4 animate-spin" /> : "Buscar"}
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Results panel */}
      {results.length > 0 && (
        <div className="absolute top-44 left-3 z-40 bg-card border border-border rounded-xl shadow-card p-3 w-56 max-h-60 overflow-y-auto scrollbar-hide">
          <p className="font-body font-semibold text-foreground text-xs mb-2">
            {mode === "soil"
              ? `${SOIL_NAMES[selectedSoil]} en México`
              : `Suelos de ${selectedState}`}
          </p>
          {mode === "soil"
            ? (results as { estado: string; porcentaje: number }[]).map((r) => (
                <div key={r.estado} className="flex items-center gap-2 py-1">
                  <span
                    className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                    style={{ backgroundColor: SOIL_COLORS[selectedSoil] || "#800080", opacity: Math.min(0.3 + (r.porcentaje / 40) * 0.7, 1) }}
                  />
                  <span className="text-foreground text-[11px] font-body flex-1">{r.estado}</span>
                  <span className="text-muted-foreground text-[10px] font-body">{r.porcentaje}%</span>
                </div>
              ))
            : (results as { suelo: string; nombre: string; porcentaje: number }[]).map((r) => (
                <div key={r.suelo} className="flex items-center gap-2 py-1">
                  <span
                    className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                    style={{ backgroundColor: SOIL_COLORS[r.suelo] || "#888" }}
                  />
                  <span className="text-foreground text-[11px] font-body flex-1">{r.nombre}</span>
                  <span className="text-muted-foreground text-[10px] font-body">{r.porcentaje}%</span>
                </div>
              ))}
          <p className="text-muted-foreground text-[9px] font-body mt-2 border-t border-border pt-1">
            Fuente: INEGI · Edafología Serie II
          </p>
        </div>
      )}

      {/* Map */}
      <div ref={mapRef} className="flex-1 w-full" />
    </div>
  );
};

export default SoilMap;
