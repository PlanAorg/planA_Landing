import { useRef, useState, useEffect } from "react";

export function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

type Direction = "up" | "left" | "right" | "pop";

export function rv(
  visible: boolean,
  delay = 0,
  dir: Direction = "up"
): React.CSSProperties {
  const transforms: Record<Direction, [string, string]> = {
    up:    ["translateY(0px)", "translateY(32px)"],
    left:  ["translateX(0px)", "translateX(-32px)"],
    right: ["translateX(0px)", "translateX(32px)"],
    pop:   ["scale(1) translateY(0px)", "scale(0.88) translateY(12px)"],
  };
  const [show, hide] = transforms[dir];
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? show : hide,
    transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  };
}
