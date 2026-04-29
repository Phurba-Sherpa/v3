import { useReveal } from "@/hooks/useReveal";

export const About = () => {
  const stats = [
    { value: "4+", label: "Years building" },
    { value: "500+", label: "PRs shipped" },
    { value: "5+", label: "Fintech products" },
    { value: "∞", label: "Cups of chia" },
  ];
  const heading = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary">/ 01</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">About</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid md:grid-cols-12 gap-12">
          <div
            ref={heading.ref}
            className={`md:col-span-7 space-y-6 reveal ${heading.shown ? "is-visible" : ""}`}
          >
            <h2 className="font-serif text-4xl md:text-6xl leading-tight tracking-tight">
              I turn <span className="italic text-primary">legacy chaos</span> into
              interfaces that scale, perform, and feel right.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From rebuilding core banking modules at WOW Finstack, to shipping
              LLM-powered features at SandbayAI and PeakMetrics — I specialize in
              modernizing legacy systems with React, TypeScript, and Next.js.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I care about performance budgets, design systems, mentoring engineers,
              and shipping work that quietly disappears into the user's flow.
            </p>
          </div>
          <div
            ref={grid.ref}
            className={`md:col-span-5 grid grid-cols-2 gap-px bg-border reveal ${grid.shown ? "is-visible" : ""}`}
            style={{ transitionDelay: "150ms" }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`bg-background p-8 hover-lift border border-transparent reveal ${grid.shown ? "is-visible" : ""}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="font-serif text-5xl md:text-6xl text-primary mb-2">{s.value}</div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};