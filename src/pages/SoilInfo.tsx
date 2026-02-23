import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { soils, menuOptions, getSoilInfoByOptionId } from "@/data/soils";
import { getOverride, mergeInfoWithOverride } from "@/lib/soilOverrides";
import { ArrowLeft, Loader2 } from "lucide-react";

const SoilInfo = () => {
  const { id, optionId } = useParams<{ id: string; optionId: string }>();
  const navigate = useNavigate();
  const soil = soils.find((s) => s.id === id);
  const option = menuOptions.find((o) => o.id === optionId);
  const [mergedContent, setMergedContent] = useState<{ title: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!soil || !optionId) return;
    getOverride(soil.id).then((override) => {
      const mergedInfo = mergeInfoWithOverride(soil.info, override);
      const mergedSoil = { ...soil, info: mergedInfo };
      setMergedContent(getSoilInfoByOptionId(mergedSoil, optionId));
      setLoading(false);
    });
  }, [soil, optionId]);

  if (!soil || !option) {
    navigate("/");
    return null;
  }

  const parseContent = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  const currentIdx = menuOptions.findIndex((o) => o.id === optionId);
  const prev = currentIdx > 0 ? menuOptions[currentIdx - 1] : null;
  const next = currentIdx < menuOptions.length - 1 ? menuOptions[currentIdx + 1] : null;

  const content = mergedContent?.content || "";
  const paragraphs = content.split("\n\n").filter(Boolean);

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
            <h2 className="font-display text-lg font-bold text-primary-foreground leading-tight truncate">
              {option.icon} {mergedContent?.title || option.label}
            </h2>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="relative h-28 flex-shrink-0">
          <img src={soil.imagen} alt={soil.nombre} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="px-4 pb-safe">
          <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4">
            <span className="text-base">{option.icon}</span>
            <span className="text-primary text-xs font-body font-semibold uppercase tracking-wider">{option.description}</span>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          ) : (
            <div className="space-y-3 mb-6">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-foreground text-sm font-body leading-relaxed">
                  {parseContent(para)}
                </p>
              ))}
            </div>
          )}

          <div className="bg-muted rounded-xl px-4 py-3 mb-4">
            <p className="text-muted-foreground text-xs font-body leading-relaxed">
              <span className="font-semibold">Fuentes:</span> INEGI (Carta Edafológica, Serie VI), WRB 2006 (IUSS Working Group WRB), Soil Taxonomy USDA, Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO).
            </p>
          </div>

          <div className="flex gap-2 pb-4">
            {prev && (
              <button
                onClick={() => navigate(`/soil/${soil.id}/${prev.id}`)}
                className="no-tap flex-1 bg-card border border-border rounded-xl py-3 px-3 text-left active:bg-muted transition-colors"
              >
                <p className="text-muted-foreground text-xs font-body mb-0.5">← Anterior</p>
                <p className="text-foreground text-xs font-body font-medium leading-tight truncate">{prev.icon} {prev.label}</p>
              </button>
            )}
            {next && (
              <button
                onClick={() => navigate(`/soil/${soil.id}/${next.id}`)}
                className="no-tap flex-1 bg-card border border-border rounded-xl py-3 px-3 text-right active:bg-muted transition-colors"
              >
                <p className="text-muted-foreground text-xs font-body mb-0.5">Siguiente →</p>
                <p className="text-foreground text-xs font-body font-medium leading-tight truncate">{next.icon} {next.label}</p>
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SoilInfo;
