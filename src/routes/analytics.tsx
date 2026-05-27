import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend,
  Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { Activity, ShieldCheck, AlertTriangle, TrendingUp, Globe2 } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Security Analytics — ScamShield" },
      { name: "description", content: "Enterprise-grade analytics: detection accuracy, threat trends, scam categories, regional activity." },
      { property: "og:title", content: "ScamShield Security Analytics" },
      { property: "og:description", content: "Live detection metrics, scam trends, and regional intelligence." },
    ],
  }),
  component: AnalyticsPage,
});

const trend = Array.from({ length: 14 }).map((_, i) => ({
  d: `D${i + 1}`,
  phishing: 1800 + Math.round(Math.sin(i / 2) * 400 + Math.random() * 300),
  payment: 900 + Math.round(Math.cos(i / 3) * 300 + Math.random() * 200),
  impersonation: 600 + Math.round(Math.sin(i / 1.5) * 200 + Math.random() * 200),
}));

const categories = [
  { name: "Phishing SMS", value: 38 },
  { name: "Fake Payment", value: 22 },
  { name: "Impersonation", value: 15 },
  { name: "Crypto bait", value: 11 },
  { name: "Job scam", value: 8 },
  { name: "Other", value: 6 },
];

const COLORS = ["oklch(0.78 0.16 215)", "oklch(0.65 0.22 295)", "oklch(0.82 0.17 75)", "oklch(0.78 0.17 160)", "oklch(0.68 0.23 25)", "oklch(0.55 0.04 260)"];

const regions = [
  { r: "India", v: 312 }, { r: "USA", v: 281 }, { r: "Brazil", v: 197 },
  { r: "UK", v: 152 }, { r: "Germany", v: 138 }, { r: "Indonesia", v: 124 },
  { r: "Nigeria", v: 117 }, { r: "Mexico", v: 98 },
];

const keywords = [
  "kyc", "otp", "urgent", "verify", "claim", "winner", "wallet", "suspended", "refund", "support", "secure",
];

function AnalyticsPage() {
  return (
    <Section className="py-12 sm:py-16">
      <div className="flex flex-col gap-3">
        <Eyebrow>Security analytics · live</Eyebrow>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          The pulse of global scam activity.
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Every metric updates in near real time as the ScamShield network classifies new threats.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Kpi icon={Activity} label="Total scans (24h)" value="2,418,772" delta="+12.4%" tone="primary" />
        <Kpi icon={ShieldCheck} label="Detection accuracy" value="98.4%" delta="+0.3pt" tone="success" />
        <Kpi icon={AlertTriangle} label="High-risk flagged" value="184,201" delta="+8.1%" tone="danger" />
        <Kpi icon={TrendingUp} label="Trust score (avg)" value="71/100" delta="+1.4" tone="violet" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-border/60 bg-surface/40 p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">Threat volume — 14 day trend</h3>
            <Legend2 items={[{ k: "phishing", c: COLORS[0] }, { k: "payment", c: COLORS[1] }, { k: "impersonation", c: COLORS[2] }]} />
          </div>
          <div className="h-72">
            <ResponsiveContainer>
              <AreaChart data={trend}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={COLORS[0]} stopOpacity={0.5} />
                    <stop offset="100%" stopColor={COLORS[0]} stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={COLORS[1]} stopOpacity={0.5} />
                    <stop offset="100%" stopColor={COLORS[1]} stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={COLORS[2]} stopOpacity={0.5} />
                    <stop offset="100%" stopColor={COLORS[2]} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="oklch(1 0 0 / 0.06)" vertical={false} />
                <XAxis dataKey="d" stroke="oklch(0.68 0.03 255)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="oklch(0.68 0.03 255)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="phishing" stroke={COLORS[0]} fill="url(#g1)" strokeWidth={2} />
                <Area type="monotone" dataKey="payment" stroke={COLORS[1]} fill="url(#g2)" strokeWidth={2} />
                <Area type="monotone" dataKey="impersonation" stroke={COLORS[2]} fill="url(#g3)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-surface/40 p-5">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Risk distribution</h3>
          <div className="h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={categories} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} stroke="none">
                  {categories.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ fontSize: 11, color: "oklch(0.68 0.03 255)" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-border/60 bg-surface/40 p-5 lg:col-span-2">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Regional threat activity</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={regions}>
                <CartesianGrid stroke="oklch(1 0 0 / 0.06)" vertical={false} />
                <XAxis dataKey="r" stroke="oklch(0.68 0.03 255)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="oklch(0.68 0.03 255)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "oklch(1 0 0 / 0.04)" }} />
                <Bar dataKey="v" radius={[6, 6, 0, 0]}>
                  {regions.map((_, i) => <Cell key={i} fill={i % 2 ? COLORS[1] : COLORS[0]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-surface/40 p-5">
          <div className="mb-4 flex items-center gap-2">
            <Globe2 className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Top scam keywords</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {keywords.map((k, i) => (
              <span key={k} className="font-mono text-xs" style={{
                fontSize: `${0.75 + (keywords.length - i) * 0.06}rem`,
                color: i < 3 ? "oklch(0.68 0.23 25)" : i < 6 ? "oklch(0.82 0.17 75)" : "oklch(0.78 0.16 215)",
              }}>
                {k}
              </span>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {[{ l: "Phishing trend", v: 78 }, { l: "Payment fraud", v: 64 }, { l: "Impersonation", v: 41 }, { l: "Job scams", v: 29 }].map((s) => (
              <div key={s.l}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-foreground/80">{s.l}</span>
                  <span className="font-mono text-muted-foreground">{s.v}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-muted/40">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.v}%` }} transition={{ duration: 0.9 }} className="h-full rounded-full bg-gradient-brand" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

const tooltipStyle = {
  background: "oklch(0.17 0.035 252)",
  border: "1px solid oklch(1 0 0 / 0.1)",
  borderRadius: 8,
  fontSize: 12,
  color: "oklch(0.97 0.01 250)",
} as const;

function Legend2({ items }: { items: { k: string; c: string }[] }) {
  return (
    <div className="flex gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
      {items.map((i) => (
        <span key={i.k} className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full" style={{ background: i.c }} />
          {i.k}
        </span>
      ))}
    </div>
  );
}

function Kpi({ icon: Icon, label, value, delta, tone }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; delta: string; tone: "primary" | "success" | "danger" | "violet" }) {
  const tones = { primary: "text-primary", success: "text-success", danger: "text-danger", violet: "text-accent" } as const;
  return (
    <div className="rounded-2xl border border-border/60 bg-surface/40 p-5">
      <div className="flex items-center justify-between">
        <Icon className={`h-4 w-4 ${tones[tone]}`} />
        <span className={`font-mono text-[11px] ${tones[tone]}`}>{delta}</span>
      </div>
      <div className="mt-3 font-display text-2xl font-semibold text-foreground">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}