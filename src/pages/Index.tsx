import { useCallback } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Systems } from "@/components/portfolio/Systems";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { CommandMenu } from "@/components/portfolio/CommandMenu";

const Index = () => {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const card = (e.target as HTMLElement).closest<HTMLElement>(".hover-lift");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <main
      onMouseMove={handleMouseMove}
      className="grain min-h-screen bg-background text-foreground relative"
    >
      <Nav />
      <CommandMenu />
      <Hero />
      <About />
      <Systems />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
};

export default Index;
