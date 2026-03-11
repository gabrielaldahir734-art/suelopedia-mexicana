import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight } from "lucide-react";
import { quizzes } from "@/data/quizzes";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const QuizPlay = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const quiz = quizzes.find((q) => q.id === quizId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  if (!quiz) {
    navigate("/opciones/quiz");
    return null;
  }

  const question = quiz.questions[currentIndex];
  const progress = ((currentIndex + (answered ? 1 : 0)) / quiz.questions.length) * 100;

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelectedOption(index);
    setAnswered(true);
    const correct = index === question.correctIndex;
    if (correct) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, correct]);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= quiz.questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  };

  const getScoreMessage = () => {
    const pct = (score / quiz.questions.length) * 100;
    if (pct === 100) return { emoji: "🏆", text: "¡Perfecto! Eres un experto en suelos" };
    if (pct >= 70) return { emoji: "🌟", text: "¡Muy bien! Dominas el tema" };
    if (pct >= 50) return { emoji: "💪", text: "¡Buen intento! Sigue practicando" };
    return { emoji: "📚", text: "Repasa el material e inténtalo de nuevo" };
  };

  // Finished screen
  if (finished) {
    const msg = getScoreMessage();
    return (
      <div className="app-shell flex flex-col">
        <header className="gradient-header pt-safe flex-shrink-0">
          <div className="flex items-center gap-3 px-4 py-4">
            <button
              onClick={() => navigate("/opciones/quiz")}
              className="no-tap w-9 h-9 rounded-full bg-white/10 flex items-center justify-center active:scale-90 transition-transform flex-shrink-0"
            >
              <ArrowLeft className="w-5 h-5 text-primary-foreground" />
            </button>
            <div className="flex-1 min-w-0">
              <h2 className="font-display text-xl font-bold text-primary-foreground leading-tight">
                Resultados
              </h2>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto scrollbar-hide px-4 py-6 pb-safe flex flex-col items-center">
          <div className="text-6xl mb-4">{msg.emoji}</div>
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-2">
            {score} / {quiz.questions.length}
          </h3>
          <p className="text-muted-foreground font-body text-sm text-center mb-6">{msg.text}</p>

          {/* Score bar */}
          <div className="w-full max-w-xs mb-6">
            <Progress value={(score / quiz.questions.length) * 100} className="h-3" />
          </div>

          {/* Answer summary */}
          <div className="w-full flex flex-wrap justify-center gap-2 mb-8">
            {answers.map((correct, i) => (
              <div
                key={i}
                className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-body",
                  correct
                    ? "bg-secondary/20 text-secondary"
                    : "bg-destructive/20 text-destructive"
                )}
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <button
              onClick={handleRestart}
              className="no-tap flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl px-4 py-3 font-body font-semibold text-sm active:scale-95 transition-transform"
            >
              <RotateCcw className="w-4 h-4" />
              Intentar de nuevo
            </button>
            <button
              onClick={() => navigate("/opciones/quiz")}
              className="no-tap flex items-center justify-center gap-2 bg-card border border-border text-foreground rounded-xl px-4 py-3 font-body font-semibold text-sm active:scale-95 transition-transform"
            >
              Elegir otro quiz
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Question screen
  return (
    <div className="app-shell flex flex-col">
      <header className="gradient-header pt-safe flex-shrink-0">
        <div className="flex items-center gap-3 px-4 py-3">
          <button
            onClick={() => navigate("/opciones/quiz")}
            className="no-tap w-9 h-9 rounded-full bg-white/10 flex items-center justify-center active:scale-90 transition-transform flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <div className="flex-1 min-w-0">
            <p className="text-primary-foreground/70 text-xs font-body">{quiz.title}</p>
            <p className="text-primary-foreground text-xs font-body font-medium">
              Pregunta {currentIndex + 1} de {quiz.questions.length}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-white/10 rounded-full px-2.5 py-1">
            <Trophy className="w-3.5 h-3.5 text-accent" />
            <span className="text-primary-foreground text-xs font-body font-bold">{score}</span>
          </div>
        </div>
        <div className="px-4 pb-3">
          <Progress value={progress} className="h-1.5 bg-white/10" />
        </div>
      </header>

      <main className="flex-1 overflow-y-auto scrollbar-hide px-4 py-4 pb-safe flex flex-col">
        {/* Question */}
        <div className="bg-card border border-border rounded-2xl p-4 mb-4 shadow-sm">
          <p className="font-body font-semibold text-foreground text-sm leading-relaxed">
            {question.question}
          </p>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-2 flex-1">
          {question.options.map((option, i) => {
            const isSelected = selectedOption === i;
            const isCorrect = i === question.correctIndex;

            let optionStyle = "bg-card border-border";
            if (answered) {
              if (isCorrect) {
                optionStyle = "bg-secondary/10 border-secondary/40";
              } else if (isSelected && !isCorrect) {
                optionStyle = "bg-destructive/10 border-destructive/40";
              } else {
                optionStyle = "bg-muted/50 border-border opacity-60";
              }
            } else if (isSelected) {
              optionStyle = "bg-primary/10 border-primary/40";
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={answered}
                className={cn(
                  "no-tap w-full flex items-center gap-3 border rounded-xl px-4 py-3 transition-all duration-200 text-left",
                  optionStyle,
                  !answered && "active:scale-98"
                )}
              >
                <span
                  className={cn(
                    "w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-body flex-shrink-0",
                    answered && isCorrect
                      ? "bg-secondary text-secondary-foreground"
                      : answered && isSelected && !isCorrect
                      ? "bg-destructive text-destructive-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {answered && isCorrect ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : answered && isSelected && !isCorrect ? (
                    <XCircle className="w-4 h-4" />
                  ) : (
                    String.fromCharCode(65 + i)
                  )}
                </span>
                <span className="font-body text-sm text-foreground flex-1">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation + Next */}
        {answered && (
          <div className="mt-4 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div
              className={cn(
                "rounded-xl p-3 border",
                selectedOption === question.correctIndex
                  ? "bg-secondary/10 border-secondary/20"
                  : "bg-accent/10 border-accent/20"
              )}
            >
              <p className="text-xs font-body text-foreground leading-relaxed">
                <span className="font-semibold">
                  {selectedOption === question.correctIndex ? "✅ ¡Correcto! " : "💡 Explicación: "}
                </span>
                {question.explanation}
              </p>
            </div>
            <button
              onClick={handleNext}
              className="no-tap w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl px-4 py-3 font-body font-semibold text-sm active:scale-95 transition-transform"
            >
              {currentIndex + 1 >= quiz.questions.length ? "Ver resultados" : "Siguiente pregunta"}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default QuizPlay;
