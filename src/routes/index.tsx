import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Shield, Sparkles, Brain, Network, Eye, Users, Lock,
  Mic, Scan, QrCode, Chrome, Bot, Building2, Banknote, Radio, ShoppingBag, Landmark,
  CheckCircle2, Zap, Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CyberBg } from "@/components/CyberBg";
import { Section, Eyebrow, SectionHeading } from "@/components/Section";
import { ThreatPreview } from "@/components/ThreatPreview";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ScamShield — AI-Powered Scam Detection Before You Click" },
      { name: "description", content: "Detect phishing, fake payment requests, malicious links, and social engineering attacks in real time with explainable AI." },
      { property: "og:title", content: "ScamShield — AI Scam Intelligence Platform" },
      { property: "og:description", content: "Real-time, explainable AI threat detection for consumers and enterprises." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <Hero />
      <TrustBar />
      <Capabilities />
      <HowItWorks />
      <Explainable />
      <Industries />
      <Differentiators />
      <AdvancedFeatures />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
      <CyberBg />
      <Section className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Eyebrow>Realtime threat intelligence · v2.4</Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            AI-powered scam detection{" "}
            <span className="text-gradient">before you click.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
          >
            ScamShield protects users from phishing, fake payment requests, malicious links and social
            engineering with real-time, explainable AI threat analysis.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="bg-gradient-brand text-primary-foreground shadow-glow hover:opacity-95">
              <Link to="/dashboard">
                Start Threat Analysis
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border/80 bg-surface/40 backdrop-blur">
              <Link to="/analytics">View Live Dashboard</Link>
            </Button>
          </motion.div>

          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="h-3.5 w-3.5 text-success" />
            No credit card · SOC 2 Type II · Free for individuals
          </div>
        </div>

        <div className="mt-16">
          <ThreatPreview />
        </div>
      </Section>
    </section>
  );
}

function TrustBar() {
  const logos = ["NORTHWIND BANK", "ORBITEL", "AXIS PAY", "MERIDIAN GOV", "STRATA CYBER", "FINRAIL", "OCEANFRONT"];
  return (
    <Section className="border-y border-border/60 py-10">
      <div className="flex flex-col items-center gap-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by security teams protecting 14M+ people
        </p>
        <div className="grid w-full grid-cols-2 gap-x-8 gap-y-4 opacity-70 sm:grid-cols-4 lg:grid-cols-7">
          {logos.map((l) => (
            <div key={l} className="text-center font-display text-xs tracking-[0.18em] text-muted-foreground">
              {l}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Capabilities() {
  const items = [
    { icon: Brain, title: "Multimodal threat engine", body: "Analyze SMS, WhatsApp, email, URLs, screenshots and voice in a single pipeline." },
    { icon: Eye, title: "Explainable verdicts", body: "Every flag comes with the linguistic, structural and behavioral signals that triggered it." },
    { icon: Network, title: "Community trust ledger", body: "Tamper-resistant scam records, verified across distributed reporting nodes." },
    { icon: Zap, title: "Decision-time protection", body: "Sub-300ms inference at the moment of click, tap or copy — not after the fact." },
    { icon: Lock, title: "Privacy by design", body: "On-device hashing, redaction, and zero-retention modes for sensitive workflows." },
    { icon: Globe, title: "Global threat graph", body: "Live intelligence across 47 countries and 30+ scam taxonomies, updated minute-by-minute." },
  ];
  return (
    <Section className="py-24">
      <SectionHeading
        eyebrow="Capabilities"
        title="A single platform for every scam vector."
        description="ScamShield unifies threat detection, explainability and community verification — built for engineers, deployable by anyone."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface/40 p-6 transition hover:bg-surface/70">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition group-hover:opacity-100" />
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Capture", body: "Paste or forward suspicious content — message, link, email, screenshot, audio." },
    { n: "02", title: "Analyze", body: "Our multi-model engine evaluates linguistic, structural, network and behavioral signals." },
    { n: "03", title: "Explain", body: "You receive a risk score, threat level, and the exact reasons behind the verdict." },
    { n: "04", title: "Act", body: "Block, report, share to the trust ledger — protecting yourself and millions of others." },
  ];
  return (
    <Section className="py-24">
      <SectionHeading eyebrow="How it works" title="From suspicion to safety in under a second." />
      <div className="mt-14 grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.n} className="relative">
            <div className="glass rounded-2xl p-6">
              <div className="font-mono text-xs text-primary">{s.n}</div>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-3 bg-gradient-to-r from-border to-transparent md:block" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Explainable() {
  const signals = [
    "Urgency manipulation language",
    "Lookalike or freshly-registered domain",
    "Reward / lottery baiting patterns",
    "Fake authority impersonation",
    "Emotional or fear-based framing",
    "Credential or KYC harvesting flow",
  ];
  return (
    <Section className="py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>Explainable AI</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Every verdict comes with a reason.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            ScamShield surfaces the linguistic patterns, network signals and behavioral cues behind every
            classification — so users, analysts and regulators can trust the call.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {signals.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-brand opacity-10 blur-3xl" />
          <div className="glass-strong rounded-2xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Reasoning trace</span>
              </div>
              <span className="rounded-full bg-success/10 px-2 py-0.5 font-mono text-[10px] text-success">VERIFIED</span>
            </div>
            <div className="space-y-3 font-mono text-xs leading-relaxed">
              <Trace tag="LANG" tone="warning">Detected 4 urgency markers: "URGENT", "within 24h", "suspended", "avoid".</Trace>
              <Trace tag="DOM" tone="danger">Domain <span className="text-foreground">hdfc-secure-verify.co</span> registered 6 days ago via privacy proxy.</Trace>
              <Trace tag="STRUCT" tone="danger">Login form requests CVV + OTP — inconsistent with HDFC's published UX.</Trace>
              <Trace tag="GRAPH" tone="primary">Linked to 12 known phishing clusters in the last 30 days.</Trace>
              <Trace tag="LEDGER" tone="primary">217 community reports; 98% concordance with verdict.</Trace>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Trace({ tag, tone, children }: { tag: string; tone: "danger" | "warning" | "primary"; children: React.ReactNode }) {
  const tones = { danger: "text-danger border-danger/30 bg-danger/10", warning: "text-warning border-warning/30 bg-warning/10", primary: "text-primary border-primary/30 bg-primary/10" } as const;
  return (
    <div className="flex items-start gap-3">
      <span className={`mt-0.5 rounded border px-1.5 py-0.5 text-[10px] ${tones[tone]}`}>{tag}</span>
      <span className="text-muted-foreground">{children}</span>
    </div>
  );
}

function Industries() {
  const items = [
    { icon: Banknote, name: "Banking & Fintech", body: "Stop authorized push payment fraud and KYC scams before settlement." },
    { icon: Radio, name: "Telecom Security", body: "Inline SMS and call screening for carrier-scale protection." },
    { icon: Building2, name: "Corporate Cyber", body: "Detect executive impersonation and vendor invoice fraud." },
    { icon: ShoppingBag, name: "E-commerce", body: "Filter fake refunds, gift-card baits and account takeover attempts." },
    { icon: Landmark, name: "Government", body: "Protect citizens from impersonation of tax, welfare and ID services." },
  ];
  return (
    <Section className="py-24">
      <SectionHeading eyebrow="Use cases" title="Built for the industries fraud targets most." />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {items.map((it) => (
          <div key={it.name} className="group rounded-2xl border border-border/60 bg-surface/40 p-5 transition hover:border-primary/30 hover:bg-surface/70">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-primary-foreground">
              <it.icon className="h-4 w-4" />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-foreground">{it.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{it.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Differentiators() {
  const items = [
    { icon: Brain, t: "Explainable AI", b: "Every detection is auditable and human-readable." },
    { icon: Zap, t: "Decision-time protection", b: "Block threats before interaction, not after." },
    { icon: Shield, t: "Dynamic trust scoring", b: "Per-message trust signals that evolve with behavior." },
    { icon: Users, t: "Community intelligence", b: "Every report sharpens the global detection graph." },
    { icon: Network, t: "Trust verification layer", b: "Tamper-resistant scam records, distributed." },
    { icon: Sparkles, t: "Accessible to everyone", b: "Designed for analysts and grandparents alike." },
  ];
  return (
    <Section className="py-24">
      <SectionHeading eyebrow="Why ScamShield" title="What sets the platform apart." />
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.t} className="flex gap-4 rounded-2xl border border-border/60 bg-surface/30 p-5">
            <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-border/60 bg-background/40 text-primary">
              <it.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">{it.t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{it.b}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function AdvancedFeatures() {
  const items = [
    { icon: Mic, t: "Voice scam detection", b: "Catch deepfake calls and IVR phishing in real time." },
    { icon: Scan, t: "Screenshot OCR", b: "Drop a screenshot — we extract, analyze, verdict in one step." },
    { icon: QrCode, t: "QR scam scanner", b: "Inspect quishing payloads before your camera resolves them." },
    { icon: Chrome, t: "Browser extension", b: "Inline link inspection across Gmail, WhatsApp Web and X." },
    { icon: Bot, t: "AI security assistant", b: "Ask 'is this safe?' in plain language — get a verified answer." },
  ];
  return (
    <Section className="py-24">
      <SectionHeading
        eyebrow="Advanced modules"
        title="More than a chatbox. A protection layer."
        description="Modules ship behind a unified API and a polished consumer surface."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {items.map((it) => (
          <div key={it.t} className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-surface/60 to-surface/20 p-5">
            <div className="absolute right-3 top-3 rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-primary">Beta</div>
            <it.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-3 text-sm font-semibold text-foreground">{it.t}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{it.b}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Stats() {
  const stats = [
    { k: "98.4%", v: "Detection accuracy on benchmark phishing corpora" },
    { k: "<300ms", v: "Median end-to-end inference latency" },
    { k: "14.2M", v: "Active users protected in real time" },
    { k: "2.1B", v: "Messages classified across the trust graph" },
  ];
  return (
    <Section className="py-24">
      <div className="grid gap-6 rounded-3xl border border-border/60 bg-surface/40 p-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.k}>
            <div className="font-display text-4xl font-semibold text-gradient">{s.k}</div>
            <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "ScamShield replaced three internal vendors and cut our fraud response time by 71%. The explainability layer is what finally got our risk team on board.",
      a: "Priya Nair", r: "VP, Fraud — Northwind Bank",
    },
    {
      q: "We deployed the SMS module across 38M subscribers in six weeks. The trust ledger integration is genuinely category-defining work.",
      a: "Daniel Krause", r: "Head of Trust & Safety — Orbitel",
    },
    {
      q: "It's the first scam tool I'd actually recommend to my parents. The reasons it gives feel human, not robotic.",
      a: "Maya Okonkwo", r: "Security Researcher",
    },
  ];
  return (
    <Section className="py-24">
      <SectionHeading eyebrow="Customers" title="Loved by analysts. Trusted by enterprises." />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {items.map((t) => (
          <figure key={t.a} className="glass rounded-2xl p-6">
            <blockquote className="text-sm leading-relaxed text-foreground/90">"{t.q}"</blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand font-display text-sm font-semibold text-primary-foreground">
                {t.a.split(" ").map((w) => w[0]).join("")}
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">{t.a}</div>
                <div className="text-xs text-muted-foreground">{t.r}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section className="pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-surface/40 p-10 sm:p-16">
        <div className="absolute inset-0 -z-10 bg-hero-glow" />
        <div className="absolute inset-0 -z-10 cyber-grid opacity-40" />
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Get started in 60 seconds</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Stop the next scam before it lands.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Launch the console, paste a suspicious message, and see ScamShield in action — no signup required for your first ten analyses.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-gradient-brand text-primary-foreground shadow-glow">
              <Link to="/dashboard">
                Open the console <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border/80 bg-background/40">
              <Link to="/about">Read the manifesto</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
    </div>
  );
}
