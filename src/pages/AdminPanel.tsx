import { useNavigate } from "react-router-dom";
import { soils } from "@/data/soils";
import { useAuth } from "@/hooks/useAuth";
import { ArrowLeft, Edit, LogOut, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminPanel = () => {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

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
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-accent" />
              <p className="text-primary-foreground/70 text-xs font-body">Administrador</p>
            </div>
            <h2 className="font-display text-xl font-bold text-primary-foreground leading-tight">
              Panel de Administración
            </h2>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto scrollbar-hide px-3 py-4 pb-safe">
        <div className="bg-primary/5 border border-primary/20 rounded-xl px-4 py-3 mb-4">
          <p className="text-foreground text-xs font-body">
            <span className="font-semibold">Sesión:</span> {user?.email}
          </p>
          <p className="text-muted-foreground text-xs font-body mt-1">
            Selecciona un suelo para editar su información.
          </p>
        </div>

        <p className="text-xs text-muted-foreground font-body px-1 mb-2 uppercase tracking-wider font-medium">
          Tipos de suelo
        </p>

        <div className="flex flex-col gap-2">
          {soils.map((soil) => (
            <button
              key={soil.id}
              onClick={() => navigate(`/admin/soil/${soil.id}`)}
              className="no-tap w-full flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 active:scale-98 active:bg-muted transition-all duration-150 shadow-sm text-left"
            >
              <img
                src={soil.imagen}
                alt={soil.nombre}
                className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-body font-semibold text-foreground text-sm leading-tight">{soil.nombre}</p>
                <p className="text-muted-foreground text-xs mt-0.5 truncate">{soil.tagline}</p>
              </div>
              <Edit className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            </button>
          ))}
        </div>

        <Button
          variant="outline"
          onClick={signOut}
          className="w-full mt-6 gap-2 text-destructive border-destructive/30 hover:bg-destructive/10"
        >
          <LogOut className="w-4 h-4" />
          Cerrar Sesión
        </Button>
      </main>
    </div>
  );
};

export default AdminPanel;
