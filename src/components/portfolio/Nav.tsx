import { List, MoveUpRight } from "lucide-react";

export const Nav = () => (
  <nav aria-label="Field guide navigation" className="guide-dock">
    <button type="button" aria-label="Index: open command menu" aria-haspopup="dialog" onClick={() => window.dispatchEvent(new CustomEvent("open-command-menu"))}>
      <List size={16} aria-hidden="true" /> Index
    </button>
    <a href="#contact">Contact <MoveUpRight size={14} aria-hidden="true" /></a>
  </nav>
);
