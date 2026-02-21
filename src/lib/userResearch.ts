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
  imagenes: string[]; // base64 data URLs
}

const STORAGE_KEY = 'edafpous_user_research';

export function getAllResearch(): UserResearch[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function getResearchBySoilId(soilId: string): UserResearch[] {
  return getAllResearch().filter((r) => r.soilId === soilId);
}

export function getResearchById(researchId: string): UserResearch | null {
  return getAllResearch().find((r) => r.id === researchId) ?? null;
}

export function saveResearch(research: UserResearch): void {
  try {
    const all = getAllResearch();
    all.push(research);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    // silent fail
  }
}
