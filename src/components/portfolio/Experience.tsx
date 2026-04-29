const experience = [
  {
    company: "WOW Finstack",
    role: "Frontend Engineer",
    location: "Singapore",
    period: "Jan 2023 — Present",
    points: [
      "Built LLM-powered features end-to-end: financial transaction analysis, AI dashboards.",
      "Modernized a legacy financial platform with React + TypeScript.",
      "Led frontend for Debit, Credit, iBank, and Card Management products.",
      "Owned core Card Management for an Israeli banking client.",
      "Mentored engineers, ran code reviews, set the team's coding standards.",
    ],
  },
  {
    company: "SandbayAI",
    role: "Full Stack Engineer · Contract",
    location: "Singapore",
    period: "Jun 2025 — Oct 2025",
    points: [
      "Built React frontends for AI-driven PDF and PPTX generation.",
      "Designed FastAPI endpoints bridging frontend and AI services.",
      "Integrated Typeform-based survey workflows.",
    ],
  },
  {
    company: "PeakMetrics",
    role: "Frontend Engineer · Contract",
    location: "United States",
    period: "Mar 2025 — Jun 2025",
    points: [
      "Modernized a large legacy system in Next.js + TypeScript.",
      "Shipped LLM-powered PPTX generation from narrative inputs.",
      "Maintained quality with Storybook, isolation, structured reviews.",
    ],
  },
  {
    company: "Kairos Wealth",
    role: "Frontend Engineer · Contract",
    location: "Singapore",
    period: "Aug 2024 — Mar 2025",
    points: [
      "Delivered 500+ production contributions in 5 months.",
      "Restructured complex codebases for long-term maintainability.",
      "Optimized API handling, reduced unnecessary re-renders.",
    ],
  },
  {
    company: "IT Village Technology",
    role: "Backend Developer",
    location: "Pokhara, Nepal",
    period: "Apr 2022 — Jan 2023",
    points: [
      "Migrated critical systems Oracle → PostgreSQL.",
      "Built REST APIs in Go/Gin for a Card Management System.",
      "Containerized dev environments with Docker.",
    ],
  },
];

import { useReveal } from "@/hooks/useReveal";

const RevealJob = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
  const { ref, shown } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`group bg-background p-8 md:p-12 hover-lift border border-transparent transition-all reveal ${shown ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </article>
  );
};

export const Experience = () => {
  return (
    <section id="work" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary">/ 02</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Experience</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2 className="font-serif text-5xl md:text-7xl leading-none tracking-tight mb-20 max-w-3xl">
          A track record of <span className="italic text-primary">shipping</span> across fintech, AI & banking.
        </h2>

        <div className="space-y-px bg-border">
          {experience.map((job, idx) => (
            <RevealJob key={job.company + job.period} delay={idx * 80}>
              <div className="grid md:grid-cols-12 gap-6 md:gap-12">
                <div className="md:col-span-4 space-y-2">
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {job.period}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight transition-colors duration-500 group-hover:text-primary">
                    {job.company}
                  </h3>
                  <div className="font-mono text-xs text-primary">{job.location}</div>
                </div>
                <div className="md:col-span-8 space-y-4">
                  <div className="font-mono text-sm uppercase tracking-widest text-foreground">
                    {job.role}
                  </div>
                  <ul className="space-y-3">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-4 text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-2 shrink-0">—</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealJob>
          ))}
        </div>
      </div>
    </section>
  );
};