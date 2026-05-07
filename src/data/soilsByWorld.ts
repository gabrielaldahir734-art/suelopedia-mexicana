/**
 * Distribución mundial aproximada de los grupos de suelos según WRB (FAO).
 * Datos basados en el Atlas Mundial de Suelos (FAO/JRC) y la clasificación WRB.
 * Cada suelo lista las regiones/zonas climáticas donde es dominante o significativo,
 * con coordenadas aproximadas del centro de cada zona y un radio de influencia.
 */

export interface WorldSoilZone {
  /** Región o país representativo */
  region: string;
  /** Coordenadas centro [lat, lng] */
  centro: [number, number];
  /** Zona climática / bioma */
  bioma: string;
}

export interface WorldSoilData {
  /** Clave WRB del suelo */
  codigo: string;
  /** Nombre del grupo */
  nombre: string;
  /** Descripción breve */
  descripcion: string;
  /** Zonas del mundo donde se encuentra */
  zonas: WorldSoilZone[];
}

export const WORLD_SOILS: WorldSoilData[] = [
  {
    codigo: "AC",
    nombre: "Acrisol",
    descripcion: "Suelos ácidos, arcillosos, de regiones tropicales y subtropicales húmedas.",
    zonas: [
      { region: "Cuenca del Amazonas", centro: [-5, -60], bioma: "Selva tropical" },
      { region: "África Central", centro: [-2, 22], bioma: "Selva ecuatorial" },
      { region: "Sureste de China", centro: [25, 110], bioma: "Subtropical húmedo" },
      { region: "Sudeste Asiático", centro: [10, 105], bioma: "Tropical húmedo" },
    ],
  },
  {
    codigo: "AL",
    nombre: "Alisol",
    descripcion: "Suelos ácidos con alta saturación de aluminio, en zonas húmedas.",
    zonas: [
      { region: "Sur de Brasil", centro: [-25, -52], bioma: "Subtropical" },
      { region: "África Occidental", centro: [8, 0], bioma: "Sabana húmeda" },
      { region: "Sur de China", centro: [23, 108], bioma: "Subtropical" },
    ],
  },
  {
    codigo: "AN",
    nombre: "Andosol",
    descripcion: "Suelos volcánicos jóvenes, fértiles y porosos.",
    zonas: [
      { region: "Eje Volcánico (México-Centroamérica)", centro: [15, -90], bioma: "Montañoso volcánico" },
      { region: "Andes (Ecuador-Colombia)", centro: [0, -78], bioma: "Montañoso volcánico" },
      { region: "Japón", centro: [36, 138], bioma: "Templado volcánico" },
      { region: "Indonesia", centro: [-2, 120], bioma: "Tropical volcánico" },
      { region: "Islandia", centro: [65, -19], bioma: "Subártico volcánico" },
      { region: "África Oriental (Rift)", centro: [0, 36], bioma: "Volcánico tropical" },
    ],
  },
  {
    codigo: "AR",
    nombre: "Arenosol",
    descripcion: "Suelos arenosos, pobres en nutrientes, en desiertos y costas.",
    zonas: [
      { region: "Sahara", centro: [23, 10], bioma: "Desierto" },
      { region: "Kalahari", centro: [-23, 22], bioma: "Desierto" },
      { region: "Desierto Arábigo", centro: [25, 45], bioma: "Desierto" },
      { region: "Outback Australiano", centro: [-25, 135], bioma: "Desierto" },
      { region: "Asia Central", centro: [45, 65], bioma: "Estepa árida" },
    ],
  },
  {
    codigo: "CL",
    nombre: "Calcisol",
    descripcion: "Suelos con acumulación de carbonato de calcio, en zonas áridas.",
    zonas: [
      { region: "Mediterráneo", centro: [37, 15], bioma: "Semiárido" },
      { region: "Norte de África", centro: [30, 5], bioma: "Árido" },
      { region: "Medio Oriente", centro: [33, 40], bioma: "Árido" },
      { region: "Sur de Australia", centro: [-32, 135], bioma: "Semiárido" },
    ],
  },
  {
    codigo: "CM",
    nombre: "Cambisol",
    descripcion: "Suelos jóvenes con desarrollo incipiente, muy comunes en zonas templadas.",
    zonas: [
      { region: "Europa Central", centro: [50, 10], bioma: "Templado" },
      { region: "Norte de EE.UU.", centro: [44, -100], bioma: "Templado" },
      { region: "Asia Oriental", centro: [38, 120], bioma: "Templado" },
      { region: "Sur de Sudamérica", centro: [-38, -65], bioma: "Templado" },
    ],
  },
  {
    codigo: "CH",
    nombre: "Chernozem",
    descripcion: "Suelos negros muy fértiles de praderas templadas (los 'graneros del mundo').",
    zonas: [
      { region: "Estepas de Ucrania-Rusia", centro: [50, 40], bioma: "Pradera templada" },
      { region: "Grandes Llanuras (EE.UU.)", centro: [42, -98], bioma: "Pradera templada" },
      { region: "Pampa Argentina", centro: [-35, -62], bioma: "Pradera templada" },
      { region: "Manchuria (China)", centro: [46, 125], bioma: "Pradera templada" },
    ],
  },
  {
    codigo: "DU",
    nombre: "Durisol",
    descripcion: "Suelos áridos con capa cementada por sílice (duripán).",
    zonas: [
      { region: "Sur de Australia", centro: [-30, 138], bioma: "Árido" },
      { region: "Namibia", centro: [-22, 17], bioma: "Desierto" },
      { region: "Suroeste de EE.UU.", centro: [35, -110], bioma: "Árido" },
    ],
  },
  {
    codigo: "FL",
    nombre: "Fluvisol",
    descripcion: "Suelos jóvenes formados por sedimentos fluviales en planicies y deltas.",
    zonas: [
      { region: "Delta del Nilo", centro: [30, 31], bioma: "Llanura fluvial" },
      { region: "Llanura del Ganges", centro: [25, 85], bioma: "Llanura fluvial" },
      { region: "Cuenca del Amazonas", centro: [-3, -60], bioma: "Llanura fluvial" },
      { region: "Mississippi (EE.UU.)", centro: [32, -91], bioma: "Llanura fluvial" },
      { region: "Mekong", centro: [10, 105], bioma: "Llanura fluvial" },
    ],
  },
  {
    codigo: "GL",
    nombre: "Gleysol",
    descripcion: "Suelos saturados de agua, con condiciones reductoras.",
    zonas: [
      { region: "Siberia Occidental", centro: [60, 75], bioma: "Humedales boreales" },
      { region: "Pantanal (Sudamérica)", centro: [-17, -57], bioma: "Humedal tropical" },
      { region: "Sudeste Asiático", centro: [3, 113], bioma: "Humedal tropical" },
      { region: "Norte de Canadá", centro: [60, -100], bioma: "Humedales boreales" },
    ],
  },
  {
    codigo: "GY",
    nombre: "Gypsisol",
    descripcion: "Suelos áridos con acumulación de yeso.",
    zonas: [
      { region: "Desierto Sirio", centro: [34, 39], bioma: "Desierto" },
      { region: "Norte de África", centro: [32, 8], bioma: "Desierto" },
      { region: "Asia Central", centro: [42, 60], bioma: "Desierto" },
    ],
  },
  {
    codigo: "HS",
    nombre: "Histosol",
    descripcion: "Suelos orgánicos (turba) en humedales fríos y tropicales.",
    zonas: [
      { region: "Tundra Siberiana", centro: [68, 90], bioma: "Tundra" },
      { region: "Norte de Canadá", centro: [58, -95], bioma: "Boreal" },
      { region: "Escandinavia", centro: [64, 18], bioma: "Boreal" },
      { region: "Indonesia (turba tropical)", centro: [-1, 113], bioma: "Tropical" },
      { region: "Irlanda y Escocia", centro: [55, -7], bioma: "Templado húmedo" },
    ],
  },
  {
    codigo: "KS",
    nombre: "Kastanozem",
    descripcion: "Suelos castaños fértiles de estepas semiáridas.",
    zonas: [
      { region: "Estepas de Asia Central", centro: [48, 75], bioma: "Estepa semiárida" },
      { region: "Grandes Llanuras (oeste)", centro: [40, -103], bioma: "Estepa" },
      { region: "Mongolia", centro: [47, 105], bioma: "Estepa" },
      { region: "Patagonia norte", centro: [-40, -68], bioma: "Estepa" },
    ],
  },
  {
    codigo: "LP",
    nombre: "Leptosol",
    descripcion: "Suelos muy delgados sobre roca, en montañas y pendientes.",
    zonas: [
      { region: "Himalaya", centro: [30, 82], bioma: "Montañoso" },
      { region: "Andes", centro: [-15, -72], bioma: "Montañoso" },
      { region: "Alpes", centro: [46, 10], bioma: "Montañoso" },
      { region: "Rocosas", centro: [42, -110], bioma: "Montañoso" },
      { region: "Sahara montañoso", centro: [22, 5], bioma: "Desierto rocoso" },
    ],
  },
  {
    codigo: "LX",
    nombre: "Lixisol",
    descripcion: "Suelos tropicales lavados con arcilla acumulada.",
    zonas: [
      { region: "Sabana Africana", centro: [-10, 25], bioma: "Sabana tropical" },
      { region: "Norte de Australia", centro: [-15, 132], bioma: "Sabana tropical" },
      { region: "India central", centro: [22, 78], bioma: "Tropical seco" },
      { region: "Brasil (Cerrado)", centro: [-12, -50], bioma: "Sabana tropical" },
    ],
  },
  {
    codigo: "LV",
    nombre: "Luvisol",
    descripcion: "Suelos templados fértiles con acumulación de arcilla.",
    zonas: [
      { region: "Europa Occidental", centro: [48, 4], bioma: "Templado" },
      { region: "Medio Oeste EE.UU.", centro: [40, -88], bioma: "Templado" },
      { region: "Norte de China", centro: [38, 115], bioma: "Templado" },
      { region: "Sureste de Australia", centro: [-35, 145], bioma: "Templado" },
    ],
  },
  {
    codigo: "NT",
    nombre: "Nitisol",
    descripcion: "Suelos rojos profundos y fértiles de regiones tropicales.",
    zonas: [
      { region: "Tierras Altas de Etiopía", centro: [9, 39], bioma: "Tropical de altura" },
      { region: "África Oriental", centro: [-2, 35], bioma: "Tropical de altura" },
      { region: "Sur de Brasil", centro: [-22, -47], bioma: "Subtropical" },
      { region: "Sudeste Asiático", centro: [15, 105], bioma: "Tropical" },
    ],
  },
  {
    codigo: "PH",
    nombre: "Phaeozem",
    descripcion: "Suelos oscuros y fértiles de praderas húmedas.",
    zonas: [
      { region: "Pampa Húmeda (Argentina)", centro: [-34, -60], bioma: "Pradera húmeda" },
      { region: "Medio Oeste EE.UU.", centro: [42, -93], bioma: "Pradera húmeda" },
      { region: "Manchuria (China)", centro: [45, 126], bioma: "Pradera húmeda" },
      { region: "Europa Oriental", centro: [49, 28], bioma: "Pradera húmeda" },
    ],
  },
  {
    codigo: "PL",
    nombre: "Planosol",
    descripcion: "Suelos planos con capa impermeable, susceptibles a encharcamiento.",
    zonas: [
      { region: "Sur de Brasil-Uruguay", centro: [-32, -55], bioma: "Llanura subtropical" },
      { region: "Sahel", centro: [13, 5], bioma: "Semiárido" },
      { region: "Sudeste de EE.UU.", centro: [33, -90], bioma: "Subtropical" },
      { region: "Sureste Asiático", centro: [15, 100], bioma: "Tropical" },
    ],
  },
  {
    codigo: "PT",
    nombre: "Plintosol",
    descripcion: "Suelos tropicales con plintita (arcilla rica en hierro que endurece al secar).",
    zonas: [
      { region: "Cuenca del Congo", centro: [0, 22], bioma: "Tropical húmedo" },
      { region: "Amazonia", centro: [-3, -55], bioma: "Tropical húmedo" },
      { region: "Norte de Australia", centro: [-13, 135], bioma: "Tropical estacional" },
      { region: "Sudeste Asiático", centro: [12, 102], bioma: "Tropical" },
    ],
  },
  {
    codigo: "RG",
    nombre: "Regosol",
    descripcion: "Suelos jóvenes y poco desarrollados, sobre material no consolidado.",
    zonas: [
      { region: "Zonas áridas mundiales", centro: [28, 50], bioma: "Árido" },
      { region: "Regiones montañosas", centro: [40, 75], bioma: "Montañoso" },
      { region: "Tundra ártica", centro: [72, 100], bioma: "Tundra" },
      { region: "Sahara", centro: [25, 0], bioma: "Desierto" },
    ],
  },
  {
    codigo: "SC",
    nombre: "Solonchak",
    descripcion: "Suelos salinos de regiones áridas y costas.",
    zonas: [
      { region: "Mar de Aral / Caspio", centro: [45, 55], bioma: "Árido salino" },
      { region: "Salares andinos", centro: [-22, -68], bioma: "Altiplano salino" },
      { region: "Outback Australiano", centro: [-29, 137], bioma: "Árido salino" },
      { region: "Lago Chad", centro: [13, 14], bioma: "Sahel salino" },
    ],
  },
  {
    codigo: "SN",
    nombre: "Solonetz",
    descripcion: "Suelos sódicos con horizonte arcilloso compacto.",
    zonas: [
      { region: "Llanura Húngara", centro: [47, 20], bioma: "Estepa" },
      { region: "Estepas de Ucrania", centro: [48, 36], bioma: "Estepa" },
      { region: "Praderas Canadienses", centro: [51, -110], bioma: "Pradera semiárida" },
      { region: "Sur de Australia", centro: [-34, 142], bioma: "Semiárido" },
    ],
  },
  {
    codigo: "UM",
    nombre: "Umbrisol",
    descripcion: "Suelos ácidos oscuros de zonas frías y húmedas.",
    zonas: [
      { region: "Cordillera Cantábrica (España)", centro: [43, -5], bioma: "Templado húmedo" },
      { region: "Andes Patagónicos", centro: [-42, -72], bioma: "Templado húmedo" },
      { region: "Noroeste de EE.UU.", centro: [47, -122], bioma: "Templado oceánico" },
      { region: "Nueva Zelanda", centro: [-43, 170], bioma: "Templado oceánico" },
    ],
  },
  {
    codigo: "VR",
    nombre: "Vertisol",
    descripcion: "Suelos arcillosos expansivos que se agrietan al secar.",
    zonas: [
      { region: "India (Deccan)", centro: [18, 76], bioma: "Tropical estacional" },
      { region: "Sudán", centro: [13, 30], bioma: "Sabana" },
      { region: "Norte de Australia", centro: [-20, 142], bioma: "Tropical" },
      { region: "Texas (EE.UU.)", centro: [31, -97], bioma: "Subtropical" },
      { region: "Etiopía", centro: [11, 38], bioma: "Tropical de altura" },
    ],
  },
  {
    codigo: "PZ",
    nombre: "Podzol",
    descripcion: "Suelos ácidos típicos de bosques boreales de coníferas.",
    zonas: [
      { region: "Taiga Siberiana", centro: [62, 95], bioma: "Bosque boreal" },
      { region: "Escandinavia", centro: [62, 15], bioma: "Bosque boreal" },
      { region: "Canadá Central", centro: [55, -95], bioma: "Bosque boreal" },
      { region: "Norte de Rusia europea", centro: [62, 45], bioma: "Bosque boreal" },
    ],
  },
  {
    codigo: "FR",
    nombre: "Ferralsol",
    descripcion: "Suelos tropicales muy meteorizados, ricos en hierro y aluminio.",
    zonas: [
      { region: "Cuenca del Amazonas", centro: [-3, -62], bioma: "Selva tropical" },
      { region: "Cuenca del Congo", centro: [0, 20], bioma: "Selva tropical" },
      { region: "Sudeste Asiático", centro: [5, 110], bioma: "Selva tropical" },
      { region: "Norte de Australia", centro: [-14, 132], bioma: "Tropical" },
    ],
  },
  {
    codigo: "CR",
    nombre: "Cryosol",
    descripcion: "Suelos congelados (permafrost) de regiones polares.",
    zonas: [
      { region: "Siberia Ártica", centro: [70, 100], bioma: "Tundra polar" },
      { region: "Alaska", centro: [68, -150], bioma: "Tundra polar" },
      { region: "Norte de Canadá", centro: [70, -90], bioma: "Tundra polar" },
      { region: "Antártida (zonas libres de hielo)", centro: [-77, 160], bioma: "Polar" },
    ],
  },
];
