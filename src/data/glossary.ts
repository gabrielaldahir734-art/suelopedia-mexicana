export interface GlossaryTerm {
  term: string;
  definition: string;
  formula?: string;
  formulaExplanation?: string;
  practicalUse?: string;
  category: "conceptual" | "calculable";
}

export const glossaryTerms: GlossaryTerm[] = [
  // --- Términos conceptuales ---
  {
    term: "Horizonte",
    definition:
      "Capa del suelo aproximadamente paralela a la superficie, que se diferencia de las capas adyacentes por sus propiedades físicas, químicas y biológicas (color, textura, estructura, consistencia). Se designan con letras mayúsculas: O, A, E, B, C, R.",
    category: "conceptual",
  },
  {
    term: "Perfil del suelo",
    definition:
      "Sección vertical del suelo desde la superficie hasta el material parental o roca madre, que expone todos los horizontes presentes. Es la unidad básica de estudio en edafología y permite analizar la evolución y propiedades del suelo.",
    category: "conceptual",
  },
  {
    term: "Suelo",
    definition:
      "Cuerpo natural formado a partir de la meteorización de rocas y la descomposición de materia orgánica, bajo la influencia del clima, organismos vivos, relieve y tiempo. Funciona como soporte para las plantas, filtro de agua y reservorio de nutrientes.",
    category: "conceptual",
  },
  {
    term: "Materia orgánica",
    definition:
      "Fracción del suelo compuesta por residuos vegetales y animales en diferentes grados de descomposición, incluyendo el humus. Mejora la estructura del suelo, incrementa la retención de humedad y aporta nutrientes a las plantas.",
    category: "conceptual",
  },
  {
    term: "Estructura del suelo",
    definition:
      "Forma en que las partículas individuales del suelo (arena, limo, arcilla) se agrupan en unidades mayores llamadas agregados o peds. Los tipos principales son: granular, bloques (angulares y subangulares), prismática, columnar y laminar.",
    category: "conceptual",
  },
  {
    term: "Textura del suelo",
    definition:
      "Proporción relativa de arena, limo y arcilla en la fracción mineral del suelo (partículas menores a 2 mm). Se determina mediante el triángulo textural y condiciona propiedades como la retención de agua, la aireación y la trabajabilidad del suelo.",
    category: "conceptual",
  },
  {
    term: "Drenaje",
    definition:
      "Rapidez y grado con que el agua se elimina del suelo, tanto superficial como internamente. Se clasifica cualitativamente como excesivo, bueno, moderado, imperfecto, pobre o muy pobre. Depende de la textura, estructura, pendiente y nivel freático.",
    category: "conceptual",
  },
  {
    term: "Permeabilidad",
    definition:
      "Capacidad del suelo para transmitir agua y aire a través de sus poros. Se describe cualitativamente como muy rápida, rápida, moderada, lenta o muy lenta. Está relacionada con la textura, estructura y porosidad del suelo.",
    category: "conceptual",
  },
  {
    term: "Infiltración",
    definition:
      "Proceso por el cual el agua penetra desde la superficie hacia el interior del suelo. La tasa de infiltración depende de la textura, estructura, contenido de humedad previo y cobertura vegetal. Es fundamental para la recarga de acuíferos y el control de escorrentía.",
    category: "conceptual",
  },
  {
    term: "Solum",
    definition:
      "Parte superior del perfil del suelo que ha sido influenciada por los procesos de formación del suelo (pedogénesis). Comprende los horizontes O, A, E y B. Se distingue de los horizontes C y R que representan material parental poco alterado.",
    category: "conceptual",
  },

  // --- Términos calculables ---
  {
    term: "Porosidad",
    definition:
      "Porcentaje del volumen total del suelo que está ocupado por espacios vacíos (poros), los cuales pueden contener aire o agua. Es una medida clave de la capacidad del suelo para almacenar fluidos.",
    formula: "P (%) = (1 − Da / Dr) × 100",
    formulaExplanation:
      "Donde **Da** = densidad aparente (g/cm³) y **Dr** = densidad real o de partículas (g/cm³). Por ejemplo, si Da = 1.3 g/cm³ y Dr = 2.65 g/cm³: P = (1 − 1.3/2.65) × 100 = 50.9%.",
    practicalUse:
      "Permite evaluar la capacidad de aireación y almacenamiento de agua del suelo. Suelos con porosidad baja (<40%) suelen tener problemas de compactación y drenaje deficiente.",
    category: "calculable",
  },
  {
    term: "Densidad aparente (Da)",
    definition:
      "Masa de suelo seco por unidad de volumen total (incluyendo los poros). Refleja la compactación del suelo y su capacidad de almacenamiento.",
    formula: "Da = Ms / Vt",
    formulaExplanation:
      "Donde **Ms** = masa del suelo seco al horno (g) y **Vt** = volumen total de la muestra (cm³). Se mide generalmente con el método del cilindro. Valores típicos: 1.0–1.8 g/cm³ en suelos minerales.",
    practicalUse:
      "Sirve para detectar compactación, calcular porosidad, estimar peso de capa arable y convertir contenido de humedad gravimétrico a volumétrico. Valores altos (>1.6 g/cm³) indican restricción al crecimiento radicular.",
    category: "calculable",
  },
  {
    term: "Densidad real (Dr)",
    definition:
      "Masa de las partículas sólidas del suelo por unidad de volumen de sólidos (sin poros). También llamada densidad de partículas.",
    formula: "Dr = Ms / Vs",
    formulaExplanation:
      "Donde **Ms** = masa de sólidos del suelo (g) y **Vs** = volumen de los sólidos (cm³). Se determina comúnmente con el método del picnómetro. Para suelos minerales el valor promedio es ≈ 2.65 g/cm³.",
    practicalUse:
      "Es necesaria para calcular la porosidad total. También permite estimar la composición mineralógica general del suelo (valores menores sugieren mayor contenido orgánico).",
    category: "calculable",
  },
  {
    term: "Capacidad de campo (CC)",
    definition:
      "Contenido de agua retenido por el suelo después de que ha drenado libremente el agua gravitacional (generalmente 24–48 h después de saturación). Representa el límite superior de agua disponible para las plantas.",
    formula: "CC = (Mh − Ms) / Ms × 100",
    formulaExplanation:
      "Donde **Mh** = masa de suelo húmedo a capacidad de campo (g) y **Ms** = masa de suelo seco al horno (g). Se determina en laboratorio a una tensión de −33 kPa (−1/3 atm).",
    practicalUse:
      "Define el límite superior de agua disponible y es esencial para programar el riego. Suelos arcillosos tienen CC alta (30–40%) mientras que los arenosos tienen CC baja (5–15%).",
    category: "calculable",
  },
  {
    term: "Punto de marchitez permanente (PMP)",
    definition:
      "Contenido mínimo de agua en el suelo por debajo del cual las plantas no pueden extraer agua y se marchitan irreversiblemente.",
    formula: "PMP = (Mh − Ms) / Ms × 100",
    formulaExplanation:
      "Se mide a una tensión de −1500 kPa (−15 atm). **Mh** = masa de suelo a tensión de −1500 kPa y **Ms** = masa seca. Valores típicos: 2–5% (arenas), 15–25% (arcillas).",
    practicalUse:
      "Define el límite inferior de agua disponible para las plantas. Es fundamental para el diseño de sistemas de riego y para determinar la humedad aprovechable.",
    category: "calculable",
  },
  {
    term: "Humedad aprovechable (HA)",
    definition:
      "Cantidad de agua que el suelo puede retener y que está disponible para ser absorbida por las plantas. Es la diferencia entre la capacidad de campo y el punto de marchitez permanente.",
    formula: "HA = CC − PMP",
    formulaExplanation:
      "Donde **CC** = capacidad de campo (%) y **PMP** = punto de marchitez permanente (%). Ejemplo: si CC = 32% y PMP = 14%, entonces HA = 18%.",
    practicalUse:
      "Es el parámetro más importante para programar el riego: indica cuánta agua útil puede almacenar el suelo. Suelos con HA baja requieren riegos más frecuentes pero de menor volumen.",
    category: "calculable",
  },
  {
    term: "Capacidad de agua disponible (CAD)",
    definition:
      "Volumen total de agua aprovechable en una profundidad determinada del perfil del suelo. Integra la humedad aprovechable con la profundidad radicular efectiva.",
    formula: "CAD = HA × Da × Prof / 10",
    formulaExplanation:
      "Donde **HA** = humedad aprovechable (%), **Da** = densidad aparente (g/cm³) y **Prof** = profundidad de raíces (cm). El resultado se expresa en mm de lámina de agua. Ejemplo: HA = 18%, Da = 1.3, Prof = 40 cm → CAD = 18 × 1.3 × 40 / 10 = 93.6 mm.",
    practicalUse:
      "Permite calcular la lámina de riego necesaria y determinar el intervalo entre riegos. Es clave en la planificación agrícola y el manejo sustentable del agua.",
    category: "calculable",
  },
  {
    term: "Contenido de agua del suelo (θ)",
    definition:
      "Cantidad de agua presente en el suelo en un momento dado, expresada como porcentaje del peso seco (gravimétrico) o del volumen total (volumétrico).",
    formula: "θg = (Mh − Ms) / Ms × 100 ; θv = θg × Da",
    formulaExplanation:
      "**θg** = contenido gravimétrico (%), **θv** = contenido volumétrico (cm³/cm³). **Mh** = masa húmeda, **Ms** = masa seca, **Da** = densidad aparente. Ejemplo: θg = 20%, Da = 1.3 → θv = 0.26 cm³/cm³.",
    practicalUse:
      "Monitorear la humedad del suelo para decidir cuándo y cuánto regar. El contenido volumétrico es más útil en campo porque se relaciona directamente con la lámina de agua almacenada.",
    category: "calculable",
  },
  {
    term: "Saturación (S)",
    definition:
      "Porcentaje del espacio poroso del suelo que está ocupado por agua. Cuando S = 100%, todos los poros están llenos de agua y no hay aire disponible para las raíces.",
    formula: "S (%) = θv / P × 100",
    formulaExplanation:
      "Donde **θv** = contenido volumétrico de agua y **P** = porosidad total (ambos en las mismas unidades, decimal o %). Ejemplo: θv = 0.30, P = 0.50 → S = 60%.",
    practicalUse:
      "Permite evaluar el riesgo de condiciones anaeróbicas (falta de oxígeno) en el suelo. Saturaciones prolongadas por encima de 80-90% pueden causar asfixia radicular y favorecer procesos de reducción.",
    category: "calculable",
  },
  {
    term: "Relación de huecos (e)",
    definition:
      "Relación entre el volumen de vacíos (poros) y el volumen de sólidos del suelo. Es un parámetro ampliamente utilizado en mecánica de suelos y geotecnia.",
    formula: "e = Vv / Vs = P / (1 − P)",
    formulaExplanation:
      "Donde **Vv** = volumen de vacíos y **Vs** = volumen de sólidos. Si la porosidad es P (en decimal), entonces e = P / (1 − P). Ejemplo: P = 0.50 → e = 0.50 / 0.50 = 1.0.",
    practicalUse:
      "Se usa en geotecnia para clasificar suelos, calcular asentamientos y evaluar la compresibilidad. Valores típicos: 0.3–0.9 en arenas, 0.5–1.5 en arcillas.",
    category: "calculable",
  },
  {
    term: "Porcentaje de poros con aire",
    definition:
      "Proporción del volumen total del suelo ocupado por poros llenos de aire. Es crucial para la respiración radicular y la actividad microbiana aeróbica.",
    formula: "Pa (%) = P − θv",
    formulaExplanation:
      "Donde **P** = porosidad total (%) y **θv** = contenido volumétrico de agua (%). Ejemplo: P = 50%, θv = 30% → Pa = 20%.",
    practicalUse:
      "Un mínimo de 10% de porosidad de aire es necesario para el desarrollo adecuado de la mayoría de los cultivos. Valores menores indican suelos con mala aireación o compactación.",
    category: "calculable",
  },
  {
    term: "Porcentaje de poros con agua",
    definition:
      "Proporción del volumen total del suelo que está ocupado por agua. Equivale al contenido volumétrico de humedad.",
    formula: "Pw (%) = θv = θg × Da",
    formulaExplanation:
      "Donde **θg** = contenido gravimétrico de agua (decimal) y **Da** = densidad aparente (g/cm³). Es equivalente al volumen de agua por volumen total de suelo.",
    practicalUse:
      "Complementa el análisis de porosidad: junto con el porcentaje de poros con aire, permite evaluar el balance aireación/humedad del suelo en un momento dado.",
    category: "calculable",
  },
];
