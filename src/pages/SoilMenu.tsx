import { useNavigate, useParams } from "react-router-dom";
import { soils, menuOptions } from "@/data/soils";
import { ArrowLeft } from "lucide-react";

const SoilMenu = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const soil = soils.find((s) => s.id === id);

  if (!soil) {
    navigate("/");
    return null;
  }

  return (
    <div className="app-shell flex flex-col">
      {/* Hero Header */}
      <div className="relative h-56 flex-shrink-0">
        <img src={soil.imagen} alt={soil.nombre} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="no-tap absolute top-4 left-4 pt-safe mt-2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center active:scale-90 transition-transform"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Soil title */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
          <h2 className="font-display text-3xl font-bold text-white drop-shadow-lg">{soil.nombre}</h2>
          <p className="text-white/80 text-sm font-body mt-1">{soil.tagline}</p>
        </div>
      </div>

      {/* Menu Options */}
      <div className="flex-1 overflow-y-auto scrollbar-hide bg-background">
        <div className="px-3 py-3">
          <p className="text-xs text-muted-foreground font-body px-1 mb-2 uppercase tracking-wider font-medium">
            Selecciona una categoría de información
          </p>
          <div className="flex flex-col gap-2">
            {menuOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => navigate(`/soil/${soil.id}/${option.id}`)}
                className="no-tap w-full flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 active:scale-98 active:bg-muted transition-all duration-150 shadow-sm text-left"
              >
                <span className="text-2xl w-8 text-center flex-shrink-0">{option.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-body font-semibold text-foreground text-sm leading-tight">{option.label}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{option.description}</p>
                </div>
                <span className="text-muted-foreground/50 flex-shrink-0">›</span>
              </button>
            ))}
          </div>

          <div className="mt-4 mb-2">
            <p className="text-muted-foreground text-xs text-center font-body">
              Información basada en INEGI, WRB 2006 y Soil Taxonomy USDA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilMenu;
