export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: "identificacion" | "propiedades" | "usos" | "formacion";
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: QuizQuestion[];
}

export const quizzes: Quiz[] = [
  {
    id: "identificacion-suelos",
    title: "Identifica el suelo",
    description: "¿Puedes reconocer los tipos de suelo por sus características?",
    icon: "🔍",
    questions: [
      {
        id: "q1",
        question: "¿Qué tipo de suelo se caracteriza por agrietarse mucho cuando se seca y expandirse cuando se moja?",
        options: ["Arenosol", "Vertisol", "Histosol", "Regosol"],
        correctIndex: 1,
        explanation: "Los Vertisoles tienen mucha arcilla que se hincha con el agua y se contrae al secarse, formando grietas profundas.",
        category: "identificacion",
      },
      {
        id: "q2",
        question: "¿Cuál suelo se forma principalmente a partir de restos de plantas acumulados en zonas pantanosas?",
        options: ["Fluvisol", "Histosol", "Gleysol", "Cambisol"],
        correctIndex: 1,
        explanation: "Los Histosoles están formados por materia orgánica acumulada (restos de plantas) en zonas donde hay mucha humedad, como pantanos y ciénagas.",
        category: "formacion",
      },
      {
        id: "q3",
        question: "¿Qué tipo de suelo es muy arenoso y tiene poca capacidad para retener agua?",
        options: ["Vertisol", "Luvisol", "Arenosol", "Chernozem"],
        correctIndex: 2,
        explanation: "Los Arenosoles son suelos de textura arenosa. El agua se filtra rápidamente a través de ellos, por eso retienen muy poca humedad.",
        category: "propiedades",
      },
      {
        id: "q4",
        question: "¿Cuál de estos suelos es considerado uno de los más fértiles del mundo, con una capa oscura rica en nutrientes?",
        options: ["Leptosol", "Solonchak", "Chernozem", "Durisol"],
        correctIndex: 2,
        explanation: "Los Chernozems tienen una gruesa capa superficial de color oscuro llena de materia orgánica y nutrientes, lo que los hace ideales para la agricultura.",
        category: "identificacion",
      },
      {
        id: "q5",
        question: "¿Qué suelo se encuentra típicamente junto a ríos y está formado por sedimentos que el agua deposita?",
        options: ["Fluvisol", "Calcisol", "Kastanozem", "Nitisol"],
        correctIndex: 0,
        explanation: "Los Fluvisoles se forman con los materiales que los ríos depositan durante las inundaciones. Son comunes en llanuras aluviales.",
        category: "formacion",
      },
      {
        id: "q6",
        question: "¿Cuál suelo tiene acumulación de sales en la superficie, haciéndolo difícil para cultivar?",
        options: ["Feozem", "Solonchak", "Andosol", "Planosol"],
        correctIndex: 1,
        explanation: "Los Solonchaks tienen mucha sal acumulada, lo que dificulta el crecimiento de la mayoría de las plantas. Son comunes en zonas áridas.",
        category: "propiedades",
      },
      {
        id: "q7",
        question: "¿Los Andosoles se forman a partir de qué material?",
        options: ["Arena de playa", "Cenizas volcánicas", "Rocas calcáreas", "Sedimentos de río"],
        correctIndex: 1,
        explanation: "Los Andosoles se forman a partir de cenizas y materiales volcánicos. Son suelos ligeros, porosos y muy fértiles.",
        category: "formacion",
      },
      {
        id: "q8",
        question: "¿Qué suelo es tan delgado que casi puedes ver la roca debajo?",
        options: ["Leptosol", "Gleysol", "Luvisol", "Acrisol"],
        correctIndex: 0,
        explanation: "Los Leptosoles son suelos muy delgados y poco desarrollados, generalmente sobre roca. Son comunes en montañas y laderas empinadas.",
        category: "identificacion",
      },
    ],
  },
  {
    id: "propiedades-suelo",
    title: "Propiedades del suelo",
    description: "Pon a prueba tu conocimiento sobre cómo funcionan los suelos",
    icon: "⚗️",
    questions: [
      {
        id: "p1",
        question: "¿Qué es la textura del suelo?",
        options: [
          "El color que tiene el suelo",
          "La proporción de arena, limo y arcilla que contiene",
          "Qué tan húmedo está",
          "La cantidad de piedras que tiene",
        ],
        correctIndex: 1,
        explanation: "La textura se refiere a cuánta arena, limo y arcilla tiene un suelo. Esto determina cómo se siente al tacto y cómo retiene el agua.",
        category: "propiedades",
      },
      {
        id: "p2",
        question: "¿Qué indica un suelo de color oscuro?",
        options: [
          "Que está contaminado",
          "Que tiene mucha arena",
          "Que es rico en materia orgánica",
          "Que tiene mucho hierro",
        ],
        correctIndex: 2,
        explanation: "El color oscuro generalmente indica que el suelo tiene mucha materia orgánica descompuesta, lo cual es bueno para las plantas.",
        category: "propiedades",
      },
      {
        id: "p3",
        question: "¿Qué es el pH del suelo?",
        options: [
          "Su temperatura promedio",
          "Una medida de qué tan ácido o alcalino es",
          "La cantidad de agua que retiene",
          "Su nivel de compactación",
        ],
        correctIndex: 1,
        explanation: "El pH mide si un suelo es ácido (como el limón), neutro o alcalino (como el jabón). Esto afecta qué nutrientes pueden absorber las plantas.",
        category: "propiedades",
      },
      {
        id: "p4",
        question: "¿Qué partícula del suelo es la más grande?",
        options: ["Arcilla", "Limo", "Arena", "Todas son iguales"],
        correctIndex: 2,
        explanation: "La arena es la partícula más grande (se puede ver a simple vista), luego el limo (como harina), y la arcilla es tan pequeña que no se ve sin microscopio.",
        category: "propiedades",
      },
      {
        id: "p5",
        question: "¿Qué le pasa al suelo cuando pierde toda su vegetación?",
        options: [
          "Se vuelve más fértil",
          "Se erosiona más fácilmente",
          "Retiene más agua",
          "Se vuelve más oscuro",
        ],
        correctIndex: 1,
        explanation: "Sin plantas que protejan el suelo con sus raíces, el viento y la lluvia lo arrastran fácilmente. Esto se llama erosión.",
        category: "propiedades",
      },
      {
        id: "p6",
        question: "¿Cuál es la capa más superficial del suelo donde crecen la mayoría de las raíces?",
        options: ["Horizonte C", "Horizonte B", "Horizonte A (capa arable)", "Roca madre"],
        correctIndex: 2,
        explanation: "El horizonte A es la capa superior del suelo, donde hay más materia orgánica y actividad biológica. La mayoría de las raíces crecen aquí.",
        category: "propiedades",
      },
      {
        id: "p7",
        question: "¿Qué significa que un suelo tenga buen drenaje?",
        options: [
          "Que retiene toda el agua",
          "Que el agua pasa a través de él sin encharcarse",
          "Que no necesita riego",
          "Que es impermeable",
        ],
        correctIndex: 1,
        explanation: "Un suelo con buen drenaje permite que el agua fluya a través de él, evitando que se encharque. Los suelos arenosos drenan bien; los arcillosos, no tanto.",
        category: "propiedades",
      },
    ],
  },
  {
    id: "usos-suelo",
    title: "Usos del suelo",
    description: "¿Sabes para qué se usa cada tipo de suelo?",
    icon: "🌾",
    questions: [
      {
        id: "u1",
        question: "¿Qué tipo de suelo es mejor para cultivar maíz y frijol?",
        options: ["Solonchak (salino)", "Leptosol (muy delgado)", "Feozem (fértil y profundo)", "Arenosol (arenoso)"],
        correctIndex: 2,
        explanation: "Los Feozems son suelos fértiles con buena profundidad, ideales para cultivos como maíz y frijol. Son muy comunes en zonas agrícolas de México.",
        category: "usos",
      },
      {
        id: "u2",
        question: "¿Por qué los Vertisoles son difíciles de trabajar en la agricultura?",
        options: [
          "Porque son muy arenosos",
          "Porque se agrietan al secarse y se pegan cuando están mojados",
          "Porque tienen mucha sal",
          "Porque son muy delgados",
        ],
        correctIndex: 1,
        explanation: "Los Vertisoles son pegajosos cuando están húmedos y se agrietan profundamente cuando se secan, lo que complica el uso de maquinaria y el crecimiento de raíces.",
        category: "usos",
      },
      {
        id: "u3",
        question: "¿Qué se puede hacer para recuperar un suelo salino (Solonchak)?",
        options: [
          "Agregarle más sal",
          "Lavarlo con mucha agua y mejorar el drenaje",
          "Compactarlo con maquinaria",
          "Dejarlo sin tocar por 100 años",
        ],
        correctIndex: 1,
        explanation: "Para recuperar suelos salinos se necesita lavarlos con agua abundante y mejorar el drenaje para que las sales se eliminen hacia capas más profundas.",
        category: "usos",
      },
      {
        id: "u4",
        question: "¿Para qué se utilizan principalmente los Gleysoles?",
        options: [
          "Cultivo de trigo",
          "Construcción de edificios",
          "Cultivo de arroz y zonas de humedales",
          "Extracción de minerales",
        ],
        correctIndex: 2,
        explanation: "Los Gleysoles están saturados de agua la mayor parte del tiempo, por eso son ideales para cultivos que necesitan mucha humedad como el arroz.",
        category: "usos",
      },
      {
        id: "u5",
        question: "¿Cuál es un riesgo de construir casas sobre suelos expansivos (Vertisoles)?",
        options: [
          "El suelo es demasiado blando",
          "El suelo se mueve al expandirse y contraerse, dañando los cimientos",
          "El suelo es radiactivo",
          "No hay ningún riesgo",
        ],
        correctIndex: 1,
        explanation: "Los Vertisoles se expanden y contraen con la humedad, lo que puede mover y agrietar los cimientos de las construcciones.",
        category: "usos",
      },
      {
        id: "u6",
        question: "¿Qué práctica ayuda a conservar la fertilidad del suelo?",
        options: [
          "Quemar los residuos de cosecha",
          "Rotar los cultivos cada temporada",
          "Usar solo fertilizantes químicos",
          "Dejar el suelo descubierto entre siembras",
        ],
        correctIndex: 1,
        explanation: "La rotación de cultivos ayuda a que el suelo no pierda los mismos nutrientes siempre, manteniéndolo sano y productivo por más tiempo.",
        category: "usos",
      },
    ],
  },
];

export const quizCategories = {
  identificacion: { label: "Identificación", icon: "🔍", color: "sky-blue" },
  propiedades: { label: "Propiedades", icon: "⚗️", color: "moss-green" },
  usos: { label: "Usos", icon: "🌾", color: "earth-warm" },
  formacion: { label: "Formación", icon: "🏔️", color: "clay-red" },
};
