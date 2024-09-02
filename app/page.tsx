import {
  About,
  Header,
  Experience,
  NoteWorthyProjects,
  Contact,
  Projects,
} from "@/components/partials";

export default function Home() {
  return (
    <>
      <Header />
      <div className="main-content">
        <About />
        <Experience />
        <Projects />
        <NoteWorthyProjects />
        <Contact />
      </div>
    </>
  );
}
