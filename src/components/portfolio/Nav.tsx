import { useEffect, useState } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

const openCommandMenu = () => {
  window.dispatchEvent(new CustomEvent("open-command-menu"));
};

const links = [
  { href: "#about", label: "About" },
  { href: "#systems", label: "Work" },
  { href: "#work", label: "Experience" },
  { href: "#skills", label: "Toolkit" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const magneticTalk = useMagnetic<HTMLAnchorElement>(0.2);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min((y / docHeight) * 100, 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3.5 backdrop-blur-xl bg-background/70 border-b border-border/80"
          : "py-6"
      }`}
    >
      {/* Whisper-thin 1px scroll progress filament */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-[1.5px] bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-serif text-2xl tracking-tight">
          Phurba<span className="text-primary">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 link-underline"
              >
                <span className="text-primary">0{i + 1}</span> {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openCommandMenu}
            aria-label="Open command menu"
            className="font-mono text-xs uppercase tracking-widest px-3.5 py-2 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all"
          >
            ⌘K
          </button>
          <a
            ref={magneticTalk.ref}
            onMouseMove={magneticTalk.onMouseMove}
            onMouseLeave={magneticTalk.onMouseLeave}
            href="mailto:phurba1404@gmail.com"
            className="font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
          >
            Let's talk
          </a>
        </div>
      </nav>
    </header>
  );
};
