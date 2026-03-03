import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const options = [
  {
    id: "mapa-suelos",
    label: "Mapa de suelos de México",
    description: "Explora tipos de suelo por localidad con datos oficiales",
    icon: "🗺️",
    route: "/opciones/mapa-suelos",
  },
  {
    id: "glosario",
    label: "Glosario de términos",
    description: "Palabras técnicas del estudio del suelo",
    icon: "📖",
    route: "/opciones/glosario",
  },
];

const OptionsMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="app-shell flex flex-col">
      <header className="gradient-header pt-safe flex-shrink-0">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate("/")}
            className="no-tap w-9 h-9 rounded-full bg-white/10 flex items-center justify-center active:scale-90 transition-transform flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <div className="flex-1 min-w-0">
            <h2 className="font-display text-xl font-bold text-primary-foreground leading-tight">
              Opciones
            </h2>
            <p className="text-primary-foreground/70 text-xs font-body">
              Herramientas y recursos adicionales
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto scrollbar-hide px-3 py-4 pb-safe">
        <div className="flex flex-col gap-2">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => navigate(option.route)}
              className="no-tap w-full flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-4 active:scale-98 active:bg-muted transition-all duration-150 shadow-sm text-left"
            >
              <span className="text-2xl w-8 text-center flex-shrink-0">{option.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-body font-semibold text-foreground text-sm leading-tight">
                  {option.label}
                </p>
                <p className="text-muted-foreground text-xs mt-0.5">{option.description}</p>
              </div>
              <span className="text-muted-foreground/50 flex-shrink-0">›</span>
            </button>
          ))}
        </div>

        <p className="text-muted-foreground text-xs text-center font-body mt-6">
          Más opciones próximamente
        </p>
      </main>
    </div>
  );
};

export default OptionsMenu;
