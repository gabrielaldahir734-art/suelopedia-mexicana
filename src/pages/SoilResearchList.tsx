import { useNavigate, useParams } from "react-router-dom";
import { soils } from "@/data/soils";
import { getResearchBySoilId } from "@/lib/userResearch";
import { ArrowLeft, Plus, User, Calendar } from "lucide-react";

const SoilResearchList = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const soil = soils.find((s) => s.id === id);

  if (!soil) {
    navigate("/");
    return null;
  }

  const researches = getResearchBySoilId(soil.id);

  const fieldLabels: { key: string; label: string }[] = [
    { key: "materialParental", label: "Material parental" },
    { key: "colorTipico", label: "Color típico" },
    { key: "retencionAgua", label: "Retención de agua" },
    { key: "drenaje", label: "Drenaje" },
    { key: "climaTipico", label: "Clima típico" },
    { key: "vegetacion", label: "Vegetación" },
    { key: "usoComun", label: "Uso común" },
    { key: "limitantes", label: "Limitantes" },
    { key: "distribucion", label: "Distribución" },
  ];

  return (
    <div className="app-shell flex flex-col">
      {/* Header */}
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

      {/* Content */}
      <main className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="px-4 py-4 pb-safe">
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
            <div className="space-y-4">
              {researches.map((r, idx) => (
                <div key={r.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                  {/* Research header */}
                  <div className="bg-muted px-4 py-2.5 flex items-center gap-2 border-b border-border">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground text-xs font-body font-semibold truncate">{r.autor}</p>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <p className="text-xs font-body">{r.fecha}</p>
                      </div>
                    </div>
                    <span className="text-muted-foreground text-xs font-body">#{idx + 1}</span>
                  </div>

                  {/* Research data */}
                  <div className="px-4 py-3 space-y-2">
                    {fieldLabels.map((f) => {
                      const value = (r as unknown as Record<string, string>)[f.key];
                      if (!value) return null;
                      return (
                        <div key={f.key}>
                          <p className="text-muted-foreground text-xs font-body font-semibold">{f.label}:</p>
                          <p className="text-foreground text-sm font-body leading-relaxed">{value}</p>
                        </div>
                      );
                    })}
                    {r.notasAdicionales && (
                      <div className="mt-2 pt-2 border-t border-border">
                        <p className="text-muted-foreground text-xs font-body font-semibold">Notas adicionales:</p>
                        <p className="text-foreground text-sm font-body italic leading-relaxed">{r.notasAdicionales}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SoilResearchList;
