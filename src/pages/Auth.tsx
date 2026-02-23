import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    if (!isLogin && password !== confirmPassword) {
      toast({ title: "Error", description: "Las contraseñas no coinciden", variant: "destructive" });
      return;
    }

    if (!isLogin && password.length < 6) {
      toast({ title: "Error", description: "La contraseña debe tener al menos 6 caracteres", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    const { error } = isLogin ? await signIn(email, password) : await signUp(email, password);
    setSubmitting(false);

    if (error) {
      const msg = error.message?.includes("Invalid login")
        ? "Email o contraseña incorrectos"
        : error.message?.includes("already registered")
        ? "Este email ya está registrado"
        : error.message || "Ocurrió un error";
      toast({ title: "Error", description: msg, variant: "destructive" });
    } else if (!isLogin) {
      toast({ title: "¡Registro exitoso!", description: "Revisa tu email para confirmar tu cuenta." });
      setIsLogin(true);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="app-shell flex flex-col min-h-dvh">
      {/* Hero background */}
      <div className="gradient-hero flex-shrink-0 pt-safe px-6 pt-12 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-2xl">🌍</div>
          <div>
            <h1 className="font-display text-3xl font-bold text-primary-foreground tracking-tight">EDAFPOUS</h1>
            <p className="text-xs text-primary-foreground/60 font-body">Suelos de México</p>
          </div>
        </div>
        <p className="text-primary-foreground/80 text-sm font-body leading-relaxed">
          {isLogin
            ? "Inicia sesión para explorar y contribuir al conocimiento edafológico de México."
            : "Crea una cuenta para acceder a toda la información sobre suelos mexicanos."}
        </p>
      </div>

      {/* Form */}
      <div className="flex-1 bg-background rounded-t-3xl -mt-4 relative z-10 px-6 pt-8 pb-safe">
        <h2 className="font-display text-xl font-bold text-foreground mb-6">
          {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-body text-sm">
              Correo electrónico
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-card border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground font-body text-sm">
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="bg-card border-border"
            />
          </div>

          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-foreground font-body text-sm">
                Confirmar contraseña
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                className="bg-card border-border"
              />
            </div>
          )}

          <Button type="submit" disabled={submitting} className="w-full h-12 text-base font-body font-semibold">
            {submitting
              ? "Cargando..."
              : isLogin
              ? "Entrar"
              : "Registrarse"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary text-sm font-body font-medium hover:underline"
          >
            {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
          </button>
        </div>

        <div className="mt-8 bg-muted rounded-xl px-4 py-3">
          <p className="text-muted-foreground text-xs font-body text-center leading-relaxed">
            🌱 Al registrarte podrás contribuir con investigaciones sobre los suelos de México
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
