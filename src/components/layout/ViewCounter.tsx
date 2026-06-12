'use client';

import { useEffect, useState } from 'react';
import { Eye } from '@/components/ui/Icons';

/**
 * Live page-view counter. Increments once per browser session (via
 * sessionStorage) and just reads the total on subsequent views. Renders
 * nothing until the /api/views endpoint returns a real number, so it stays
 * invisible until Upstash Redis is configured.
 */
export function ViewCounter({ className }: { className?: string }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    const alreadyCounted =
      typeof window !== 'undefined' && sessionStorage.getItem('viewed') === '1';

    fetch('/api/views', { method: alreadyCounted ? 'GET' : 'POST' })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!active || !data || typeof data.count !== 'number') return;
        setCount(data.count);
        if (!alreadyCounted) sessionStorage.setItem('viewed', '1');
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  if (count === null) return null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs text-muted ${className ?? ''}`}
      title="Total page views"
    >
      <Eye className="h-3.5 w-3.5 text-brand-400" />
      <span className="font-medium text-[rgb(var(--text))]">
        {count.toLocaleString()}
      </span>
      views
    </span>
  );
}
