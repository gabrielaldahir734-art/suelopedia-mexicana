import { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight, Sparkles, Star, Flame, Target } from "lucide-react";
import { quizzes, getRandomQuestions, QUESTIONS_PER_GAME } from "@/data/quizzes";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { QuizQuestion } from "@/data/quizzes";

const QuizPlay = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const quiz = quizzes.find((q) => q.id === quizId);

  const [gameKey, setGameKey] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  // Pick random questions once per game
  const gameQuestions: QuizQuestion[] = useMemo(() => {
    if (!quiz) return [];
    return getRandomQuestions(quiz, QUESTIONS_PER_GAME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quiz, gameKey]);

  if (!quiz) {
    navigate("/opciones/quiz");
    return null;
  }

  const question = gameQuestions[currentIndex];
  const totalQuestions = gameQuestions.length;
  const progress = ((currentIndex + (answered ? 1 : 0)) / totalQuestions) * 100;

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelectedOption(index);
    setAnswered(true);
    const correct = index === question.correctIndex;
    if (correct) {
      setScore((s) => s + 1);
      setStreak((s) => {
        const next = s + 1;
        setBestStreak((b) => Math.max(b, next));
        return next;
      });
    } else {
      setStreak(0);
    }
    setAnswers((prev) => [...prev, correct]);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= totalQuestions) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setAnswered(false);
    }
  };

  const handleRestart = () => {
    setGameKey((k) => k + 1);
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswered(false);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setFinished(false);
    setAnswers([]);
  };

  const getScoreMessage = () => {
    const pct = (score / totalQuestions) * 100;
    if (pct === 100) return { emoji: "🏆", text: "¡Perfecto! Eres un experto en suelos", stars: 3 };
    if (pct >= 80) return { emoji: "🌟", text: "¡Excelente! Dominas el tema", stars: 3 };
    if (pct >= 60) return { emoji: "💪", text: "¡Muy bien! Sigue practicando", stars: 2 };
    if (pct >= 40) return { emoji: "📖", text: "Buen intento, repasa un poco más", stars: 1 };
    return { emoji: "📚", text: "No te rindas, inténtalo de nuevo", stars: 0 };
  };

  const optionLetters = ["A", "B", "C", "D"];

  // Finished screen
  if (finished) {
    const msg = getScoreMessage();
    const pct = Math.round((score / totalQuestions) * 100);
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
          {/* Score circle */}
          <div className="relative w-32 h-32 mb-4">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
              <circle
                cx="50" cy="50" r="42" fill="none"
                stroke={pct >= 60 ? "hsl(var(--secondary))" : "hsl(var(--accent))"}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${pct * 2.64} 264`}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl">{msg.emoji}</span>
              <span className="font-display font-bold text-foreground text-lg">{pct}%</span>
            </div>
          </div>

          <h3 className="font-display text-xl font-bold text-foreground text-center mb-1">
            {score} / {totalQuestions}
          </h3>
          <p className="text-muted-foreground font-body text-sm text-center mb-4">{msg.text}</p>

          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[0, 1, 2].map((i) => (
              <Star
                key={i}
                className={cn(
                  "w-7 h-7 transition-all duration-500",
                  i < msg.stars
                    ? "text-accent fill-accent scale-110"
                    : "text-muted-foreground/30"
                )}
                style={{ transitionDelay: `${i * 200}ms` }}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-3 mb-6 w-full max-w-xs">
            <div className="flex-1 bg-card border border-border rounded-xl p-3 text-center">
              <Flame className="w-4 h-4 text-accent mx-auto mb-1" />
              <p className="font-display font-bold text-foreground text-sm">{bestStreak}</p>
              <p className="text-muted-foreground text-[10px] font-body">Mejor racha</p>
            </div>
            <div className="flex-1 bg-card border border-border rounded-xl p-3 text-center">
              <CheckCircle2 className="w-4 h-4 text-secondary mx-auto mb-1" />
              <p className="font-display font-bold text-foreground text-sm">{score}</p>
              <p className="text-muted-foreground text-[10px] font-body">Correctas</p>
            </div>
            <div className="flex-1 bg-card border border-border rounded-xl p-3 text-center">
              <XCircle className="w-4 h-4 text-destructive mx-auto mb-1" />
              <p className="font-display font-bold text-foreground text-sm">{totalQuestions - score}</p>
              <p className="text-muted-foreground text-[10px] font-body">Incorrectas</p>
            </div>
          </div>

          {/* Answer summary */}
          <div className="w-full flex flex-wrap justify-center gap-1.5 mb-6">
            {answers.map((correct, i) => (
              <div
                key={i}
                className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-body transition-all",
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
          <div className="flex flex-col gap-2.5 w-full max-w-xs">
            <button
              onClick={handleRestart}
              className="no-tap flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl px-4 py-3.5 font-body font-semibold text-sm active:scale-95 transition-transform shadow-card"
            >
              <RotateCcw className="w-4 h-4" />
              Jugar de nuevo (nuevas preguntas)
            </button>
            <button
              onClick={() => navigate("/opciones/quiz")}
              className="no-tap flex items-center justify-center gap-2 bg-card border border-border text-foreground rounded-xl px-4 py-3.5 font-body font-semibold text-sm active:scale-95 transition-transform"
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
              Pregunta {currentIndex + 1} de {totalQuestions}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {streak >= 2 && (
              <div className="flex items-center gap-0.5 bg-accent/20 rounded-full px-2 py-1 animate-in fade-in zoom-in duration-300">
                <Flame className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent text-xs font-body font-bold">{streak}</span>
              </div>
            )}
            <div className="flex items-center gap-1 bg-white/10 rounded-full px-2.5 py-1">
              <Trophy className="w-3.5 h-3.5 text-accent" />
              <span className="text-primary-foreground text-xs font-body font-bold">{score}</span>
            </div>
          </div>
        </div>
        <div className="px-4 pb-3">
          <Progress value={progress} className="h-1.5 bg-white/10" />
        </div>
      </header>

      <main className="flex-1 overflow-y-auto scrollbar-hide px-4 py-4 pb-safe flex flex-col">
        {/* Question number badge */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1.5 bg-primary/10 rounded-full px-3 py-1">
            <Target className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-xs font-body font-semibold">
              Pregunta {currentIndex + 1}
            </span>
          </div>
          {streak >= 3 && (
            <div className="flex items-center gap-1 bg-accent/10 rounded-full px-2.5 py-1 animate-in slide-in-from-left-2 duration-300">
              <Sparkles className="w-3 h-3 text-accent" />
              <span className="text-accent text-[10px] font-body font-bold">¡Racha de {streak}!</span>
            </div>
          )}
        </div>

        {/* Question */}
        <div className="bg-card border border-border rounded-2xl p-5 mb-4 shadow-card">
          <p className="font-body font-semibold text-foreground text-sm leading-relaxed">
            {question.question}
          </p>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-2.5 flex-1">
          {question.options.map((option, i) => {
            const isSelected = selectedOption === i;
            const isCorrect = i === question.correctIndex;

            let optionStyle = "bg-card border-border hover:border-primary/30";
            let letterStyle = "bg-muted text-muted-foreground";
            if (answered) {
              if (isCorrect) {
                optionStyle = "bg-secondary/10 border-secondary/40 shadow-sm";
                letterStyle = "bg-secondary text-secondary-foreground";
              } else if (isSelected && !isCorrect) {
                optionStyle = "bg-destructive/10 border-destructive/40";
                letterStyle = "bg-destructive text-destructive-foreground";
              } else {
                optionStyle = "bg-muted/30 border-border opacity-50";
              }
            } else if (isSelected) {
              optionStyle = "bg-primary/10 border-primary/40";
              letterStyle = "bg-primary/20 text-primary";
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={answered}
                className={cn(
                  "no-tap w-full flex items-center gap-3 border rounded-xl px-4 py-3.5 transition-all duration-200 text-left",
                  optionStyle,
                  !answered && "active:scale-[0.98]"
                )}
              >
                <span
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-body flex-shrink-0 transition-all duration-200",
                    letterStyle
                  )}
                >
                  {answered && isCorrect ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : answered && isSelected && !isCorrect ? (
                    <XCircle className="w-4 h-4" />
                  ) : (
                    optionLetters[i]
                  )}
                </span>
                <span className="font-body text-sm text-foreground flex-1 leading-snug">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation + Next */}
        {answered && (
          <div className="mt-4 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div
              className={cn(
                "rounded-xl p-4 border",
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
              className="no-tap w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl px-4 py-3.5 font-body font-semibold text-sm active:scale-95 transition-transform shadow-card"
            >
              {currentIndex + 1 >= totalQuestions ? "Ver resultados" : "Siguiente pregunta"}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default QuizPlay;
