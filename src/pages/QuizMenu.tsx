import { useNavigate } from "react-router-dom";
import { ArrowLeft, Brain, Trophy } from "lucide-react";
import { quizzes } from "@/data/quizzes";

const QuizMenu = () => {
  const navigate = useNavigate();

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
        {/* Intro card */}
        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-accent" />
            <p className="font-body font-semibold text-foreground text-sm">¡Pon a prueba lo que sabes!</p>
          </div>
          <p className="text-muted-foreground text-xs font-body leading-relaxed">
            Responde preguntas sobre tipos de suelo, sus propiedades y usos. 
            Cada quiz tiene retroalimentación inmediata para que aprendas mientras juegas.
          </p>
        </div>

        {/* Quiz list */}
        <div className="flex flex-col gap-2">
          {quizzes.map((quiz) => (
            <button
              key={quiz.id}
              onClick={() => navigate(`/opciones/quiz/${quiz.id}`)}
              className="no-tap w-full flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-4 active:scale-98 active:bg-muted transition-all duration-150 shadow-sm text-left"
            >
              <span className="text-2xl w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                {quiz.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-body font-semibold text-foreground text-sm leading-tight">
                  {quiz.title}
                </p>
                <p className="text-muted-foreground text-xs mt-0.5">{quiz.description}</p>
                <p className="text-muted-foreground/60 text-xs mt-1">
                  {quiz.questions.length} preguntas
                </p>
              </div>
              <span className="text-muted-foreground/50 flex-shrink-0">›</span>
            </button>
          ))}
        </div>

        <p className="text-muted-foreground text-xs text-center font-body mt-6">
          Más quizzes próximamente
        </p>
      </main>
    </div>
  );
};

export default QuizMenu;
