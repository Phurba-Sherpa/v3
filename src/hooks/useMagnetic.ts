import { useCallback, useRef } from "react";

/**
 * Spring-damped magnetic pull for interactive pill CTAs.
 * Gently translates the element toward the cursor on hover and snaps back smoothly on leave.
 */
export const useMagnetic = <T extends HTMLElement = HTMLAnchorElement>(
  strength = 0.22,
) => {
  const ref = useRef<T | null>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
      const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    },
    [strength],
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0px, 0px, 0)";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
};
