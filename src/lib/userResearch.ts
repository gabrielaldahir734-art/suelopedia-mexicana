import { supabase } from "@/integrations/supabase/client";

export interface GeoLocation {
  latitude: number;
  longitude: number;
  altitude: number | null;
  timestamp: string;
}

export interface UserResearch {
  id: string;
  soilId: string;
  fecha: string;
  autor: string;
  nombreInvestigacion: string;
  materialParental: string;
  colorTipico: string;
  retencionAgua: string;
  drenaje: string;
  climaTipico: string;
  vegetacion: string;
  usoComun: string;
  limitantes: string;
  distribucion: string;
  notasAdicionales: string;
  ubicacion: GeoLocation | null;
  imagenes: string[];
}

// Map DB row to UserResearch
function rowToResearch(row: any): UserResearch {
  return {
    id: row.id,
    soilId: row.soil_id,
    fecha: row.fecha,
    autor: row.autor,
    nombreInvestigacion: row.nombre_investigacion,
    materialParental: row.material_parental,
    colorTipico: row.color_tipico,
    retencionAgua: row.retencion_agua,
    drenaje: row.drenaje,
    climaTipico: row.clima_tipico,
    vegetacion: row.vegetacion,
    usoComun: row.uso_comun,
    limitantes: row.limitantes,
    distribucion: row.distribucion,
    notasAdicionales: row.notas_adicionales,
    ubicacion: row.latitud != null ? {
      latitude: row.latitud,
      longitude: row.longitud,
      altitude: row.altitud,
      timestamp: row.ubicacion_timestamp || '',
    } : null,
    imagenes: row.imagenes || [],
  };
}

export async function getResearchBySoilId(soilId: string): Promise<UserResearch[]> {
  const { data, error } = await supabase
    .from('user_research' as any)
    .select('*')
    .eq('soil_id', soilId)
    .order('created_at', { ascending: false });

  if (error || !data) return [];
  return (data as any[]).map(rowToResearch);
}

export async function getResearchById(researchId: string): Promise<UserResearch | null> {
  const { data, error } = await supabase
    .from('user_research' as any)
    .select('*')
    .eq('id', researchId)
    .single();

  if (error || !data) return null;
  return rowToResearch(data as any);
}

export async function saveResearch(research: UserResearch): Promise<boolean> {
  const { error } = await supabase
    .from('user_research' as any)
    .insert({
      soil_id: research.soilId,
      fecha: research.fecha,
      autor: research.autor,
      nombre_investigacion: research.nombreInvestigacion,
      material_parental: research.materialParental,
      color_tipico: research.colorTipico,
      retencion_agua: research.retencionAgua,
      drenaje: research.drenaje,
      clima_tipico: research.climaTipico,
      vegetacion: research.vegetacion,
      uso_comun: research.usoComun,
      limitantes: research.limitantes,
      distribucion: research.distribucion,
      notas_adicionales: research.notasAdicionales,
      latitud: research.ubicacion?.latitude ?? null,
      longitud: research.ubicacion?.longitude ?? null,
      altitud: research.ubicacion?.altitude ?? null,
      ubicacion_timestamp: research.ubicacion?.timestamp ?? null,
      imagenes: research.imagenes,
    } as any);

  return !error;
}
