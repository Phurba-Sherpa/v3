import { ArrowDownRight, Download, FileText } from "lucide-react";
import { HeroCanvas } from "./HeroCanvas";
import { useMagnetic } from "@/hooks/useMagnetic";

const RESUME_DOC_ID = "1RhSYB45D3RgmFeJVRMZBaYDlWBBFcpGaaOl-Bm1wpPw";
const RESUME_VIEW_URL = `https://docs.google.com/document/d/${RESUME_DOC_ID}/preview`;
const RESUME_PDF_URL = `https://docs.google.com/document/d/${RESUME_DOC_ID}/export?format=pdf`;

export const Hero = () => {
  const magneticCta = useMagnetic<HTMLAnchorElement>(0.18);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Interactive 3D Geodesic Wireframe & Node Field */}
      <HeroCanvas />

      {/* Warm ambient lime orb */}
      <div
        className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl animate-float-orb pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-8 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Full-Stack &amp; AI Systems Engineer · Available for new opportunities
          </span>
        </div>

        <h1
          className="font-serif text-[clamp(3.2rem,10.5vw,10.5rem)] leading-[0.9] tracking-tighter mb-10 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-gradient">Full-stack</span>
          <br />
          <span className="italic accent-shimmer text-glow">engineer</span>
          <span className="text-foreground">,</span>
          <br />
          <span className="text-gradient">building</span>{" "}
          <span className="italic">AI systems</span>
          <br />
          <span className="text-foreground/90">that scale.</span>
        </h1>

        <div
          className="grid md:grid-cols-3 gap-10 max-w-4xl items-end animate-fade-up"
          style={{ animationDelay: "0.28s" }}
        >
          <p className="md:col-span-2 text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground">Phurba Sherpa</span> — a
            full-stack and AI integration engineer based in Kathmandu, Nepal.
            For 4+ years I've been building production fintech platforms,
            autonomous agents, and fast React &amp; TypeScript interfaces across
            Singapore, the US, and Nepal.
          </p>

          <div className="flex flex-col gap-3">
            <a
              ref={magneticCta.ref}
              onMouseMove={magneticCta.onMouseMove}
              onMouseLeave={magneticCta.onMouseLeave}
              href="#systems"
              className="group inline-flex items-center justify-between gap-4 px-6 py-4 rounded-full bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              View selected work
              <ArrowDownRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45 group-hover:translate-x-0.5" />
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={RESUME_VIEW_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-border font-mono text-[10px] uppercase tracking-widest text-foreground hover:border-primary hover:text-primary transition-all duration-300"
              >
                <FileText className="w-3.5 h-3.5" />
                View resume
              </a>
              <a
                href={RESUME_PDF_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-border font-mono text-[10px] uppercase tracking-widest text-foreground hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                Download PDF
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden lg:flex flex-col items-end gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground drift">
          <span>27.7172° N</span>
          <span>85.3240° E</span>
          <span className="text-primary">— Kathmandu</span>
        </div>
      </div>
    </section>
  );
};
