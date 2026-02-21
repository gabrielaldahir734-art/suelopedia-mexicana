export interface UserResearch {
  id: string;
  soilId: string;
  fecha: string;
  autor: string;
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
}

const STORAGE_KEY = 'edafpous_user_research';

export function getResearchBySoilId(soilId: string): UserResearch[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    const all: UserResearch[] = JSON.parse(data);
    return all.filter((r) => r.soilId === soilId);
  } catch {
    return [];
  }
}

export function saveResearch(research: UserResearch): void {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const all: UserResearch[] = data ? JSON.parse(data) : [];
    all.push(research);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    // silent fail
  }
}
