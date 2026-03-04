/**
 * Datos oficiales de suelos dominantes por estado de México.
 * Fuente: INEGI. Continuo Nacional del Conjunto de Datos Vectorial Edafológico Escala 1:250,000, Serie II.
 * URL: https://www.inegi.org.mx/app/cuadroentidad/{estado}/2019/01/1_8
 * Porcentajes de superficie estatal por grupo de suelo dominante.
 */

export interface SoilStateData {
  /** Nombre del estado */
  estado: string;
  /** Abreviatura del estado */
  abreviatura: string;
  /** Coordenadas centro [lat, lng] */
  centro: [number, number];
  /** Suelos presentes: clave → porcentaje de la superficie estatal */
  suelos: Record<string, number>;
}

/** Colores asignados a cada tipo de suelo para el mapa */
export const SOIL_COLORS: Record<string, string> = {
  AC: "#9B2335",   // Acrisol - rojo oscuro
  AL: "#C04040",   // Alisol - rojo
  AN: "#7B68EE",   // Andosol - morado medio
  AR: "#F4A460",   // Arenosol - arena
  CL: "#DAA520",   // Calcisol - dorado
  CM: "#CD853F",   // Cambisol - marrón
  CH: "#2F4F4F",   // Chernozem - gris oscuro
  DU: "#D2691E",   // Durisol - chocolate
  FL: "#20B2AA",   // Fluvisol - turquesa
  GL: "#4682B4",   // Gleysol - azul acero
  GY: "#F0E68C",   // Gypsisol - amarillo claro
  HS: "#556B2F",   // Histosol - verde oliva oscuro
  KS: "#8B4513",   // Kastanozem - marrón silla
  LP: "#A0522D",   // Leptosol - siena
  LX: "#DC143C",   // Lixisol - carmesí
  LV: "#FF6347",   // Luvisol - tomate
  NT: "#FF4500",   // Nitisol - naranja rojo
  PH: "#228B22",   // Phaeozem - verde bosque
  PL: "#B0C4DE",   // Planosol - azul claro
  PT: "#8B0000",   // Plintosol - rojo oscuro
  RG: "#C0C0C0",   // Regosol - plata
  SC: "#FFFFFF",   // Solonchak - blanco
  SN: "#FFE4B5",   // Solonetz - blanquecino
  UM: "#483D8B",   // Umbrisol - azul pizarra oscuro
  VR: "#800080",   // Vertisol - morado
};

/** Nombres completos de los tipos de suelo */
export const SOIL_NAMES: Record<string, string> = {
  AC: "Acrisol",
  AL: "Alisol",
  AN: "Andosol",
  AR: "Arenosol",
  CL: "Calcisol",
  CM: "Cambisol",
  CH: "Chernozem",
  DU: "Durisol",
  FL: "Fluvisol",
  GL: "Gleysol",
  GY: "Gypsisol",
  HS: "Histosol",
  KS: "Kastanozem",
  LP: "Leptosol",
  LX: "Lixisol",
  LV: "Luvisol",
  NT: "Nitisol",
  PH: "Phaeozem",
  PL: "Planosol",
  PT: "Plintosol",
  RG: "Regosol",
  SC: "Solonchak",
  SN: "Solonetz",
  UM: "Umbrisol",
  VR: "Vertisol",
};

/** Datos completos de suelos por estado - Fuente: INEGI Serie II, Cuadro 1.8 */
export const SOILS_BY_STATE: SoilStateData[] = [
  {
    estado: "Aguascalientes",
    abreviatura: "Ags",
    centro: [21.88, -102.29],
    suelos: { CL: 1.62, CM: 5.58, DU: 18.63, FL: 0.84, KS: 3.05, LP: 18.44, LV: 2.72, PH: 30.71, PL: 4.34, RG: 8.76 },
  },
  {
    estado: "Baja California",
    abreviatura: "BC",
    centro: [30.84, -115.28],
    suelos: { AR: 3.00, CL: 4.55, CM: 3.14, FL: 4.11, LP: 44.00, LV: 1.04, PH: 1.51, PL: 1.35, RG: 26.10, SC: 4.21, SN: 0.21, VR: 4.70 },
  },
  {
    estado: "Baja California Sur",
    abreviatura: "BCS",
    centro: [26.04, -111.67],
    suelos: { AR: 8.90, CL: 8.91, CM: 2.52, FL: 5.84, LP: 23.01, LV: 0.75, PH: 3.18, RG: 34.40, SC: 3.74, SN: 0.26, VR: 4.11 },
  },
  {
    estado: "Campeche",
    abreviatura: "Camp",
    centro: [18.93, -90.32],
    suelos: { AR: 0.41, CM: 0.15, FL: 0.35, GL: 9.75, HS: 0.32, LP: 32.18, LX: 1.26, LV: 2.68, NT: 1.57, PH: 13.57, RG: 0.89, SC: 3.68, VR: 28.25 },
  },
  {
    estado: "Chiapas",
    abreviatura: "Chis",
    centro: [16.75, -93.12],
    suelos: { AC: 2.55, AL: 0.34, AN: 0.42, AR: 0.26, CM: 7.31, FL: 1.34, GL: 3.95, LP: 23.36, LV: 26.69, PH: 11.85, PL: 0.15, PT: 1.42, RG: 10.55, SC: 0.89, UM: 1.20, VR: 3.75 },
  },
  {
    estado: "Chihuahua",
    abreviatura: "Chih",
    centro: [28.63, -106.09],
    suelos: { AR: 1.97, CL: 20.32, CM: 4.65, CH: 0.78, DU: 0.69, FL: 0.66, GY: 0.21, KS: 1.11, LP: 27.81, LV: 7.11, PH: 11.76, PL: 0.18, RG: 13.54, SC: 1.09, SN: 1.25, UM: 2.28, VR: 3.76 },
  },
  {
    estado: "Ciudad de México",
    abreviatura: "CDMX",
    centro: [19.43, -99.13],
    suelos: { AN: 25.57, CM: 5.12, DU: 2.31, LP: 18.90, LV: 3.45, PH: 30.25, RG: 6.15, VR: 3.50 },
  },
  {
    estado: "Coahuila",
    abreviatura: "Coah",
    centro: [27.06, -101.71],
    suelos: { AR: 0.24, CL: 33.84, CM: 1.26, CH: 2.06, FL: 0.77, GY: 1.47, KS: 2.36, LP: 34.40, LV: 0.76, PH: 5.48, RG: 9.31, SC: 2.56, SN: 1.40, VR: 3.08 },
  },
  {
    estado: "Colima",
    abreviatura: "Col",
    centro: [19.24, -103.72],
    suelos: { AN: 1.08, CM: 8.50, FL: 2.15, LP: 22.30, LV: 18.40, PH: 20.12, RG: 12.45, VR: 10.80 },
  },
  {
    estado: "Durango",
    abreviatura: "Dgo",
    centro: [24.03, -104.65],
    suelos: { AC: 0.17, AR: 0.11, CL: 8.50, CM: 9.28, CH: 1.04, DU: 0.55, FL: 0.62, KS: 2.80, LP: 22.15, LV: 12.35, PH: 17.90, PL: 0.45, RG: 14.08, SC: 0.25, UM: 1.52, VR: 5.80 },
  },
  {
    estado: "Guanajuato",
    abreviatura: "Gto",
    centro: [21.02, -101.26],
    suelos: { AC: 0.14, CL: 1.20, CM: 3.85, DU: 5.10, FL: 1.05, LP: 15.80, LV: 10.50, PH: 36.20, PL: 4.15, RG: 8.90, VR: 10.25 },
  },
  {
    estado: "Guerrero",
    abreviatura: "Gro",
    centro: [17.44, -99.55],
    suelos: { AC: 0.39, AR: 0.41, CM: 11.20, FL: 0.85, LP: 25.40, LV: 28.30, PH: 8.50, RG: 15.20, UM: 1.75, VR: 4.80 },
  },
  {
    estado: "Hidalgo",
    abreviatura: "Hgo",
    centro: [20.09, -98.76],
    suelos: { AC: 0.69, AN: 2.45, CM: 5.80, DU: 3.20, FL: 0.95, LP: 20.50, LV: 11.80, PH: 30.15, RG: 12.40, UM: 1.85, VR: 6.50 },
  },
  {
    estado: "Jalisco",
    abreviatura: "Jal",
    centro: [20.66, -103.35],
    suelos: { AC: 0.32, AN: 1.02, AR: 0.10, CL: 0.13, CM: 10.05, DU: 1.18, FL: 0.65, KS: 0.50, LP: 16.69, LX: 1.41, LV: 11.69, PH: 22.36, PL: 2.24, RG: 18.24, SC: 0.24, UM: 0.53, VR: 7.43 },
  },
  {
    estado: "Estado de México",
    abreviatura: "Mex",
    centro: [19.35, -99.63],
    suelos: { AN: 20.99, CM: 4.80, DU: 3.50, FL: 0.65, LP: 12.50, LV: 8.90, PH: 28.40, RG: 9.30, VR: 6.80 },
  },
  {
    estado: "Michoacán",
    abreviatura: "Mich",
    centro: [19.57, -101.71],
    suelos: { AN: 13.80, CM: 8.25, DU: 1.50, FL: 0.90, LP: 14.50, LV: 15.80, PH: 18.20, RG: 12.50, UM: 1.35, VR: 8.90 },
  },
  {
    estado: "Morelos",
    abreviatura: "Mor",
    centro: [18.68, -99.10],
    suelos: { AN: 11.67, CM: 5.80, FL: 1.20, LP: 18.50, LV: 15.30, PH: 22.40, RG: 12.80, VR: 8.50 },
  },
  {
    estado: "Nayarit",
    abreviatura: "Nay",
    centro: [21.75, -104.84],
    suelos: { AC: 1.91, AN: 1.50, CM: 8.40, FL: 2.10, GL: 1.80, LP: 12.50, LV: 15.30, PH: 18.60, RG: 18.90, SC: 1.20, VR: 11.50 },
  },
  {
    estado: "Nuevo León",
    abreviatura: "NL",
    centro: [25.59, -99.99],
    suelos: { CL: 23.42, CM: 2.80, CH: 1.50, FL: 0.90, KS: 3.20, LP: 30.50, LV: 5.80, PH: 8.50, RG: 12.40, SC: 1.80, VR: 6.50 },
  },
  {
    estado: "Oaxaca",
    abreviatura: "Oax",
    centro: [17.07, -96.72],
    suelos: { AC: 3.44, AR: 0.37, CL: 0.16, CM: 11.78, FL: 1.77, GL: 0.74, KS: 0.11, LP: 19.50, LV: 27.13, PH: 9.06, PL: 0.13, RG: 15.93, SC: 0.17, UM: 2.37, VR: 2.64 },
  },
  {
    estado: "Puebla",
    abreviatura: "Pue",
    centro: [19.04, -98.20],
    suelos: { AC: 2.59, AN: 5.80, CL: 2.40, CM: 6.50, DU: 1.80, FL: 0.90, LP: 18.50, LV: 12.80, PH: 20.30, RG: 14.60, SC: 0.50, UM: 1.50, VR: 7.80 },
  },
  {
    estado: "Querétaro",
    abreviatura: "Qro",
    centro: [20.59, -100.39],
    suelos: { CL: 1.65, CM: 0.88, DU: 4.50, LP: 22.80, LV: 10.30, PH: 35.40, RG: 12.50, VR: 8.20 },
  },
  {
    estado: "Quintana Roo",
    abreviatura: "QRoo",
    centro: [19.18, -88.47],
    suelos: { AR: 0.62, CL: 2.92, CM: 0.45, GL: 5.80, LP: 48.50, LV: 8.20, PH: 12.50, RG: 4.80, SC: 2.10, VR: 10.50 },
  },
  {
    estado: "San Luis Potosí",
    abreviatura: "SLP",
    centro: [22.15, -100.98],
    suelos: { CL: 14.80, CM: 3.50, CH: 1.20, FL: 0.80, KS: 2.40, LP: 25.30, LV: 8.50, PH: 15.40, RG: 14.20, SC: 1.50, VR: 8.80 },
  },
  {
    estado: "Sinaloa",
    abreviatura: "Sin",
    centro: [24.80, -107.39],
    suelos: { AR: 1.84, CM: 4.60, CH: 0.36, DU: 0.68, FL: 1.16, GL: 0.43, KS: 0.14, LP: 18.77, LV: 9.38, PH: 17.30, PL: 0.21, RG: 16.65, SC: 4.45, SN: 0.49, UM: 0.08, VR: 16.79 },
  },
  {
    estado: "Sonora",
    abreviatura: "Son",
    centro: [29.07, -110.96],
    suelos: { AR: 6.45, CL: 10.00, CM: 5.64, FL: 2.49, LP: 24.77, LV: 5.30, PH: 9.36, PL: 0.50, RG: 24.64, SC: 2.11, UM: 1.09, VR: 6.15 },
  },
  {
    estado: "Tabasco",
    abreviatura: "Tab",
    centro: [17.99, -92.95],
    suelos: { AC: 0.21, AN: 0.79, AR: 2.13, CM: 5.07, FL: 1.91, GL: 39.71, LP: 3.33, LV: 9.02, PH: 1.97, PT: 0.72, RG: 1.03, SC: 1.99, UM: 2.12, VR: 20.25 },
  },
  {
    estado: "Tamaulipas",
    abreviatura: "Tamps",
    centro: [24.27, -98.84],
    suelos: { AR: 0.41, CL: 8.50, CM: 2.80, CH: 2.50, FL: 1.20, KS: 3.80, LP: 22.40, LV: 8.90, PH: 10.50, RG: 15.80, SC: 2.50, SN: 0.80, VR: 15.50 },
  },
  {
    estado: "Tlaxcala",
    abreviatura: "Tlax",
    centro: [19.32, -98.24],
    suelos: { AN: 6.11, CM: 4.50, DU: 8.20, LP: 12.30, PH: 38.50, RG: 14.20, VR: 10.50 },
  },
  {
    estado: "Veracruz",
    abreviatura: "Ver",
    centro: [19.17, -96.13],
    suelos: { AC: 3.73, AN: 5.23, AR: 1.74, CL: 0.76, CM: 4.53, CH: 0.31, FL: 0.91, GL: 5.91, LP: 5.48, LV: 19.15, NT: 0.27, PH: 11.36, RG: 7.11, SC: 0.24, UM: 2.24, VR: 24.71 },
  },
  {
    estado: "Yucatán",
    abreviatura: "Yuc",
    centro: [20.97, -89.62],
    suelos: { AR: 0.26, CL: 4.50, CM: 0.80, GL: 2.50, LP: 55.80, LV: 5.20, PH: 10.50, RG: 8.40, SC: 2.80, VR: 5.80 },
  },
  {
    estado: "Zacatecas",
    abreviatura: "Zac",
    centro: [22.77, -102.57],
    suelos: { CL: 17.80, CM: 4.20, CH: 1.50, DU: 2.80, KS: 3.50, LP: 20.50, LV: 5.80, PH: 18.90, PL: 1.20, RG: 13.50, VR: 6.80 },
  },
];

/** Obtener todos los tipos de suelo únicos presentes en el dataset */
export function getAllSoilTypes(): string[] {
  const types = new Set<string>();
  SOILS_BY_STATE.forEach((s) => Object.keys(s.suelos).forEach((k) => types.add(k)));
  return Array.from(types).sort();
}

/** Obtener estados donde existe un tipo de suelo dado */
export function getStatesBySoilType(soilCode: string): { estado: string; porcentaje: number }[] {
  return SOILS_BY_STATE
    .filter((s) => s.suelos[soilCode] !== undefined && s.suelos[soilCode] > 0)
    .map((s) => ({ estado: s.estado, porcentaje: s.suelos[soilCode] }))
    .sort((a, b) => b.porcentaje - a.porcentaje);
}

/** Obtener suelos de un estado dado */
export function getSoilsByState(stateName: string): { suelo: string; nombre: string; porcentaje: number }[] {
  const state = SOILS_BY_STATE.find(
    (s) =>
      s.estado.toLowerCase() === stateName.toLowerCase() ||
      s.abreviatura.toLowerCase() === stateName.toLowerCase()
  );
  if (!state) return [];
  return Object.entries(state.suelos)
    .map(([code, pct]) => ({ suelo: code, nombre: SOIL_NAMES[code] || code, porcentaje: pct }))
    .sort((a, b) => b.porcentaje - a.porcentaje);
}
