'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Counts up to `value` once it scrolls into view. Falls back to the final
 * value immediately when reduced motion is requested.
 */
export function Counter({
  value,
  duration = 1400,
  className,
}: {
  value: string; // e.g. "15", "5.0"
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const target = parseFloat(value) || 0;
  const decimals = value.includes('.') ? value.split('.')[1].length : 0;
  const [display, setDisplay] = useState(decimals ? '0'.padEnd(decimals + 2, '0') : '0');

  useEffect(() => {
    if (!inView) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || target === 0) {
      setDisplay(target.toFixed(decimals));
      return;
    }

    let raf = 0;
    let startTs = 0;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      setDisplay((target * ease(p)).toFixed(decimals));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
