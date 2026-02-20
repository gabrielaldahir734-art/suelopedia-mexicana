import { useNavigate } from "react-router-dom";
import { soils } from "@/data/soils";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="app-shell flex flex-col">
      {/* Header */}
      <header className="gradient-header pt-safe sticky top-0 z-20 shadow-md">
        <div className="px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-xl">🌍</div>
            <div>
              <h1 className="font-display text-2xl font-bold text-primary-foreground tracking-tight">EDAFPOUS</h1>
              <p className="text-xs text-primary-foreground/70 font-body">Suelos de México · WRB 2006 · INEGI</p>
            </div>
          </div>
        </div>
        <div className="px-4 pb-3">
          <p className="text-primary-foreground/80 text-sm font-body">
            Selecciona un tipo de suelo para explorar su información
          </p>
        </div>
      </header>

      {/* Soil Grid */}
      <main className="flex-1 overflow-y-auto scrollbar-hide px-3 py-4 pb-safe">
        <div className="grid grid-cols-2 gap-3">
          {soils.map((soil) => (
            <button
              key={soil.id}
              onClick={() => navigate(`/soil/${soil.id}`)}
              className="no-tap group relative rounded-2xl overflow-hidden shadow-card active:scale-95 transition-all duration-200"
              style={{ height: 180 }}
            >
              {/* Soil Image */}
              <img
                src={soil.imagen}
                alt={soil.nombre}
                className="absolute inset-0 w-full h-full object-cover group-active:brightness-90 transition-all duration-200"
              />
              {/* Gradient overlay */}
              <div className="gradient-card absolute inset-0" />
              {/* Name */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-display text-sm font-semibold text-white leading-tight drop-shadow-lg">
                  {soil.nombre}
                </p>
                <p className="text-white/70 text-xs mt-0.5 font-body leading-tight">
                  {soil.tagline}
                </p>
              </div>
              {/* Corner badge */}
              <div className="absolute top-2 right-2 bg-black/30 backdrop-blur-sm rounded-full px-2 py-0.5">
                <span className="text-white/90 text-xs font-body font-medium">WRB</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4 mb-2 px-1">
          <p className="text-muted-foreground text-xs text-center font-body">
            Fuentes: INEGI · WRB 2006 (IUSS Working Group) · Soil Taxonomy USDA
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
