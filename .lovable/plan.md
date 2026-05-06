## Objetivo
Agregar una imagen visual representativa a cada una de las 13 categorías de información de los suelos (Distribución, Material parental, Relieve, Clima, Vegetación, Usos, Limitantes, Color, Retención de agua, Drenaje, Riesgos, Recomendaciones, Nombre/Clasificación), para que el usuario tenga una idea visual del contenido.

## Alcance acordado
- **Una imagen genérica por categoría** (13 imágenes en total), iguales para todos los suelos.
- Aparecen en **dos lugares**:
  1. Como mini-thumbnail (en lugar del emoji actual) en el menú de categorías de cada suelo (`SoilMenu`).
  2. Como imagen grande de cabecera dentro de la pantalla de detalle de la categoría (`SoilInfo`).

## Cambios a realizar

### 1. Generar 13 imágenes ilustrativas
Una imagen por categoría, estilo ilustración / fotografía natural y limpia, paleta tierra coherente con la app (terracota, verde musgo, crema). Guardadas en `src/assets/categories/`:
- `nombre.jpg` — etiqueta/clasificación de suelo
- `distribucion.jpg` — mapa estilizado de México
- `material.jpg` — rocas y minerales
- `relieve.jpg` — paisaje montañoso/colinas
- `clima.jpg` — sol, nubes y lluvia sobre paisaje
- `vegetacion.jpg` — flora típica
- `usos.jpg` — campos de cultivo
- `limitantes.jpg` — señal de advertencia en campo
- `color.jpg` — perfil de suelo mostrando capas de colores
- `retencion.jpg` — gota de agua sobre tierra
- `drenaje.jpg` — agua filtrándose en suelo
- `riesgos.jpg` — erosión / suelo agrietado
- `recomendaciones.jpg` — manos cuidando la tierra

### 2. Registrar las imágenes en los datos
En `src/data/soils.ts` añadir un campo `image` a cada entrada de `menuOptions` con el import correspondiente.

### 3. Actualizar `SoilMenu.tsx`
Reemplazar el cuadro del emoji por un thumbnail cuadrado con esquinas redondeadas (≈48×48 px) que muestre la imagen de la categoría. Mantener el emoji como overlay pequeño opcional para no perder el código visual ya familiar.

### 4. Actualizar `SoilInfo.tsx`
Reemplazar la cabecera actual (que repite la imagen del suelo) por la imagen de la **categoría seleccionada**, manteniendo el degradado hacia el fondo y el chip con el icono/descripción.

## Detalles técnicos
- Imágenes generadas con `imagegen` calidad `fast`, 1024×640 (formato apaisado para cabecera) y reutilizadas como thumbnail vía `object-cover`.
- Importadas estáticamente como módulos para que Vite las optimice.
- Sin cambios en lógica de datos, rutas ni base de datos.
- Sin cambios en categorías ni textos existentes.

## Fuera de alcance
- Imágenes específicas por suelo + categoría (puede hacerse después).
- Cambios en el contenido textual de las categorías.
