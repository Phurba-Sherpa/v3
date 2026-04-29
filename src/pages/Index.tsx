import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="grain min-h-screen bg-background text-foreground relative">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;
