import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-background/60 border-b border-border" : "py-6"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl tracking-tight">
          Phurba<span className="text-primary">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <span className="text-primary">0{i + 1}</span> {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:phurba1404@gmail.com"
          className="font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
};