export function CyberBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 cyber-grid" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full bg-accent/15 blur-[120px]" />
    </div>
  );
}