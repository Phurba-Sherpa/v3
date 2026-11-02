import { useReveal } from "@/hooks/useReveal";

const experience = [
  {
    company: "Techkraft Inc",
    role: "Full-Stack Engineer",
    location: "Kathmandu, Nepal",
    period: "Aug 2026 — Present",
    points: [
      "Owned end-to-end technical delivery across two production products (Loadrunner and Agent as a Service), architecting backend services, database schemas, frontend applications, and DevOps infrastructure.",
      "Built and maintained backend services and REST APIs with NestJS and PostgreSQL; implemented authentication with better-auth.",
      "Delivered React and TypeScript frontends for both products, owning component architecture, state management, and API contracts.",
      "Managed all DevOps responsibilities: Docker containerization, CI/CD deployment pipelines, and environment configuration.",
    ],
  },
  {
    company: "WOW Finstack",
    role: "Full-Stack + AI Integration Engineer",
    location: "Singapore",
    period: "Jan 2023 — Aug 2026",
    points: [
      "Built a conversational analytics system over 3 months of card transaction data — pre-aggregating raw rows into weekly statistical summaries to cut prompt size from 300 KB to 4 KB and latency from 80s to under 20s.",
      "Built an internal product-scoped RAG knowledge base using LangChain, Ollama, Supabase + pgvector, and LangSmith.",
      "Adopted custom open-source AI PR review tooling (ollama-pr-review-gh-action) company-wide to automate code reviews.",
      "Modernized core modules (Debit, Credit, Card Management, iBank) in React and TypeScript; designed and owned GitHub Actions + Docker + SSH CI/CD pipelines.",
    ],
  },
  {
    company: "PeakMetrics",
    role: "Software Engineer · Contract",
    location: "United States",
    period: "Mar 2025 — Oct 2025",
    points: [
      "Extended Kortix Suna (open-source autonomous agent) with structured PDF report generation in a Daytona sandbox using Tavily/Exa.",
      "Reduced report generation cost from ~$20/run to ~$3–4 and time from ~10 min to ~5 min by switching orchestration to Kimi and consolidating 10–15 tool calls into a single HTML compile.",
      "Built a custom Node.js MCP server for Typeform survey generation and an LLM workspace summary + slide PDF pipeline with Next.js, Vercel AI SDK, Portkey, and Urlbox.",
    ],
  },
  {
    company: "Kairos Wealth",
    role: "Software Engineer · Contract",
    location: "Singapore",
    period: "Aug 2024 — Mar 2025",
    points: [
      "Delivered 500+ production contributions in 5 months across complex wealth-management codebases.",
      "Modernized legacy UI by breaking monolithic pages into isolated, reusable components with code splitting.",
      "Optimized API request handling, eliminating unnecessary re-renders and reducing redundant network calls.",
    ],
  },
  {
    company: "IT Village Technology",
    role: "Backend Developer",
    location: "Pokhara, Nepal",
    period: "Apr 2022 — Jan 2023",
    points: [
      "Migrated critical financial systems from Oracle to PostgreSQL, improving database reliability and maintainability.",
      "Implemented transaction-handling features for a high-availability card issuing engine.",
      "Developed REST APIs in Go (Gin) for a Card Management System with Liquibase migrations, SQLC, and Docker.",
    ],
  },
];

const RevealJob = ({ children }: { children: React.ReactNode }) => {
  const { ref, shown } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`group bg-background p-8 md:p-12 hover-lift border border-transparent reveal ${
        shown ? "is-visible" : ""
      }`}
    >
      {children}
    </article>
  );
};

export const Experience = () => {
  const heading = useReveal<HTMLHeadingElement>();

  return (
    <section id="work" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary">/ 03</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Experience
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2
          ref={heading.ref}
          className={`font-serif text-5xl md:text-7xl leading-none tracking-tight mb-20 max-w-3xl reveal ${
            heading.shown ? "is-visible" : ""
          }`}
        >
          A track record of <span className="italic text-primary">shipping</span>{" "}
          across fintech, AI &amp; banking.
        </h2>

        <div className="space-y-px bg-border">
          {experience.map((job) => (
            <RevealJob key={job.company + job.period}>
              <div className="grid md:grid-cols-12 gap-6 md:gap-12">
                <div className="md:col-span-4 space-y-2">
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {job.period}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight transition-colors duration-500 group-hover:text-primary">
                    {job.company}
                  </h3>
                  <div className="font-mono text-xs text-primary">
                    {job.location}
                  </div>
                </div>
                <div className="md:col-span-8 space-y-4">
                  <div className="font-mono text-sm uppercase tracking-widest text-foreground">
                    {job.role}
                  </div>
                  <ul className="space-y-3">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-4 text-muted-foreground leading-relaxed"
                      >
                        <span className="text-primary mt-1.5 shrink-0">—</span>
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
