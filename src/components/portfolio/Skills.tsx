import { useReveal } from "@/hooks/useReveal";

const groups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "Material UI",
      "Storybook",
    ],
  },
  { title: "State & Data", items: ["React Query", "Redux", "REST", "GraphQL"] },
  {
    title: "Testing",
    items: ["Jest", "React Testing Library", "Cypress", "Selenium", "Pytest"],
  },
  {
    title: "Backend & Infra",
    items: ["FastAPI", "PostgreSQL", "MySQL", "Oracle", "Docker", "Webpack"],
  },
  {
    title: "AI",
    items: [
      "Prompt Engineering",
      "MCP",
      "Tool calling",
      "AI Agents",
      "Agentic AI",
    ],
  },
  { title: "Dev Tools", items: ["Linux", "i3", "Vim", "Tmux", "Vimium"] },
];

const marqueeWords = [
  "Vim",
  "Tmux",
  "Next.js",
  "Storybook",
  "AI Agents",
  "FastAPI",
  "Storybook",
  "GraphQL",
  "Performance",
  "Design Systems",
];

const RevealCard = ({
  title,
  items,
  delay,
}: {
  title: string;
  items: string[];
  delay: number;
}) => {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`bg-background p-8 hover-lift border border-transparent reveal ${shown ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
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
  return (
    <section
      id="skills"
      className="relative py-32 border-t border-border overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary">/ 03</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Toolkit
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2 className="font-serif text-5xl md:text-7xl leading-none tracking-tight mb-16 max-w-3xl">
          The <span className="italic text-primary">tools</span> behind the
          work.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {groups.map((g, idx) => (
            <RevealCard
              key={g.title}
              title={g.title}
              items={g.items}
              delay={idx * 80}
            />
          ))}
        </div>
      </div>

      <div className="mt-24 relative w-full overflow-hidden">
        <div className="flex marquee whitespace-nowrap">
          {[
            ...marqueeWords,
            ...marqueeWords,
            ...marqueeWords,
            ...marqueeWords,
          ].map((w, i) => (
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

