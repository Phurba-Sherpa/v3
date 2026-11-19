import { useEffect, useRef } from "react";
import "./field-cursor.css";

export function FieldCursor() {
  const mark = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = mark.current;
    if (!el) return;
    const media = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) and (forced-colors: none)");
    const hide = () => { delete el.dataset.mode; };
    const move = (e: PointerEvent) => {
      const target = e.target;
      if (!media.matches || e.pointerType !== "mouse" || e.buttons || !(target instanceof Element) || target.closest('.survey-plate svg,input,textarea,select,[contenteditable="true"],[role="dialog"]')) return hide();
      el.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`;
      el.dataset.surface = target.closest(".guide-cover") ? "paper" : "ink";
      el.dataset.mode = target.closest('a[href],button:not(:disabled),[role="button"]') ? "link" : "idle";
    };
    const events = new AbortController();
    const opts = { passive: true, signal: events.signal };
    document.addEventListener("pointermove", move, opts);
    document.documentElement.addEventListener("pointerleave", hide, opts);
    document.addEventListener("pointerdown", hide, opts);
    document.addEventListener("keydown", hide, opts);
    document.addEventListener("visibilitychange", hide, opts);
    window.addEventListener("scroll", hide, { ...opts, capture: true });
    window.addEventListener("blur", hide, opts);
    media.addEventListener("change", hide, opts);
    return () => events.abort();
  }, []);
  return <div ref={mark} className="field-cursor" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M3 10V3h7m8 0h7v7m0 8v7h-7m-8 0H3v-7" stroke="currentColor" strokeWidth="1.5" /></svg></div>;
}
