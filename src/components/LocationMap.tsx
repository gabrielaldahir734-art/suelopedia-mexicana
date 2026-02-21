import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { GeoLocation } from "@/lib/userResearch";

// Fix default marker icon
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface LocationMapProps {
  location: GeoLocation;
  className?: string;
}

const LocationMap = ({ location, className = "" }: LocationMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: [location.latitude, location.longitude],
      zoom: 15,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    L.marker([location.latitude, location.longitude])
      .addTo(map)
      .bindPopup(
        `<b>Observación de suelo</b><br/>Lat: ${location.latitude.toFixed(6)}<br/>Lng: ${location.longitude.toFixed(6)}${location.altitude !== null ? `<br/>Alt: ${location.altitude.toFixed(1)} m` : ""}`
      );

    mapInstance.current = map;

    // Fix tile rendering after mount
    setTimeout(() => map.invalidateSize(), 100);

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, [location]);

  return (
    <div
      ref={mapRef}
      className={`w-full rounded-xl overflow-hidden border border-border ${className}`}
      style={{ height: 200 }}
    />
  );
};

export default LocationMap;
