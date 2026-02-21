import { useState } from "react";
import { MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import type { GeoLocation } from "@/lib/userResearch";

interface LocationPickerProps {
  location: GeoLocation | null;
  onLocationChange: (loc: GeoLocation | null) => void;
}

const LocationPicker = ({ location, onLocationChange }: LocationPickerProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setError("Tu navegador no soporta geolocalización");
      return;
    }
    setLoading(true);
    setError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        onLocationChange({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          altitude: pos.coords.altitude,
          timestamp: new Date().toISOString(),
        });
        setLoading(false);
      },
      (err) => {
        setError(
          err.code === 1
            ? "Permiso de ubicación denegado"
            : "No se pudo obtener la ubicación"
        );
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000 }
    );
  };

  return (
    <div className="space-y-2">
      <label className="text-foreground text-xs font-body font-semibold mb-1.5 block">
        📍 Ubicación GPS
      </label>

      {!location ? (
        <button
          type="button"
          onClick={requestLocation}
          disabled={loading}
          className="w-full bg-card border border-border rounded-xl px-4 py-3 flex items-center justify-center gap-2 text-sm font-body text-muted-foreground active:scale-98 transition-transform disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Obteniendo ubicación…
            </>
          ) : (
            <>
              <MapPin className="w-4 h-4" />
              Registrar mi ubicación actual
            </>
          )}
        </button>
      ) : (
        <div className="bg-card border border-primary/20 rounded-xl px-4 py-3 space-y-1">
          <div className="flex items-center gap-2 text-primary text-xs font-body font-semibold">
            <CheckCircle className="w-4 h-4" />
            Ubicación registrada
          </div>
          <p className="text-foreground text-xs font-body">
            Lat: {location.latitude.toFixed(6)}, Lng: {location.longitude.toFixed(6)}
          </p>
          {location.altitude !== null && (
            <p className="text-muted-foreground text-xs font-body">
              Altitud: {location.altitude.toFixed(1)} m
            </p>
          )}
          <p className="text-muted-foreground text-xs font-body">
            {new Date(location.timestamp).toLocaleString("es-MX")}
          </p>
          <button
            type="button"
            onClick={() => onLocationChange(null)}
            className="text-destructive text-xs font-body underline mt-1"
          >
            Eliminar ubicación
          </button>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-1.5 text-destructive text-xs font-body">
          <AlertCircle className="w-3.5 h-3.5" />
          {error}
        </div>
      )}
    </div>
  );
};

export default LocationPicker;
