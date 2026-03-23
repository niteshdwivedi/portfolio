export function Pill({ children, className = "" }) {
  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${className}`}>
      {children}
    </span>
  );
}

export function SoftCard({ children, className = "", ...props }) {
  return (
    <div className={`rounded-[2rem] glass-panel ${className}`} {...props}>
      {children}
    </div>
  );
}

export function FeatureCard({ title, text, theme = "dark" }) {
  return (
    <div className={`rounded-3xl border p-5 ${theme === "dark" ? "border-white/10 bg-white/5" : "border-slate-200 bg-white/80"}`}>
      <div className="text-base font-semibold">{title}</div>
      <p className={`mt-2 text-sm leading-7 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>{text}</p>
    </div>
  );
}
