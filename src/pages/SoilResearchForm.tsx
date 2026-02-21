import { useNavigate, useParams } from "react-router-dom";
import { soils } from "@/data/soils";
import { saveResearch, UserResearch } from "@/lib/userResearch";
import { ArrowLeft, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const fields = [
  { key: "materialParental", label: "Material parental", placeholder: "Ej: ceniza volcánica" },
  { key: "colorTipico", label: "Color típico", placeholder: "Ej: negro o pardo muy oscuro" },
  { key: "retencionAgua", label: "Retención de agua", placeholder: "Ej: muy alta" },
  { key: "drenaje", label: "Drenaje", placeholder: "Ej: bueno" },
  { key: "climaTipico", label: "Clima típico", placeholder: "Ej: templado frío con alta precipitación" },
  { key: "vegetacion", label: "Vegetación", placeholder: "Ej: bosques de coníferas" },
  { key: "usoComun", label: "Uso común", placeholder: "Ej: agricultura especializada" },
  { key: "limitantes", label: "Limitantes", placeholder: "Ej: compactación al laboreo, erosión" },
  { key: "distribucion", label: "Distribución", placeholder: "Ej: zonas volcánicas de la cordillera" },
  { key: "notasAdicionales", label: "Notas adicionales (opcional)", placeholder: "Observaciones propias..." },
];

const SoilResearchForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const soil = soils.find((s) => s.id === id);

  const [form, setForm] = useState<Record<string, string>>({
    autor: "",
    materialParental: "",
    colorTipico: "",
    retencionAgua: "",
    drenaje: "",
    climaTipico: "",
    vegetacion: "",
    usoComun: "",
    limitantes: "",
    distribucion: "",
    notasAdicionales: "",
  });

  if (!soil) {
    navigate("/");
    return null;
  }

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    // Validate required fields
    const required = fields.filter(f => f.key !== "notasAdicionales");
    const missing = required.filter(f => !form[f.key]?.trim());
    if (!form.autor?.trim()) {
      toast({ title: "Campo requerido", description: "Escribe tu nombre o alias", variant: "destructive" });
      return;
    }
    if (missing.length > 0) {
      toast({ title: "Campos incompletos", description: `Falta: ${missing.map(f => f.label).join(", ")}`, variant: "destructive" });
      return;
    }

    const research: UserResearch = {
      id: Date.now().toString(),
      soilId: soil.id,
      fecha: new Date().toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" }),
      autor: form.autor.trim(),
      materialParental: form.materialParental.trim(),
      colorTipico: form.colorTipico.trim(),
      retencionAgua: form.retencionAgua.trim(),
      drenaje: form.drenaje.trim(),
      climaTipico: form.climaTipico.trim(),
      vegetacion: form.vegetacion.trim(),
      usoComun: form.usoComun.trim(),
      limitantes: form.limitantes.trim(),
      distribucion: form.distribucion.trim(),
      notasAdicionales: form.notasAdicionales.trim(),
    };

    saveResearch(research);
    toast({ title: "¡Investigación guardada!", description: "Tu aporte ya aparece en la sección de investigaciones." });
    navigate(`/soil/${soil.id}/investigaciones`);
  };

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
              📝 Agregar Investigación
            </h2>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="px-4 py-4 pb-safe">
          <div className="bg-primary/5 border border-primary/15 rounded-xl px-4 py-3 mb-5">
            <p className="text-foreground text-sm font-body">
              <span className="font-semibold">Tipo de suelo:</span> {soil.nombre}
            </p>
            <p className="text-muted-foreground text-xs font-body mt-1">
              Comparte tu investigación de campo llenando el siguiente cuestionario.
            </p>
          </div>

          {/* Author */}
          <div className="mb-4">
            <label className="text-foreground text-xs font-body font-semibold mb-1.5 block">
              👤 Tu nombre o alias
            </label>
            <input
              type="text"
              value={form.autor}
              onChange={(e) => handleChange("autor", e.target.value)}
              placeholder="Ej: Juan Pérez"
              maxLength={100}
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground text-sm font-body placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>

          {/* Fields */}
          {fields.map((field) => (
            <div key={field.key} className="mb-4">
              <label className="text-foreground text-xs font-body font-semibold mb-1.5 block">
                {field.label}
              </label>
              <textarea
                value={form[field.key] || ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                maxLength={500}
                rows={2}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground text-sm font-body placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              />
            </div>
          ))}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="no-tap w-full bg-primary text-primary-foreground rounded-xl py-3.5 font-body font-semibold text-sm flex items-center justify-center gap-2 active:scale-98 transition-transform shadow-md mb-4"
          >
            <Send className="w-4 h-4" />
            Enviar Investigación
          </button>
        </div>
      </main>
    </div>
  );
};

export default SoilResearchForm;
