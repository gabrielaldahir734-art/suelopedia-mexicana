import { useNavigate } from "react-router-dom";
import { ArrowLeft, Brain, Trophy, Sparkles, Zap, Target, Shuffle } from "lucide-react";
import { quizzes, QUESTIONS_PER_GAME } from "@/data/quizzes";

const QuizMenu = () => {
  const navigate = useNavigate();

  const categoryColors: Record<string, string> = {
    "identificacion-suelos": "from-[hsl(205,55%,55%)] to-[hsl(205,65%,40%)]",
    "propiedades-suelo": "from-[hsl(85,28%,35%)] to-[hsl(85,35%,25%)]",
    "usos-suelo": "from-[hsl(28,60%,42%)] to-[hsl(28,55%,30%)]",
  };

  const categoryEmojiBg: Record<string, string> = {
    "identificacion-suelos": "bg-[hsl(205,55%,55%/0.15)]",
    "propiedades-suelo": "bg-[hsl(85,28%,35%/0.15)]",
    "usos-suelo": "bg-[hsl(28,60%,42%/0.15)]",
  };

  return (
    <div className="app-shell flex flex-col">
      <header className="gradient-header pt-safe flex-shrink-0">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate("/opciones")}
            className="no-tap w-9 h-9 rounded-full bg-white/10 flex items-center justify-center active:scale-90 transition-transform flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <div className="flex-1 min-w-0">
            <h2 className="font-display text-xl font-bold text-primary-foreground leading-tight">
              Contenido Interactivo
            </h2>
            <p className="text-primary-foreground/70 text-xs font-body">
              Quizzes y ejercicios sobre suelos
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Brain className="w-5 h-5 text-accent" />
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto scrollbar-hide px-3 py-4 pb-safe">
        {/* Hero card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-primary/10 border border-accent/20 p-5 mb-5">
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent/10 blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-primary/10 blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-base">¡Pon a prueba lo que sabes!</p>
              </div>
            </div>
            <p className="text-muted-foreground text-xs font-body leading-relaxed mb-3">
              Cada partida te da <span className="font-bold text-foreground">{QUESTIONS_PER_GAME} preguntas al azar</span> de un banco de 50. 
              ¡Nunca jugarás el mismo quiz dos veces!
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-card/60 rounded-full px-2.5 py-1">
                <Shuffle className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-body font-medium text-foreground">Aleatorio</span>
              </div>
              <div className="flex items-center gap-1.5 bg-card/60 rounded-full px-2.5 py-1">
                <Zap className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-body font-medium text-foreground">{QUESTIONS_PER_GAME} por ronda</span>
              </div>
              <div className="flex items-center gap-1.5 bg-card/60 rounded-full px-2.5 py-1">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-body font-medium text-foreground">Aprende</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz list */}
        <p className="font-display font-bold text-foreground text-sm mb-3 px-1">Elige tu quiz</p>
        <div className="flex flex-col gap-3">
          {quizzes.map((quiz) => (
            <button
              key={quiz.id}
              onClick={() => navigate(`/opciones/quiz/${quiz.id}`)}
              className="no-tap w-full relative overflow-hidden bg-card border border-border rounded-2xl active:scale-[0.98] active:bg-muted transition-all duration-200 shadow-card text-left group"
            >
              {/* Top colored accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${categoryColors[quiz.id] || "from-primary to-primary"}`} />
              
              <div className="px-4 py-4">
                <div className="flex items-start gap-3">
                  <span className={`text-3xl w-14 h-14 rounded-2xl ${categoryEmojiBg[quiz.id] || "bg-primary/10"} flex items-center justify-center flex-shrink-0 group-active:scale-95 transition-transform`}>
                    {quiz.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-foreground text-sm leading-tight mb-1">
                      {quiz.title}
                    </p>
                    <p className="text-muted-foreground text-xs font-body leading-relaxed mb-2">
                      {quiz.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-muted/60 rounded-full px-2 py-0.5">
                        <Target className="w-3 h-3 text-muted-foreground" />
                        <span className="text-muted-foreground text-[10px] font-body font-medium">
                          {quiz.questions.length} preguntas
                        </span>
                      </div>
                      <div className="flex items-center gap-1 bg-accent/10 rounded-full px-2 py-0.5">
                        <Shuffle className="w-3 h-3 text-accent" />
                        <span className="text-accent text-[10px] font-body font-medium">
                          {QUESTIONS_PER_GAME} por partida
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-muted-foreground/40 text-xl group-active:translate-x-1 transition-transform">›</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex flex-col items-center mt-8 mb-4">
          <div className="flex gap-1.5 mb-2">
            {["🌱", "🪨", "🌿", "🏔️", "🌾"].map((e, i) => (
              <span key={i} className="text-lg opacity-40">{e}</span>
            ))}
          </div>
          <p className="text-muted-foreground/50 text-xs text-center font-body">
            Más quizzes próximamente
          </p>
        </div>
      </main>
    </div>
  );
};

export default QuizMenu;
