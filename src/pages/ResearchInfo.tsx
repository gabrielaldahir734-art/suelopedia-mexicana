import { useNavigate, useParams } from "react-router-dom";
import { soils } from "@/data/soils";
import { getResearchById } from "@/lib/userResearch";
import { ArrowLeft } from "lucide-react";

const optionMeta: Record<string, { label: string; icon: string; description: string }> = {
  materialParental: { label: "Material Parental", icon: "🪨", description: "Geología de origen" },
  colorTipico: { label: "Color Típico", icon: "🎨", description: "Características visuales" },
  retencionAgua: { label: "Retención de Agua", icon: "💧", description: "Capacidad hídrica" },
  drenaje: { label: "Drenaje", icon: "🌊", description: "Comportamiento hídrico" },
  climaTipico: { label: "Clima Típico", icon: "🌤️", description: "Temperatura y lluvia" },
  vegetacion: { label: "Vegetación", icon: "🌿", description: "Flora observada" },
  usoComun: { label: "Uso Común", icon: "🌾", description: "Usos del suelo" },
  limitantes: { label: "Limitantes", icon: "⚠️", description: "Restricciones observadas" },
  distribucion: { label: "Distribución", icon: "🗺️", description: "Zona de observación" },
  notas: { label: "Notas Adicionales", icon: "📝", description: "Observaciones del investigador" },
};

const ResearchInfo = () => {
  const { id, researchId, fieldId } = useParams<{ id: string; researchId: string; fieldId: string }>();
  const navigate = useNavigate();
  const soil = soils.find((s) => s.id === id);
  const research = researchId ? getResearchById(researchId) : null;
  const meta = fieldId ? optionMeta[fieldId] : null;

  if (!soil || !research || !meta) {
    navigate(`/soil/${id}/investigaciones`);
    return null;
  }

  const contentKey = fieldId === "notas" ? "notasAdicionales" : fieldId!;
  const content = (research as unknown as Record<string, string>)[contentKey] || "";
  const heroImage = research.imagenes?.[0] || soil.imagen;

  return (
    <div className="app-shell flex flex-col">
      <header className="gradient-header pt-safe flex-shrink-0">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(`/soil/${soil.id}/investigaciones/${research.id}`)}
            className="no-tap w-9 h-9 rounded-full bg-white/10 flex items-center justify-center active:scale-90 transition-transform flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <div className="flex-1 min-w-0">
            <p className="text-primary-foreground/70 text-xs font-body truncate">{research.nombreInvestigacion}</p>
            <h2 className="font-display text-lg font-bold text-primary-foreground leading-tight truncate">
              {meta.icon} {meta.label}
            </h2>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto scrollbar-hide">
        {/* Mini banner */}
        <div className="relative h-28 flex-shrink-0">
          <img src={heroImage} alt={research.nombreInvestigacion} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="px-4 pb-safe">
          {/* Category badge */}
          <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4">
            <span className="text-base">{meta.icon}</span>
            <span className="text-primary text-xs font-body font-semibold uppercase tracking-wider">{meta.description}</span>
          </div>

          {/* Content */}
          <div className="space-y-3 mb-6">
            <p className="text-foreground text-sm font-body leading-relaxed">{content}</p>
          </div>

          {/* Author info */}
          <div className="bg-muted rounded-xl px-4 py-3 mb-4">
            <p className="text-muted-foreground text-xs font-body leading-relaxed">
              <span className="font-semibold">Investigador:</span> {research.autor} · {research.fecha}
            </p>
            <p className="text-muted-foreground text-xs font-body mt-1">
              Investigación comunitaria sobre {soil.nombre}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResearchInfo;
