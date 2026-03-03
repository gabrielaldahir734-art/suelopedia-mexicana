import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { glossaryTerms } from "@/data/glossary";
import { ArrowLeft, Search, FlaskConical, BookOpen } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const parseContent = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

const Glossary = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "conceptual" | "calculable">("all");

  const filtered = glossaryTerms.filter((t) => {
    const matchSearch = t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || t.category === filter;
    return matchSearch && matchFilter;
  });

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
              📖 Glosario
            </h2>
            <p className="text-primary-foreground/70 text-xs font-body">
              Términos técnicos del estudio del suelo
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/50" />
            <input
              type="text"
              placeholder="Buscar término..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/10 text-primary-foreground placeholder:text-primary-foreground/40 rounded-lg pl-9 pr-3 py-2 text-sm font-body focus:outline-none focus:ring-1 focus:ring-white/30"
            />
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="px-3 py-2 flex gap-2 flex-shrink-0">
        {([
          { key: "all", label: "Todos", icon: null },
          { key: "conceptual", label: "Conceptos", icon: <BookOpen className="w-3 h-3" /> },
          { key: "calculable", label: "Calculables", icon: <FlaskConical className="w-3 h-3" /> },
        ] as const).map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`no-tap flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-body font-medium transition-colors ${
              filter === f.key
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {f.icon}
            {f.label}
          </button>
        ))}
      </div>

      {/* Terms */}
      <main className="flex-1 overflow-y-auto scrollbar-hide px-3 pb-safe">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-muted-foreground text-sm font-body">
              No se encontraron términos
            </p>
          </div>
        ) : (
          <Accordion type="single" collapsible className="space-y-2">
            {filtered.map((term) => (
              <AccordionItem
                key={term.term}
                value={term.term}
                className="border-none"
              >
                <AccordionTrigger className="no-tap bg-card border border-border rounded-xl px-4 py-3 hover:no-underline data-[state=open]:rounded-b-none data-[state=open]:border-b-0 gap-2">
                  <div className="flex items-center gap-2 text-left flex-1 min-w-0">
                    <span
                      className={`flex-shrink-0 w-2 h-2 rounded-full ${
                        term.category === "calculable"
                          ? "bg-accent"
                          : "bg-secondary"
                      }`}
                    />
                    <span className="font-body font-semibold text-foreground text-sm truncate">
                      {term.term}
                    </span>
                    {term.category === "calculable" && (
                      <span className="flex-shrink-0 bg-accent/15 text-accent text-[10px] font-body font-semibold px-1.5 py-0.5 rounded uppercase">
                        Fórmula
                      </span>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-card border border-t-0 border-border rounded-b-xl px-4 pt-0 pb-4">
                  <p className="text-foreground text-sm font-body leading-relaxed mb-3">
                    {term.definition}
                  </p>

                  {term.formula && (
                    <div className="bg-muted rounded-lg p-3 mb-3">
                      <p className="text-xs text-muted-foreground font-body font-semibold uppercase tracking-wider mb-1.5">
                        Fórmula
                      </p>
                      <p className="text-foreground text-sm font-body font-mono font-semibold">
                        {term.formula}
                      </p>
                      {term.formulaExplanation && (
                        <p className="text-muted-foreground text-xs font-body leading-relaxed mt-2">
                          {parseContent(term.formulaExplanation)}
                        </p>
                      )}
                    </div>
                  )}

                  {term.practicalUse && (
                    <div className="bg-primary/5 border border-primary/15 rounded-lg p-3">
                      <p className="text-xs text-primary font-body font-semibold uppercase tracking-wider mb-1">
                        Uso práctico
                      </p>
                      <p className="text-foreground text-xs font-body leading-relaxed">
                        {term.practicalUse}
                      </p>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}

        <div className="mt-4 mb-2">
          <p className="text-muted-foreground text-xs text-center font-body">
            {filtered.length} término{filtered.length !== 1 ? "s" : ""} · Fuentes: WRB 2006, Soil Taxonomy USDA, INEGI
          </p>
        </div>
      </main>
    </div>
  );
};

export default Glossary;
