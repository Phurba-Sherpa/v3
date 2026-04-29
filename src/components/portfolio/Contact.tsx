import { ArrowUpRight, Mail } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const links = [
  { label: "GitHub", href: "https://github.com/phurba-sherpa", handle: "@phurba-sherpa" },
  { label: "LinkedIn", href: "https://linkedin.com/in/phurbas", handle: "@phurbas" },
  { label: "Medium", href: "https://medium.com/@phurba", handle: "@phurba" },
];

export const Contact = () => {
  const heading = useReveal<HTMLDivElement>();
  const cta = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary">/ 04</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Contact</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div
            ref={heading.ref}
            className={`md:col-span-8 reveal ${heading.shown ? "is-visible" : ""}`}
          >
            <h2 className="font-serif text-6xl md:text-8xl leading-[0.95] tracking-tighter">
              Have a project<br />
              in mind? <span className="italic accent-shimmer">Let's build it.</span>
            </h2>
          </div>
          <div
            ref={cta.ref}
            className={`md:col-span-4 reveal ${cta.shown ? "is-visible" : ""}`}
            style={{ transitionDelay: "150ms" }}
          >
            <a
              href="mailto:phurba1404@gmail.com"
              className="group flex items-center justify-between gap-4 p-6 rounded-2xl bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 transition-all duration-500"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest opacity-70">Email me</div>
                <div className="font-serif text-xl mt-1">phurba1404@gmail.com</div>
              </div>
              <Mail className="w-6 h-6 transition-transform group-hover:rotate-12" />
            </a>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-px bg-border">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group bg-background p-8 flex items-center justify-between hover-lift border border-transparent"
            >
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {l.label}
                </div>
                <div className="font-serif text-2xl">{l.handle}</div>
              </div>
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>

        <footer className="mt-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-border">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            © 2026 Phurba Sherpa — Crafted in Pokhara
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Built with React · TypeScript · Tailwind
          </div>
        </footer>
      </div>
    </section>
  );
};