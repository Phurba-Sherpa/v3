import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

interface StatSpec {
  finalText: string;
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const stats: StatSpec[] = [
  {
    finalText: "98.6%",
    target: 98.6,
    decimals: 1,
    suffix: "%",
    label: "Prompt payload reduction (300KB → 4KB)",
  },
  {
    finalText: "<20s",
    target: 20,
    prefix: "<",
    suffix: "s",
    label: "Analytics latency (down from 80s)",
  },
  {
    finalText: "82%",
    target: 82,
    suffix: "%",
    label: "Autonomous agent cost reduction ($20 → $3.50)",
  },
  {
    finalText: "500+",
    target: 500,
    suffix: "+",
    label: "Production PRs shipped in 5 months",
  },
];

const AnimatedStatValue = ({
  spec,
  active,
}: {
  spec: StatSpec;
  active: boolean;
}) => {
  const [display, setDisplay] = useState<string>(spec.finalText);

  useEffect(() => {
    if (!active || typeof window === "undefined") return;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(spec.finalText);
      return;
    }

    let rafId = 0;
    const duration = 1100;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart curve
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = spec.target * eased;
      const formatted = spec.decimals
        ? current.toFixed(spec.decimals)
        : Math.round(current).toString();
      setDisplay(`${spec.prefix ?? ""}${formatted}${spec.suffix ?? ""}`);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplay(spec.finalText);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [active, spec]);

  return <span>{display}</span>;
};

export const About = () => {
  const heading = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary">/ 01</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            About
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          <div
            ref={heading.ref}
            className={`md:col-span-7 space-y-6 reveal ${
              heading.shown ? "is-visible" : ""
            }`}
          >
            <h2 className="font-serif text-4xl md:text-6xl leading-tight tracking-tight">
              I turn <span className="italic text-primary">legacy chaos</span>{" "}
              into systems that scale, perform, and feel right.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Currently at <span className="text-foreground">Techkraft Inc</span>,
              I own technical delivery across the full stack—backend services
              (NestJS, PostgreSQL), frontend applications (React, TypeScript), and
              Docker CI/CD pipelines across two production products (Loadrunner
              and Agent as a Service).
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From rebuilding core banking modules and conversational analytics
              at <span className="text-foreground">WOW Finstack</span> to
              shipping autonomous research agents and custom MCP servers at{" "}
              <span className="text-foreground">PeakMetrics</span> — I care
              deeply about performance budgets, clean architecture, and shipping
              work that quietly disappears into the user's flow.
            </p>
          </div>

          <div
            ref={grid.ref}
            className={`md:col-span-5 grid grid-cols-2 gap-px bg-border reveal ${
              grid.shown ? "is-visible" : ""
            }`}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-background p-3 sm:p-5 lg:p-8 flex flex-col justify-between"
              >
                <div className="font-serif text-4xl lg:text-5xl text-primary mb-4 tabular-nums">
                  <AnimatedStatValue spec={s} active={grid.shown} />
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground leading-relaxed">
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
