import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { soils, menuOptions } from "@/data/soils";
import { getOverride, saveOverride, type SoilOverride } from "@/lib/soilOverrides";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const fields = [
  { key: "nombre", label: "Nombre", type: "input" },
  { key: "tagline", label: "Tagline / Descripción corta", type: "input" },
  { key: "clasificacion_wrb", label: "Clasificación WRB", type: "input" },
  { key: "clasificacion_usda", label: "Clasificación USDA", type: "input" },
  { key: "distribucion_geografica", label: "Distribución Geográfica", type: "textarea" },
  { key: "material_parental", label: "Material Parental", type: "textarea" },
  { key: "relieve", label: "Relieve", type: "textarea" },
  { key: "clima", label: "Clima", type: "textarea" },
  { key: "vegetacion", label: "Vegetación", type: "textarea" },
  { key: "usos_suelo", label: "Usos del Suelo", type: "textarea" },
  { key: "limitantes", label: "Limitantes", type: "textarea" },
  { key: "color_estructura", label: "Color y Estructura", type: "textarea" },
  { key: "retencion_agua", label: "Retención de Agua", type: "textarea" },
  { key: "drenaje", label: "Drenaje", type: "textarea" },
  { key: "riesgos", label: "Riesgos", type: "textarea" },
  { key: "recomendaciones", label: "Recomendaciones", type: "textarea" },
] as const;

// Map override keys to SoilInfo keys for showing current values
const overrideToInfoKey: Record<string, string> = {
  nombre: "nombre",
  clasificacion_wrb: "clasificacionWRB",
  clasificacion_usda: "clasificacionUSDA",
  distribucion_geografica: "distribucionGeografica",
  material_parental: "materialParental",
  relieve: "relieve",
  clima: "clima",
  vegetacion: "vegetacion",
  usos_suelo: "usosSuelo",
  limitantes: "limitantes",
  color_estructura: "colorEstructura",
  retencion_agua: "retencionAgua",
  drenaje: "drenaje",
  riesgos: "riesgos",
  recomendaciones: "recomendaciones",
};

const AdminSoilEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const soil = soils.find((s) => s.id === id);
  const [values, setValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!soil) return;
    getOverride(soil.id).then((override) => {
      const initial: Record<string, string> = {};
      for (const f of fields) {
        const overrideVal = override?.[f.key as keyof SoilOverride] as string | null;
        initial[f.key] = overrideVal ?? "";
      }
      setValues(initial);
      setLoading(false);
    });
  }, [soil]);

  if (!soil) {
    navigate("/admin");
    return null;
  }

  const handleSave = async () => {
    setSaving(true);
    const override: SoilOverride = { soil_id: soil.id };
    for (const f of fields) {
      (override as any)[f.key] = values[f.key] || null;
    }
    const ok = await saveOverride(override);
    setSaving(false);
    if (ok) {
      toast({ title: "Guardado", description: "Los cambios se guardaron correctamente." });
    } else {
      toast({ title: "Error", description: "No se pudieron guardar los cambios.", variant: "destructive" });
    }
  };

  return (
    <div className="app-shell flex flex-col">
      <header className="gradient-header pt-safe flex-shrink-0">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate("/admin")}
            className="no-tap w-9 h-9 rounded-full bg-white/10 flex items-center justify-center active:scale-90 transition-transform flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <div className="flex-1 min-w-0">
            <p className="text-primary-foreground/70 text-xs font-body">Panel Admin</p>
            <h2 className="font-display text-lg font-bold text-primary-foreground leading-tight truncate">
              Editar: {soil.nombre}
            </h2>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto scrollbar-hide px-4 py-4 pb-safe">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : (
          <div className="space-y-5">
            <p className="text-muted-foreground text-xs font-body">
              Deja un campo vacío para usar el valor predeterminado. Solo se guardan los campos que modifiques.
            </p>

            {fields.map((f) => {
              const infoKey = overrideToInfoKey[f.key];
              const currentVal = infoKey ? (soil.info as any)[infoKey] || (soil as any)[f.key] || "" : "";

              return (
                <div key={f.key} className="space-y-1.5">
                  <Label className="text-foreground font-body text-sm font-semibold">{f.label}</Label>
                  {f.key === "tagline" ? null : currentVal && !values[f.key] ? (
                    <p className="text-muted-foreground text-xs font-body line-clamp-2">
                      Actual: {currentVal.substring(0, 100)}...
                    </p>
                  ) : null}
                  {f.type === "input" ? (
                    <Input
                      value={values[f.key] || ""}
                      onChange={(e) => setValues({ ...values, [f.key]: e.target.value })}
                      placeholder={f.key === "tagline" ? soil.tagline : (soil.info as any)[infoKey] ? "Dejar vacío para valor predeterminado" : ""}
                      className="bg-card border-border text-sm"
                    />
                  ) : (
                    <Textarea
                      value={values[f.key] || ""}
                      onChange={(e) => setValues({ ...values, [f.key]: e.target.value })}
                      placeholder="Dejar vacío para valor predeterminado"
                      rows={4}
                      className="bg-card border-border text-sm"
                    />
                  )}
                </div>
              );
            })}

            <Button onClick={handleSave} disabled={saving} className="w-full h-12 text-base font-body font-semibold gap-2">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              {saving ? "Guardando..." : "Guardar Cambios"}
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminSoilEdit;
