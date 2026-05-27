import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Send, Flame, Users, Activity, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community Intelligence — ScamShield" },
      { name: "description", content: "Report scams and contribute to the world's largest community-validated scam intelligence network." },
      { property: "og:title", content: "ScamShield Community Intelligence" },
      { property: "og:description", content: "Crowdsourced, verified scam intelligence shared across millions." },
    ],
  }),
  component: CommunityPage,
});

const categories = ["Phishing SMS", "Fake payment", "Impersonation", "Crypto bait", "Job scam", "Romance scam", "Other"];

const feed = [
  { who: "Aisha M.", region: "Mumbai · IN", kind: "Phishing SMS", text: "HDFC KYC suspension SMS with shortened link.", time: "2m" },
  { who: "Daniel K.", region: "Berlin · DE", kind: "Fake refund", text: "DHL 'delivery fee' email leading to card harvest.", time: "9m" },
  { who: "Priya N.", region: "Bengaluru · IN", kind: "Crypto bait", text: "Telegram invite promising 0.84 BTC airdrop.", time: "14m" },
  { who: "Sofia R.", region: "São Paulo · BR", kind: "Impersonation", text: "WhatsApp 'CEO' urgently requesting gift cards.", time: "22m" },
  { who: "James O.", region: "Lagos · NG", kind: "Job scam", text: "Remote 'data entry' job asking for ID + bank.", time: "31m" },
];

function CommunityPage() {
  const [cat, setCat] = useState(categories[0]);
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section className="py-12 sm:py-16">
      <div className="flex flex-col gap-3">
        <Eyebrow>Community intelligence network</Eyebrow>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Every report protects millions.
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Verified by trust nodes, fed into our detection graph in real time. Anonymous by default, signed when you want credit.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setText(""); setUrl(""); setTimeout(() => setSubmitted(false), 2500); }}
          className="glass-strong rounded-2xl p-6 lg:col-span-2"
        >
          <h3 className="text-sm font-semibold text-foreground">Report a scam</h3>
          <p className="mt-1 text-xs text-muted-foreground">Submissions are hashed and verified by 14 independent nodes.</p>

          <div className="mt-5 space-y-4">
            <Field label="Scam category">
              <select value={cat} onChange={(e) => setCat(e.target.value)} className="w-full rounded-lg border border-border/60 bg-background/40 px-3 py-2 text-sm text-foreground focus:border-primary/60 focus:outline-none">
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="Message content">
              <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste the scam message…" required minLength={10} maxLength={2000} className="min-h-[120px] w-full resize-y rounded-lg border border-border/60 bg-background/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none" />
            </Field>
            <Field label="Suspicious link (optional)">
              <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://…" className="w-full rounded-lg border border-border/60 bg-background/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none" />
            </Field>
            <Field label="Screenshot">
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-border/60 bg-background/40 px-3 py-3 text-xs text-muted-foreground hover:border-primary/40">
                <Upload className="h-4 w-4 text-primary" />
                Drop or click to upload (PNG, JPG — max 5MB)
                <input type="file" className="hidden" accept="image/*" />
              </label>
            </Field>

            <Button type="submit" className="w-full bg-gradient-brand text-primary-foreground shadow-glow hover:opacity-95">
              <Send className="mr-1 h-4 w-4" />
              {submitted ? "Submitted — thank you" : "Submit report"}
            </Button>
          </div>
        </form>

        <div className="lg:col-span-3">
          <div className="grid gap-3 sm:grid-cols-3">
            <Kpi icon={Users} label="Active reporters" value="84,219" />
            <Kpi icon={Activity} label="Reports today" value="12,438" />
            <Kpi icon={Flame} label="Trending threat" value="Bank KYC" />
          </div>

          <div className="mt-4 rounded-2xl border border-border/60 bg-surface/40">
            <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
              <h3 className="text-sm font-semibold text-foreground">Live activity feed</h3>
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-success">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" /> Streaming
              </span>
            </div>
            <div className="divide-y divide-border/40">
              {feed.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="grid grid-cols-12 items-start gap-3 px-5 py-3">
                  <div className="col-span-3">
                    <div className="text-sm font-medium text-foreground">{f.who}</div>
                    <div className="text-[11px] text-muted-foreground">{f.region}</div>
                  </div>
                  <div className="col-span-2 font-mono text-[11px] text-primary">
                    <Hash className="mr-0.5 inline h-3 w-3" />{f.kind}
                  </div>
                  <div className="col-span-6 text-sm text-foreground/90">{f.text}</div>
                  <div className="col-span-1 text-right font-mono text-[11px] text-muted-foreground">{f.time}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-surface/40 p-5">
              <h3 className="mb-3 text-sm font-semibold text-foreground">Trending categories</h3>
              <div className="space-y-2">
                {[{ k: "Phishing SMS", v: 88 }, { k: "Fake payment", v: 64 }, { k: "Impersonation", v: 51 }, { k: "Crypto bait", v: 37 }].map((c) => (
                  <div key={c.k}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="text-foreground/90">{c.k}</span>
                      <span className="font-mono text-muted-foreground">{c.v}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-muted/40">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${c.v}%` }} transition={{ duration: 0.9 }} className="h-full rounded-full bg-gradient-brand" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-surface/40 p-5">
              <h3 className="mb-3 text-sm font-semibold text-foreground">Threat heatmap</h3>
              <div className="grid grid-cols-12 gap-1">
                {Array.from({ length: 84 }).map((_, i) => {
                  const v = Math.random();
                  const c = v > 0.85 ? "oklch(0.68 0.23 25)" : v > 0.6 ? "oklch(0.82 0.17 75)" : v > 0.3 ? "oklch(0.78 0.16 215)" : "oklch(0.22 0.04 255)";
                  return <div key={i} className="aspect-square rounded-[3px]" style={{ background: c, opacity: 0.3 + v * 0.7 }} />;
                })}
              </div>
              <p className="mt-3 text-[11px] text-muted-foreground">Hourly threat density across 7 days · cooler is calmer</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function Kpi({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-surface/40 p-5">
      <div className="flex items-center gap-2 text-primary">
        <Icon className="h-4 w-4" />
        <span className="font-mono text-[11px] uppercase tracking-widest">{label}</span>
      </div>
      <div className="mt-2 font-display text-2xl font-semibold text-foreground">{value}</div>
    </div>
  );
}