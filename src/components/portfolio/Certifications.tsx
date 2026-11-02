import { useReveal } from "@/hooks/useReveal";

interface CertificationItem {
  year: string;
  issuer: string;
  title: string;
  badge?: string;
  points: string[];
  tags?: string[];
}

const certifications: CertificationItem[] = [
  {
    year: "2026",
    issuer: "AWS AI & ML Scholarship · Udacity",
    title: "AWS Future Agentic Engineer Nanodegree",
    badge: "Scholarship Recipient",
    points: [
      "Mastered Amazon Bedrock & Amazon Nova foundation models, advanced prompting & reasoning patterns (Chain-of-Thought, ReAct), and production RAG pipelines.",
      "Architected single-agent systems with tool calling, persistent memory, and external APIs, scaling to multi-agent orchestration with Amazon Bedrock Agents.",
      "Built two capstone agentic systems: an autonomous Supply Chain AI Agent and a Multi-Agent Travel Concierge System.",
    ],
    tags: [
      "Amazon Bedrock",
      "Amazon Nova",
      "Multi-Agent Orchestration",
      "ReAct & CoT",
      "RAG",
    ],
  },
  {
    year: "2023",
    issuer: "HarvardX · Harvard University",
    title: "CS50x: Introduction to Computer Science",
    points: [
      "Rigorous foundation in computer science, algorithms, data structures, memory management, C, Python, SQL, and web application architecture.",
    ],
    tags: ["Algorithms", "Data Structures", "C", "Python", "SQL"],
  },
  {
    year: "2023",
    issuer: "Coursera",
    title: "Responsive Web Design Bootcamp",
    points: [
      "Fluid grid systems, modern CSS architecture, semantic HTML5, and cross-device accessibility patterns.",
    ],
    tags: ["Responsive Architecture", "Semantic HTML", "CSS Grid & Flexbox"],
  },
];

const CertRow = ({ item }: { item: CertificationItem }) => {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`group bg-background p-8 md:p-12 hover-lift border border-transparent reveal ${
        shown ? "is-visible" : ""
      }`}
    >
      <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-start">
        <div className="md:col-span-4 space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              {item.year}
            </span>
            {item.badge && (
              <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-primary/40 text-primary">
                {item.badge}
              </span>
            )}
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {item.issuer}
          </div>
        </div>

        <div className="md:col-span-8 space-y-4">
          <h3 className="font-serif text-3xl md:text-4xl leading-tight transition-colors duration-500 group-hover:text-primary">
            {item.title}
          </h3>

          <ul className="space-y-3">
            {item.points.map((p) => (
              <li
                key={p}
                className="flex gap-4 text-muted-foreground leading-relaxed"
              >
                <span className="text-primary mt-1.5 shrink-0">—</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>

          {item.tags && (
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {item.tags.map((tag) => (
                <span key={tag} className="text-foreground/80">
                  <span className="text-primary mr-1.5">·</span>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export const Certifications = () => {
  const heading = useReveal<HTMLHeadingElement>();
  const edu = useReveal<HTMLDivElement>();

  return (
    <section
      id="certifications"
      className="relative py-32 px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary">/ 05</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Certifications &amp; Education
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2
          ref={heading.ref}
          className={`font-serif text-5xl md:text-7xl leading-none tracking-tight mb-20 max-w-3xl reveal ${
            heading.shown ? "is-visible" : ""
          }`}
        >
          Continuous <span className="italic text-primary">mastery</span> in
          agentic AI &amp; computer science.
        </h2>

        <div className="space-y-px bg-border">
          {certifications.map((cert) => (
            <CertRow key={cert.title} item={cert} />
          ))}

          {/* Academic Degree Row */}
          <div
            ref={edu.ref}
            className={`group bg-background p-8 md:p-12 hover-lift border border-transparent reveal ${
              edu.shown ? "is-visible" : ""
            }`}
          >
            <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-start">
              <div className="md:col-span-4 space-y-2">
                <div className="font-mono text-xs uppercase tracking-widest text-primary">
                  2023 · Academic Degree
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Soch College of IT · Pokhara, Nepal
                </div>
              </div>

              <div className="md:col-span-8 space-y-2">
                <h3 className="font-serif text-3xl md:text-4xl leading-tight transition-colors duration-500 group-hover:text-primary">
                  Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Four-year undergraduate degree focused on software engineering, database
                  management systems, operating systems, computer networks, and artificial
                  intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
