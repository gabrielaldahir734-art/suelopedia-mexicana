export interface GlossaryTerm {
  term: string;
  definition: string;
  formula?: string;
  formulaExplanation?: string;
  practicalUse?: string;
  category: "conceptual" | "calculable";
}

export const glossaryTerms: GlossaryTerm[] = [
  // =============================================
  // TÉRMINOS CONCEPTUALES
  // =============================================

  // --- Existentes (originales) ---
  {
    term: "Horizonte",
    definition:
      "Cada una de las capas del suelo que se pueden distinguir al hacer un corte vertical. Se diferencian por su color, textura y composición. Se nombran con letras: O (materia orgánica en la superficie), A (capa oscura con nutrientes), E (capa lavada y clara), B (capa donde se acumulan minerales), C (roca fragmentada) y R (roca sólida).",
    category: "conceptual",
  },
  {
    term: "Perfil del suelo",
    definition:
      "Es como ver el suelo en corte transversal, desde la superficie hasta la roca. Muestra todas las capas (horizontes) apiladas, permitiendo estudiar cómo se formó el suelo y qué características tiene cada nivel.",
    category: "conceptual",
  },
  {
    term: "Suelo",
    definition:
      "Material natural que cubre la superficie de la tierra, formado por la descomposición de rocas y restos de seres vivos a lo largo del tiempo. Sirve como soporte para las plantas, filtra el agua de lluvia y almacena nutrientes esenciales para la vida.",
    category: "conceptual",
  },
  {
    term: "Materia orgánica",
    definition:
      "Todo el material de origen vegetal y animal que se encuentra en el suelo en distintos grados de descomposición, incluyendo el humus. Mejora la estructura del suelo, ayuda a retener agua y aporta nutrientes a las plantas.",
    category: "conceptual",
  },
  {
    term: "Estructura del suelo",
    definition:
      "La forma en que las partículas de arena, limo y arcilla se agrupan formando bloques o grumos. Puede ser granular (como migajas), en bloques, en forma de columnas o en láminas. Una buena estructura permite que el agua y el aire circulen bien.",
    category: "conceptual",
  },
  {
    term: "Textura del suelo",
    definition:
      "Es la proporción de arena, limo y arcilla que tiene un suelo. Se determina con el triángulo textural. La textura afecta cuánta agua retiene el suelo, qué tan bien respira y qué tan fácil es de trabajar.",
    category: "conceptual",
  },
  {
    term: "Drenaje",
    definition:
      "Qué tan rápido se elimina el agua del suelo. Puede ser excesivo (el agua se va muy rápido), bueno, moderado o pobre (el agua se queda estancada). Depende de la textura, la pendiente del terreno y la profundidad del agua subterránea.",
    category: "conceptual",
  },
  {
    term: "Permeabilidad",
    definition:
      "Es la facilidad con que el agua y el aire pueden pasar a través del suelo. Un suelo arenoso es muy permeable (deja pasar el agua rápido), mientras que uno arcilloso es poco permeable (retiene el agua).",
    category: "conceptual",
  },
  {
    term: "Infiltración",
    definition:
      "Es el proceso por el cual el agua de lluvia o riego penetra desde la superficie hacia las capas más profundas del suelo. Depende de la textura, si el suelo ya está húmedo y si tiene cobertura vegetal. Es fundamental para que se recarguen los mantos acuíferos.",
    category: "conceptual",
  },
  {
    term: "Solum",
    definition:
      "La parte superior del suelo que ha sido transformada por procesos naturales. Incluye las capas O, A, E y B. Se distingue de las capas C y R que son roca poco alterada.",
    category: "conceptual",
  },

  // --- Nuevos del PDF (A) ---
  {
    term: "Ablación",
    definition:
      "Es el arrastre o remoción de materiales de la superficie terrestre causado por el agua de ríos, el viento, las olas del mar u otros agentes naturales. Es como si la naturaleza 'barriera' la superficie.",
    category: "conceptual",
  },
  {
    term: "Abono verde",
    definition:
      "Es un cultivo que se siembra específicamente para enterrarlo en el suelo cuando todavía está verde y fresco. Al descomponerse, aporta nutrientes y mejora la calidad del suelo, funcionando como un fertilizante natural.",
    category: "conceptual",
  },
  {
    term: "Absorción de lujo",
    definition:
      "Cuando una planta absorbe más nutrientes de los que realmente necesita para crecer. Ese exceso queda almacenado en la planta y puede usarlo después para su desarrollo.",
    category: "conceptual",
  },
  {
    term: "Ácido húmico",
    definition:
      "Un componente de la materia orgánica del suelo (humus) de color intermedio y peso medio. Se disuelve en soluciones alcalinas pero no en ácidos. Ayuda a retener nutrientes en el suelo.",
    category: "conceptual",
  },
  {
    term: "Ácido fúlvico",
    definition:
      "Otro componente de la materia orgánica del suelo, más liviano y de color más claro que el ácido húmico. Se disuelve tanto en soluciones alcalinas como ácidas. Facilita el transporte de nutrientes hacia las raíces.",
    category: "conceptual",
  },
  {
    term: "Actinomicetos",
    definition:
      "Microorganismos del suelo que están entre las bacterias y los hongos. Son importantes porque descomponen la materia orgánica y dan al suelo su olor característico a 'tierra mojada'.",
    category: "conceptual",
  },
  {
    term: "Aeróbico",
    definition:
      "Que necesita oxígeno para funcionar. En el suelo, los procesos aeróbicos ocurren cuando hay buena circulación de aire, como la descomposición normal de hojas y restos orgánicos.",
    category: "conceptual",
  },
  {
    term: "Anaeróbico",
    definition:
      "Que ocurre sin oxígeno. En suelos encharcados o compactados donde no entra aire, los procesos anaeróbicos pueden producir olores desagradables y cambios de color (suelos grisáceos o azulados).",
    category: "conceptual",
  },
  {
    term: "Agregado estable en agua",
    definition:
      "Un grumo o bolita de suelo que no se deshace cuando le cae agua o lluvia. Los suelos con buenos agregados estables resisten mejor la erosión y mantienen su estructura.",
    category: "conceptual",
  },
  {
    term: "Agua disponible",
    definition:
      "La porción de agua en el suelo que las raíces de las plantas pueden absorber fácilmente. No toda el agua del suelo es accesible para las plantas; parte está retenida con tanta fuerza que no pueden extraerla.",
    category: "conceptual",
  },
  {
    term: "Agua higroscópica",
    definition:
      "Agua que el suelo absorbe directamente de la humedad del aire. Es una capa muy delgada de agua que rodea las partículas del suelo y que las plantas no pueden usar porque está muy fuertemente retenida.",
    category: "conceptual",
  },
  {
    term: "Agua subterránea",
    definition:
      "El agua que se encuentra debajo de la superficie del suelo, llenando los espacios entre las rocas y partículas. Se mueve lentamente por gravedad y alimenta pozos, manantiales y ríos.",
    category: "conceptual",
  },
  {
    term: "Agua de gravitación",
    definition:
      "El agua que se mueve hacia abajo a través del suelo por su propio peso (gravedad). Es la que drena después de una lluvia o riego, dejando el suelo húmedo pero no encharcado.",
    category: "conceptual",
  },
  {
    term: "Aluvión",
    definition:
      "Material suelto (arena, grava, limo, arcilla) que los ríos y arroyos transportan y depositan en sus orillas o desembocaduras. Los suelos formados sobre aluvión suelen ser fértiles y buenos para la agricultura.",
    category: "conceptual",
  },
  {
    term: "Amonificación",
    definition:
      "Proceso natural en el que los microorganismos del suelo transforman el nitrógeno de la materia orgánica (restos de plantas y animales) en amonio, una forma que las plantas pueden empezar a aprovechar.",
    category: "conceptual",
  },
  {
    term: "Análisis mineralógico",
    definition:
      "Estudio que identifica qué tipos de minerales contiene un suelo o roca y en qué cantidades. Ayuda a entender las propiedades del suelo y su origen.",
    category: "conceptual",
  },
  {
    term: "Análisis del tamaño de partículas",
    definition:
      "Procedimiento de laboratorio para determinar qué porcentaje de arena, limo y arcilla tiene una muestra de suelo. Es la base para clasificar la textura del suelo.",
    category: "conceptual",
  },
  {
    term: "Anión",
    definition:
      "Una partícula con carga eléctrica negativa. En el suelo, los aniones importantes incluyen los nitratos, fosfatos y sulfatos, que son nutrientes esenciales para las plantas.",
    category: "conceptual",
  },
  {
    term: "Catión",
    definition:
      "Una partícula con carga eléctrica positiva. En el suelo, los cationes más importantes son el calcio, magnesio, potasio y sodio, que las plantas necesitan para crecer.",
    category: "conceptual",
  },
  {
    term: "Arcilla",
    definition:
      "Las partículas más pequeñas del suelo (menores a 0.002 mm). Son muy importantes porque retienen agua y nutrientes. Un suelo con mucha arcilla es pegajoso cuando está mojado y duro cuando está seco.",
    category: "conceptual",
  },
  {
    term: "Arena",
    definition:
      "Las partículas más grandes del suelo (0.05 a 2 mm de diámetro), visibles a simple vista. Un suelo arenoso drena muy rápido pero retiene poca agua y pocos nutrientes.",
    category: "conceptual",
  },
  {
    term: "Limo",
    definition:
      "Partículas de suelo de tamaño intermedio entre la arena y la arcilla (0.05 a 0.002 mm). Le dan al suelo una textura suave y sedosa. Retiene más agua que la arena pero menos que la arcilla.",
    category: "conceptual",
  },
  {
    term: "Aridisoles",
    definition:
      "Suelos de zonas áridas (secas) con poca materia orgánica en la superficie. Son comunes en desiertos y zonas semiáridas. Generalmente tienen acumulaciones de sales o carbonatos en sus capas inferiores.",
    category: "conceptual",
  },
  {
    term: "Asociación de suelos",
    definition:
      "Un grupo de diferentes tipos de suelos que siempre aparecen juntos en una misma zona geográfica, formando un patrón reconocible en el paisaje. Es como un 'equipo' de suelos que comparte territorio.",
    category: "conceptual",
  },
  {
    term: "Autotrófico",
    definition:
      "Organismo que puede fabricar su propio alimento a partir de sustancias simples como el dióxido de carbono, usando luz solar (como las plantas) o reacciones químicas (como ciertas bacterias del suelo).",
    category: "conceptual",
  },
  {
    term: "Heterótrofo",
    definition:
      "Organismo que no puede fabricar su propio alimento y necesita obtener energía de la materia orgánica producida por otros seres vivos. Incluye animales, hongos y muchas bacterias del suelo.",
    category: "conceptual",
  },

  // --- B ---
  {
    term: "Balance de sal",
    definition:
      "La comparación entre la cantidad de sales que llega al suelo con el agua de riego y la cantidad que se retira con el agua de drenaje. Un buen balance evita que el suelo se vuelva salino.",
    category: "conceptual",
  },
  {
    term: "Barbecho",
    definition:
      "Práctica de dejar un terreno sin sembrar durante un tiempo, permitiendo que el suelo descanse, acumule agua y recupere sus nutrientes de forma natural.",
    category: "conceptual",
  },
  {
    term: "Bioma",
    definition:
      "Una gran zona del planeta con clima, vegetación y suelos similares. Ejemplos: selva tropical, desierto, pradera, bosque templado. Cada bioma tiene tipos de suelo característicos.",
    category: "conceptual",
  },

  // --- C ---
  {
    term: "Caliche",
    definition:
      "Una capa dura y blanquecina que se forma en el suelo por acumulación de carbonato de calcio. Es común en zonas secas y puede dificultar el crecimiento de las raíces y el drenaje del agua.",
    category: "conceptual",
  },
  {
    term: "Caolinita",
    definition:
      "Un tipo de mineral de arcilla muy estable, común en suelos tropicales muy viejos. No se expande con el agua y tiene poca capacidad de retener nutrientes, por lo que los suelos con mucha caolinita suelen ser poco fértiles.",
    category: "conceptual",
  },
  {
    term: "Capa dura (Hardpan)",
    definition:
      "Una capa del suelo que se ha endurecido por la acumulación de minerales (hierro, calcio, sílice) o materia orgánica. Impide que las raíces y el agua penetren más profundo. Puede formarse naturalmente o por el uso de maquinaria pesada.",
    category: "conceptual",
  },
  {
    term: "Claypan",
    definition:
      "Una capa muy densa y compacta en el subsuelo con mucha más arcilla que las capas de arriba. Cuando está seca es muy dura y cuando está mojada es pegajosa. Bloquea el paso del agua, del aire y de las raíces.",
    category: "conceptual",
  },
  {
    term: "Chernozem",
    definition:
      "Suelo de color negro o muy oscuro, rico en materia orgánica y calcio, típico de zonas de pradera con clima frío a templado. Son de los suelos más fértiles del mundo, ideales para la agricultura.",
    category: "conceptual",
  },
  {
    term: "Clorosis",
    definition:
      "Cuando las hojas de una planta se ponen amarillas o pálidas porque le falta algún nutriente esencial (como hierro, nitrógeno o magnesio) y no puede producir suficiente clorofila.",
    category: "conceptual",
  },
  {
    term: "Coloide",
    definition:
      "Partículas extremadamente pequeñas del suelo (arcillas y humus) que tienen una enorme superficie en relación a su tamaño. Son las responsables de retener y liberar nutrientes para las plantas.",
    category: "conceptual",
  },
  {
    term: "Coluvio",
    definition:
      "Material suelto (rocas y tierra) que se acumula al pie de laderas o pendientes por efecto de la gravedad. A diferencia del aluvión, no es transportado por agua sino que simplemente se desliza o cae.",
    category: "conceptual",
  },
  {
    term: "Concreción",
    definition:
      "Un nódulo o bolita dura que se forma dentro del suelo por acumulación de minerales como carbonato de calcio u óxido de hierro. Puede tener diferentes tamaños, formas y colores.",
    category: "conceptual",
  },
  {
    term: "Conductividad hidráulica",
    definition:
      "Mide qué tan fácilmente puede fluir el agua a través del suelo. Un suelo arenoso tiene alta conductividad hidráulica (el agua fluye rápido) y uno arcilloso tiene baja (el agua fluye lento).",
    category: "conceptual",
  },
  {
    term: "Consistencia",
    definition:
      "Describe qué tan resistente es el suelo a romperse o deformarse. Se evalúa cuando el suelo está seco (duro o suelto), húmedo (friable o firme) y mojado (pegajoso o plástico).",
    category: "conceptual",
  },
  {
    term: "Contacto lítico",
    definition:
      "El punto donde termina el suelo y comienza la roca sólida y dura debajo. Es una frontera clara entre el suelo y la roca madre que no se puede cavar con pala.",
    category: "conceptual",
  },
  {
    term: "Contacto paralítico",
    definition:
      "Similar al contacto lítico, pero la roca debajo es más blanda y parcialmente descompuesta. Es una transición menos abrupta entre el suelo y el material rocoso.",
    category: "conceptual",
  },
  {
    term: "Croma",
    definition:
      "Es la intensidad o pureza de un color del suelo. Un croma alto significa un color vivo y saturado, mientras que un croma bajo indica un color apagado o grisáceo. Es una de las tres variables para describir el color del suelo.",
    category: "conceptual",
  },
  {
    term: "Matiz (Hue)",
    definition:
      "El tono o color dominante del suelo (rojo, amarillo, marrón, etc.). Es una de las tres variables del sistema Munsell para describir colores del suelo, junto con el valor y el croma.",
    category: "conceptual",
  },
  {
    term: "Value (Valor)",
    definition:
      "Indica qué tan claro u oscuro es el color del suelo. Un valor alto es un color claro y un valor bajo es un color oscuro. Es una de las tres variables para describir el color del suelo.",
    category: "conceptual",
  },
  {
    term: "Cronosecuencia",
    definition:
      "Un grupo de suelos que son similares entre sí pero difieren principalmente por su edad. Los suelos más viejos están más desarrollados y tienen más capas diferenciadas.",
    category: "conceptual",
  },
  {
    term: "Climosecuencia",
    definition:
      "Un grupo de suelos que difieren entre sí principalmente porque se formaron bajo distintas condiciones de clima (más lluvia, más calor, etc.), aunque los demás factores sean parecidos.",
    category: "conceptual",
  },
  {
    term: "Litosecuencia",
    definition:
      "Un grupo de suelos que difieren entre sí principalmente porque se formaron a partir de distintos tipos de roca madre, aunque el clima y la vegetación sean similares.",
    category: "conceptual",
  },
  {
    term: "Toposecuencia",
    definition:
      "Un grupo de suelos que difieren entre sí principalmente por la forma del terreno (pendiente, posición en la ladera, etc.), aunque el clima y la roca madre sean similares.",
    category: "conceptual",
  },
  {
    term: "Termosecuencia",
    definition:
      "Un grupo de suelos que difieren entre sí principalmente por la temperatura del lugar donde se formaron, mientras los demás factores son parecidos.",
    category: "conceptual",
  },
  {
    term: "Biosecuencia",
    definition:
      "Un grupo de suelos que difieren entre sí principalmente por los organismos vivos (vegetación, microorganismos) que participaron en su formación.",
    category: "conceptual",
  },

  // --- D ---
  {
    term: "Detrito",
    definition:
      "Material suelto o fragmentado que resulta de la descomposición de rocas o de restos de seres vivos. Las arcillas son un ejemplo conocido de material detrítico.",
    category: "conceptual",
  },
  {
    term: "Diagnóstico foliar",
    definition:
      "Técnica para saber si una planta tiene exceso o falta de nutrientes, examinando el color, forma y estado de sus hojas. Las hojas amarillas, por ejemplo, pueden indicar falta de nitrógeno.",
    category: "conceptual",
  },
  {
    term: "Diatomeas",
    definition:
      "Pequeñísimas algas con paredes de sílice (como vidrio) que viven en el agua. Cuando mueren, sus 'esqueletos' se acumulan y pueden formar depósitos en el suelo llamados tierra diatomácea.",
    category: "conceptual",
  },
  {
    term: "Difusión de nutrientes",
    definition:
      "El movimiento natural de los nutrientes dentro del agua del suelo, desde donde hay mucha concentración hacia donde hay poca. Es una de las formas en que los nutrientes llegan a las raíces.",
    category: "conceptual",
  },
  {
    term: "Duripán",
    definition:
      "Una capa del suelo endurecida por sílice (el mismo material del vidrio) que no se deshace con agua. Puede bloquear completamente el paso de raíces y agua.",
    category: "conceptual",
  },

  // --- E ---
  {
    term: "Ecología",
    definition:
      "La ciencia que estudia cómo los seres vivos se relacionan entre sí y con su ambiente, incluyendo el suelo, el agua, el aire y el clima.",
    category: "conceptual",
  },
  {
    term: "Ecosistema",
    definition:
      "Un conjunto de seres vivos (plantas, animales, microorganismos) junto con el ambiente donde viven (suelo, agua, clima). Un bosque, un lago o incluso un puñado de tierra son ecosistemas.",
    category: "conceptual",
  },
  {
    term: "Edáfico",
    definition:
      "Todo lo que se relaciona con el suelo o está influido por las propiedades del suelo, en vez de por el clima u otros factores externos.",
    category: "conceptual",
  },
  {
    term: "Eluviación",
    definition:
      "El lavado o arrastre de materiales (arcilla, minerales, materia orgánica) desde una capa superior del suelo hacia capas más profundas por el agua que se filtra. La capa que pierde material se vuelve más clara.",
    category: "conceptual",
  },
  {
    term: "Iluviación",
    definition:
      "El proceso contrario a la eluviación: es la acumulación en una capa más profunda del suelo de los materiales que fueron lavados desde arriba. La capa que recibe material suele ser más oscura y densa.",
    category: "conceptual",
  },
  {
    term: "Horizonte eluvial",
    definition:
      "Una capa del suelo que ha perdido materiales por lavado (eluviación). Se reconoce por su color más claro que las capas de arriba y abajo. Corresponde al horizonte E.",
    category: "conceptual",
  },
  {
    term: "Horizonte iluvial",
    definition:
      "Una capa del suelo donde se han acumulado los materiales lavados desde capas superiores. Suele ser más densa, oscura y con más arcilla. Corresponde al horizonte B.",
    category: "conceptual",
  },
  {
    term: "Entisoles",
    definition:
      "Suelos muy jóvenes o poco desarrollados que no tienen capas (horizontes) bien definidas. Son comunes en zonas de reciente formación como playas, dunas, orillas de ríos o laderas erosionadas.",
    category: "conceptual",
  },
  {
    term: "Erosión",
    definition:
      "El desgaste y remoción del suelo por el agua de lluvia, el viento, el hielo o la gravedad. La erosión puede destruir la capa fértil del suelo y es uno de los mayores problemas ambientales.",
    category: "conceptual",
  },
  {
    term: "Escurrimiento",
    definition:
      "La parte del agua de lluvia que no se infiltra en el suelo y corre sobre la superficie hacia ríos y arroyos. Un suelo compactado o con poca vegetación produce más escurrimiento.",
    category: "conceptual",
  },
  {
    term: "Evapotranspiración",
    definition:
      "La suma de toda el agua que se pierde de un terreno: la que se evapora directamente del suelo más la que las plantas liberan al aire por sus hojas (transpiración). Es clave para calcular las necesidades de riego.",
    category: "conceptual",
  },

  // --- F ---
  {
    term: "Familia de suelos",
    definition:
      "Una categoría en la clasificación de suelos que agrupa suelos similares. Es más específica que el gran grupo pero menos que la serie de suelos.",
    category: "conceptual",
  },
  {
    term: "Fase de suelo",
    definition:
      "Una subdivisión de un tipo de suelo basada en características que afectan su uso práctico, como la pendiente, el grado de erosión o la presencia de piedras.",
    category: "conceptual",
  },
  {
    term: "Fertilizante",
    definition:
      "Cualquier sustancia, natural o fabricada, que se agrega al suelo para aportar nutrientes que las plantas necesitan para crecer. Puede ser orgánico (como estiércol o composta) o químico.",
    category: "conceptual",
  },
  {
    term: "Fijación de nitrógeno",
    definition:
      "Proceso natural en el que ciertos microorganismos del suelo (como las bacterias en las raíces de los frijoles) capturan el nitrógeno del aire y lo convierten en una forma que las plantas pueden usar.",
    category: "conceptual",
  },
  {
    term: "Fragipán",
    definition:
      "Una capa del subsuelo que es muy densa y parece cementada cuando está seca, pero se vuelve frágil cuando está húmeda. Dificulta el crecimiento de las raíces y el drenaje del agua.",
    category: "conceptual",
  },
  {
    term: "Franja capilar",
    definition:
      "Zona del suelo justo por encima del agua subterránea que permanece casi saturada. El agua sube por los espacios pequeños del suelo (como en una esponja), manteniéndose húmeda sin estar encharcada.",
    category: "conceptual",
  },
  {
    term: "Friable",
    definition:
      "Describe un suelo que se desmorona fácilmente con los dedos cuando está húmedo. Es una característica deseable porque indica buena estructura y facilidad para trabajar la tierra.",
    category: "conceptual",
  },

  // --- G ---
  {
    term: "Génesis de los suelos",
    definition:
      "El estudio de cómo se forman los suelos a partir de la roca y la materia orgánica, bajo la influencia del clima, los seres vivos, el relieve y el tiempo.",
    category: "conceptual",
  },
  {
    term: "Gibsita",
    definition:
      "Un mineral de hidróxido de aluminio muy común en suelos tropicales viejos y muy desarrollados. Su presencia indica que el suelo ha sufrido una intensa transformación química.",
    category: "conceptual",
  },
  {
    term: "Gilgai",
    definition:
      "Un microrrelieve de montículos y depresiones que se forma en suelos con mucha arcilla expansiva (como los Vertisoles). Ocurre porque la arcilla se hincha cuando se moja y se contrae cuando se seca, creando un terreno ondulado.",
    category: "conceptual",
  },
  {
    term: "Gleyización",
    definition:
      "Proceso que ocurre en suelos permanentemente encharcados donde, al no haber oxígeno, los minerales de hierro cambian de color y el suelo se vuelve gris, azulado o verdoso.",
    category: "conceptual",
  },

  // --- H ---
  {
    term: "Halófita",
    definition:
      "Planta que puede crecer y prosperar en suelos salinos donde otras plantas morirían. Ejemplos: mangle, algunas gramíneas de marisma.",
    category: "conceptual",
  },
  {
    term: "Hematita",
    definition:
      "Un mineral de óxido de hierro de color rojo que da a muchos suelos su tonalidad rojiza característica. Es muy común en suelos tropicales.",
    category: "conceptual",
  },
  {
    term: "Histosoles",
    definition:
      "Suelos formados principalmente por materia orgánica (más del 50% en los primeros 80 cm). Se encuentran en zonas pantanosas, turberas y humedales donde la materia vegetal se acumula más rápido de lo que se descompone.",
    category: "conceptual",
  },
  {
    term: "Humificación",
    definition:
      "El proceso natural por el cual los restos de plantas y animales se descomponen gradualmente hasta convertirse en humus, esa sustancia oscura y estable que enriquece el suelo.",
    category: "conceptual",
  },
  {
    term: "Humina",
    definition:
      "La fracción más pesada y oscura de la materia orgánica del suelo. Es la más resistente a la descomposición y no se disuelve ni en soluciones ácidas ni alcalinas.",
    category: "conceptual",
  },
  {
    term: "Humus",
    definition:
      "La fracción estable y madura de la materia orgánica del suelo, de color oscuro. Es lo que queda después de que los restos vegetales y animales se han descompuesto casi por completo. Mejora enormemente la fertilidad del suelo.",
    category: "conceptual",
  },

  // --- I ---
  {
    term: "Inceptisoles",
    definition:
      "Suelos jóvenes que ya muestran algunas capas diferenciadas pero aún no están muy desarrollados. Son comunes en zonas húmedas y son más evolucionados que los Entisoles pero menos que otros órdenes.",
    category: "conceptual",
  },
  {
    term: "Inmovilización",
    definition:
      "Cuando los microorganismos del suelo absorben nutrientes minerales (como nitrógeno) y los incorporan a sus propias células, dejándolos temporalmente no disponibles para las plantas.",
    category: "conceptual",
  },
  {
    term: "Intemperización",
    definition:
      "Todos los cambios que sufren las rocas al estar expuestas al clima: la lluvia las disuelve, el calor y frío las fragmentan, y las reacciones químicas las transforman. Es el primer paso para que se forme el suelo.",
    category: "conceptual",
  },
  {
    term: "Irrigación",
    definition:
      "La aplicación artificial de agua al suelo para que los cultivos puedan crecer, especialmente en zonas donde la lluvia no es suficiente.",
    category: "conceptual",
  },

  // --- L ---
  {
    term: "Labranza",
    definition:
      "El trabajo mecánico del suelo (arar, rastrear, surcar) para prepararlo para la siembra. Busca aflojar el suelo, incorporar residuos y controlar malezas.",
    category: "conceptual",
  },
  {
    term: "Labranza en contorno",
    definition:
      "Técnica de arar y sembrar siguiendo las curvas del terreno (no en línea recta cuesta abajo). Reduce la erosión porque el agua de lluvia no corre directamente pendiente abajo.",
    category: "conceptual",
  },
  {
    term: "Ley de Darcy",
    definition:
      "Una fórmula que describe cómo fluye el agua a través del suelo. Dice que el agua fluye más rápido cuando hay más diferencia de presión y cuando el suelo es más permeable.",
    category: "conceptual",
  },
  {
    term: "Lixiviación",
    definition:
      "El lavado de sustancias disueltas (nutrientes, sales, minerales) que el agua arrastra hacia capas más profundas del suelo. Es como cuando el café pasa a través del filtro llevándose el sabor.",
    category: "conceptual",
  },

  // --- M ---
  {
    term: "Mapa de suelos",
    definition:
      "Un mapa que muestra la distribución geográfica de los diferentes tipos de suelo en una zona. Es una herramienta fundamental para planificar el uso del territorio y la agricultura.",
    category: "conceptual",
  },
  {
    term: "Material original (parental)",
    definition:
      "El material sin transformar (roca descompuesta o materia orgánica) a partir del cual se formó el suelo. Es como la 'materia prima' del suelo.",
    category: "conceptual",
  },
  {
    term: "Micronutriente",
    definition:
      "Elemento que las plantas necesitan en cantidades muy pequeñas pero que es esencial para su crecimiento. Incluyen hierro, zinc, manganeso, cobre, boro, molibdeno y cloro.",
    category: "conceptual",
  },
  {
    term: "Oligoelementos",
    definition:
      "Elementos presentes en cantidades muy pequeñas en los seres vivos. Tanto su ausencia como su exceso pueden ser dañinos para las plantas. Se miden en partes por millón (ppm).",
    category: "conceptual",
  },
  {
    term: "Migajón",
    definition:
      "Una clase de textura de suelo intermedia, con una mezcla equilibrada de arena, limo y arcilla. Los suelos migajón son generalmente los mejores para la agricultura.",
    category: "conceptual",
  },
  {
    term: "Mineralización",
    definition:
      "El proceso por el cual los microorganismos descomponen la materia orgánica del suelo y liberan los nutrientes en forma mineral (inorgánica) que las plantas pueden absorber directamente.",
    category: "conceptual",
  },
  {
    term: "Mineral primario",
    definition:
      "Mineral que se formó cuando la roca se solidificó y no ha sido alterado químicamente desde entonces. Ejemplos: cuarzo, feldespato, mica.",
    category: "conceptual",
  },
  {
    term: "Mineral secundario",
    definition:
      "Mineral que se forma por la transformación de un mineral primario debido al clima y la acción del agua. Las arcillas son el ejemplo más importante de minerales secundarios.",
    category: "conceptual",
  },
  {
    term: "Molisoles",
    definition:
      "Suelos oscuros, ricos en materia orgánica y muy fértiles, típicos de zonas de pradera y pastizal. Son algunos de los mejores suelos agrícolas del mundo.",
    category: "conceptual",
  },
  {
    term: "Montmorillonita",
    definition:
      "Un tipo de arcilla que se expande mucho al absorber agua y se contrae al secarse. Los suelos con mucha montmorillonita se agrietan en sequía y se vuelven pegajosos con lluvia. Es la arcilla principal de los Vertisoles.",
    category: "conceptual",
  },
  {
    term: "Micorriza",
    definition:
      "Una asociación benéfica entre hongos y las raíces de las plantas. El hongo ayuda a la planta a absorber agua y nutrientes del suelo, y a cambio recibe azúcares de la planta.",
    category: "conceptual",
  },
  {
    term: "Mor",
    definition:
      "Un tipo de capa orgánica en suelos de bosque donde la materia orgánica está separada del suelo mineral, sin mezclarse. Es ácida y se descompone lentamente. Típica de bosques de coníferas.",
    category: "conceptual",
  },
  {
    term: "Mull",
    definition:
      "Un tipo de capa orgánica en suelos de bosque donde la materia orgánica está bien mezclada con el suelo mineral. Se descompone rápido y produce suelos fértiles. Típica de bosques de hoja ancha.",
    category: "conceptual",
  },
  {
    term: "Moteados",
    definition:
      "Manchas de diferentes colores dentro del suelo, intercaladas con un color dominante. Generalmente indican que el suelo pasa por periodos de encharcamiento y sequía, causando oxidación y reducción del hierro.",
    category: "conceptual",
  },

  // --- N ---
  {
    term: "Nitrificación",
    definition:
      "Proceso natural en el que bacterias del suelo transforman el amonio en nitratos, la forma de nitrógeno que las plantas absorben con mayor facilidad.",
    category: "conceptual",
  },

  // --- O ---
  {
    term: "Oxisoles",
    definition:
      "Suelos extremadamente viejos y desarrollados, típicos de zonas tropicales húmedas. Han perdido casi todos sus nutrientes por el lavado continuo. Aunque son de colores rojizos vivos, son poco fértiles.",
    category: "conceptual",
  },

  // --- P ---
  {
    term: "Paleosol",
    definition:
      "Un suelo que se formó en el pasado geológico y después fue enterrado por sedimentos. Es como un 'suelo fósil' que nos da información sobre los climas y ambientes antiguos.",
    category: "conceptual",
  },
  {
    term: "Ped",
    definition:
      "Una unidad natural de estructura del suelo: un bloque, gránulo, prisma o lámina que se formó por procesos naturales. Es diferente a un terrón, que se forma al arar o manipular el suelo.",
    category: "conceptual",
  },
  {
    term: "Pedón",
    definition:
      "La unidad mínima de suelo que se puede estudiar en tres dimensiones (largo, ancho y profundidad). Generalmente abarca de 1 a 10 metros cuadrados de superficie.",
    category: "conceptual",
  },
  {
    term: "Percolación",
    definition:
      "El movimiento del agua hacia abajo a través del suelo, especialmente cuando el suelo está saturado o casi saturado. Es el proceso que recarga los mantos acuíferos.",
    category: "conceptual",
  },
  {
    term: "Permafrost",
    definition:
      "Capa del suelo que está permanentemente congelada, todo el año, durante al menos dos años consecutivos. Se encuentra en regiones polares y de alta montaña.",
    category: "conceptual",
  },
  {
    term: "Piroclasto",
    definition:
      "Fragmento de material volcánico (ceniza, piedra pómez, roca) lanzado al aire durante una erupción. Cuando se depositan, pueden formar suelos muy fértiles con el tiempo.",
    category: "conceptual",
  },
  {
    term: "Planicies aluviales",
    definition:
      "Terrenos planos junto a ríos y arroyos, formados por los sedimentos que dejan las inundaciones. Son suelos generalmente fértiles pero con riesgo de inundación.",
    category: "conceptual",
  },
  {
    term: "Plantas indicadoras",
    definition:
      "Plantas que crecen preferentemente en ciertas condiciones de suelo y nos 'indican' sus características. Por ejemplo, algunas plantas indican suelos salinos y otras indican suelos encharcados.",
    category: "conceptual",
  },
  {
    term: "Plintita",
    definition:
      "Mezcla no endurecida de óxidos de hierro y aluminio con arcilla, que forma patrones de manchas rojas en el suelo. Si se expone a ciclos de mojado y secado repetidos, se endurece irreversiblemente.",
    category: "conceptual",
  },
  {
    term: "Podzol",
    definition:
      "Suelo típico de bosques de coníferas en climas fríos y húmedos. Tiene una capa gris-blanquecina muy lavada debajo de la superficie y una capa oscura más abajo donde se acumulan hierro y materia orgánica.",
    category: "conceptual",
  },
  {
    term: "Productividad del suelo",
    definition:
      "La capacidad de un suelo para producir cosechas bajo un sistema de manejo determinado. No es lo mismo que fertilidad: un suelo fértil mal manejado puede ser poco productivo.",
    category: "conceptual",
  },

  // --- R ---
  {
    term: "Rendzina",
    definition:
      "Suelo de color oscuro formado sobre roca caliza blanda. El horizonte superficial es friable y rico en calcio. Común en zonas húmedas y semiáridas con vegetación de pastos o bosque mixto.",
    category: "conceptual",
  },
  {
    term: "Rhizobium",
    definition:
      "Bacteria que vive en las raíces de plantas leguminosas (frijoles, lentejas, alfalfa) y captura nitrógeno del aire para convertirlo en nutriente. Es una relación de beneficio mutuo entre la planta y la bacteria.",
    category: "conceptual",
  },
  {
    term: "Rizósfera",
    definition:
      "La zona del suelo que rodea directamente las raíces de las plantas. Es un ambiente especial donde viven muchos más microorganismos que en el resto del suelo, alimentados por las sustancias que las raíces liberan.",
    category: "conceptual",
  },
  {
    term: "Roca ígnea",
    definition:
      "Roca formada por el enfriamiento y solidificación de magma o lava volcánica. Ejemplos: granito, basalto. Cuando se descomponen, pueden dar origen a suelos con diferentes características.",
    category: "conceptual",
  },
  {
    term: "Roca metamórfica",
    definition:
      "Roca que se formó cuando una roca preexistente fue transformada por altas temperaturas y presión dentro de la tierra, sin llegar a fundirse. Ejemplos: mármol, pizarra.",
    category: "conceptual",
  },
  {
    term: "Roca sedimentaria",
    definition:
      "Roca formada en la superficie de la tierra por acumulación y compactación de sedimentos (arena, arcilla, restos de organismos). Ejemplos: arenisca, caliza, lutita.",
    category: "conceptual",
  },
  {
    term: "Rotación de cultivos",
    definition:
      "Práctica de alternar diferentes cultivos en el mismo terreno de forma planificada (por ejemplo: maíz, luego frijol, luego calabaza). Ayuda a mantener la fertilidad del suelo y a controlar plagas.",
    category: "conceptual",
  },

  // --- S ---
  {
    term: "Salinización",
    definition:
      "El proceso por el cual se acumulan sales solubles en el suelo, generalmente por riego excesivo en zonas áridas. Los suelos salinos dificultan el crecimiento de la mayoría de los cultivos.",
    category: "conceptual",
  },
  {
    term: "Salud del suelo",
    definition:
      "La capacidad del suelo para mantenerse productivo a lo largo del tiempo, adaptarse a cambios (climáticos, de cultivos) y recuperarse después de ser perturbado. Un suelo sano es un suelo vivo y resiliente.",
    category: "conceptual",
  },
  {
    term: "Serie de suelos",
    definition:
      "La unidad más básica y específica de clasificación de suelos. Agrupa suelos que son esencialmente idénticos en todas sus características del perfil, excepto la textura de la capa superficial.",
    category: "conceptual",
  },
  {
    term: "Slickensides",
    definition:
      "Superficies lisas y brillantes dentro del suelo, causadas por el deslizamiento de masas de suelo entre sí. Son muy comunes en los Vertisoles, donde la arcilla se expande y contrae con los cambios de humedad.",
    category: "conceptual",
  },
  {
    term: "Sodificación",
    definition:
      "El proceso por el cual aumenta el contenido de sodio en el suelo. El exceso de sodio destruye la estructura del suelo, lo hace impermeable y dificulta el crecimiento de las plantas.",
    category: "conceptual",
  },
  {
    term: "Solonchak",
    definition:
      "Suelo con alta concentración de sales solubles en la superficie (costra salina blanca). Se forma en zonas secas con mal drenaje. Solo ciertas plantas tolerantes a la sal pueden crecer en ellos.",
    category: "conceptual",
  },
  {
    term: "Solonetz",
    definition:
      "Suelo con alto contenido de sodio que tiene una capa superficial delgada sobre una capa oscura, dura y en forma de columnas. Es muy alcalino y difícil de cultivar.",
    category: "conceptual",
  },
  {
    term: "Spodosoles",
    definition:
      "Suelos con una capa de acumulación de hierro, aluminio y materia orgánica en el subsuelo. Se forman en climas fríos y húmedos bajo bosques de coníferas. Son los podzoles de la clasificación moderna.",
    category: "conceptual",
  },
  {
    term: "Suelo calcáreo",
    definition:
      "Suelo que contiene suficiente carbonato de calcio como para hacer burbujas cuando se le echa ácido (como vinagre). Suelen tener pH alcalino y pueden limitar la disponibilidad de hierro y zinc.",
    category: "conceptual",
  },
  {
    term: "Suelo salino",
    definition:
      "Suelo que contiene tantas sales disueltas que reduce la productividad de los cultivos. Se identifica midiendo la conductividad eléctrica (mayor a 4 dS/m).",
    category: "conceptual",
  },
  {
    term: "Suelo sódico",
    definition:
      "Suelo con exceso de sodio intercambiable (más del 15% de la capacidad de intercambio). Se vuelve disperso, impermeable y muy difícil de trabajar.",
    category: "conceptual",
  },
  {
    term: "Suelo de gley",
    definition:
      "Suelo que se desarrolla en condiciones de mal drenaje permanente. La falta de oxígeno hace que el hierro se reduzca, dando al suelo colores grises, azulados o verdosos con manchas oxidadas.",
    category: "conceptual",
  },
  {
    term: "Suelo mineral",
    definition:
      "Suelo formado principalmente por materiales minerales (arena, limo, arcilla), con menos del 20% de materia orgánica. Es el tipo más común de suelo.",
    category: "conceptual",
  },
  {
    term: "Suelo orgánico",
    definition:
      "Suelo con un alto porcentaje de materia orgánica (más del 15-20%). Se encuentra en humedales, pantanos y turberas. Retiene mucha agua y es muy ligero.",
    category: "conceptual",
  },
  {
    term: "Sustancias húmicas",
    definition:
      "Representan entre el 60-80% de la materia orgánica del suelo. Son moléculas grandes, oscuras y muy resistentes a la descomposición. Incluyen ácidos húmicos, ácidos fúlvicos y humina.",
    category: "conceptual",
  },
  {
    term: "Sustitución isomórfica",
    definition:
      "Cuando un átomo dentro de un mineral de arcilla es reemplazado por otro de tamaño similar, sin cambiar la estructura del cristal. Esto crea cargas eléctricas que permiten retener nutrientes.",
    category: "conceptual",
  },

  // --- T ---
  {
    term: "Turba",
    definition:
      "Material del suelo formado principalmente por restos vegetales poco descompuestos, acumulados en condiciones de exceso de agua. Es esponjoso, ligero y ácido.",
    category: "conceptual",
  },
  {
    term: "Tundra",
    definition:
      "Zona plana o ligeramente ondulada sin árboles, típica de regiones polares o de alta montaña. Los suelos de tundra están generalmente congelados (permafrost) y tienen una vegetación de musgos, líquenes y pastos bajos.",
    category: "conceptual",
  },
  {
    term: "Topsoil",
    definition:
      "La capa superior del suelo que se trabaja con el arado. Es generalmente la más fértil porque contiene más materia orgánica y vida microbiana. Corresponde al horizonte A.",
    category: "conceptual",
  },

  // --- U ---
  {
    term: "Ultisoles",
    definition:
      "Suelos ácidos y poco fértiles de zonas cálidas y húmedas, con una capa de acumulación de arcilla en el subsuelo. Han perdido muchos nutrientes por el lavado continuo de lluvias.",
    category: "conceptual",
  },
  {
    term: "Ciencia del suelo",
    definition:
      "La ciencia que estudia el suelo como recurso natural, incluyendo su clasificación, sus propiedades físicas, químicas y biológicas, y su manejo para la producción de cultivos y la conservación del ambiente.",
    category: "conceptual",
  },
  {
    term: "Morfología del suelo",
    definition:
      "La descripción de las características físicas del suelo que se pueden observar y medir: tipo, espesor y color de cada capa, textura, estructura, consistencia y porosidad.",
    category: "conceptual",
  },

  // =============================================
  // TÉRMINOS CALCULABLES
  // =============================================
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
      "Peso del suelo seco por unidad de volumen total (incluyendo los espacios vacíos). Indica qué tan compactado está el suelo.",
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
      "Peso de las partículas sólidas del suelo por unidad de volumen de sólidos (sin contar los poros). También llamada densidad de partículas.",
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
      "Cantidad de agua que el suelo retiene después de que ha drenado toda el agua que puede moverse por gravedad (generalmente 24–48 horas después de saturarse). Es el máximo de agua disponible para las plantas.",
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
      "Nivel mínimo de agua en el suelo por debajo del cual las plantas no pueden absorber más agua y se marchitan de forma irreversible.",
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
      "Cantidad de agua en el suelo que las plantas realmente pueden usar. Es la diferencia entre la capacidad de campo y el punto de marchitez permanente.",
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
      "Volumen total de agua que las plantas pueden usar en una profundidad determinada del suelo. Combina la humedad aprovechable con la profundidad donde llegan las raíces.",
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
      "Cantidad de agua en el suelo en un momento dado, expresada como porcentaje del peso seco (gravimétrico) o del volumen total (volumétrico).",
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
      "Porcentaje de los poros del suelo que están llenos de agua. Cuando la saturación es del 100%, no hay aire en el suelo y las raíces no pueden respirar.",
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
      "Relación entre el volumen de espacios vacíos y el volumen de partículas sólidas del suelo. Se usa mucho en ingeniería y construcción.",
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
      "Proporción del volumen total del suelo que tiene poros llenos de aire. Es crucial para que las raíces respiren y los microorganismos puedan vivir.",
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
      "Proporción del volumen total del suelo que tiene poros llenos de agua. Equivale al contenido volumétrico de humedad.",
    formula: "Pw (%) = θv = θg × Da",
    formulaExplanation:
      "Donde **θg** = contenido gravimétrico de agua (decimal) y **Da** = densidad aparente (g/cm³). Es equivalente al volumen de agua por volumen total de suelo.",
    practicalUse:
      "Complementa el análisis de porosidad: junto con el porcentaje de poros con aire, permite evaluar el balance aireación/humedad del suelo en un momento dado.",
    category: "calculable",
  },
  {
    term: "Humedad equivalente",
    definition:
      "Porcentaje de agua que retiene una muestra de suelo después de centrifugarla a alta velocidad (1000 veces la gravedad). Es una aproximación a la capacidad de campo.",
    formula: "HE = (Mh − Ms) / Ms × 100",
    formulaExplanation:
      "Donde **Mh** = masa de suelo húmedo después de centrifugar (g) y **Ms** = masa del suelo seco al horno (g). La centrifugación se aplica durante 30 minutos.",
    practicalUse:
      "Se usa como estimación rápida de la capacidad de campo cuando no se pueden hacer mediciones directas en campo.",
    category: "calculable",
  },
  {
    term: "Porcentaje de humedad gravimétrico",
    definition:
      "El contenido de agua del suelo expresado como porcentaje del peso del suelo seco. Es la forma más simple de medir la humedad.",
    formula: "θg (%) = (Mh − Ms) / Ms × 100",
    formulaExplanation:
      "Donde **Mh** = masa de suelo húmedo (g) y **Ms** = masa de suelo seco al horno a 105°C (g). Ejemplo: si Mh = 145 g y Ms = 100 g, θg = 45%.",
    practicalUse:
      "Es la forma más directa de medir cuánta agua tiene el suelo. Se convierte a volumétrico multiplicando por la densidad aparente.",
    category: "calculable",
  },
  {
    term: "Porcentaje de humedad volumétrico",
    definition:
      "La proporción entre el volumen de agua en el suelo y el volumen total del suelo. Es más útil en campo que el gravimétrico.",
    formula: "θv = θg × Da",
    formulaExplanation:
      "Donde **θg** = contenido gravimétrico (en decimal) y **Da** = densidad aparente (g/cm³). Ejemplo: θg = 0.20, Da = 1.3 → θv = 0.26 (o 26%).",
    practicalUse:
      "Se relaciona directamente con la lámina de agua almacenada en el suelo, lo que facilita los cálculos de riego.",
    category: "calculable",
  },
  {
    term: "Porcentaje de sodio intercambiable (PSI)",
    definition:
      "Porcentaje de la capacidad de intercambio del suelo que está ocupada por sodio. Indica si el suelo tiene problemas de sodicidad.",
    formula: "PSI = (Na intercambiable / CIC) × 100",
    formulaExplanation:
      "Donde **Na intercambiable** = cantidad de sodio adsorbido en el suelo y **CIC** = capacidad de intercambio catiónico total. Si PSI > 15%, el suelo se considera sódico.",
    practicalUse:
      "Valores de PSI mayores a 15% indican suelos sódicos que necesitan tratamiento con yeso u otras enmiendas para mejorar su estructura y permeabilidad.",
    category: "calculable",
  },
  {
    term: "Porcentaje de cationes intercambiables (PCI)",
    definition:
      "El grado en que los sitios de intercambio del suelo están ocupados por un catión específico (calcio, magnesio, potasio o sodio).",
    formula: "PCI = (Catión intercambiable / CIC) × 100",
    formulaExplanation:
      "Donde **Catión intercambiable** = cantidad del catión adsorbido y **CIC** = capacidad de intercambio catiónico total. Ejemplo: si Ca = 12 cmol/kg y CIC = 20 cmol/kg → PCI de Ca = 60%.",
    practicalUse:
      "Ayuda a evaluar el balance de nutrientes en el suelo. Un buen equilibrio entre calcio, magnesio y potasio es importante para la fertilidad.",
    category: "calculable",
  },
  {
    term: "Porcentaje de saturación con bases",
    definition:
      "El porcentaje de los sitios de intercambio del suelo que están ocupados por cationes básicos (calcio, magnesio, potasio, sodio) en vez de por hidrógeno o aluminio.",
    formula: "PSB = (Suma de bases / CIC) × 100",
    formulaExplanation:
      "Donde **Suma de bases** = Ca + Mg + K + Na intercambiables y **CIC** = capacidad de intercambio catiónico total. Un PSB alto indica un suelo menos ácido.",
    practicalUse:
      "Valores altos (>60%) generalmente indican suelos fértiles y con pH favorable para la mayoría de los cultivos. Valores bajos indican suelos ácidos que pueden necesitar encalado.",
    category: "calculable",
  },
  {
    term: "Eficiencia de riego",
    definition:
      "La relación entre el agua que realmente usan los cultivos y el agua total que se aplicó. Indica qué tan bien se aprovecha el agua de riego.",
    formula: "ER (%) = (Agua consumida / Agua aplicada) × 100",
    formulaExplanation:
      "Donde **Agua consumida** = cantidad efectivamente usada por los cultivos y **Agua aplicada** = cantidad total desviada de la fuente de riego. Ejemplo: si se aplican 1000 m³ y los cultivos usan 600 m³, ER = 60%.",
    practicalUse:
      "Permite identificar pérdidas de agua y mejorar los sistemas de riego. Riego por goteo tiene eficiencias del 85-95%, mientras que riego por gravedad puede ser solo 40-60%.",
    category: "calculable",
  },
];
