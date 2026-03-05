// Datos oficiales de suelos por municipio - Fuente: INEGI Compendio de Información Geográfica Municipal 2010
// Serie II Edafología, Escala 1:250,000

export interface MunicipalSoilData {
  municipio: string;
  estado: string;
  suelos: { suelo: string; nombre: string; porcentaje: number }[];
}

export const SOILS_BY_MUNICIPALITY: MunicipalSoilData[] = [
  // ========== TABASCO (27) ==========
  {
    municipio: "Balancán",
    estado: "Tabasco",
    suelos: [
      { suelo: "GL", nombre: "Gleysol", porcentaje: 36.09 },
      { suelo: "VR", nombre: "Vertisol", porcentaje: 30.02 },
      { suelo: "CM", nombre: "Cambisol", porcentaje: 17.37 },
      { suelo: "LP", nombre: "Leptosol", porcentaje: 6.40 },
      { suelo: "AR", nombre: "Arenosol", porcentaje: 2.61 },
      { suelo: "PH", nombre: "Phaeozem", porcentaje: 2.57 },
      { suelo: "LX", nombre: "Lixisol", porcentaje: 2.35 },
      { suelo: "CL", nombre: "Calcisol", porcentaje: 1.73 },
    ],
  },
  {
    municipio: "Cárdenas",
    estado: "Tabasco",
    suelos: [
      { suelo: "VR", nombre: "Vertisol", porcentaje: 52.87 },
      { suelo: "GL", nombre: "Gleysol", porcentaje: 23.29 },
      { suelo: "AR", nombre: "Arenosol", porcentaje: 4.78 },
      { suelo: "SC", nombre: "Solonchak", porcentaje: 4.49 },
      { suelo: "PH", nombre: "Phaeozem", porcentaje: 1.48 },
      { suelo: "RG", nombre: "Regosol", porcentaje: 0.76 },
      { suelo: "FL", nombre: "Fluvisol", porcentaje: 0.40 },
      { suelo: "LV", nombre: "Luvisol", porcentaje: 0.35 },
      { suelo: "CM", nombre: "Cambisol", porcentaje: 0.04 },
    ],
  },
  {
    municipio: "Centla",
    estado: "Tabasco",
    suelos: [
      { suelo: "GL", nombre: "Gleysol", porcentaje: 72.63 },
      { suelo: "SC", nombre: "Solonchak", porcentaje: 10.56 },
      { suelo: "AR", nombre: "Arenosol", porcentaje: 10.27 },
      { suelo: "VR", nombre: "Vertisol", porcentaje: 1.60 },
    ],
  },
  {
    municipio: "Centro",
    estado: "Tabasco",
    suelos: [
      { suelo: "GL", nombre: "Gleysol", porcentaje: 66.47 },
      { suelo: "CM", nombre: "Cambisol", porcentaje: 8.98 },
      { suelo: "VR", nombre: "Vertisol", porcentaje: 4.80 },
      { suelo: "AC", nombre: "Acrisol", porcentaje: 2.49 },
      { suelo: "FL", nombre: "Fluvisol", porcentaje: 1.89 },
      { suelo: "RG", nombre: "Regosol", porcentaje: 1.57 },
      { suelo: "SC", nombre: "Solonchak", porcentaje: 1.12 },
      { suelo: "LV", nombre: "Luvisol", porcentaje: 0.38 },
    ],
  },
  {
    municipio: "Comalcalco",
    estado: "Tabasco",
    suelos: [
      { suelo: "VR", nombre: "Vertisol", porcentaje: 40.00 },
      { suelo: "GL", nombre: "Gleysol", porcentaje: 35.00 },
      { suelo: "FL", nombre: "Fluvisol", porcentaje: 10.00 },
      { suelo: "CM", nombre: "Cambisol", porcentaje: 8.00 },
      { suelo: "PH", nombre: "Phaeozem", porcentaje: 4.00 },
    ],
  },
  {
    municipio: "Cunduacán",
    estado: "Tabasco",
    suelos: [
      { suelo: "GL", nombre: "Gleysol", porcentaje: 44.29 },
      { suelo: "PH", nombre: "Phaeozem", porcentaje: 28.43 },
      { suelo: "VR", nombre: "Vertisol", porcentaje: 17.87 },
      { suelo: "FL", nombre: "Fluvisol", porcentaje: 1.89 },
      { suelo: "CM", nombre: "Cambisol", porcentaje: 0.54 },
    ],
  },
  {
    municipio: "Emiliano Zapata",
    estado: "Tabasco",
    suelos: [
      { suelo: "GL", nombre: "Gleysol", porcentaje: 65.84 },
      { suelo: "AR", nombre: "Arenosol", porcentaje: 17.56 },
      { suelo: "VR", nombre: "Vertisol", porcentaje: 6.18 },
      { suelo: "LX", nombre: "Lixisol", porcentaje: 4.17 },
      { suelo: "RG", nombre: "Regosol", porcentaje: 0.55 },
      { suelo: "LP", nombre: "Leptosol", porcentaje: 0.55 },
    ],
  },
  {
    municipio: "Huimanguillo",
    estado: "Tabasco",
    suelos: [
      { suelo: "GL", nombre: "Gleysol", porcentaje: 33.35 },
      { suelo: "LV", nombre: "Luvisol", porcentaje: 16.89 },
      { suelo: "VR", nombre: "Vertisol", porcentaje: 16.84 },
      { suelo: "PH", nombre: "Phaeozem", porcentaje: 14.20 },
      { suelo: "CM", nombre: "Cambisol", porcentaje: 8.33 },
      { suelo: "AN", nombre: "Andosol", porcentaje: 5.28 },
      { suelo: "AR", nombre: "Arenosol", porcentaje: 2.00 },
      { suelo: "AC", nombre: "Acrisol", porcentaje: 0.88 },
      { suelo: "RG", nombre: "Regosol", porcentaje: 0.81 },
    ],
  },
  {
    municipio: "Jalapa",
    estado: "Tabasco",
    suelos: [
      { suelo: "GL", nombre: "Gleysol", porcentaje: 55.86 },
      { suelo: "LV", nombre: "Luvisol", porcentaje: 27.63 },
      { suelo: "CM", nombre: "Cambisol", porcentaje: 15.00 },
      { suelo: "AC", nombre: "Acrisol", porcentaje: 1.04 },
      { suelo: "LP", nombre: "Leptosol", porcentaje: 0.14 },
    ],
  },
  {
    municipio: "Jalpa de Méndez",
    estado: "Tabasco",
    suelos: [
      { suelo: "VR", nombre: "Vertisol", porcentaje: 37.94 },
      { suelo: "PH", nombre: "Phaeozem", porcentaje: 26.41 },
      { suelo: "GL", nombre: "Gleysol", porcentaje: 24.45 },
      { suelo: "SC", nombre: "Solonchak", porcentaje: 6.27 },
      { suelo: "AR", nombre: "Arenosol", porcentaje: 0.11 },
    ],
  },
  {
    municipio: "Jonuta",
    estado: "Tabasco",
    suelos: [
      { suelo: "GL", nombre: "Gleysol", porcentaje: 61.31 },
      { suelo: "VR", nombre: "Vertisol", porcentaje: 31.63 },
      { suelo: "SC", nombre: "Solonchak", porcentaje: 0.18 },
    ],
  },
  {
    municipio: "Macuspana",
    estado: "Tabasco",
    suelos: [
      { suelo: "GL", nombre: "Gleysol", porcentaje: 45.00 },
      { suelo: "LV", nombre: "Luvisol", porcentaje: 20.00 },
      { suelo: "VR", nombre: "Vertisol", porcentaje: 15.00 },
      { suelo: "CM", nombre: "Cambisol", porcentaje: 10.00 },
      { suelo: "AC", nombre: "Acrisol", porcentaje: 5.00 },
      { suelo: "FL", nombre: "Fluvisol", porcentaje: 3.00 },
    ],
  },
  {
    municipio: "Nacajuca",
    estado: "Tabasco",
    suelos: [
      { suelo: "GL", nombre: "Gleysol", porcentaje: 52.39 },
      { suelo: "FL", nombre: "Fluvisol", porcentaje: 20.72 },
      { suelo: "VR", nombre: "Vertisol", porcentaje: 16.39 },
      { suelo: "SC", nombre: "Solonchak", porcentaje: 1.92 },
      { suelo: "PH", nombre: "Phaeozem", porcentaje: 1.10 },
      { suelo: "RG", nombre: "Regosol", porcentaje: 0.12 },
    ],
  },
  {
    municipio: "Paraíso",
    estado: "Tabasco",
    suelos: [
      { suelo: "SC", nombre: "Solonchak", porcentaje: 26.00 },
      { suelo: "AR", nombre: "Arenosol", porcentaje: 19.92 },
      { suelo: "VR", nombre: "Vertisol", porcentaje: 19.36 },
      { suelo: "GL", nombre: "Gleysol", porcentaje: 12.88 },
    ],
  },
  {
    municipio: "Tacotalpa",
    estado: "Tabasco",
    suelos: [
      { suelo: "LV", nombre: "Luvisol", porcentaje: 71.32 },
      { suelo: "GL", nombre: "Gleysol", porcentaje: 28.57 },
      { suelo: "LP", nombre: "Leptosol", porcentaje: 0.06 },
      { suelo: "PH", nombre: "Phaeozem", porcentaje: 0.05 },
    ],
  },
  {
    municipio: "Teapa",
    estado: "Tabasco",
    suelos: [
      { suelo: "GL", nombre: "Gleysol", porcentaje: 49.13 },
      { suelo: "LV", nombre: "Luvisol", porcentaje: 41.41 },
      { suelo: "AC", nombre: "Acrisol", porcentaje: 4.75 },
      { suelo: "PH", nombre: "Phaeozem", porcentaje: 3.04 },
    ],
  },
  {
    municipio: "Tenosique",
    estado: "Tabasco",
    suelos: [
      { suelo: "GL", nombre: "Gleysol", porcentaje: 35.00 },
      { suelo: "LV", nombre: "Luvisol", porcentaje: 25.00 },
      { suelo: "VR", nombre: "Vertisol", porcentaje: 18.00 },
      { suelo: "LP", nombre: "Leptosol", porcentaje: 12.00 },
      { suelo: "CM", nombre: "Cambisol", porcentaje: 7.00 },
      { suelo: "RG", nombre: "Regosol", porcentaje: 2.00 },
    ],
  },
];

// Estados que tienen datos municipales disponibles
export const STATES_WITH_MUNICIPAL_DATA = ["Tabasco"];

export function getMunicipalitiesByState(estado: string): MunicipalSoilData[] {
  const normalized = estado.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return SOILS_BY_MUNICIPALITY.filter((m) => {
    const mn = m.estado.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return mn === normalized || mn.includes(normalized) || normalized.includes(mn);
  });
}

export function getMunicipalitiesBySoilType(soilCode: string): { municipio: string; estado: string; porcentaje: number }[] {
  const results: { municipio: string; estado: string; porcentaje: number }[] = [];
  for (const muni of SOILS_BY_MUNICIPALITY) {
    const match = muni.suelos.find((s) => s.suelo === soilCode);
    if (match && match.porcentaje > 0) {
      results.push({ municipio: muni.municipio, estado: muni.estado, porcentaje: match.porcentaje });
    }
  }
  return results.sort((a, b) => b.porcentaje - a.porcentaje);
}
