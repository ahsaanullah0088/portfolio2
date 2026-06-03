/**
 * Aurora — the animated ambient background. Layered radial gradient blobs that
 * drift slowly, plus a faint grid and a top vignette. Pure CSS animation, GPU
 * friendly, and fully decorative (aria-hidden).
 */
export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-[rgb(var(--bg))]" />

      {/* drifting aurora blobs */}
      <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vw] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px] animate-aurora-1 dark:bg-brand-500/25" />
      <div className="absolute right-[-10%] top-[20%] h-[50vh] w-[45vw] rounded-full bg-cyan-500/15 blur-[120px] animate-aurora-2 dark:bg-cyan-500/20" />
      <div className="absolute bottom-[-15%] left-[-5%] h-[45vh] w-[40vw] rounded-full bg-indigo-500/15 blur-[120px] animate-aurora-1 dark:bg-brand-700/25" />

      {/* faint grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.5] mask-fade-b dark:opacity-100" />

      {/* top + bottom vignette to seat the content */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[rgb(var(--bg))] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgb(var(--bg))] to-transparent" />
    </div>
  );
}
