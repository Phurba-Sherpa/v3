import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { SurveyPlate } from "./SurveyPlate";
import "./field-guide.css";

const entries = ["Card analytics", "Report automation", "Retrieval systems", "Code review"];

export const Hero = () => (
  <section id="top" className="guide-cover" aria-labelledby="guide-title">
    <div className="guide-spread">
      <header className="guide-mast">
        <span className="guide-imprint"><b>p/s</b> Phurba Sherpa</span>
        <span className="guide-label">Kathmandu, Nepal</span>
        <a className="guide-label" href="https://docs.google.com/document/d/1RhSYB45D3RgmFeJVRMZBaYDlWBBFcpGaaOl-Bm1wpPw/preview" target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={14}/></a>
      </header>
      <div className="guide-body">
        <div>
          <p className="guide-label guide-kicker">Field guide <span>/</span> Selected engineering work</p>
          <h1 id="guide-title">Systems<br/><em>in practice.</em></h1>
          <p className="guide-byline">Notes from a <strong>full-stack &amp; AI systems engineer</strong> on making fintech software faster and AI tools cheaper to run.</p>
        </div>
        <SurveyPlate />
      </div>
      <nav aria-label="Project contents" className="guide-contents">
        <h2 className="guide-label">In this guide <ArrowDownRight size={16}/></h2>
        {entries.map((title, i) => <a key={title} href={`#system-0${i+1}`}><small>0{i+1}</small><span>{title}</span><ArrowDownRight size={16}/></a>)}
      </nav>
    </div>
  </section>
);
