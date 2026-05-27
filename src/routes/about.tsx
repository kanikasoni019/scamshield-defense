import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Target, Eye, Globe, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow, SectionHeading } from "@/components/Section";
import { CyberBg } from "@/components/CyberBg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ScamShield — Mission & Vision" },
      { name: "description", content: "ScamShield is building the trust layer for the internet. Learn about our mission, vision and the team protecting millions." },
      { property: "og:title", content: "About ScamShield" },
      { property: "og:description", content: "Our mission is to make every digital interaction verifiable, explainable and safe by default." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden pb-16 pt-16 sm:pt-24">
        <CyberBg />
        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>About ScamShield</Eyebrow>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              The trust layer for the internet.
            </h1>
            <p className="mt-6 text-pretty text-base text-muted-foreground sm:text-lg">
              We're a security research company building the infrastructure that lets people, banks and governments tell the difference
              between a real message and a scam — in real time.
            </p>
          </div>
        </Section>
      </section>

      <Section className="py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-surface/40 p-8">
            <Target className="h-5 w-5 text-primary" />
            <h2 className="mt-3 font-display text-2xl font-semibold text-foreground">Mission</h2>
            <p className="mt-3 text-muted-foreground">
              Make every digital interaction verifiable, explainable and safe by default — so the next billion internet users don't have
              to learn fraud the hard way.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-surface/40 p-8">
            <Eye className="h-5 w-5 text-accent" />
            <h2 className="mt-3 font-display text-2xl font-semibold text-foreground">Vision</h2>
            <p className="mt-3 text-muted-foreground">
              A web where trust is portable, decisions are protected at the source, and AI explains itself to the people whose lives it
              affects.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-16">
        <SectionHeading eyebrow="What we believe" title="Six principles guide every decision we make." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Shield, t: "Protection at the source", b: "Stop the threat at decision time — not in a post-mortem." },
            { icon: Eye, t: "Explainability is non-negotiable", b: "If a model can't justify its call, it doesn't ship." },
            { icon: Users, t: "Built for everyone", b: "From security analysts to first-time smartphone users." },
            { icon: Globe, t: "Open by default", b: "Our threat intel is queryable, our methodology is documented." },
            { icon: Target, t: "Bias toward action", b: "Detection without action is theatre. We prefer truth." },
            { icon: Shield, t: "Privacy is foundational", b: "Zero-retention modes, on-device hashing, redacted logging." },
          ].map((p) => (
            <div key={p.t} className="rounded-2xl border border-border/60 bg-surface/40 p-6">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-primary-foreground">
                <p.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-16">
        <div className="rounded-3xl border border-border/60 bg-surface/40 p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { k: "14.2M", v: "people protected daily" },
              { k: "47", v: "countries with active intel" },
              { k: "$2.1B", v: "in fraud prevented (2025)" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-4xl font-semibold text-gradient">{s.k}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pb-24">
        <div className="rounded-3xl border border-border/60 bg-surface/40 p-10 text-center sm:p-14">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Build the safer internet with us.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            We're hiring engineers, researchers and designers who care about trust, explainability and shipping work that matters.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="bg-gradient-brand text-primary-foreground shadow-glow">
              <Link to="/dashboard">Try the platform <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="border-border/80 bg-background/40">
              <a href="#">See open roles</a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}