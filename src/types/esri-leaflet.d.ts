declare module "esri-leaflet" {
  import * as L from "leaflet";

  interface DynamicMapLayerOptions extends L.TileLayerOptions {
    url: string;
    layers?: number[];
    opacity?: number;
    useCors?: boolean;
    f?: string;
  }

  interface IdentifyQuery {
    on(map: L.Map): IdentifyQuery;
    at(latlng: L.LatLng): IdentifyQuery;
    layers(layerString: string): IdentifyQuery;
    tolerance(tolerance: number): IdentifyQuery;
    run(callback: (error: any, featureCollection: any) => void): void;
  }

  interface DynamicMapLayer extends L.Layer {
    identify(): IdentifyQuery;
    addTo(map: L.Map): this;
  }

  export function dynamicMapLayer(options: DynamicMapLayerOptions): DynamicMapLayer;
}
