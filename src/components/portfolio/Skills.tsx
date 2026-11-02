import { useReveal } from "@/hooks/useReveal";

const groups = [
  {
    title: "AI & LLM",
    items: [
      "LangChain",
      "Vercel AI SDK",
      "RAG Pipelines",
      "Agentic Workflows",
      "MCP (Client + Server)",
      "LangSmith & Langfuse",
      "Portkey & Ollama",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "NestJS",
      "Node.js",
      "FastAPI (Python)",
      "Go (Gin)",
      "REST & GraphQL",
      "better-auth",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Storybook",
      "React Query & Redux",
      "ARIA / WCAG",
    ],
  },
  {
    title: "Vector & Databases",
    items: [
      "PostgreSQL",
      "pgvector",
      "Supabase",
      "MySQL & Oracle",
      "Liquibase",
      "SQLC",
    ],
  },
  {
    title: "CI/CD & Quality",
    items: [
      "GitHub Actions",
      "Docker & Compose",
      "SSH Deployment",
      "Bun",
      "Jest & Testing Library",
      "Cypress & Pytest",
    ],
  },
  {
    title: "Environment",
    items: [
      "Ubuntu Linux",
      "Neovim",
      "Tmux",
      "i3 Window Manager",
      "Ghostty",
      "GitHub CLI & Bash",
    ],
  },
];

const marqueeWords = [
  "LangChain",
  "pgvector",
  "NestJS",
  "Next.js",
  "MCP",
  "Go",
  "Neovim",
  "Ghostty",
  "AI Agents",
  "Docker",
];

const RevealCard = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`bg-background p-8 md:p-10 hover-lift border border-transparent reveal ${
        shown ? "is-visible" : ""
      }`}
    >
      <div className="font-mono text-xs uppercase tracking-widest text-primary mb-6">
        {title}
      </div>
      <ul className="space-y-2">
        {items.map((i) => (
          <li
            key={i}
            className="font-serif text-2xl text-foreground/90 transition-colors duration-300 hover:text-primary cursor-default"
          >
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Skills = () => {
  const heading = useReveal<HTMLHeadingElement>();

  return (
    <section
      id="skills"
      className="relative py-32 border-t border-border overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary">/ 04</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Toolkit
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2
          ref={heading.ref}
          className={`font-serif text-5xl md:text-7xl leading-none tracking-tight mb-16 max-w-3xl reveal ${
            heading.shown ? "is-visible" : ""
          }`}
        >
          The <span className="italic text-primary">tools</span> behind the work.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {groups.map((g) => (
            <RevealCard key={g.title} title={g.title} items={g.items} />
          ))}
        </div>
      </div>

      <div className="mt-24 relative w-full overflow-hidden">
        <div className="flex marquee whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span
              key={i}
              className="font-serif italic text-7xl md:text-9xl text-muted-foreground/30 px-8 shrink-0"
            >
              {w} <span className="text-primary not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
