import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="grain flex min-h-screen items-center justify-center bg-background text-foreground px-6">
      <div className="max-w-md w-full border border-border p-10 bg-secondary/20 space-y-6">
        <div className="font-mono text-xs uppercase tracking-widest text-primary">
          / 404 — Route Not Found
        </div>
        <h1 className="font-serif text-6xl leading-none tracking-tight">
          Lost in the <span className="italic text-primary">void.</span>
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed font-mono">
          Path <span className="text-foreground">{location.pathname}</span> does not resolve to an active system.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest hover:shadow-[var(--shadow-glow)] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to index</span>
        </a>
      </div>
    </main>
  );
};

export default NotFound;
