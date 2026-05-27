import { motion } from "framer-motion";
import { Shield, AlertTriangle, CheckCircle2, Activity, Lock, Globe } from "lucide-react";

export function ThreatPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto w-full max-w-5xl"
    >
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-brand opacity-20 blur-3xl" />
      <div className="glass-strong overflow-hidden rounded-2xl shadow-elevated">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-border/60 bg-surface/40 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          </div>
          <div className="font-mono text-[11px] text-muted-foreground">scamshield.app/console</div>
          <div className="flex items-center gap-1.5 text-[11px] text-success">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" /> Live
          </div>
        </div>

        <div className="grid gap-4 p-5 md:grid-cols-5">
          {/* Input panel */}
          <div className="md:col-span-2">
            <div className="rounded-xl border border-border/60 bg-surface/60 p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">SMS Capture</span>
                <span className="rounded-full bg-danger/10 px-2 py-0.5 font-mono text-[10px] text-danger">FLAGGED</span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">
                <span className="font-semibold">URGENT:</span> Your HDFC account has been suspended. Verify KYC within 24h to avoid closure →
                <span className="text-primary"> hdfc-secure-verify.co/login</span>
              </p>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
                <Globe className="h-3 w-3" />
                <span className="font-mono">Sender: +91 90••• ••432</span>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              {[
                { label: "Urgency manipulation", level: 92 },
                { label: "Suspicious domain", level: 97 },
                { label: "Fake authority", level: 84 },
                { label: "Credential harvesting", level: 88 },
              ].map((s) => (
                <div key={s.label} className="rounded-lg border border-border/60 bg-surface/40 p-2.5">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs text-foreground/80">{s.label}</span>
                    <span className="font-mono text-[11px] text-danger">{s.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted/40">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${s.level}%` }}
                      transition={{ duration: 1.2, delay: 0.6 }}
                      className="h-full rounded-full bg-gradient-to-r from-warning to-danger"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verdict */}
          <div className="md:col-span-3">
            <div className="relative overflow-hidden rounded-xl border border-danger/30 bg-danger/5 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-danger" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-danger">Threat Verdict</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground">High-risk phishing attempt</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Impersonates HDFC Bank using a lookalike domain and urgency manipulation patterns.
                  </p>
                </div>
                <ScoreRing value={94} />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <Stat icon={<Shield className="h-4 w-4" />} label="Trust Score" value="6/100" tone="danger" />
                <Stat icon={<Activity className="h-4 w-4" />} label="Confidence" value="98.4%" tone="primary" />
                <Stat icon={<Lock className="h-4 w-4" />} label="Reports" value="217 prior" tone="violet" />
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-border/60 bg-surface/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-medium text-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Recommended action
              </div>
              <p className="text-sm text-muted-foreground">
                Do not tap the link. Report to your bank's verified channel. ScamShield has blocked this URL across the
                community trust ledger and notified <span className="font-mono text-primary">12,431</span> protected users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Stat({ icon, label, value, tone }: { icon: React.ReactNode; label: string; value: string; tone: "danger" | "primary" | "violet" }) {
  const colorMap = {
    danger: "text-danger",
    primary: "text-primary",
    violet: "text-accent",
  } as const;
  return (
    <div className="rounded-lg border border-border/60 bg-background/40 p-3">
      <div className={`flex items-center gap-1.5 ${colorMap[tone]}`}>{icon}<span className="font-mono text-[10px] uppercase tracking-widest">{label}</span></div>
      <div className="mt-1 text-base font-semibold text-foreground">{value}</div>
    </div>
  );
}

function ScoreRing({ value }: { value: number }) {
  const r = 28;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    <div className="relative">
      <svg width="72" height="72" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r={r} stroke="oklch(1 0 0 / 0.08)" strokeWidth="6" fill="none" />
        <motion.circle
          cx="36" cy="36" r={r}
          stroke="url(#g)" strokeWidth="6" fill="none" strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: off }}
          transition={{ duration: 1.2, delay: 0.4 }}
          transform="rotate(-90 36 36)"
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.82 0.17 75)" />
            <stop offset="100%" stopColor="oklch(0.68 0.23 25)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="font-display text-lg font-semibold text-danger">{value}</div>
          <div className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">risk</div>
        </div>
      </div>
    </div>
  );
}