import { useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  trigger?: boolean;
};

const formatNumber = (value: number, decimals: number) => {
  if (decimals > 0) {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }
  return Math.round(value).toLocaleString("pt-BR");
};

export function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 3000,
  decimals = 0,
  trigger,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const reset = () => {
    startedRef.current = false;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    setValue(0);
  };

  useEffect(() => {
    if (trigger === false) {
      reset();
      return;
    }
    if (trigger === true) {
      if (startedRef.current) return;
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        setValue(end);
        startedRef.current = true;
        return;
      }
      startedRef.current = true;
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(end * eased);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setValue(end);
          rafRef.current = null;
        }
      };
      rafRef.current = requestAnimationFrame(tick);
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }

    // When no external trigger is provided, observe the element directly.
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      if (prefersReduced) {
        setValue(end);
        return;
      }
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(end * eased);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setValue(end);
          rafRef.current = null;
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            run();
          } else if (!e.isIntersecting && e.boundingClientRect.top > 0) {
            // Reset only after the element has scrolled past the viewport,
            // so the animation replays the next time it comes back into view.
            reset();
          }
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration, trigger]);

  return (
    <span ref={ref}>
      {prefix}
      {formatNumber(value, decimals)}
      {suffix}
    </span>
  );
}
