import { useNavigate, useParams } from "react-router-dom";
import { soils } from "@/data/soils";
import { getResearchById } from "@/lib/userResearch";
import { ArrowLeft, MapPin } from "lucide-react";
import LocationMap from "@/components/LocationMap";

const researchMenuOptions = [
  { id: "materialParental", label: "Material Parental", icon: "🪨", description: "Geología de origen" },
  { id: "colorTipico", label: "Color Típico", icon: "🎨", description: "Características visuales" },
  { id: "retencionAgua", label: "Retención de Agua", icon: "💧", description: "Capacidad hídrica" },
  { id: "drenaje", label: "Drenaje", icon: "🌊", description: "Comportamiento hídrico" },
  { id: "climaTipico", label: "Clima Típico", icon: "🌤️", description: "Temperatura y lluvia" },
  { id: "vegetacion", label: "Vegetación", icon: "🌿", description: "Flora observada" },
  { id: "usoComun", label: "Uso Común", icon: "🌾", description: "Usos del suelo" },
  { id: "limitantes", label: "Limitantes", icon: "⚠️", description: "Restricciones observadas" },
  { id: "distribucion", label: "Distribución", icon: "🗺️", description: "Zona de observación" },
];

const ResearchMenu = () => {
  const { id, researchId } = useParams<{ id: string; researchId: string }>();
  const navigate = useNavigate();
  const soil = soils.find((s) => s.id === id);
  const research = researchId ? getResearchById(researchId) : null;

  if (!soil || !research) {
    navigate(`/soil/${id}/investigaciones`);
    return null;
  }

  const heroImage = research.imagenes?.[0] || soil.imagen;

  return (
    <div className="app-shell flex flex-col">
      {/* Hero Header */}
      <div className="relative h-56 flex-shrink-0">
        <img src={heroImage} alt={research.nombreInvestigacion} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

        <button
          onClick={() => navigate(`/soil/${soil.id}/investigaciones`)}
          className="no-tap absolute top-4 left-4 pt-safe mt-2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center active:scale-90 transition-transform"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
          <h2 className="font-display text-2xl font-bold text-white drop-shadow-lg leading-tight">
            {research.nombreInvestigacion}
          </h2>
          <p className="text-white/80 text-sm font-body mt-1">
            por {research.autor} · {research.fecha}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide bg-background">
        <div className="px-3 py-3">
          {/* Extra images gallery */}
          {research.imagenes && research.imagenes.length > 1 && (
            <div className="mb-3">
              <p className="text-xs text-muted-foreground font-body px-1 mb-2 uppercase tracking-wider font-medium">
                Fotos de la observación
              </p>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {research.imagenes.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Foto ${i + 1}`}
                    className="w-24 h-24 rounded-xl object-cover flex-shrink-0 border border-border"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Location map */}
          {research.ubicacion && (
            <div className="mb-3">
              <p className="text-xs text-muted-foreground font-body px-1 mb-2 uppercase tracking-wider font-medium">
                Ubicación de la observación
              </p>
              <LocationMap location={research.ubicacion} />
              <div className="flex items-center gap-1.5 mt-2 px-1">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <p className="text-muted-foreground text-xs font-body">
                  {research.ubicacion.latitude.toFixed(6)}, {research.ubicacion.longitude.toFixed(6)}
                  {research.ubicacion.altitude !== null && ` · ${research.ubicacion.altitude.toFixed(0)} m alt.`}
                </p>
              </div>
            </div>
          )}

          <p className="text-xs text-muted-foreground font-body px-1 mb-2 uppercase tracking-wider font-medium">
            Selecciona una categoría de información
          </p>
          <div className="flex flex-col gap-2">
            {researchMenuOptions.map((option) => {
              const value = (research as unknown as Record<string, string>)[option.id];
              if (!value) return null;
              return (
                <button
                  key={option.id}
                  onClick={() => navigate(`/soil/${soil.id}/investigaciones/${research.id}/${option.id}`)}
                  className="no-tap w-full flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 active:scale-98 active:bg-muted transition-all duration-150 shadow-sm text-left"
                >
                  <span className="text-2xl w-8 text-center flex-shrink-0">{option.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-semibold text-foreground text-sm leading-tight">{option.label}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{option.description}</p>
                  </div>
                  <span className="text-muted-foreground/50 flex-shrink-0">›</span>
                </button>
              );
            })}

            {/* Notes */}
            {research.notasAdicionales && (
              <button
                onClick={() => navigate(`/soil/${soil.id}/investigaciones/${research.id}/notas`)}
                className="no-tap w-full flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-xl px-4 py-3 active:scale-98 active:bg-primary/10 transition-all duration-150 shadow-sm text-left"
              >
                <span className="text-2xl w-8 text-center flex-shrink-0">📝</span>
                <div className="flex-1 min-w-0">
                  <p className="font-body font-semibold text-primary text-sm leading-tight">Notas Adicionales</p>
                  <p className="text-muted-foreground text-xs mt-0.5">Observaciones del investigador</p>
                </div>
                <span className="text-primary/50 flex-shrink-0">›</span>
              </button>
            )}
          </div>

          <div className="mt-4 mb-2">
            <p className="text-muted-foreground text-xs text-center font-body">
              Investigación comunitaria · {soil.nombre}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchMenu;
