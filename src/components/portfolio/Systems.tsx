import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

interface SelectedWorkItem {
  index: string;
  company: string;
  metric: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

const works: SelectedWorkItem[] = [
  {
    index: "01",
    company: "WOW Finstack · Singapore",
    metric: "300 KB → 4 KB",
    title: "Conversational Card Transaction Analytics Engine",
    description:
      "Natural-language analytics over 3 months of card transaction history—surfacing fee leakage, merchant performance, and decline trends with live charts. Solved an 80-second LLM bottleneck by pre-aggregating raw transaction rows into weekly statistical summaries (mean, median, std dev), cutting prompt size to 4 KB and response time to under 20s.",
    tags: ["React", "TypeScript", "Statistical Aggregation", "LLM Analytics"],
  },
  {
    index: "02",
    company: "PeakMetrics · United States",
    metric: "$20 → $3.50 / run",
    title: "Kortix Suna Autonomous PDF Report Pipeline",
    description:
      "Extended the Kortix Suna open-source autonomous agent inside Daytona sandboxes with Tavily/Exa research to compile multi-page PDF intelligence reports. Diagnosed the true cost and latency bottleneck—switching orchestration to Kimi and consolidating 10–15 sequential tool calls into a single HTML compile exported via Urlbox.",
    tags: ["Kortix Suna", "Daytona", "Vercel AI SDK", "Portkey", "Next.js"],
  },
  {
    index: "03",
    company: "PeakMetrics & WOW Finstack",
    metric: "MCP + pgvector",
    title: "Custom Typeform MCP Server & Product-Scoped RAG",
    description:
      "Built a custom Node.js Model Context Protocol (MCP) server abstracting Typeform's complex branching API to generate structured surveys on demand, alongside an internal RAG knowledge base (LangChain, Ollama, Supabase + pgvector, LangSmith) scoped per product namespace for fast, high-precision retrieval.",
    tags: ["Node.js MCP", "LangChain", "pgvector", "Supabase", "LangSmith"],
  },
  {
    index: "04",
    company: "Open Source · GitHub Action",
    metric: "Zero API Cost",
    title: "ollama-pr-review-gh-action",
    description:
      "Created an open-source GitHub Action for automated pull-request reviews powered by Ollama's free cloud models. Engineered dynamic project-context injection so engineering teams can enforce their own internal coding guidelines in CI/CD—adopted company-wide in production.",
    tags: ["GitHub Actions", "Ollama", "TypeScript", "Open Source"],
    href: "https://github.com/Phurba-Sherpa/ollama-pr-review-gh-action",
  },
];

const WorkRow = ({ item }: { item: SelectedWorkItem }) => {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <article
      id={`system-${item.index}`}
      ref={ref}
      className={`bg-background py-8 md:py-12 border-t border-border reveal ${
        shown ? "is-visible" : ""
      }`}
    >
      <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-start">
        <div className="md:col-span-4 space-y-2">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {item.index} — {item.company}
          </div>
          <div className="font-serif italic text-4xl md:text-5xl text-primary leading-none pt-1">
            {item.metric}
          </div>
        </div>

        <div className="md:col-span-8 space-y-4">
          <h3 className="font-serif text-3xl md:text-4xl leading-tight break-words">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 hover:text-primary"
              >
                <span>{item.title}</span>
                <ArrowUpRight className="w-6 h-6 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            ) : (
              item.title
            )}
          </h3>

          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {item.tags.map((tag) => (
              <span key={tag} className="text-foreground/80">
                <span className="text-primary mr-1.5">·</span>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export const Systems = () => {
  const heading = useReveal<HTMLHeadingElement>();

  return (
    <section id="systems" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary">/ 02</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Selected Work &amp; Open Source
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2
          ref={heading.ref}
          className={`font-serif text-5xl md:text-7xl leading-none tracking-tight mb-20 max-w-3xl reveal ${
            heading.shown ? "is-visible" : ""
          }`}
        >
          Selected <span className="italic text-primary">work.</span>
        </h2>

        <div className="space-y-px bg-border">
          {works.map((item) => (
            <WorkRow key={item.index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
