import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, Link as LinkIcon, Network, Lock, Hash } from "lucide-react";
import { Section, Eyebrow, SectionHeading } from "@/components/Section";

export const Route = createFileRoute("/trust")({
  head: () => ({
    meta: [
      { title: "Trust Verification Layer — ScamShield" },
      { name: "description", content: "Tamper-resistant scam records validated across a distributed trust network." },
      { property: "og:title", content: "ScamShield Trust Layer" },
      { property: "og:description", content: "Decentralized verification of scam reports — immutable, auditable, transparent." },
    ],
  }),
  component: TrustPage,
});

const ledger = [
  { hash: "0x9a3c…f217", kind: "Phishing SMS", reports: 217, time: "2m", verified: 14 },
  { hash: "0x4b71…9d04", kind: "Fake refund email", reports: 142, time: "6m", verified: 12 },
  { hash: "0xe28f…b51c", kind: "Crypto bait link", reports: 98, time: "11m", verified: 11 },
  { hash: "0x71aa…0c92", kind: "Bank impersonation", reports: 304, time: "18m", verified: 14 },
  { hash: "0xc91d…84e7", kind: "Job scam (WhatsApp)", reports: 76, time: "31m", verified: 10 },
];

function TrustPage() {
  return (
    <div>
      <Section className="py-12 sm:py-16">
        <div className="flex flex-col gap-3">
          <Eyebrow>Trust verification layer</Eyebrow>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Tamper-resistant scam intelligence.
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Every confirmed scam is signed, replicated and verified across a distributed network of trust nodes. Records are
            immutable, auditable and queryable in real time.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          <Kpi label="Trust nodes" value="184" />
          <Kpi label="Verified records" value="2.1M" />
          <Kpi label="Avg. concordance" value="97.6%" />
          <Kpi label="Median verify time" value="1.4s" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <NodeGraph />
          <VerifiedCard />
        </div>

        <div className="mt-10">
          <div className="rounded-2xl border border-border/60 bg-surface/40">
            <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
              <h3 className="text-sm font-semibold text-foreground">Security ledger — recent entries</h3>
              <span className="font-mono text-[11px] text-muted-foreground">block #98,412,773</span>
            </div>
            <div className="divide-y divide-border/40">
              {ledger.map((l) => (
                <div key={l.hash} className="grid grid-cols-12 items-center gap-3 px-5 py-3 text-sm">
                  <div className="col-span-4 flex items-center gap-2 font-mono text-xs text-primary">
                    <Hash className="h-3.5 w-3.5" /> {l.hash}
                  </div>
                  <div className="col-span-3 text-foreground/90">{l.kind}</div>
                  <div className="col-span-2 font-mono text-xs text-muted-foreground">{l.reports} reports</div>
                  <div className="col-span-2 flex items-center gap-1 text-xs text-success">
                    <CheckCircle2 className="h-3.5 w-3.5" /> {l.verified}/14 nodes
                  </div>
                  <div className="col-span-1 text-right font-mono text-xs text-muted-foreground">{l.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Timeline" title="From report to verified threat record." />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { icon: LinkIcon, t: "Reported", b: "User submits a suspected scam through any ScamShield surface." },
              { icon: Network, t: "Broadcast", b: "Report is hashed and distributed to 14+ trust nodes." },
              { icon: Shield, t: "Verified", b: "Independent classifiers validate; concordance threshold must clear 75%." },
              { icon: Lock, t: "Sealed", b: "Record is appended to the ledger — immutable, signed, and queryable." },
            ].map((s, i) => (
              <div key={s.t} className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary">0{i + 1}</div>
                <div className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background/40 text-primary">
                  <s.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-foreground">{s.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-surface/40 p-5">
      <div className="font-display text-2xl font-semibold text-gradient">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function NodeGraph() {
  const nodes = Array.from({ length: 14 }).map((_, i) => {
    const a = (i / 14) * Math.PI * 2;
    return { x: 50 + Math.cos(a) * 38, y: 50 + Math.sin(a) * 38 };
  });
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-surface/40 p-5">
      <h3 className="mb-2 text-sm font-semibold text-foreground">Distributed trust nodes</h3>
      <p className="text-xs text-muted-foreground">Each report is independently validated by 14 nodes before being sealed.</p>
      <div className="relative mt-6 aspect-square w-full">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          {nodes.map((n, i) => (
            <line key={i} x1="50" y1="50" x2={n.x} y2={n.y} stroke="oklch(0.78 0.16 215 / 0.25)" strokeWidth="0.3" />
          ))}
          {nodes.map((a, i) =>
            nodes.slice(i + 1).map((b, j) => (
              <line key={`${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="oklch(1 0 0 / 0.04)" strokeWidth="0.2" />
            ))
          )}
          <circle cx="50" cy="50" r="4" fill="url(#core)" />
          <defs>
            <radialGradient id="core">
              <stop offset="0%" stopColor="oklch(0.78 0.16 215)" />
              <stop offset="100%" stopColor="oklch(0.65 0.22 295)" />
            </radialGradient>
          </defs>
          {nodes.map((n, i) => (
            <motion.circle key={`n${i}`} cx={n.x} cy={n.y} r="1.6"
              fill="oklch(0.78 0.16 215)"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.5, delay: i * 0.12, repeat: Infinity }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

function VerifiedCard() {
  return (
    <div className="rounded-2xl border border-success/30 bg-success/5 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-success">
          <CheckCircle2 className="h-4 w-4" />
          <span className="font-mono text-[11px] uppercase tracking-widest">Previously reported threat</span>
        </div>
        <span className="rounded-full bg-success/10 px-2 py-0.5 font-mono text-[10px] text-success">VERIFIED · 14/14</span>
      </div>
      <h3 className="mt-3 text-xl font-semibold text-foreground">hdfc-secure-verify.co</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Classified as bank impersonation phishing. First seen 6 days ago. Reported by 217 community members.
      </p>
      <div className="mt-5 grid grid-cols-3 gap-2">
        <Stat k="Trust score" v="6/100" />
        <Stat k="Confidence" v="98.4%" />
        <Stat k="Nodes" v="14/14" />
      </div>
      <div className="mt-5 rounded-xl bg-background/40 p-3 font-mono text-[11px] text-muted-foreground">
        sig: 0x9a3c4f8a217e…f217 · sealed at block #98,412,773
      </div>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg border border-border/60 bg-background/40 p-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
      <div className="mt-1 text-base font-semibold text-foreground">{v}</div>
    </div>
  );
}