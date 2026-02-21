import { useNavigate, useParams } from "react-router-dom";
import { soils } from "@/data/soils";
import { getResearchBySoilId } from "@/lib/userResearch";
import { ArrowLeft, Plus } from "lucide-react";

const SoilResearchList = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const soil = soils.find((s) => s.id === id);

  if (!soil) {
    navigate("/");
    return null;
  }

  const researches = getResearchBySoilId(soil.id);

  return (
    <div className="app-shell flex flex-col">
      <header className="gradient-header pt-safe flex-shrink-0">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(`/soil/${soil.id}`)}
            className="no-tap w-9 h-9 rounded-full bg-white/10 flex items-center justify-center active:scale-90 transition-transform flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <div className="flex-1 min-w-0">
            <p className="text-primary-foreground/70 text-xs font-body truncate">{soil.nombre}</p>
            <h2 className="font-display text-lg font-bold text-primary-foreground leading-tight">
              📚 Investigaciones de Usuarios
            </h2>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="px-3 py-4 pb-safe">
          {/* Add button */}
          <button
            onClick={() => navigate(`/soil/${soil.id}/investigaciones/nueva`)}
            className="no-tap w-full bg-primary/10 border border-primary/20 text-primary rounded-xl py-3 font-body font-semibold text-sm flex items-center justify-center gap-2 active:scale-98 transition-transform mb-4"
          >
            <Plus className="w-4 h-4" />
            Agregar mi investigación
          </button>

          {researches.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-4xl mb-3">🔬</p>
              <p className="text-foreground font-body font-semibold text-sm">Aún no hay investigaciones</p>
              <p className="text-muted-foreground text-xs font-body mt-1">
                Sé el primero en compartir tu investigación sobre {soil.nombre}.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {researches.map((r) => {
                const hasImage = r.imagenes && r.imagenes.length > 0;
                return (
                  <button
                    key={r.id}
                    onClick={() => navigate(`/soil/${soil.id}/investigaciones/${r.id}`)}
                    className="no-tap group relative rounded-2xl overflow-hidden shadow-card active:scale-95 transition-all duration-200"
                    style={{ height: 180 }}
                  >
                    {/* Image or placeholder */}
                    {hasImage ? (
                      <img
                        src={r.imagenes[0]}
                        alt={r.nombreInvestigacion}
                        className="absolute inset-0 w-full h-full object-cover group-active:brightness-90 transition-all duration-200"
                      />
                    ) : (
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                        <span className="text-5xl opacity-40">🔬</span>
                      </div>
                    )}
                    {/* Gradient overlay */}
                    <div className="gradient-card absolute inset-0" />
                    {/* Name & author */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="font-display text-sm font-semibold text-white leading-tight drop-shadow-lg line-clamp-2">
                        {r.nombreInvestigacion || soil.nombre}
                      </p>
                      <p className="text-white/70 text-xs mt-0.5 font-body leading-tight truncate">
                        por {r.autor}
                      </p>
                    </div>
                    {/* Corner badge */}
                    <div className="absolute top-2 right-2 bg-black/30 backdrop-blur-sm rounded-full px-2 py-0.5">
                      <span className="text-white/90 text-xs font-body font-medium">Usuario</span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SoilResearchList;
