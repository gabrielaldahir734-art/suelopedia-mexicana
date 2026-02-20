export interface SoilInfo {
  nombre: string;
  clasificacionWRB: string;
  clasificacionUSDA: string;
  distribucionGeografica: string;
  materialParental: string;
  relieve: string;
  clima: string;
  vegetacion: string;
  usosSuelo: string;
  limitantes: string;
  colorEstructura: string;
  retencionAgua: string;
  drenaje: string;
  riesgos: string;
  recomendaciones: string;
}

export interface Soil {
  id: string;
  nombre: string;
  imagen: string;
  colorAccent: string;
  tagline: string;
  info: SoilInfo;
}

// Images imported statically
import andosolImg from '@/assets/soils/andosol.jpg';
import vertisolImg from '@/assets/soils/vertisol.jpg';
import cambisolImg from '@/assets/soils/cambisol.jpg';
import leptosolImg from '@/assets/soils/leptosol.jpg';
import feozemImg from '@/assets/soils/feozem.jpg';
import arenosolImg from '@/assets/soils/arenosol.jpg';
import calcisolImg from '@/assets/soils/calcisol.jpg';
import fluvisolImg from '@/assets/soils/fluvisol.jpg';
import gleysolImg from '@/assets/soils/gleysol.jpg';
import solonchakImg from '@/assets/soils/solonchak.jpg';
import luvisolImg from '@/assets/soils/luvisol.jpg';
import regosolImg from '@/assets/soils/regosol.jpg';
import kastanozemImg from '@/assets/soils/kastanozem.jpg';
import histosolImg from '@/assets/soils/histosol.jpg';
import acrisolImg from '@/assets/soils/acrisol.jpg';
import gypsisolImg from '@/assets/soils/gypsisol.jpg';
import durisolImg from '@/assets/soils/durisol.jpg';
import chernozemImg from '@/assets/soils/chernozem.jpg';
import planosolImg from '@/assets/soils/planosol.jpg';
import nitisolImg from '@/assets/soils/nitisol.jpg';

export const soils: Soil[] = [
  {
    id: 'andosol',
    nombre: 'Andosol',
    imagen: andosolImg,
    colorAccent: '#5C3317',
    tagline: 'Suelo volcánico de alta fertilidad',
    info: {
      nombre: 'Andosol',
      clasificacionWRB: 'Andosol (WRB 2006, IUSS Working Group WRB)',
      clasificacionUSDA: 'Andisol (Soil Taxonomy, USDA)',
      distribucionGeografica:
        'Se distribuye principalmente en las zonas volcánicas del Eje Neovolcánico Transversal: faldas del Pico de Orizaba, Popocatépetl, Iztaccíhuatl, Cofre de Perote, Nevado de Toluca y volcanes del estado de Michoacán. Según INEGI (Serie VI de Edafología), ocupa aproximadamente 0.8% del territorio nacional, concentrado en estados como Veracruz, Puebla, Estado de México, Michoacán e Hidalgo.',
      materialParental:
        'Ceniza volcánica (tefra), pómez, lapilli y materiales piroclásticos recientes de origen andesítico-basáltico. El material es altamente poroso y con gran superficie específica.',
      relieve:
        'Asociado a laderas volcánicas empinadas (pendientes de 15° a 45°), conos volcánicos y mesetas de piedemonte. Elevaciones típicas entre 1,800 y 4,500 msnm. Paisaje de relieve accidentado con valles intervolcánicos.',
      clima:
        'Templado frío húmedo a semifrío húmedo (C(w) y C(f) en clasificación de Köppen-García). Temperatura media anual de 8 a 14°C. Precipitación de 800 a 1,500 mm anuales, con lluvias en verano. Frecuentes heladas en invierno.',
      vegetacion:
        'Bosques de coníferas (Pinus hartwegii, P. montezumae, Abies religiosa), bosques mixtos pino-oyamel en las partes altas. En zonas de transición: zacatonales alpinos (Festuca tolucensis, Calamagrostis tolucensis). Vegetación indicadora de alta fertilidad edáfica.',
      usosSuelo:
        'ACTUALES: Agricultura especializada de temporal (papa, haba, maíz de montaña, hortalizas de ciclo frío como zanahoria, col, brócoli). Pastizales inducidos para ganadería bovina. Silvicultura comercial y de conservación. POTENCIALES: Ecoturismo, captación de agua (recarga de acuíferos volcánicos), agricultura orgánica de alta especialización.',
      limitantes:
        'Alta susceptibilidad a compactación por laboreo mecánico en estado húmedo (tixotropia). Erosión hídrica severa en pendientes > 20%. Heladas frecuentes limitan el ciclo agrícola. En algunos casos, fijación irreversible de fósforo por alofano. Acidez moderada (pH 5.5–6.5).',
      colorEstructura:
        'Color muy oscuro: negro a pardo muy oscuro (10YR 2/1 a 10YR 2/2 en tabla Munsell). Estructura granular fina a media, muy friable en húmedo; esponjoso y ligero al tacto. Alta porosidad visible. Horizonte A mólico bien desarrollado.',
      retencionAgua:
        'Muy alta (> 100% en peso seco en horizontes con alofano). La presencia de materiales amorfos (alofano, imogolita) confiere capacidad de retención de agua excepcional, siendo uno de los suelos con mayor capacidad hídrica del mundo.',
      drenaje:
        'Bueno a moderadamente bien drenado. La alta porosidad facilita la percolación, pero la textura fina retiene humedad por periodos prolongados. Raramente se presentan condiciones de anegamiento.',
      riesgos:
        'Erosión hídrica en pendientes pronunciadas al deforestar. Lahares (flujos volcánicos) en erupciones activas. Deslizamientos de suelo saturado tras lluvias intensas. Subsidencia del suelo por drenaje de horizontes orgánicos. Vulnerabilidad a contaminación de acuíferos volcánicos.',
      recomendaciones:
        'Conservar cobertura vegetal boscosa para prevenir erosión y mantener funciones hídricas. En parcelas agrícolas, usar curvas de nivel y barreras vivas. Evitar labranza profunda en suelos húmedos para prevenir compactación irreversible. Rotación de cultivos con leguminosas para mantener nitrógeno. Priorizar captación de agua de lluvia dada la alta permeabilidad.',
    },
  },
  {
    id: 'vertisol',
    nombre: 'Vertisol',
    imagen: vertisolImg,
    colorAccent: '#1a1a1a',
    tagline: 'Arcilla expansiva que se agrieta al secarse',
    info: {
      nombre: 'Vertisol',
      clasificacionWRB: 'Vertisol (WRB 2006)',
      clasificacionUSDA: 'Vertisol (Soil Taxonomy, USDA)',
      distribucionGeografica:
        'Ampliamente distribuido en México; segundo suelo más importante en extensión. Predomina en el Bajío (Guanajuato, Michoacán, Jalisco), planicie costera del Golfo (Veracruz, Tabasco), Depresión Central de Chiapas, costa del Pacífico (Sonora, Sinaloa, Nayarit) y llanuras de Puebla-Tlaxcala. INEGI reporta ~11 millones de ha.',
      materialParental:
        'Rocas básicas (basalto, andesita) y sedimentos lacustres ricos en montmorillonita. En zonas costeras, sedimentos aluviales finos ricos en calcio y magnesio. La arcilla 2:1 (esmectita) es el mineral dominante que le da sus propiedades expansivas.',
      relieve:
        'Predomina en zonas planas a suavemente onduladas (pendientes < 8%). Llanuras aluviales, planicies lacustres y bajadas de piedemonte. Elevaciones de 0 a 2,500 msnm. Paisaje de llanura con escurrimiento superficial lento.',
      clima:
        'Muy amplio: desde semiárido (BS en Sonora-Sinaloa) hasta subhúmedo (Aw en Veracruz-Tabasco). Temperatura de 18 a 28°C. Precipitación de 500 a 1,200 mm. Marcada estación seca que favorece agrietamiento.',
      vegetacion:
        'Pastizales naturales (Bouteloua gracilis, Buchloe dactyloides), selva baja caducifolia en zonas tropicales, matorral subtropical. En zonas húmedas: vegetación halófita y manchones de tule. Actualmente gran parte bajo uso agrícola.',
      usosSuelo:
        'ACTUALES: Agricultura de temporal y riego (maíz, sorgo, algodón, trigo, cártamo, caña de azúcar). Ganadería extensiva en pastizales. POTENCIALES: Arroz en zonas con riego, caña, horticultura bajo irrigación controlada. Alta importancia en seguridad alimentaria nacional.',
      limitantes:
        'Agrietamiento severo en época seca (grietas de hasta 1 m de profundidad y 10 cm de ancho). Adhesividad extrema en húmedo; dureza extrema en seco. Difícil laboreo en ambos estados. Drenaje lento. Compactación subsuperficial (horizon slickenside). Baja permeabilidad satura rápidamente.',
      colorEstructura:
        'Color negro a gris muy oscuro (10YR 2/1, 5Y 2.5/1). Estructura prismática gruesa a columnar en profundidad, bloques angulares medios en superficie. Caras de deslizamiento (slickensides) características. Muy pesado al tacto.',
      retencionAgua:
        'Alta a muy alta en campo húmedo. Sin embargo, gran parte del agua queda retenida con fuerzas tan altas que las plantas no pueden extraerla (agua no disponible). Rango de agua útil moderado a pesar de alta retención total.',
      drenaje:
        'Pobre a imperfecto. La baja permeabilidad (conductividad hidráulica < 1 mm/h) provoca encharcamientos temporales en lluvias intensas. El agrietamiento estacional actúa como drenaje preferencial en la época seca.',
      riesgos:
        'Inundaciones temporales en zonas planas. Erosión laminar durante lluvias en etapa inicial de ciclo agrícola. Daños a infraestructura (caminos, canales, edificios) por expansión-contracción. Salinización secundaria bajo riego inadecuado. Compactación por maquinaria pesada.',
      recomendaciones:
        'Laborar en estado de "tempero" (humedad intermedia) para evitar daños estructurales. Implementar drenaje parcelario (drenes superficiales) para evacuar exceso de agua. Uso de subsoleo periódico para romper costras y compactación. Evitar maquinaria pesada en suelo húmedo. Mantener residuos de cosecha en superficie. Rotación de cultivos para mantener estructura.',
    },
  },
  {
    id: 'cambisol',
    nombre: 'Cambisol',
    imagen: cambisolImg,
    colorAccent: '#8B3A2A',
    tagline: 'Suelo joven con desarrollo incipiente',
    info: {
      nombre: 'Cambisol',
      clasificacionWRB: 'Cambisol (WRB 2006)',
      clasificacionUSDA: 'Inceptisol (Soil Taxonomy, USDA)',
      distribucionGeografica:
        'Es el suelo más extenso de México, ocupando aproximadamente 23% del territorio (INEGI, Serie VI). Presente en casi todos los estados, pero dominante en Sierra Madre Occidental (Chihuahua, Durango, Sonora), Sierra Madre Oriental (Nuevo León, Tamaulipas, Hidalgo), montañas de Oaxaca y Chiapas. Su distribución amplia refleja la diversidad geológica nacional.',
      materialParental:
        'Muy variado según región: rocas ígneas (riolita, andesita, granito) en serranías, rocas sedimentarias (arenisca, lutita, caliza) en sierras plegadas, materiales volcánicos en Eje Neovolcánico. El material parental condiciona la textura y el color del suelo.',
      relieve:
        'Laderas de sierra de pendiente moderada (8° a 25°), lomeríos suaves, mesetas disectadas. Presente desde nivel del mar hasta 3,500 msnm. Paisaje montañoso a colinado. La pendiente moderada permite cierto desarrollo pedogenético sin exceso de erosión.',
      clima:
        'Muy variado. Desde templado húmedo (C(w)) en montañas del centro y sur, hasta semiárido (BS) en piedemonte de sierras. Temperatura de 10 a 22°C. Precipitación de 400 a 1,200 mm anuales.',
      vegetacion:
        'Bosques de pino-encino (Pinus durangensis, Quercus sideroxyla) en sierra. Matorral templado en zonas semiáridas de transición. Pastizales de llanura alta. En zonas tropicales: selva mediana subcaducifolia. Vegetación muy diversa en función del clima.',
      usosSuelo:
        'ACTUALES: Ganadería extensiva en pastizales, silvicultura (tala selectiva y comercial de pino), agricultura de temporal en pendientes menores (maíz, frijol, trigo, manzana en Chihuahua). POTENCIALES: Ecoturismo de montaña, apicultura, fruticultura de clima templado, captación de agua.',
      limitantes:
        'Pedregosidad superficial frecuente limita mecanización. Perfil poco profundo en posiciones de ladera. Alta susceptibilidad a erosión hídrica y eólica al desvegetar. Variabilidad alta en fertilidad según material parental. En zonas semiáridas: déficit hídrico frecuente.',
      colorEstructura:
        'Color pardo rojizo a pardo amarillento (5YR 3/4 a 7.5YR 4/4). Estructura granular en horizonte A, subangular en horizonte B cámbico. Textura franco-arcillosa a franco-arenosa. Abundantes fragmentos de roca en distintos grados de meteorización.',
      retencionAgua:
        'Moderada. La textura franca proporciona buen balance entre retención y drenaje. Capacidad de agua disponible de 100-150 mm/m de suelo. Buena para la mayoría de cultivos de temporal.',
      drenaje:
        'Moderado a bien drenado. La presencia de roca madre próxima puede crear planos de saturación temporal. Generalmente no se presentan condiciones anaeróbicas prolongadas.',
      riesgos:
        'Erosión hídrica acelerada al deforestar laderas. Remoción en masa (deslizamientos) en pendientes > 25° saturadas. Arrastre de sedimentos a corrientes y presas. En zonas áridas: erosión eólica. Degradación rápida de horizontes superficiales por sobre-pastoreo.',
      recomendaciones:
        'Mantener cobertura vegetal en laderas > 15% de pendiente. Implementar prácticas de conservación de suelo: terrazas de banco, zanjas trincheras, barreras vivas de agave o maguey. Control de carga animal en pastizales. Para agricultura: cultivar en curvas de nivel, incorporar residuos de cosecha. Reforestar áreas degradadas con especies nativas.',
    },
  },
  {
    id: 'leptosol',
    nombre: 'Leptosol',
    imagen: leptosolImg,
    colorAccent: '#BBA882',
    tagline: 'Suelo delgado sobre roca dura',
    info: {
      nombre: 'Leptosol',
      clasificacionWRB: 'Leptosol (WRB 2006)',
      clasificacionUSDA: 'Entisol-Lithic subgroup / Mollisol-Lithic (Soil Taxonomy)',
      distribucionGeografica:
        'Ocupa ~14% del territorio mexicano (INEGI). Presente en todas las sierras del país: Sierra Madre Occidental, Oriental, del Sur, la Mixteca, serranías de la Península de Baja California. Dominante en cañadas, crestas y laderas de alta pendiente con exposición a erosión severa. Estados con mayor presencia: Chihuahua, Oaxaca, Guerrero, Sonora, Baja California.',
      materialParental:
        'Roca dura consolidada: caliza, dolomita, granito, riolita, basalto, esquisto, gneis. La roca se encuentra a menos de 25-30 cm de profundidad. Fragmentos gruesos de roca (>35% del volumen) abundantes en el perfil.',
      relieve:
        'Crestas de sierra, escarpes rocosos, laderas muy escarpadas (pendientes > 30°). Cañones, barrancos y peñascales. Paisaje accidentado de montaña y sierra. Elevaciones de 500 a 3,500 msnm.',
      clima:
        'Variable según región. Desde árido (BW) en cañones de Chihuahua-Sonora, hasta templado húmedo en sierras del sur. Temperatura de 10 a 25°C. La erosión limita el desarrollo pedogenético independientemente del clima.',
      vegetacion:
        'Matorrales rosetófilos (Agave, Dasylirion, Nolina), nopaleras (Opuntia), selva baja caducifolia en laderas cálidas, pastizales de zacate banderita (Bouteloua curtipendula) entre peñascos. En sierras húmedas: bosque enano o "chaparral". Vegetación adaptada a condiciones de estrés hídrico y escasez de suelo.',
      usosSuelo:
        'ACTUALES: Ganadería extensiva de muy baja carga (caprinos y bovinos criollos). Extracción artesanal de materiales pétreos. Recolección de plantas silvestres (orégano, sotol, lechuguilla). POTENCIALES: Ecoturismo extremo (escalada, senderismo), apicultura en zonas de matorral florido, conservación de germoplasma nativo.',
      limitantes:
        'Profundidad extremadamente limitante (< 25 cm en Leptosoles rígidos). Alta pedregosidad impide cualquier mecanización. Capacidad hídrica mínima. Sin posibilidad de labranza convencional. Alta susceptibilidad a erosión. Sin potencial agrícola.',
      colorEstructura:
        'Color muy variable: gris a pardo grisáceo en Leptosoles dísticos, negro a pardo muy oscuro en Leptosoles mólicos. Estructura débil granular a sin estructura (suelta). Abundante grava y fragmentos de roca angular. Perfil muy delgado.',
      retencionAgua:
        'Muy baja a nula. El volumen de suelo fino es tan reducido que no permite almacenamiento significativo de agua. Las plantas dependen de grietas de roca para captación de humedad adicional.',
      drenaje:
        'Excesivo a bien drenado. El agua infiltra rápidamente o escurre sobre roca. No existen condiciones de saturación por la delgadez del perfil y la presencia de roca permeable o fracturada.',
      riesgos:
        'Erosión hídrica severa al remover vegetación (roca queda expuesta en pocos años). Derrumbes y desprendimientos de rocas en laderas escarpadas. Cárcavas y barrancas activas. Una vez degradado, el suelo prácticamente no se recupera a escala humana (regeneración pedogenética > 1,000 años).',
      recomendaciones:
        'Exclusión total al pastoreo en áreas degradadas. Mantener cobertura vegetal nativa como única protección posible del suelo remanente. En caso de rehabilitación: construcción de pequeñas presas de gavión para retención de sedimentos. Favorecer regeneración natural de matorrales nativos. No abrir brechas ni caminos en áreas de Leptosol pues generan erosión irreversible.',
    },
  },
  {
    id: 'feozem',
    nombre: 'Feozem',
    imagen: feozemImg,
    colorAccent: '#2C1A0E',
    tagline: 'Suelo oscuro y fértil del centro de México',
    info: {
      nombre: 'Feozem (Phaeozem)',
      clasificacionWRB: 'Phaeozem (WRB 2006)',
      clasificacionUSDA: 'Mollisol (Soil Taxonomy, USDA)',
      distribucionGeografica:
        'Tercer suelo más extenso de México (~11% del territorio, INEGI). Predomina en la Mesa Central: Jalisco, Michoacán, Guanajuato, Zacatecas, Aguascalientes, San Luis Potosí. También en zonas montañosas de Puebla, Hidalgo, Veracruz y Oaxaca. Importante en valles interandinos de la Sierra Madre Occidental.',
      materialParental:
        'Rocas volcánicas básicas (basalto, andesita) y sedimentarias. Materiales piroclásticos medianamente meteorizados. En zonas de llanura: sedimentos aluviales con aportes de materia orgánica derivada de gramíneas.',
      relieve:
        'Llanuras suavemente onduladas, laderas de piedemonte de pendiente moderada (5-15%), valles fluviales. Elevaciones de 1,500 a 2,800 msnm en el centro del país. Paisaje de lomeríos suaves a planos.',
      clima:
        'Templado subhúmedo (C(w)) con lluvias en verano. Temperatura media de 14 a 18°C. Precipitación de 600 a 1,000 mm anuales. Estación seca de 4 a 6 meses en invierno-primavera. Heladas ocasionales.',
      vegetacion:
        'Pastizales amacollados (Muhlenbergia robusta, Festuca amplissima), bosques de encino (Quercus resinosa, Q. obtusata), matorrales submontanos. Gran parte de su área nativa ha sido convertida a uso agrícola y ganadero.',
      usosSuelo:
        'ACTUALES: Agricultura de temporal intensiva (maíz, trigo, cebada, avena, papa, garbanzo). Ganadería en pastizales nativos e inducidos. POTENCIALES: Horticultura, fruticultura de clima templado (durazno, ciruela), viticultura en zonas con temperatura adecuada. Uno de los suelos más productivos de México.',
      limitantes:
        'Erosión hídrica cuando se trabaja en pendientes sin prácticas de conservación. Déficit hídrico en temporada seca que limita cultivos de riego. Compactación subsuperficial por laboreo intensivo. En zonas más áridas: bajo contenido de materia orgánica.',
      colorEstructura:
        'Color pardo muy oscuro a negro (10YR 2/2 a 10YR 3/2). Horizonte A mólico bien definido (> 25 cm). Estructura granular bien desarrollada en superficie, subangular en profundidad. Textura franca a franco-arcillosa. Suelo suelto y fácil de trabajar.',
      retencionAgua:
        'Alta. La materia orgánica y la textura franca proporcionan excelente retención de agua disponible para plantas (150-200 mm/m). Buen balance hídrico que favorece la productividad agrícola.',
      drenaje:
        'Bien drenado a moderadamente bien drenado. La porosidad del horizonte A facilita infiltración. Raramente se presentan encharcamientos salvo en zonas cóncavas o con pendiente mínima.',
      riesgos:
        'Erosión hídrica acelerada al dejar suelo desnudo. Pérdida de materia orgánica por laboreo intensivo y quema de residuos. Compactación por uso de maquinaria pesada. Disminución de fertilidad natural por extracción de nutrientes sin reposición.',
      recomendaciones:
        'Incorporar residuos de cosecha al suelo en lugar de quemarlos. Rotar cultivos incluyendo leguminosas para mantener nitrógeno y materia orgánica. Reducir labranza: siembra directa o labranza mínima para conservar estructura. Implementar cultivos de cobertura en temporada de secas. Establecer franjas vegetativas en curvas de nivel para controlar erosión en pendientes.',
    },
  },
  {
    id: 'arenosol',
    nombre: 'Arenosol',
    imagen: arenosolImg,
    colorAccent: '#D4A85A',
    tagline: 'Suelo arenoso de zonas áridas',
    info: {
      nombre: 'Arenosol',
      clasificacionWRB: 'Arenosol (WRB 2006)',
      clasificacionUSDA: 'Entisol-Psamments (Soil Taxonomy, USDA)',
      distribucionGeografica:
        'Zonas áridas y semiáridas del norte de México: Sonora, Chihuahua, Coahuila, Nuevo León, Baja California (dunas costeras y desierto). También en costas del Golfo de México (Veracruz, Tamaulipas) y Pacífico. Las dunas de El Pinacate en Sonora y Bolsón de Mapimí en Chihuahua son ejemplos emblemáticos.',
      materialParental:
        'Arena cuarzosa eólica o fluvial muy poco meteorizada. Partículas de 0.05-2 mm. En costas: arena calcárea de origen marino. Virtualmente sin arcilla ni limo. Sin estructura pedogenética desarrollada.',
      relieve:
        'Dunas activas y estabilizadas, planicies arenosas, llanuras aluviales con texturas gruesas, barras y playas costeras. Pendientes muy suaves (< 5°) en dunas estabilizadas. Paisaje desértico o costero.',
      clima:
        'Árido (BW) a semiárido (BS) en zonas interiores. Cálido-seco con temperaturas de 18 a 28°C. Precipitación < 300 mm anuales. Evaporación muy superior a precipitación. En costas: clima cálido subhúmedo con influencia marina.',
      vegetacion:
        'Vegetación psamófita adaptada: pasto arena (Sporobolus airoides), mezquite (Prosopis glandulosa), gobernadora (Larrea tridentata), nopal tapón (Opuntia leptocaulis). En costas: vegetación de duna costera (Ipomoea pes-caprae, Canavalia rosea). En dunas activas: sin vegetación o muy escasa.',
      usosSuelo:
        'ACTUALES: Ganadería muy extensiva de caprinos, extracción de arena para construcción, ecoturismo desértico (zonas protegidas). POTENCIALES: Agricultura con riego y acolchado (sandía, melón, espárrago), instalación de plantas solares y parques eólicos.',
      limitantes:
        'Bajísima retención de agua y nutrientes. Susceptibilidad extrema a erosión eólica. Sin capacidad de intercambio catiónico. Nutrientes se lavan rápidamente. Sin estructura que soporte raíces en profundidad. Alta reflexión solar eleva temperatura superficial.',
      colorEstructura:
        'Color amarillo pálido a pardo amarillento (2.5Y 7/4 a 10YR 6/4). Sin estructura pedogenética (grano simple). Textura arena (>85% arena). Muy suelto, fluye fácilmente. Sin cohesión.',
      retencionAgua:
        'Muy baja (< 50 mm/m). El agua percola casi instantáneamente y no queda disponible para las plantas. Alta conductividad hidráulica saturada (> 50 mm/h). Las raíces deben ser profundas para acceder a humedad residual.',
      drenaje:
        'Excesivo. El agua no se retiene y drena inmediatamente a capas profundas. Sin riesgo de anegamiento. Problema opuesto: déficit hídrico extremo para las plantas.',
      riesgos:
        'Erosión eólica severa: tormentas de arena (tolvaneras). Avance de dunas sobre tierras productivas e infraestructura. Desertificación acelerada al remover vegetación fijadora. Contaminación de acuíferos por infiltración rápida sin filtración.',
      recomendaciones:
        'Estabilización de dunas con especies nativas (mezquite, pasto arena, gobernadora). Establecer cortinas rompevientos con especies xerófitas. En zonas de uso agrícola: sistemas de riego por goteo con acolchado plástico. No remover vegetación psamófita nativa. En zonas costeras: respetar cordones de duna que protegen de mareas y tormentas.',
    },
  },
  {
    id: 'calcisol',
    nombre: 'Calcisol',
    imagen: calcisolImg,
    colorAccent: '#C8B99A',
    tagline: 'Suelo calizo de zonas áridas del norte',
    info: {
      nombre: 'Calcisol',
      clasificacionWRB: 'Calcisol (WRB 2006)',
      clasificacionUSDA: 'Aridisol-Calcid (Soil Taxonomy, USDA)',
      distribucionGeografica:
        'Extensamente distribuido en el norte árido y semiárido de México: Chihuahua, Sonora, Coahuila, Nuevo León, Tamaulipas, Durango, Zacatecas, San Luis Potosí. También en Yucatán sobre calizas. INEGI estima ~8% del territorio. El Bolsón de Mapimí y planicies del norte de Coahuila son áreas representativas.',
      materialParental:
        'Rocas calcáreas (caliza, dolomita) o sedimentos aluviales con concentración de carbonato de calcio secundario (precipitado del agua freática). Horizonte petrocálcico (caliche) o cálcico bien desarrollado típico.',
      relieve:
        'Llanuras áridas, bajadas (alluvial fans), planicies calcáreas, mesetas. Pendientes muy suaves (< 5°). Paisaje desértico o semidesértico. Elevaciones de 500 a 2,000 msnm en la altiplanicie.',
      clima:
        'Árido (BW) a semiárido (BS). Temperatura de 16 a 24°C. Precipitación de 200 a 500 mm anuales. Alta evapotranspiración concentra carbonatos en superficie. Sin lavado suficiente para eliminar CaCO3.',
      vegetacion:
        'Matorral desértico micrófilo (Larrea tridentata, Flourensia cernua), matorral rosetófilo (Agave lechuguilla, Dasylirion wheeleri), cactáceas columnares (Carnegiea gigantea en Sonora). Pastizales halófilos en zonas con caliche superficial. Vegetación dispersa de baja densidad.',
      usosSuelo:
        'ACTUALES: Ganadería extensiva de muy baja intensidad (bovinos y caprinos de libre pastoreo). Extracción de caliche para construcción de caminos. POTENCIALES: Sistemas solares fotovoltaicos, ecoturismo desértico, viticultura en partes con riego (zonas de Coahuila).',
      limitantes:
        'Horizonte petrocálcico impermeable (caliche) que restringe profundidad efectiva de raíces y agua. Alta alcalinidad (pH 7.5–8.5) que limita disponibilidad de hierro, zinc y fósforo. Bajo contenido de materia orgánica. Salinidad secundaria frecuente bajo riego.',
      colorEstructura:
        'Color pardo claro a gris claro (10YR 5/3 a 10YR 7/3). Concentraciones blancas de carbonato de calcio visibles (nódulos, pseudomicelios, costras). Textura franco-arcillosa a franca. Estructura débil en bloques. Horizonte cálcico (Bk) bien definido.',
      retencionAgua:
        'Baja a moderada. El horizonte cálcico puede actuar como barrera que acumula agua percolada, pero también como obstáculo. Agua disponible limitada por alcalinidad y textura.',
      drenaje:
        'Moderado sobre el caliche; imperfecto cuando el petrocálcico es continuo. El agua se acumula sobre la costra de caliche en lluvias intensas, generando escurrimiento superficial.',
      riesgos:
        'Salinización bajo riego ineficiente. Erosión eólica al desvegetar. Sodificación secundaria. Degradación de pastizales por sobrepastoreo. Contaminación de agua subterránea por carbonatos disueltos (agua dura).',
      recomendaciones:
        'Si se riega: usar riego por goteo para evitar salinización. Monitorear conductividad eléctrica del suelo. Evitar riego con agua de alta sodificación (RAS). Respetar carga animal en pastizales. No remover el horizonte cálcico (caliche) pues su destrucción desestabiliza el suelo. Para horticultura: mejorar con materia orgánica y corrección de pH.',
    },
  },
  {
    id: 'fluvisol',
    nombre: 'Fluvisol',
    imagen: fluvisolImg,
    colorAccent: '#7A6650',
    tagline: 'Suelo aluvial joven de riberas y valles',
    info: {
      nombre: 'Fluvisol',
      clasificacionWRB: 'Fluvisol (WRB 2006)',
      clasificacionUSDA: 'Entisol-Fluvents (Soil Taxonomy, USDA)',
      distribucionGeografica:
        'Presente en todos los grandes sistemas fluviales de México: valles del Balsas, Grijalva-Usumacinta, Papaloapan, Lerma-Chapala, Pánuco, Sonora, Yaqui, Fuerte y Sinaloa. Especialmente importante en las amplias llanuras aluviales de Tabasco, Veracruz y Sinaloa. Superficies estratégicas para la producción agrícola intensiva.',
      materialParental:
        'Sedimentos aluviales recientes depositados por corrientes de agua. Estratificación característica con capas alternadas de arena, limo y arcilla. Material fresco, poco meteorizado, con alto contenido de nutrientes aportados por erosión de cuencas altas.',
      relieve:
        'Llanuras de inundación (vegas), terrazas bajas y medias, deltas fluviales, planicies costeras. Pendientes mínimas (< 2°). Paisaje plano a casi plano. Susceptible a inundaciones periódicas.',
      clima:
        'Muy variado según la cuenca: desde semiárido (valles del norte: Yaqui, Fuerte, Sinaloa) hasta cálido húmedo (Tabasco, Veracruz). La condición aluvial es independiente del clima, determinada por el sistema fluvial.',
      vegetacion:
        'Bosques de galería (Populus mexicana, Salix bonplandiana, Taxodium mucronatum) en ríos del centro. Selvas inundables (Haematoxylum campechianum, Bravaisia integerrima) en Tabasco y Campeche. Tulares (Typha domingensis) y carrizales (Phragmites australis) en zonas inundadas. Gran parte convertida a uso agrícola.',
      usosSuelo:
        'ACTUALES: Agricultura intensiva de riego y temporal (caña de azúcar, arroz, maíz, hortalizas, pepino, jitomate, chile). Una de las categorías de suelo más productivas. Praderas para ganadería. POTENCIALES: Horticultura protegida, fruticultura, acuicultura en reas inundables.',
      limitantes:
        'Riesgo permanente de inundación. Drenaje imperfecto en áreas bajas. Variabilidad textural en perfil puede crear capas impermeables. Sujeción a sequías si el río disminuye caudal. Salinización en valles con drenaje deficiente bajo riego.',
      colorEstructura:
        'Color variable por estratificación: capas grises, pardas, amarillentas. No tiene horizontes pedogenéticos bien desarrollados por la renovación continua de sedimentos. Textura variable (estratificada): arena-limo-arcilla en capas. Estructura débil o sin desarrollar.',
      retencionAgua:
        'Variable según textura de cada capa. Capas limosas: alta retención (200+ mm/m). Capas arenosas: baja retención. En promedio: moderada a alta, especialmente en capas limosas que son las más abundantes en valles del sur.',
      drenaje:
        'Imperfecto a moderado. Zonas bajas permanecen saturadas en temporada de lluvias. Terrazas medias: mejor drenaje. El control artificial (drenes, bordos) es clave para el uso agrícola.',
      riesgos:
        'Inundaciones periódicas (riesgo natural y climático). Erosión de riberas (socavación de orillas). Contaminación por agroquímicos transportados por agua. En costas: intrusión salina. Pérdida de suelo por extracción de arena del lecho fluvial.',
      recomendaciones:
        'Respetar la vegetación riparia en márgenes de ríos (protege de erosión y inundaciones). En zonas agrícolas: construir y mantener sistemas de drenaje. Para riego: usar eficientemente el agua para evitar salinización. Monitorear calidad del agua de riego. Restaurar bosques de galería para estabilizar riberas y regular el ciclo hídrico.',
    },
  },
  {
    id: 'gleysol',
    nombre: 'Gleysol',
    imagen: gleysolImg,
    colorAccent: '#3B5C6B',
    tagline: 'Suelo anegado con reducción permanente',
    info: {
      nombre: 'Gleysol',
      clasificacionWRB: 'Gleysol (WRB 2006)',
      clasificacionUSDA: 'Entisol-Aquents / Inceptisol-Aquepts (Soil Taxonomy)',
      distribucionGeografica:
        'Predomina en las planicies costeras del Golfo de México: Tabasco, Veracruz, Campeche, Yucatán. También en valles de inundación permanente de grandes ríos. Zonas lacustres del Valle de México (relictos). En Chiapas: depresiones y zonas de manglar. INEGI reporta ~2.5% del territorio.',
      materialParental:
        'Sedimentos fluviales, lacustres o marinos finos (arcilla, limo) con alto contenido de materia orgánica acumulada en condiciones anaeróbicas. Sedimentos de baja permeabilidad que mantienen el nivel freático alto.',
      relieve:
        'Depresiones topográficas, llanuras de inundación permanente, cuencas endorreicas, pantanos, zonas de manglar. Pendiente prácticamente nula (< 1°). Nivel freático a menos de 50 cm de la superficie la mayor parte del año.',
      clima:
        'Cálido húmedo a muy húmedo (Am, Af en Köppen). Temperatura de 22 a 28°C. Precipitación de 1,500 a 3,500 mm anuales (Tabasco: hasta 3,800 mm). La alta precipitación es condición necesaria para mantener el anegamiento.',
      vegetacion:
        'Selvas inundables de Tabasco (Bucida buceras, Bravaisia integerrima), manglares (Rhizophora mangle, Avicennia germinans, Laguncularia racemosa), tulares y carrizales, acahuales húmedos. Palmar de Orbignya cohune en Campeche. Vegetación altamente adaptada a anaerobiosis.',
      usosSuelo:
        'ACTUALES: Ganadería extensiva en praderas mejoradas (pasto alemán, estrella), acuicultura (camarón, tilapia, ostión), arroz de temporal en zonas drenadas. POTENCIALES: Acuicultura extensiva, conservación de biodiversidad (sitios Ramsar), captura de carbono.',
      limitantes:
        'Anegamiento permanente o prolongado impide la mayoría de usos agrícolas sin infraestructura de drenaje costosa. Suelo con condiciones reductoras (anaerobiosis): sulfuros, compuestos de hierro ferroso. Baja resistencia mecánica. Alta compresibilidad. Dificultad de acceso y mecanización.',
      colorEstructura:
        'Colores grises azulados (5GY 4/1 a N5) con manchas (moteado) rojizas-anaranjadas de oxidación (7.5YR 5/8). El color grisáceo o azulado es diagnóstico de reducción del hierro. Textura arcillosa pesada. Plástico y pegajoso en húmedo. Olor a sulfuro de hidrógeno frecuente.',
      retencionAgua:
        'Muy alta. La textura arcillosa y la saturación permanente hacen que este suelo no presente déficit hídrico. Problema opuesto: exceso de agua que excluye el oxígeno del suelo.',
      drenaje:
        'Muy pobre (imperfecto a nulo). El nivel freático está en superficie o muy próximo la mayor parte del año. Condiciones permanentemente reductoras en el horizonte gleico.',
      riesgos:
        'Inundaciones prolongadas. En zonas costeras: subsidencia por extracción de agua subterránea. Generación de ácido sulfúrico al drenar suelos con piritas (suelos sulfatados ácidos). Pérdida de biodiversidad por desecación de humedales. Intrusión salina en costas.',
      recomendaciones:
        'En zonas de conservación: protección total como ecosistemas de humedal (alta biodiversidad y captura de carbono). Si se usa para ganadería: construir drenaje superficial y bordos; utilizar ganado adaptado (ganado cebú, bufalo de agua). No convertir humedales a otros usos sin evaluación de impacto. Para acuicultura: diseñar estanques que no alteren el nivel freático regional.',
    },
  },
  {
    id: 'solonchak',
    nombre: 'Solonchak',
    imagen: solonchakImg,
    colorAccent: '#B8C4CC',
    tagline: 'Suelo salino de playas y lagunas costeras',
    info: {
      nombre: 'Solonchak',
      clasificacionWRB: 'Solonchak (WRB 2006)',
      clasificacionUSDA: 'Aridisol-Salids / Entisol-Aquents sálicos (Soil Taxonomy)',
      distribucionGeografica:
        'Costas del Golfo de México (Tamaulipas, Veracruz, Tabasco, Campeche, Yucatán), costas del Pacífico norte (Baja California, Sonora, Sinaloa, Nayarit) y lagunas costeras. También en playas secas del Bolsón de Mapimí y cuencas endorreicas del altiplano (lagos secos). INEGI reporta ~1.5% del territorio.',
      materialParental:
        'Sedimentos marinos, fluvio-marinos o lacustres con alta concentración de sales solubles (NaCl, Na2SO4, MgCl2). Evaporación intensa concentra las sales en superficie. Material parental fino (arcilla, limo) con alta conductividad eléctrica.',
      relieve:
        'Llanuras costeras, albuferas, sebkhas (playas salinas), lagunas costeras desecadas, planicies de inundación salitrosa. Pendiente nula a muy suave. Nivel freático próximo a la superficie.',
      clima:
        'Árido a semiárido en costas norte y altiplano (BW, BS). Cálido subhúmedo en costas del Golfo y sur del Pacífico. La salinidad es resultado de evaporación intensa más aporte de sales marinas o freáticas.',
      vegetacion:
        'Halófitas obligadas: zacate salado (Distichlis spicata), chamizo (Atriplex canescens), salicornia (Sarcocornia perennis), manglares en costas (Rhizophora, Avicennia). En zonas más secas: peladeros salitrosos sin vegetación. Vegetación muy especializada.',
      usosSuelo:
        'ACTUALES: Acuicultura (camarón en lagunas costeras), extracción de sal para consumo e industria (salinas naturales como Las Coloradas en Yucatán, Guerrero Negro en Baja California). POTENCIALES: Bioenergía con halófitas, industria salinera, ecoturismo.',
      limitantes:
        'Conductividad eléctrica > 4 dS/m (umbral de salinidad tóxica para la mayoría de cultivos). Toxicidad por iones de sodio, cloro, sulfato, magnesio. Prácticamente imposible de cultivar sin enmiendas y lavado intensivo. Alta presión osmótica del suelo impide absorción de agua por plantas convencionales.',
      colorEstructura:
        'Color blanquecino a gris pálido (2.5Y 8/2 a 10YR 7/1) por costras de sal en superficie. En húmedo: colores grises oscuros con moteado de reducción. Textura arcillosa a limosa. Costra salina frágil y eflorescente en superficie.',
      retencionAgua:
        'Físicamente alta (textura fina), pero biológicamente nula porque la alta concentración de sales impide la absorción de agua por las plantas (estrés osmótico). Las raíces "ven" agua pero no pueden beberla.',
      drenaje:
        'Muy pobre a imperfecto. El nivel freático salino permanece próximo a superficie, facilitando ascenso capilar y concentración de sales en horizontes superficiales.',
      riesgos:
        'Avance de frentes salinos hacia tierras agrícolas bajo riego deficiente. Pérdida irreversible de productividad agrícola por salinización secundaria. Afectación a biodiversidad costera por alteración de humedales salinos. Subsidencia en zonas de extracción de sal.',
      recomendaciones:
        'En agricultura colindante: monitorear conductividad eléctrica del suelo y del agua de riego para prevenir salinización. Proteger las zonas de solonchak costero como hábitat de fauna migratoria y área de criaderos de camarón. Para reclamación de suelos: lavado con abundante agua de baja salinidad + subsoleo + drenaje artificial. Proceso largo y costoso (10+ años). Favorecer manglar en costas para protección natural.',
    },
  },
  {
    id: 'luvisol',
    nombre: 'Luvisol',
    imagen: luvisolImg,
    colorAccent: '#7A2D1A',
    tagline: 'Suelo con acumulación de arcilla en profundidad',
    info: {
      nombre: 'Luvisol',
      clasificacionWRB: 'Luvisol (WRB 2006)',
      clasificacionUSDA: 'Alfisol (Soil Taxonomy, USDA)',
      distribucionGeografica:
        'Ampliamente distribuido en climas templados y tropicales subhúmedos de México. Presente en la Huasteca (San Luis Potosí, Hidalgo, Veracruz), sierra de Guerrero y Oaxaca, norte de Chiapas, Jalisco y Michoacán. INEGI reporta ~5% del territorio en diversas asociaciones edáficas.',
      materialParental:
        'Rocas sedimentarias (arenisca, lutita, caliza) y ígneas (andesita, granito) medianamente meteorizadas. Proceso de eluviación-iluviación ha transferido arcilla del horizonte A al horizonte B árgico, enriqueciéndolo en arcillas 2:1.',
      relieve:
        'Lomeríos suaves a moderados (pendientes 5-20%), superficies de erosión antigua, glacis de piedemonte. Paisaje de lomeríos disectados. Elevaciones de 500 a 2,500 msnm según región.',
      clima:
        'Templado subhúmedo (C(w)) y cálido subhúmedo (Aw). Temperatura de 14 a 24°C. Precipitación de 700 a 1,500 mm anuales con estación seca. Suficiente lluvia para lavar arcilla hacia horizontes más profundos.',
      vegetacion:
        'Bosque tropical caducifolio, bosque de encino (Quercus sp.), selva mediana subcaducifolia, pastizales inducidos. En zonas de mayor precipitación: selva alta perennifolia en transición. Gran parte convertida a uso ganadero.',
      usosSuelo:
        'ACTUALES: Ganadería extensiva en pastizales inducidos, agricultura de temporal (maíz, frijol, sorgo, café en partes sombreadas). POTENCIALES: Fruticultura (cítricos, aguacate, mango), ganadería semi-intensiva, sistemas silvopastoriles.',
      limitantes:
        'Discontinuidad textural abrupta entre horizonte A (pobre en arcilla) y B (rico en arcilla) puede crear plano impermeable temporal. Susceptibilidad a erosión en posiciones de ladera. Compactación del horizonte B. Aluminio intercambiable puede ser limitante en subgrupos ácidos.',
      colorEstructura:
        'Horizonte A: pardo a pardo oscuro (10YR 4/3). Horizonte B árgico: pardo rojizo intenso a rojo amarillento (5YR 4/6). Textura franca en A, arcillosa en B (arcillas iluviales brillantes). Estructura en bloques subangulares bien desarrollada.',
      retencionAgua:
        'Moderada en A, alta en B. La discontinuidad textural puede crear zona de saturación temporal sobre el horizonte B. Agua disponible total moderada (120-180 mm/m en horizonte A).',
      drenaje:
        'Moderado. Horizonte B puede retardar el drenaje y crear condiciones de saturación temporal. Generalmente no hay anegamiento prolongado, pero pueden formarse napas colgadas.',
      riesgos:
        'Erosión hídrica en ladera al deforestar. La remoción del horizonte A expone el B arcilloso poco productivo. Compactación del B por pisoteo de ganado. Deslizamientos en pendientes mayores de 20°.',
      recomendaciones:
        'Conservar el horizonte A superficial a toda costa (es el más fértil). Implementar pastoreo rotacional para evitar compactación. En cultivos: siembra en contorno, barreras de piedra. Para rehabilitar áreas degradadas: uso de leguminosas perennes de cobertura (Mucuna, Stylosanthes) que agregan materia orgánica y aflojan el suelo compactado.',
    },
  },
  {
    id: 'regosol',
    nombre: 'Regosol',
    imagen: regosolImg,
    colorAccent: '#C4A76B',
    tagline: 'Suelo con poco desarrollo sobre material suelto',
    info: {
      nombre: 'Regosol',
      clasificacionWRB: 'Regosol (WRB 2006)',
      clasificacionUSDA: 'Entisol (Soil Taxonomy, USDA)',
      distribucionGeografica:
        'Distribuido principalmente en zonas áridas y semiáridas del norte: Sonora, Chihuahua, Baja California, Coahuila. También en laderas erosionadas de sierras de todo el país. En zonas volcánicas recientes con depósitos de ceniza o pómez. INEGI estima ~9% del territorio. Frecuente asociado con Leptosoles en paisajes de montaña.',
      materialParental:
        'Materiales no consolidados poco meteorizados: arenas, limos eólicos, depósitos coluviales de ladera, cenizas volcánicas recientes, pómez. Perfil simple sin horizontes genéticos reconocibles más allá del horizonte A.',
      relieve:
        'Variable: desde pendientes moderadas en ladera (15-30°) hasta planicies suavemente inclinadas. En zonas áridas: abanicos aluviales activos, bajadas. En montañas: coluvios de ladera reciente.',
      clima:
        'Variado, pero predomina en árido y semiárido (BW, BS). También en climas templados en zonas de erosión activa. La falta de desarrollo pedogenético puede deberse a clima árido, erosión activa, material parental resistente o deposición reciente.',
      vegetacion:
        'Matorral xérofilo (Larrea, Fouquieria, Yucca), pastizales de navajita (Bouteloua gracilis) en zonas semiáridas, vegetación pionera en campos de pómez reciente (musgos, helechos, zacates pioneros). Cobertura vegetal generalmente baja.',
      usosSuelo:
        'ACTUALES: Ganadería extensiva de muy baja productividad, cinegética (caza mayor en el norte), extracción de material de banco (pómez, arena volcánica). POTENCIALES: Con manejo cuidadoso en zonas no áridas: reforestación con especies nativas, pastizales mejorados.',
      limitantes:
        'Bajo desarrollo pedogenético limita acumulación de materia orgánica y nutrientes. Horizonte A poco desarrollado. Alta susceptibilidad a erosión al quedar suelo expuesto. En árido: bajo contenido de agua disponible. Sin estructura estable.',
      colorEstructura:
        'Color pardo grisáceo a pardo claro (10YR 5/3 a 7/3) en función del material parental. Sin horizontes genéticos definidos (sólo A-C). Textura muy variable. Estructura débil o sin estructura (suelta). Equivale a un suelo "joven".',
      retencionAgua:
        'Baja a moderada. Sin horizontes con acumulación de arcilla ni materia orgánica que mejore retención. En función de textura del material parental: arenoso = muy baja; limoso = moderada.',
      drenaje:
        'Moderado a excesivo. La falta de horizontes arcillosos no genera impedimentos al drenaje. En texturas gruesas: percolación rápida.',
      riesgos:
        'Erosión hídrica al dejar sin cobertura vegetal. Erosión eólica en zonas áridas. Arrastre de sedimentos a sistemas de riego y presas. Degradación rápida hacia un estado sin suelo (roca o material parental expuesto).',
      recomendaciones:
        'Mantener cualquier cobertura vegetal existente, por escasa que sea. No intervenir con maquinaria pesada en laderas. En zonas de rehabilitación: siembras de zacates nativos y arbustos con técnicas de captación de agua (micropresas de tierra, captación en surcos). Evitar pastoreo hasta establecer cobertura. En zonas volcánicas recientes: dejar que la vegetación pionera colonice naturalmente.',
    },
  },
  {
    id: 'kastanozem',
    nombre: 'Kastanozem',
    imagen: kastanozemImg,
    colorAccent: '#7D4E1E',
    tagline: 'Suelo castaño de pastizales semiáridos',
    info: {
      nombre: 'Kastanozem',
      clasificacionWRB: 'Kastanozem (WRB 2006)',
      clasificacionUSDA: 'Mollisol-Ustolls / Aridic Mollisol (Soil Taxonomy)',
      distribucionGeografica:
        'Característico de las planicies semiáridas del norte de México: llanuras de Chihuahua (desierto de Chihuahua), planicies de Coahuila, Nuevo León, Zacatecas norte. También en Durango (llanura del Guadiana) y San Luis Potosí norte. INEGI reporta ~3.5% del territorio.',
      materialParental:
        'Sedimentos aluviales, fluvioglaciares y eólicos de granulometría media. También sobre rocas calcáreas medianamente meteorizadas. Material relativamente rico en bases (Ca2+, Mg2+) que favorece la formación de horizonte A oscuro.',
      relieve:
        'Planicies semiplanas a suavemente onduladas (< 8° de pendiente). Llanuras de piedemonte, glacis, terrazas antiguas. Paisaje de llanura con vista abierta. Elevaciones de 1,500 a 2,400 msnm en el altiplano chihuahuense.',
      clima:
        'Semiárido (BS en Köppen-García). Temperatura de 14 a 20°C. Precipitación de 350 a 600 mm anuales concentrada en verano. Heladas frecuentes en invierno. Evapotranspiración > precipitación. Balance hídrico negativo la mayor parte del año.',
      vegetacion:
        'Pastizales de gramíneas medias: navajita (Bouteloua gracilis), toboso (Hilaria mutica), zacate banderita (B. curtipendula), popotillo (B. eriopoda). Matorrales de gobernadora (Larrea) en zonas más áridas. Los pastizales nativos son de gran importancia ecológica y ganadera.',
      usosSuelo:
        'ACTUALES: Ganadería extensiva de bovinos (ganado criollo y Hereford), cinegética (venado cola blanca, berrendó). Agricultura de temporal con riesgo climático alto (maíz, frijol, avena forrajera). POTENCIALES: Ganadería semi-intensiva con pastizales mejorados, ecoturismo cinegético.',
      limitantes:
        'Déficit hídrico marcado limita cultivos sin riego. Presencia de horizonte cálcico o petrocálcico a profundidad media (40-80 cm). Heladas que acortan el período vegetativo. Riesgo de erosión eólica en sequías prolongadas.',
      colorEstructura:
        'Color pardo oscuro a castaño (10YR 3/3 a 4/4). Horizonte A mólico de 20-40 cm. Horizonte Bk con acumulaciones de CaCO3. Textura franca a franco-limosa. Estructura granular en A, bloques subangulares en B.',
      retencionAgua:
        'Moderada. Contenido de materia orgánica moderado y textura media proporcionan retención aceptable (120-160 mm/m). Limitada por el déficit hídrico climático: el agua disponible se agota en temporada seca.',
      drenaje:
        'Bien drenado a moderadamente bien drenado. El horizonte cálcico puede retardar algo el drenaje pero no genera condiciones anaeróbicas. Perfil sin saturación estacional.',
      riesgos:
        'Erosión eólica severa en años de sequía cuando el pastizal se degrada (capa de suelo fino arrastrada por viento = "polvareda"). Desertificación por sobrepastoreo (pérdida irreversible de pastizal). Invasión de arbustos (encino, gobernadora) al degradarse el pastizal.',
      recomendaciones:
        'Manejo del pastizal basado en carga animal sostenible (UA/ha según capacidad del potrero). Sistema de pastoreo rotacional intensivo para descanso del pastizal. Control de arbustos invasores mediante chapeo selectivo. Respetar períodos de recuperación post-sequía. Para rehabilitación: resiembra con zacates nativos adaptados (navajita, banderita). No usar fuego sin programa de quema prescrita.',
    },
  },
  {
    id: 'histosol',
    nombre: 'Histosol',
    imagen: histosolImg,
    colorAccent: '#1A0F08',
    tagline: 'Suelo orgánico de humedales y manglares',
    info: {
      nombre: 'Histosol',
      clasificacionWRB: 'Histosol (WRB 2006)',
      clasificacionUSDA: 'Histosol (Soil Taxonomy, USDA)',
      distribucionGeografica:
        'Concentrado en la planicie costera del Golfo: Tabasco, Campeche, Quintana Roo, Yucatán. Asociado a ecosistemas de manglar, selvas inundables y petenes. También en pequeñas cuencas endorreicas de alta montaña (>3,000 msnm) en el Eje Neovolcánico. Los Bajos de Chontalpa en Tabasco son referencia nacional. INEGI reporta < 1% del territorio pero de alto valor ecológico.',
      materialParental:
        'Materia orgánica acumulada de restos vegetales parcialmente descompuestos (turba) en condiciones de saturación permanente. Sin material mineral significativo en los primeros 40-100+ cm. La lignina, celulosa y otros compuestos orgánicos resistentes forman el sustrato.',
      relieve:
        'Depresiones pantanosas, cuencas endorreicas, llanuras de manglar, bordes de lagunas costeras. Prácticamente sin pendiente (< 1°). Superficie casi siempre saturada o inundada. Nivel freático en superficie permanentemente.',
      clima:
        'Cálido húmedo a muy húmedo en costas (Am, Af): precipitación de 1,800 a 3,800 mm. En alta montaña: frío con alta precipitación o nevadas que ralentizan la descomposición orgánica.',
      vegetacion:
        'Manglar (Rhizophora mangle, Avicennia germinans, Laguncularia racemosa, Conocarpus erectus), selvas inundables (Haematoxylum campechianum), tulares (Typha spp.), carrizales, popales. En alta montaña: zacatonales pantanosos con briófitas.',
      usosSuelo:
        'ACTUALES: Mayoritariamente conservación y zonas de protección especial (sitios Ramsar). Extracción artesanal de turba (muy limitada). Pesca artesanal en esteros. POTENCIALES: Ecoturismo, avistamiento de aves, captura y almacenamiento de carbono (REDD+, mercados de carbono).',
      limitantes:
        'Nula aptitud agrícola sin transformaciones drásticas y costosas. En suelos sulfatados ácidos: liberación de ácido sulfúrico al drenar. Subsidencia severa al drenar o extraer turba. Irreversibilidad de la degradación: una vez drenado y oxidado, el suelo colapsa y nunca se regenera.',
      colorEstructura:
        'Negro intenso (N 2/0 a 10YR 2/1). Suelo completamente formado por materia orgánica (> 20-30% de carbono orgánico en peso seco). Fibroso a semi-fibroso (fólico, hémico, sáprico según grado de descomposición). Muy ligero y esponjoso en fresco. Olor a sulfuro característico.',
      retencionAgua:
        'Extremadamente alta (> 300-500% en peso seco en turfas sápticas). Saturación permanente es condición diagnóstica de este suelo. Capacidad de retención de agua es la más alta de todos los suelos.',
      drenaje:
        'Muy pobre a nulo. El mantenimiento del anegamiento es condición para su existencia. Al drenar artificialmente, la oxidación de la turba produce CO2 masivo y el suelo se hunde (subsidencia).',
      riesgos:
        'Destrucción por desecación para uso agrícola o ganadero (práctica que en Tabasco ha reducido enormemente la superficie de selvas inundables). Erosión costera al eliminar manglares. Emisiones masivas de GEI (CO2, CH4) al drenar. Subsidencia de terrenos en áreas urbanas construidas sobre suelos orgánicos. Pérdida de hábitat crítico para aves acuáticas y peces.',
      recomendaciones:
        'Protección legal estricta como ecosistemas prioritarios (Ley General del Equilibrio Ecológico). Incorporación a esquemas de pago por servicios ambientales y mercados de carbono. Restauración de manglares en áreas degradadas (revegetación con propágulos nativos). Prohibición absoluta de drenaje. Zonificación de usos del suelo que excluya al Histosol de conversión agrícola o urbana.',
    },
  },
  {
    id: 'acrisol',
    nombre: 'Acrisol',
    imagen: acrisolImg,
    colorAccent: '#9B3A1A',
    tagline: 'Suelo ácido tropical de baja fertilidad',
    info: {
      nombre: 'Acrisol',
      clasificacionWRB: 'Acrisol (WRB 2006)',
      clasificacionUSDA: 'Ultisol (Soil Taxonomy, USDA)',
      distribucionGeografica:
        'Presente en las zonas tropicales húmedas de México: Chiapas (Lacandona, Soconusco), Oaxaca (Cañadas), sur de Veracruz, Tabasco y Campeche. También en las laderas húmedas de sierras del sur. Son suelos de climas tropicales con largo historial de intemperismo (miles de años de pedogénesis).',
      materialParental:
        'Rocas silíceas profundamente meteorizadas: granito, gneiss, esquistos, areniscas. Materiales residuales de intemperismo intenso bajo clima cálido-húmedo permanente. La larga historia de meteorización ha lixiviado las bases y concentrado arcillas caoliníticas en el horizonte B.',
      relieve:
        'Laderas de serranías tropicales con pendientes moderadas a fuertes (10-35°). Superficies de erosión antiguas. Paisaje de montañas tropicales profundamente disectadas. Elevaciones de 0 a 1,800 msnm.',
      clima:
        'Cálido húmedo a muy húmedo (Am, Af). Temperatura de 20 a 28°C. Precipitación de 1,500 a 4,000 mm anuales. Sin estación seca definida o con 1-2 meses secos. Condiciones de alta intemperización todo el año.',
      vegetacion:
        'Selva alta perennifolia (Terminalia amazonia, Brosimum alicastrum, Swietenia macrophylla), selva mediana sub-perennifolia. En áreas perturbadas: acahuales y potreros con pasto jaragua (Hyparrhenia rufa). La vegetación nativa mantiene ciclos de nutrientes que compensan la baja fertilidad del suelo.',
      usosSuelo:
        'ACTUALES: Ganadería extensiva en pastizales (tras desmonte), agricultura migratoria (milpa, cacao, café bajo sombra). POTENCIALES: Agroforestería, cacao orgánico, café de sombra, silvicultura sostenible. La baja fertilidad limita la agricultura convencional intensiva.',
      limitantes:
        'Alta acidez (pH 4.5–5.5). Alta saturación de aluminio intercambiable (fitotóxico). Baja capacidad de intercambio catiónico. Deficiencia de fósforo, calcio, magnesio. Suelo sin reservas de nutrientes en minerales primarios. Toda la fertilidad está en la biomasa vegetal.',
      colorEstructura:
        'Horizonte A: pardo rojizo oscuro. Horizonte B árgico: rojo intenso a rojo amarillento (2.5YR 4/8 a 5YR 5/6). Arcillas caoliníticas brillantes. Textura arcillosa compacta. Estructura en bloques subangulares a angulares.',
      retencionAgua:
        'Moderada en términos absolutos. La arcilla caolinítica retiene agua pero con fuerza moderada. Sin embargo, la alta densidad aparente del horizonte B limita el espacio poroso. Agua disponible moderada-baja.',
      drenaje:
        'Moderado a imperfecto. El horizonte B arcilloso puede retardar el drenaje y crear condiciones de saturación temporal en laderas. No hay anegamiento prolongado en posiciones de ladera.',
      riesgos:
        'Pérdida catastrófica de fertilidad al deforestar (el suelo pierde en 2-3 años lo que la selva tardó siglos en acumular en biomasa). Erosión hídrica severa en laderas desnudas. Invasión de helecho (Pteridium aquilinum) que impide regeneración de vegetación natural. Acidificación acelerada por remoción de hojarasca.',
      recomendaciones:
        'Conservar la selva como mejor uso del suelo. Si se aprovecha: sistemas agroforestales (cacao, café, hule con árboles de sombra) que mantienen ciclos de nutrientes. Evitar desmonte total. Para pastizales ya establecidos: mejorar con leguminosas (Stylosanthes, Leucaena) para fijar nitrógeno. Recuperar áreas degradadas con especies pioneras nativas. Aplicar cal agrícola si se cultiva para corregir acidez.',
    },
  },
  {
    id: 'gypsisol',
    nombre: 'Gypsisol',
    imagen: gypsisolImg,
    colorAccent: '#D9D0B8',
    tagline: 'Suelo con acumulación de yeso',
    info: {
      nombre: 'Gypsisol',
      clasificacionWRB: 'Gypsisol (WRB 2006)',
      clasificacionUSDA: 'Aridisol-Gypsid (Soil Taxonomy, USDA)',
      distribucionGeografica:
        'Zona árida del norte de México en cuencas evaporíticas: Cuatrociénegas (Coahuila), Bolsón de Mapimí (Chihuahua, Coahuila, Durango), Laguna de Mayrán, planicies de Zacatecas y San Luis Potosí. El área de Cuatrociénegas es internacionalmente reconocida por su suelo gypsísico y su alta biodiversidad endémica.',
      materialParental:
        'Sedimentos evaporíticos lacustres (yeso: CaSO4·2H2O) de cuencas endorreicas desecadas. El yeso precipita al evaporarse el agua de lagos salinos internos. Material con > 15% de yeso en peso. Cristales seleníticos visibles a simple vista en muchos sitios.',
      relieve:
        'Fondos de cuencas endorreicas planas, planicies de bajada árida, llanuras de yeso. Pendiente mínima (< 2°). Paisaje desértico blanco característico. Elevaciones de 1,000 a 1,800 msnm en el altiplano.',
      clima:
        'Árido (BWk, BWhw). Temperatura de 16 a 22°C. Precipitación de 150 a 350 mm. Evapotranspiración 4-6 veces mayor que la precipitación. El clima árido favorece la acumulación de evaporitas.',
      vegetacion:
        'Pastizal gypsófilo (Bouteloua chasei, Muhlenbergia gypsophila) — plantas endémicas del sustrato yesoso. Covilar (Hilaria berlangeri), gobernadora (Larrea tridentata). Cuatrociénegas alberga >70 especies de plantas endémicas de sustratos yesosos. Biodiversidad única y frágil.',
      usosSuelo:
        'ACTUALES: Ganadería extensiva muy limitada, extracción de yeso para industria de la construcción. POTENCIALES: Ecoturismo científico (especialmente Cuatrociénegas como reserva), fotovoltaica en zonas sin biodiversidad relevante.',
      limitantes:
        'El yeso cristaliza al deshidratarse, formando estructuras que dificultan el crecimiento radicular. Alta salinidad asociada al yeso. Muy baja fertilidad. Alta reflectividad superficial (suelo blanco). Prácticamente sin aptitud agrícola convencional.',
      colorEstructura:
        'Color blanco a crema (10YR 8/2 a 7.5YR 8/4). Cristales de yeso (selenita, alabastro) visibles en superficie e interior. Textura arenosa a franco-arenosa con alta proporción de yeso. Sin estructura pedogenética: yeso puro o en mezcla con arena.',
      retencionAgua:
        'Muy baja. El yeso tiene baja retención de agua. Las raíces tienen dificultad para absorber agua a causa de la alta osmótica por sulfatos disueltos.',
      drenaje:
        'Excesivo a moderado. El yeso es soluble (más que la caliza) y permite algo de flujo de agua. En zonas planas puede haber saturación temporal tras lluvias intensas que disuelven yeso superficial.',
      riesgos:
        'Pérdida de biodiversidad endémica única al remover vegetación gypsófila. Erosión eólica del suelo suelto blanco (tormentas de polvo). Subsidencia por disolución de yeso. La extracción minera de yeso destruye ecosistemas únicos irreversiblemente.',
      recomendaciones:
        'Protección legal de ecosistemas gypsófilos endémicos (especialmente Cuatrociénegas, Área de Protección de Flora y Fauna desde 1994). No extraer yeso en zonas de biodiversidad alta. Evitar introducir ganado en pastizales gypsófilos nativos. Investigación científica para comprender las adaptaciones de los organismos endémicos. Ecoturismo de bajo impacto como alternativa económica.',
    },
  },
  {
    id: 'durisol',
    nombre: 'Durisol',
    imagen: durisolImg,
    colorAccent: '#C9953A',
    tagline: 'Suelo con horizonte endurecido por sílice',
    info: {
      nombre: 'Durisol',
      clasificacionWRB: 'Durisol (WRB 2006)',
      clasificacionUSDA: 'Aridisol-Durids (Soil Taxonomy, USDA)',
      distribucionGeografica:
        'Zonas áridas del noroeste de México: Sonora (desierto de Sonora), Baja California, norte de Sinaloa. Menos frecuente en Chihuahua y Coahuila. Asociado a superficies geomórficas antiguas (pleistocénicas) donde la sílice ha sido concentrada por evaporación prolongada. INEGI los reporta en asociación con Calcisoles del noroeste.',
      materialParental:
        'Sedimentos aluviales o coluviales de granulometría media a fina, con aporte de sílice de origen volcánico o meteórico. El horizonte dúrico (duripán) está cementado por SiO2 (sílice amorfa, ópalo, calcedonia) que resulta de su disolución-precipitación en clima árido.',
      relieve:
        'Superficies geomórficas antiguas y estables: glacis, terrazas altas, pedimentos. Pendiente suave a muy suave (< 5°). Paisaje de planicie árida bajo y estable. El duripán se forma en superficie topográficamente estable durante miles de años.',
      clima:
        'Árido a semiárido (BW, BS). Temperatura de 18 a 26°C. Precipitación de 100 a 350 mm. Alta insolación y evapotranspiración. El balance hídrico negativo concentra la sílice en el subsuelo.',
      vegetacion:
        'Matorral desértico sonorense con saguaro (Carnegiea gigantea), cholla (Cylindropuntia), ocotillo (Fouquieria splendens), palo verde (Parkinsonia microphylla). En zonas de Baja California: cirio (Fouquieria columnaris). Vegetación muy dispersa y adaptada a suelos impermeables.',
      usosSuelo:
        'ACTUALES: Ganadería extensiva de bovinos en pastizales xerófilos. Ecoturismo en parques protegidos (El Pinacate, Biósfera Sonora). Extracción de material del duripán para afirmado de caminos. POTENCIALES: Energía solar (alto potencial de irradiación), áreas de conservación.',
      limitantes:
        'El duripán impermeable limita la profundidad de raíces a 20-40 cm sobre la capa dura. Extrema dureza del horizonte (no puede romperse con pala o barreta). Baja disponibilidad de agua. Sin aptitud agrícola sin rompimiento del duripán (subsoleo profundo costoso y temporal).',
      colorEstructura:
        'Color pardo a dorado amarillento (10YR 5/4 a 7.5YR 5/6). Horizonte dúrico: muy duro, cementado por sílice, con lustre graso y fracturas conchoidales. Horizonte superficial: textura franca, estructura débil. Duripán: masivo, cementado, sin estructura.',
      retencionAgua:
        'Baja sobre el duripán. El horizonte superficial retiene algo de agua, pero el duripán impermeable impide acceso a agua profunda. En lluvia intensa: formación de charcos temporales sobre el duripán.',
      drenaje:
        'Pobre sobre el horizonte dúrico (agua se acumula encima temporalmente). Excesivo o nulo debajo. El duripán actúa como barrera impermeable que separa dos zonas hídricas.',
      riesgos:
        'Al remover vegetación: erosión del suelo superficial fino sobre duripán (horizonte ínfimo). Encharcamientos temporales que favorecen sales superficiales. Suelo prácticamente irreversible al daño dado el tiempo de formación del duripán (miles de años).',
      recomendaciones:
        'Respetar la baja capacidad de carga ganadera de estos suelos. No intentar agricultura sin evaluación técnica previa del duripán. En energía solar: instalación de paneles con mínima perturbación superficial. Conservar vegetación nativa del desierto sonorense que es única a nivel mundial. En carreteras: aprovechar el duripán como material de subbase natural.',
    },
  },
  {
    id: 'chernozem',
    nombre: 'Chernozem',
    imagen: chernozemImg,
    colorAccent: '#0D0D0D',
    tagline: 'Tierra negra, el suelo más fértil de México',
    info: {
      nombre: 'Chernozem',
      clasificacionWRB: 'Chernozem (WRB 2006)',
      clasificacionUSDA: 'Mollisol-Udolls / Borolls (Soil Taxonomy, USDA)',
      distribucionGeografica:
        'De distribución restringida en México; presente en zonas de transición entre clima templado-húmedo y semiárido. Manchones en Chihuahua (llanura de Namiquipa, Madera), Durango (Llano Grande), Coahuila (sierra de La Encantada), y partes altas de la Sierra Madre Occidental. INEGI los reporta asociados a Kastanozemes en transición. Área total pequeña (< 1% del país).',
      materialParental:
        'Loess, depósitos glaciogénicos o sedimentos de granulometría media ricos en minerales primarios intemperizables. Material con alta reserva de bases (Ca, Mg). En pastizales con gran producción de biomasa que genera el horizonte mólico oscuro característico.',
      relieve:
        'Planicies onduladas suaves, llanuras de alta montaña templada (> 2,000 msnm), valles amplios de altura. Pendientes < 10°. Paisaje de praderas y pastizales abiertos. Clima frío limita el intemperismo y favorece acumulación de humus.',
      clima:
        'Templado-semiárido a templado subhúmedo (C(w), BSk). Temperatura de 10 a 16°C. Precipitación de 450 a 700 mm. Inviernos fríos con heladas frecuentes. El frío ralentiza la descomposición de materia orgánica, favoreciendo su acumulación.',
      vegetacion:
        'Pastizales de gramíneas amacolladas: zacate llovizna (Eragrostis lehmanniana), navajita (Bouteloua gracilis), pasto borreguero (Poa sp.), festuca (Festuca tolucensis en partes altas). Los pastizales de gramíneas son los formadores del horizonte negro mólico.',
      usosSuelo:
        'ACTUALES: Ganadería extensiva de bovinos de carne (corridas de ganado Hereford, Charolais), agricultura de temporal de maíz serrano, avena y cebada forrajeras. POTENCIALES: Ganadería semi-intensiva, cultivos de granos, fruticultura de clima frío (manzana, pera, durazno montañero).',
      limitantes:
        'Heladas frecuentes acortan el período vegetativo. Precipitación variable con años secos frecuentes. En zonas más áridas: déficit hídrico limita la producción. Riesgo de erosión eólica en sequías invernales. Presión de pastoreo excesivo puede degradar el horizonte mólico.',
      colorEstructura:
        'Negro a pardo muy oscuro (10YR 2/1 a 10YR 2/2). Horizonte A mólico muy desarrollado (> 40 cm de espesor). Estructura granular muy bien desarrollada; suelo grumoso. Textura franca a franco-limosa. Alto contenido de materia orgánica (4-8% en superficie). El suelo más oscuro de México.',
      retencionAgua:
        'Alta. La combinación de alta materia orgánica y textura franca proporciona excelente capacidad de retención de agua disponible (> 180 mm/m). Uno de los suelos con mayor capacidad hídrica de México.',
      drenaje:
        'Bien drenado. La estructura granular bien desarrollada facilita infiltración y evacuación de exceso de agua. Sin condiciones anaeróbicas estacionales significativas.',
      riesgos:
        'Degradación del horizonte mólico por sobrepastoreo: pérdida de estructura granular, compactación, invasión de arbustos. Erosión eólica en temporada seca y sin cobertura. En zonas de pendiente: erosión hídrica.',
      recomendaciones:
        'Ganadería con carga animal estrictamente controlada basada en la producción forrajera. Sistema de pastoreo rotacional con períodos de descanso de 60-90 días. Mantener cobertura de pastizal > 70% en todo momento. Prohibir quemas frecuentes (destruyen la materia orgánica del horizonte A). Para cultivos: labranza mínima conservando residuos de cosecha. Estos suelos son los más productivos de las sierras del norte y deben protegerse.',
    },
  },
  {
    id: 'planosol',
    nombre: 'Planosol',
    imagen: planosolImg,
    colorAccent: '#A08060',
    tagline: 'Suelo con cambio textural brusco en profundidad',
    info: {
      nombre: 'Planosol',
      clasificacionWRB: 'Planosol (WRB 2006)',
      clasificacionUSDA: 'Alfisol-Albaqualfs / Ultisol (Soil Taxonomy)',
      distribucionGeografica:
        'Planicies tropicales y subtropicales con marcada estación seca: Huasteca veracruzana y potosina, llanuras de Tabasco-Campeche transición, Depresión Central de Chiapas. También en valles de Oaxaca y Guerrero. Típico de paisajes con alternancia de inundación y sequía que favorece la eluviación de arcilla.',
      materialParental:
        'Sedimentos aluviales o lacustres con estratificación natural de granulometría fina en profundidad y más gruesa en superficie. Proceso de eluviación intenso en clima estacional.',
      relieve:
        'Planicies casi planas con muy poca pendiente (< 3°). Zonas con drenaje impedido que generan saturación estacional. Llanuras aluviales bajas. Elevaciones de 0 a 1,200 msnm.',
      clima:
        'Cálido subhúmedo a cálido húmedo (Aw, Am). Temperatura de 20 a 26°C. Precipitación de 900 a 1,800 mm con marcada estación seca de 3-5 meses. La alternancia de saturación y sequía es el motor de formación.',
      vegetacion:
        'Pastizales de bajial (Paspalum fasciculatum, Leersia hexandra) en zonas anegadas. Selva baja inundable caducifolia. Savanas naturales con palma real (Sabal mexicana). Gran parte convertida a pastizales inducidos.',
      usosSuelo:
        'ACTUALES: Ganadería extensiva de bovinos en pastizales de bajial, agricultura de arroz de temporal (aprovecha inundaciones estacionales). POTENCIALES: Arrozales, acuicultura estacional, ganadería semi-intensiva con drenaje.',
      limitantes:
        'Anegamiento estacional severo (3-5 meses) por el horizonte álbico impermeable. En sequía: endurecimiento extremo del horizonte superficial (E álbico blanco, duro). Cambio abrupto de textura. Poca profundidad efectiva para raíces en la parte superior. Aluminio tóxico en el horizonte B saturado.',
      colorEstructura:
        'Horizonte E (álbico): pardo pálido a blanco grisáceo (10YR 7/2 a 10YR 6/2), masivo, muy duro en seco. Horizonte Btg: gris con manchas rojizas, arcilloso, muy duro. La discontinuidad visual es el rasgo más llamativo: dos mundos en un mismo suelo.',
      retencionAgua:
        'Baja en A (textura arenosa-limosa). Muy alta sobre el Btg durante las lluvias. La saturación estacional es inevitable dado el diseño pedogenético del suelo.',
      drenaje:
        'Imperfecto a pobre. El horizonte B prácticamente impermeable retiene el agua sobre él durante la temporada de lluvias. En sequía: desecación abrupta.',
      riesgos:
        'Encharcamiento prolongado daña cultivos no adaptados. Riesgo de parásitos ganaderos por anegamiento. Erosión en transición húmedo-seco por suelo desnudo endurecido.',
      recomendaciones:
        'Para ganadería: introducir pastos adaptados al anegamiento (alemán, para, castilla). Drenaje parcelario con zanjas para reducir período de inundación. Para arroz: aprovechar la inundación natural. Arar antes de la temporada de lluvias para mejorar infiltración. Evitar maquinaria pesada cuando el suelo está saturado.',
    },
  },
  {
    id: 'nitisol',
    nombre: 'Nitisol',
    imagen: nitisolImg,
    colorAccent: '#8B1A0A',
    tagline: 'Suelo tropical rojo de alta productividad',
    info: {
      nombre: 'Nitisol',
      clasificacionWRB: 'Nitisol (WRB 2006)',
      clasificacionUSDA: 'Ultisol-Humults / Oxisol (Soil Taxonomy)',
      distribucionGeografica:
        'Restringido a zonas de intensa meteorización tropical en México: piedemonte del Soconusco (Chiapas), lomeríos húmedos del sur de Veracruz y norte de Oaxaca, vertientes del Istmo de Tehuantepec. Relativamente escaso pero de alta importancia agrícola en regiones cafetaleras y cacaoteras del sureste. INEGI los agrupa frecuentemente con Acrisoles en el sur.',
      materialParental:
        'Rocas básicas muy meteorizadas (basalto, andesita basáltica, gabbro) bajo clima cálido-húmedo de alta temperatura y precipitación. Intemperismo avanzado ha transformado los minerales primarios en caolinita y óxidos de hierro que dan el color rojo intenso.',
      relieve:
        'Lomeríos suaves a moderados (8-20°), superficies de erosión antiguas en piedemonte tropical. Paisaje de colinas redondeadas en zonas de alta humedad. Elevaciones de 100 a 1,200 msnm.',
      clima:
        'Cálido húmedo a muy húmedo (Am, Af). Temperatura de 22 a 28°C. Precipitación de 1,500 a 3,500 mm. Sin estación seca o con menos de 2 meses secos. Alta temperatura y humedad aceleran el intemperismo.',
      vegetacion:
        'Selva alta perennifolia y mediana perennifolia: Terminalia amazonia, Brosimum alicastrum, Cedrela odorata, Swietenia macrophylla. Bajo cultivo: cafetales bajo sombra, cacaotales, platanares. La alta fertilidad relativa (para un suelo tropical) permite estos cultivos.',
      usosSuelo:
        'ACTUALES: Cafeticultura de altura bajo sombra (uno de los mejores suelos para café de calidad), cacao, plátano, piña, ganadería semi-intensiva. POTENCIALES: Cacao orgánico de exportación, sistemas agroforestales de alto valor, fruticultura tropical diversificada.',
      limitantes:
        'Aunque más fértil que Acrisoles, sigue siendo suelo ácido (pH 5.0-6.0) con cierta saturación de aluminio. Susceptibilidad a erosión en pendiente si se desmonta. La fertilidad natural está vinculada al reciclaje de la vegetación. Al deforestar, la fertilidad cae rápidamente.',
      colorEstructura:
        'Color rojo intenso a rojo oscuro (2.5YR 3/6 a 10R 4/8). Horizonte B nítico: arcilloso con caras de agregados brillantes (barniz arcilloso). Estructura en bloques angulares bien desarrollada. Suelo profundo (> 1.5 m a roca). Textura arcillosa uniforme en profundidad.',
      retencionAgua:
        'Moderada. La arcilla caolinítica y los óxidos de hierro retienen agua con fuerzas moderadas. Buena disponibilidad de agua para plantas en temporada de lluvias. En sequía corta: el suelo puede mantener humedad suficiente por su profundidad.',
      drenaje:
        'Bien drenado a moderado. La estructura en bloques angulares proporciona macroporos para drenaje. Sin encharcamientos salvo en zonas muy planas.',
      riesgos:
        'Erosión hídrica intensa al deforestar pendientes. Compactación por maquinaria pesada. Pérdida de la fertilidad natural vinculada a materia orgánica al quemar vegetación. Invasión de helechos y pastos agresivos en zonas perturbadas.',
      recomendaciones:
        'Mantener sombra en cafetales y cacaotales para proteger suelo y mejorar calidad del producto. Sistemas agroforestales multiestrato como uso más sostenible. Incorporar toda materia orgánica al suelo (pulpa de café, residuos). Evitar labranza profunda que destruye la estructura nítica. En pendientes: establecer barreras vivas con bananeros o gliricidia. La conservación de estos suelos es estratégica para la cafeticultura de calidad en Chiapas y Veracruz.',
    },
  },
];

export const menuOptions = [
  { id: 'nombre', label: 'Nombre y Clasificación', icon: '🏷️', description: 'WRB y USDA' },
  { id: 'distribucion', label: 'Distribución Geográfica', icon: '🗺️', description: 'Dónde se encuentra' },
  { id: 'material', label: 'Material Parental', icon: '🪨', description: 'Geología de origen' },
  { id: 'relieve', label: 'Relieve Asociado', icon: '⛰️', description: 'Pendiente y paisaje' },
  { id: 'clima', label: 'Clima Característico', icon: '🌤️', description: 'Temperatura y lluvia' },
  { id: 'vegetacion', label: 'Vegetación Asociada', icon: '🌿', description: 'Flora típica' },
  { id: 'usos', label: 'Usos del Suelo', icon: '🌾', description: 'Actuales y potenciales' },
  { id: 'limitantes', label: 'Limitantes del Suelo', icon: '⚠️', description: 'Restricciones típicas' },
  { id: 'color', label: 'Color y Estructura', icon: '🎨', description: 'Características visuales' },
  { id: 'retencion', label: 'Retención de Agua', icon: '💧', description: 'Capacidad hídrica' },
  { id: 'drenaje', label: 'Drenaje Natural', icon: '🌊', description: 'Comportamiento hídrico' },
  { id: 'riesgos', label: 'Riesgos Frecuentes', icon: '🔴', description: 'Erosión, inundación...' },
  { id: 'recomendaciones', label: 'Recomendaciones de Manejo', icon: '✅', description: 'Manejo físico' },
];

export function getSoilInfoByOptionId(soil: Soil, optionId: string): { title: string; content: string } {
  const opt = menuOptions.find(o => o.id === optionId)!;
  const info = soil.info;
  const map: Record<string, string> = {
    nombre: `**Nombre:** ${info.nombre}\n\n**Clasificación WRB:** ${info.clasificacionWRB}\n\n**Clasificación USDA:** ${info.clasificacionUSDA}`,
    distribucion: info.distribucionGeografica,
    material: info.materialParental,
    relieve: info.relieve,
    clima: info.clima,
    vegetacion: info.vegetacion,
    usos: info.usosSuelo,
    limitantes: info.limitantes,
    color: info.colorEstructura,
    retencion: info.retencionAgua,
    drenaje: info.drenaje,
    riesgos: info.riesgos,
    recomendaciones: info.recomendaciones,
  };
  return { title: opt.label, content: map[optionId] ?? '' };
}
