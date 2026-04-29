import { ArrowDownRight, Download, FileText } from "lucide-react";

const RESUME_DOC_ID = "1RhSYB45D3RgmFeJVRMZBaYDlWBBFcpGaaOl-Bm1wpPw";

const RESUME_VIEW_URL = `https://docs.google.com/document/d/${RESUME_DOC_ID}/preview`;
const RESUME_PDF_URL = `https://docs.google.com/document/d/${RESUME_DOC_ID}/export?format=pdf`;

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* glowing orb */}
      <div
        className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl animate-float-orb pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(280 80% 60%) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-8 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Available for new opportunities
          </span>
        </div>

        <h1
          className="font-serif text-[clamp(3rem,11vw,11rem)] leading-[0.9] tracking-tighter mb-8 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-gradient">Frontend</span>
          <br />
          <span className="italic accent-shimmer text-glow">engineer</span>
          <span className="text-foreground">,</span>
          <br />
          <span className="text-gradient">crafting</span>{" "}
          <span className="font-sans not-italic text-3xl md:text-5xl align-middle text-muted-foreground tracking-normal">
            UIs that
          </span>
          <br />
          <span className="italic">feel inevitable.</span>
        </h1>

        <div
          className="grid md:grid-cols-3 gap-8 max-w-4xl items-end animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="md:col-span-2 text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground">Phurba Sherpa</span> — a
            frontend engineer based in Pokhara, Nepal. For ~4 years I've been
            building scalable, performant React & TypeScript apps for fintech,
            AI, and banking products across Singapore, the US, and Israel.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="#work"
              className="group inline-flex items-center justify-between gap-4 px-6 py-4 rounded-full bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-all duration-500"
            >
              View my work
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
          <span>27.6766° N</span>
          <span>83.9806° E</span>
          <span className="text-primary">— Pokhara</span>
        </div>
      </div>
    </section>
  );
};
