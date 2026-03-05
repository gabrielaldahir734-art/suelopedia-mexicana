import { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ArrowLeft, Search, Loader2, MapPin, Layers, Info } from "lucide-react";
import {
  SOILS_BY_STATE,
  SOIL_COLORS,
  SOIL_NAMES,
  getAllSoilTypes,
  getStatesBySoilType,
  getSoilsByState,
} from "@/data/soilsByState";
import {
  getMunicipalitiesByState,
  getMunicipalitiesBySoilType,
  STATES_WITH_MUNICIPAL_DATA,
} from "@/data/soilsByMunicipality";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MEXICO_STATES_GEOJSON =
  "https://raw.githubusercontent.com/angelnmara/geojson/master/mexicoHigh.json";
const MEXICO_MUNICIPALITIES_GEOJSON =
  "https://raw.githubusercontent.com/PhantomInsights/mexico-geojson/main/national/municipalities.json";

type SearchMode = "soil" | "state";

const SoilMap = () => {
  const navigate = useNavigate();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const geoLayerRef = useRef<L.GeoJSON | null>(null);
  const [statesGeo, setStatesGeo] = useState<any>(null);
  const [munisGeo, setMunisGeo] = useState<any>(null);
  const [loadingGeo, setLoadingGeo] = useState(true);

  const [mode, setMode] = useState<SearchMode>("soil");
  const [selectedSoil, setSelectedSoil] = useState("");
  const [stateQuery, setStateQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [selectedState, setSelectedState] = useState("");
  const [hasMunicipalData, setHasMunicipalData] = useState(false);

  const soilTypes = useMemo(() => getAllSoilTypes(), []);

  // Load GeoJSONs
  useEffect(() => {
    Promise.all([
      fetch(MEXICO_STATES_GEOJSON).then((r) => r.json()),
      fetch(MEXICO_MUNICIPALITIES_GEOJSON).then((r) => r.json()).catch(() => null),
    ]).then(([states, munis]) => {
      setStatesGeo(states);
      setMunisGeo(munis);
      setLoadingGeo(false);
    });
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

  const findStateData = (geoName: string) => {
    const n = geoName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return SOILS_BY_STATE.find((s) => {
      const sn = s.estado.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return sn === n || sn.includes(n) || n.includes(sn);
    });
  };

  const normalizeName = (name: string) =>
    name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

  // Update map when soil type selected — show states + municipalities
  useEffect(() => {
    const map = mapInstance.current;
    if (!map || !statesGeo || mode !== "soil" || !selectedSoil) return;

    if (geoLayerRef.current) map.removeLayer(geoLayerRef.current);

    const statesWithSoil = getStatesBySoilType(selectedSoil);
    const stateMap = new Map(statesWithSoil.map((s) => [s.estado, s.porcentaje]));
    const muniData = getMunicipalitiesBySoilType(selectedSoil);
    const muniMap = new Map(muniData.map((m) => [normalizeName(m.municipio), m.porcentaje]));

    const group = L.featureGroup();

    // State layer
    const stateLayer = L.geoJSON(statesGeo, {
      style: (feature) => {
        const name = feature?.properties?.name || feature?.properties?.NAME || "";
        const sd = findStateData(name);
        const pct = sd ? stateMap.get(sd.estado) : undefined;
        if (pct !== undefined && pct > 0) {
          return {
            fillColor: SOIL_COLORS[selectedSoil] || "#800080",
            fillOpacity: Math.min(0.15 + (pct / 40) * 0.4, 0.55),
            color: "#555",
            weight: 1.5,
          };
        }
        return { fillColor: "#e5e7eb", fillOpacity: 0.2, color: "#999", weight: 1 };
      },
      onEachFeature: (feature, layer) => {
        const name = feature?.properties?.name || feature?.properties?.NAME || "";
        const sd = findStateData(name);
        const pct = sd ? stateMap.get(sd.estado) : undefined;
        if (pct && pct > 0) {
          layer.bindPopup(
            `<div style="font-family:system-ui,sans-serif">
              <p style="font-weight:700;font-size:14px;margin:0 0 4px">${sd?.estado}</p>
              <p style="font-size:12px;margin:0;color:#800080"><b>${SOIL_NAMES[selectedSoil]}</b>: ${pct}% de la superficie estatal</p>
              <p style="font-size:10px;margin:4px 0 0;color:#666">Fuente: INEGI Serie II</p>
            </div>`
          );
        }
      },
    });
    stateLayer.addTo(group);

    // Municipality layer on top if available
    if (munisGeo && muniData.length > 0) {
      const muniLayer = L.geoJSON(munisGeo, {
        style: (feature) => {
          const name = feature?.properties?.NOM_MUN || feature?.properties?.NOMGEO || feature?.properties?.name || "";
          const nn = normalizeName(name);
          const pct = muniMap.get(nn);
          if (pct !== undefined && pct > 0) {
            return {
              fillColor: SOIL_COLORS[selectedSoil] || "#800080",
              fillOpacity: Math.min(0.3 + (pct / 50) * 0.7, 1),
              color: SOIL_COLORS[selectedSoil] || "#800080",
              weight: 2,
            };
          }
          return { fillColor: "transparent", fillOpacity: 0, color: "transparent", weight: 0 };
        },
        onEachFeature: (feature, layer) => {
          const name = feature?.properties?.NOM_MUN || feature?.properties?.NOMGEO || feature?.properties?.name || "";
          const nn = normalizeName(name);
          const pct = muniMap.get(nn);
          if (pct !== undefined && pct > 0) {
            const estado = feature?.properties?.NOM_ENT || feature?.properties?.CVE_ENT || "";
            layer.bindPopup(
              `<div style="font-family:system-ui,sans-serif">
                <p style="font-weight:700;font-size:14px;margin:0 0 2px">${name}</p>
                <p style="font-size:11px;color:#666;margin:0 0 4px">${estado}</p>
                <p style="font-size:12px;margin:0;color:${SOIL_COLORS[selectedSoil] || '#800080'}"><b>${SOIL_NAMES[selectedSoil]}</b>: ${pct}% de la superficie</p>
                <p style="font-size:10px;margin:4px 0 0;color:#666">Fuente: INEGI Compendio Municipal 2010</p>
              </div>`
            );
          }
        },
        filter: (feature) => {
          const name = feature?.properties?.NOM_MUN || feature?.properties?.NOMGEO || feature?.properties?.name || "";
          return muniMap.has(normalizeName(name));
        },
      });
      muniLayer.addTo(group);
    }

    group.addTo(map);
    geoLayerRef.current = group as any;

    // Results: show municipalities first, then states
    const combinedResults = muniData.length > 0
      ? muniData.map((m) => ({ ...m, tipo: "municipio" as const }))
      : statesWithSoil.map((s) => ({ ...s, tipo: "estado" as const }));
    setResults(combinedResults);
    setHasMunicipalData(muniData.length > 0);
    map.setView([23.63, -102.55], 5);
  }, [selectedSoil, statesGeo, munisGeo, mode]);

  // Search by state — show municipalities if data available
  const handleStateSearch = () => {
    if (!stateQuery.trim()) return;
    setSearching(true);

    const stateData = SOILS_BY_STATE.find(
      (s) =>
        s.estado.toLowerCase().includes(stateQuery.toLowerCase()) ||
        s.abreviatura.toLowerCase() === stateQuery.toLowerCase()
    );

    if (!stateData || !mapInstance.current || !statesGeo) {
      setResults([]);
      setSelectedState("");
      setSearching(false);
      return;
    }

    setSelectedState(stateData.estado);
    if (geoLayerRef.current) mapInstance.current.removeLayer(geoLayerRef.current);

    const municipalities = getMunicipalitiesByState(stateData.estado);
    const hasMuniData = municipalities.length > 0;
    setHasMunicipalData(hasMuniData);

    const group = L.featureGroup();

    if (hasMuniData && munisGeo) {
      // Show municipal-level data
      const muniNames = new Set(municipalities.map((m) => normalizeName(m.municipio)));

      // Light state outline
      const stateOutline = L.geoJSON(statesGeo, {
        style: (feature) => {
          const name = feature?.properties?.name || feature?.properties?.NAME || "";
          const sd = findStateData(name);
          if (sd && sd.estado === stateData.estado) {
            return { fillColor: "transparent", fillOpacity: 0, color: "#800080", weight: 2, dashArray: "5,5" };
          }
          return { fillColor: "#e5e7eb", fillOpacity: 0.15, color: "#ccc", weight: 1 };
        },
      });
      stateOutline.addTo(group);

      // Colored municipalities
      const muniLayer = L.geoJSON(munisGeo, {
        style: (feature) => {
          const name = feature?.properties?.NOM_MUN || feature?.properties?.NOMGEO || feature?.properties?.name || "";
          const nn = normalizeName(name);
          if (muniNames.has(nn)) {
            const muni = municipalities.find((m) => normalizeName(m.municipio) === nn);
            const dominantSoil = muni?.suelos[0]?.suelo || "";
            return {
              fillColor: SOIL_COLORS[dominantSoil] || "#800080",
              fillOpacity: 0.7,
              color: "#333",
              weight: 2,
            };
          }
          return { fillColor: "transparent", fillOpacity: 0, color: "transparent", weight: 0 };
        },
        onEachFeature: (feature, lyr) => {
          const name = feature?.properties?.NOM_MUN || feature?.properties?.NOMGEO || feature?.properties?.name || "";
          const nn = normalizeName(name);
          const muni = municipalities.find((m) => normalizeName(m.municipio) === nn);
          if (muni) {
            let html = `<div style="font-family:system-ui,sans-serif;max-width:220px">`;
            html += `<p style="font-weight:700;font-size:14px;margin:0 0 6px">${muni.municipio}, ${muni.estado}</p>`;
            html += `<p style="font-size:11px;font-weight:600;margin:0 0 4px;color:#666">Suelos dominantes:</p>`;
            muni.suelos.slice(0, 6).forEach((s) => {
              html += `<div style="display:flex;align-items:center;gap:6px;margin:2px 0">
                <span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:${SOIL_COLORS[s.suelo] || "#888"};flex-shrink:0"></span>
                <span style="font-size:11px"><b>${s.nombre}</b>: ${s.porcentaje}%</span>
              </div>`;
            });
            html += `<p style="font-size:9px;margin:6px 0 0;color:#999">Fuente: INEGI Compendio Municipal 2010</p></div>`;
            lyr.bindPopup(html);
          }
        },
        filter: (feature) => {
          const name = feature?.properties?.NOM_MUN || feature?.properties?.NOMGEO || feature?.properties?.name || "";
          // Filter to only the state's municipalities
          const ent = feature?.properties?.NOM_ENT || "";
          const entNorm = normalizeName(ent);
          const stateNorm = normalizeName(stateData.estado);
          const isInState = entNorm.includes(stateNorm) || stateNorm.includes(entNorm);
          return isInState || muniNames.has(normalizeName(name));
        },
      });
      muniLayer.addTo(group);

      setResults(municipalities.map((m) => ({
        municipio: m.municipio,
        sueloDominante: m.suelos[0]?.nombre || "",
        sueloCodigo: m.suelos[0]?.suelo || "",
        porcentajeDominante: m.suelos[0]?.porcentaje || 0,
        totalSuelos: m.suelos.length,
      })));
    } else {
      // Fallback: state-level view
      const soils = getSoilsByState(stateQuery.trim());
      const dominantSoil = soils[0]?.suelo;

      const layer = L.geoJSON(statesGeo, {
        style: (feature) => {
          const name = feature?.properties?.name || feature?.properties?.NAME || "";
          const sd = findStateData(name);
          if (sd && sd.estado === stateData.estado) {
            return { fillColor: SOIL_COLORS[dominantSoil] || "#800080", fillOpacity: 0.7, color: "#800080", weight: 3 };
          }
          return { fillColor: "#e5e7eb", fillOpacity: 0.2, color: "#ccc", weight: 1 };
        },
        onEachFeature: (feature, lyr) => {
          const name = feature?.properties?.name || feature?.properties?.NAME || "";
          const sd = findStateData(name);
          if (sd && sd.estado === stateData.estado) {
            let html = `<div style="font-family:system-ui,sans-serif;max-width:220px">`;
            html += `<p style="font-weight:700;font-size:14px;margin:0 0 6px">${stateData.estado}</p>`;
            soils.slice(0, 6).forEach((s) => {
              html += `<div style="display:flex;align-items:center;gap:6px;margin:2px 0">
                <span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:${SOIL_COLORS[s.suelo] || "#888"};flex-shrink:0"></span>
                <span style="font-size:11px"><b>${s.nombre}</b>: ${s.porcentaje}%</span>
              </div>`;
            });
            html += `</div>`;
            lyr.bindPopup(html);
          }
        },
      });
      layer.addTo(group);
      setResults(soils);
    }

    group.addTo(mapInstance.current);
    geoLayerRef.current = group as any;
    mapInstance.current.setView(stateData.centro, hasMuniData ? 8 : 7);
    setSearching(false);
  };

  // Clear on mode change
  useEffect(() => {
    if (geoLayerRef.current && mapInstance.current) {
      mapInstance.current.removeLayer(geoLayerRef.current);
      geoLayerRef.current = null;
    }
    setResults([]);
    setSelectedSoil("");
    setStateQuery("");
    setSelectedState("");
    setHasMunicipalData(false);
  }, [mode]);

  return (
    <div className="app-shell flex flex-col">
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
          {loadingGeo && <Loader2 className="w-4 h-4 text-primary-foreground/50 animate-spin" />}
        </div>

        <div className="px-3 pb-2">
          <div className="flex gap-1 bg-white/10 rounded-xl p-1">
            <button
              onClick={() => setMode("soil")}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-body font-semibold transition-all ${
                mode === "soil" ? "bg-accent/80 text-accent-foreground" : "text-primary-foreground/70"
              }`}
            >
              <Layers className="w-3 h-3 inline mr-1" />
              Por tipo de suelo
            </button>
            <button
              onClick={() => setMode("state")}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-body font-semibold transition-all ${
                mode === "state" ? "bg-accent/80 text-accent-foreground" : "text-primary-foreground/70"
              }`}
            >
              <MapPin className="w-3 h-3 inline mr-1" />
              Por estado
            </button>
          </div>
        </div>

        <div className="px-3 pb-3">
          {mode === "soil" ? (
            <select
              value={selectedSoil}
              onChange={(e) => setSelectedSoil(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-sm text-primary-foreground font-body focus:outline-none focus:ring-1 focus:ring-accent appearance-none"
            >
              <option value="" className="text-foreground bg-card">Selecciona un tipo de suelo...</option>
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
        <div className="absolute top-44 left-3 z-40 bg-card border border-border rounded-xl shadow-card p-3 w-60 max-h-64 overflow-y-auto scrollbar-hide">
          <p className="font-body font-semibold text-foreground text-xs mb-1">
            {mode === "soil"
              ? `${SOIL_NAMES[selectedSoil]} en México`
              : `Suelos de ${selectedState}`}
          </p>
          {hasMunicipalData && (
            <p className="text-[9px] text-muted-foreground font-body mb-2 flex items-center gap-1">
              <Info className="w-3 h-3" />
              Datos a nivel municipal (INEGI)
            </p>
          )}

          {mode === "soil" && hasMunicipalData
            ? (results as any[]).map((r) => (
                <div key={`${r.municipio}-${r.estado}`} className="flex items-center gap-2 py-1">
                  <span
                    className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                    style={{ backgroundColor: SOIL_COLORS[selectedSoil] || "#800080", opacity: Math.min(0.3 + (r.porcentaje / 50) * 0.7, 1) }}
                  />
                  <span className="text-foreground text-[11px] font-body flex-1 leading-tight">
                    {r.municipio}
                    <span className="text-muted-foreground text-[9px] block">{r.estado}</span>
                  </span>
                  <span className="text-muted-foreground text-[10px] font-body">{r.porcentaje}%</span>
                </div>
              ))
            : mode === "soil"
            ? (results as any[]).map((r) => (
                <div key={r.estado} className="flex items-center gap-2 py-1">
                  <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: SOIL_COLORS[selectedSoil] || "#800080" }} />
                  <span className="text-foreground text-[11px] font-body flex-1">{r.estado}</span>
                  <span className="text-muted-foreground text-[10px] font-body">{r.porcentaje}%</span>
                </div>
              ))
            : hasMunicipalData
            ? (results as any[]).map((r) => (
                <div key={r.municipio} className="flex items-center gap-2 py-1">
                  <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: SOIL_COLORS[r.sueloCodigo] || "#888" }} />
                  <span className="text-foreground text-[11px] font-body flex-1 leading-tight">
                    {r.municipio}
                    <span className="text-muted-foreground text-[9px] block">
                      {r.sueloDominante} ({r.porcentajeDominante}%) · {r.totalSuelos} tipos
                    </span>
                  </span>
                </div>
              ))
            : (results as any[]).map((r) => (
                <div key={r.suelo} className="flex items-center gap-2 py-1">
                  <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: SOIL_COLORS[r.suelo] || "#888" }} />
                  <span className="text-foreground text-[11px] font-body flex-1">{r.nombre}</span>
                  <span className="text-muted-foreground text-[10px] font-body">{r.porcentaje}%</span>
                </div>
              ))}
          <p className="text-muted-foreground text-[9px] font-body mt-2 border-t border-border pt-1">
            Fuente: INEGI · Edafología Serie II
            {hasMunicipalData && " · Compendio Municipal 2010"}
          </p>
        </div>
      )}

      <div ref={mapRef} className="flex-1 w-full" />
    </div>
  );
};

export default SoilMap;
