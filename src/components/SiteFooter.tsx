import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Github, Twitter, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              AI-powered scam intelligence and digital trust verification for modern internet users and enterprises.
            </p>
            <div className="flex gap-3 text-muted-foreground">
              <a aria-label="Twitter" href="#" className="hover:text-foreground"><Twitter className="h-4 w-4" /></a>
              <a aria-label="GitHub" href="#" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
              <a aria-label="LinkedIn" href="#" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
          <FooterCol title="Product" links={[
            { to: "/dashboard", label: "Threat Engine" },
            { to: "/analytics", label: "Analytics" },
            { to: "/trust", label: "Trust Layer" },
            { to: "/community", label: "Community Intel" },
          ]} />
          <FooterCol title="Company" links={[
            { to: "/about", label: "About" },
            { to: "/about", label: "Mission" },
            { to: "#", label: "Careers" },
            { to: "#", label: "Press" },
          ]} />
          <FooterCol title="Resources" links={[
            { to: "#", label: "Documentation" },
            { to: "#", label: "API Reference" },
            { to: "#", label: "Security" },
            { to: "#", label: "Status" },
          ]} />
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ScamShield Labs, Inc. All rights reserved.</p>
          <p className="font-mono">SOC 2 · ISO 27001 · GDPR ready</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-foreground">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map((l, i) => (
          <li key={i}>
            <Link to={l.to} className="hover:text-foreground">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}