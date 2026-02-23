import { supabase } from "@/integrations/supabase/client";
import type { SoilInfo } from "@/data/soils";

export interface SoilOverride {
  soil_id: string;
  nombre?: string | null;
  tagline?: string | null;
  clasificacion_wrb?: string | null;
  clasificacion_usda?: string | null;
  distribucion_geografica?: string | null;
  material_parental?: string | null;
  relieve?: string | null;
  clima?: string | null;
  vegetacion?: string | null;
  usos_suelo?: string | null;
  limitantes?: string | null;
  color_estructura?: string | null;
  retencion_agua?: string | null;
  drenaje?: string | null;
  riesgos?: string | null;
  recomendaciones?: string | null;
}

export async function getAllOverrides(): Promise<Record<string, SoilOverride>> {
  const { data } = await supabase
    .from("soil_overrides" as any)
    .select("*");
  if (!data) return {};
  const map: Record<string, SoilOverride> = {};
  for (const row of data as any[]) {
    map[row.soil_id] = row;
  }
  return map;
}

export async function getOverride(soilId: string): Promise<SoilOverride | null> {
  const { data } = await supabase
    .from("soil_overrides" as any)
    .select("*")
    .eq("soil_id", soilId)
    .maybeSingle();
  return (data as any) ?? null;
}

export async function saveOverride(override: SoilOverride): Promise<boolean> {
  const { error } = await supabase
    .from("soil_overrides" as any)
    .upsert(override as any, { onConflict: "soil_id" });
  return !error;
}

/** Merge static soil info with DB override. Override fields take priority when not null/empty. */
export function mergeInfoWithOverride(info: SoilInfo, override: SoilOverride | null | undefined): SoilInfo {
  if (!override) return info;
  const v = (field: string | null | undefined, fallback: string) =>
    field != null && field.trim() !== "" ? field : fallback;
  return {
    nombre: v(override.nombre, info.nombre),
    clasificacionWRB: v(override.clasificacion_wrb, info.clasificacionWRB),
    clasificacionUSDA: v(override.clasificacion_usda, info.clasificacionUSDA),
    distribucionGeografica: v(override.distribucion_geografica, info.distribucionGeografica),
    materialParental: v(override.material_parental, info.materialParental),
    relieve: v(override.relieve, info.relieve),
    clima: v(override.clima, info.clima),
    vegetacion: v(override.vegetacion, info.vegetacion),
    usosSuelo: v(override.usos_suelo, info.usosSuelo),
    limitantes: v(override.limitantes, info.limitantes),
    colorEstructura: v(override.color_estructura, info.colorEstructura),
    retencionAgua: v(override.retencion_agua, info.retencionAgua),
    drenaje: v(override.drenaje, info.drenaje),
    riesgos: v(override.riesgos, info.riesgos),
    recomendaciones: v(override.recomendaciones, info.recomendaciones),
  };
}
