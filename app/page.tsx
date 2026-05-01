import { Metadata } from "next";
import CapabilityConsole from "@/components/capability-console";
import CaseBriefsPanel from "@/components/case-briefs-panel";
import {
  ArrowRight,
  Building2,
  FileBadge2,
  FileDown,
  Network,
  Radar
} from "lucide-react";
import Link from "next/link";
import MetricsBand from "@/components/metrics-band";
import HeroIntelPanel from "@/components/hero-intel-panel";
import Reveal from "@/components/reveal";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Price Consulting, LLC partners with federal leaders to deliver strategy, modernization, and measurable mission outcomes."
};

const missionEnvironments = [
  {
    label: "Enterprise Cloud Modernization",
    detail:
      "Migration, platform transformation, and delivery governance for large-scale cloud programs across civilian and defense environments."
  },
  {
    label: "Classified / Sensitive IT Programs",
    detail:
      "Operational support within high-scrutiny, access-controlled technology environments requiring strict delivery discipline."
  },
  {
    label: "Large-Scale Acquisition Programs",
    detail:
      "Advisory support spanning pre-solicitation planning, source selection readiness, and post-award transition across major contract vehicles."
  },
  {
    label: "Multi-Vendor Contract Environments",
    detail:
      "Governance and integration oversight for complex IDIQ, GWAC, and multi-prime program structures with competing delivery incentives."
  },
  {
    label: "Compliance-Driven Security Programs",
    detail:
      "Delivery and governance support for programs operating under FISMA, CMMC, FedRAMP, or NIST 800-series mandates."
  }
];

const metrics = [
  {
    label: "Agency Initiatives Supported",
    value: "50+",
    microcopy: "Support delivered across mission transformation, governance, and execution oversight."
  },
  {
    label: "Average Delivery Acceleration",
    value: "32%",
    microcopy: "Representative increase in delivery velocity after priority realignment and governance cadence."
  },
  {
    label: "Stakeholder Satisfaction",
    value: "96%",
    microcopy: "Executive confidence built through clear reporting, control, and accountability."
  }
];

const trustRows = [
  "Federal context and mission-accountability fluency.",
  "Secure delivery posture for high-scrutiny initiatives.",
  "Acquisition-aligned operating support and executive reporting."
];

const engagementProfiles = [
  {
    title: "Program Office Advisory Cell",
    engagementType: "Strategic advisory and modernization governance",
    deliveryModel: "Embedded advisory lead with executive cadence support",
    supportedClients: "Federal program offices and mission executives",
    typicalScope: "Quarterly planning cycles, governance resets, and decision brief development"
  },
  {
    title: "Prime Capture and Delivery Alignment",
    engagementType: "Capture-to-delivery operating alignment",
    deliveryModel: "Hybrid advisory team with targeted sprint support",
    supportedClients: "Prime contractors, IT integrators, and GovCon growth teams",
    typicalScope: "Acquisition strategy input, PMO stand-up, and execution reporting architecture"
  },
  {
    title: "Subcontractor Readiness Support",
    engagementType: "Operational readiness and compliance-informed delivery",
    deliveryModel: "Targeted advisory engagements with milestone checkpoints",
    supportedClients: "Subcontractors and emerging federal delivery firms",
    typicalScope: "Delivery model hardening, controls mapping, and stakeholder communication artifacts"
  }
];

const supportedClientTypes = [
  "Federal Program Offices",
  "Prime Contractors",
  "Subcontractors",
  "IT Integrators",
  "GovCon Firms"
];

const frameworkBadges = ["FAR / DFARS", "FedRAMP", "CMMC", "NIST 800-53 / 800-171", "Enterprise IT Programs"];

export default function HomePage() {
  return (
    <>
      <section className="hero-grid relative overflow-hidden border-b intel-divider">
        {/* Fine hero grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />
        {/* Atmospheric depth layers */}
        <div className="hero-vignette-drift pointer-events-none absolute inset-0" />
        <div className="hero-noise-parallax pointer-events-none absolute inset-0 opacity-20" />
        <div className="section-wrap relative grid gap-10 py-20 md:grid-cols-[1.02fr_0.98fr] md:items-center md:py-28">
          <Reveal>
            <div>
              <p className="kicker">Strategic Advisory for High-Consequence Operations</p>
              <h1 className="mt-5 max-w-3xl font-serif text-5xl font-semibold uppercase leading-[0.96] tracking-[0.02em] text-white md:text-7xl">
                <span className="block">Mission-Critical Counsel</span>
                <span className="block">For Leaders Operating</span>
                <span className="block">Under Pressure</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate md:text-lg">
                Price Consulting advises federal leaders and mission partners on modernization, acquisition, and
                execution priorities where operational clarity and disciplined governance are non-negotiable.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/contact" className="cta-primary">
                  Request Strategic Briefing
                  <ArrowRight size={16} />
                </Link>
                <a href={company.capabilitiesStatementUrl} className="cta-secondary">
                  <FileDown size={16} />
                  Access Capability Brief
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:pl-2">
            <div className="md:scale-[1.02]">
              <HeroIntelPanel />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b intel-divider py-12">
        <div className="section-wrap">
          <Reveal>
            <p className="kicker">Operating Advantages</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 intel-panel px-6">
            {trustRows.map((row, index) => (
              <div key={row} className={index === trustRows.length - 1 ? "py-5" : "brief-row"}>
                <p className="text-sm leading-7 text-slate">{row}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <MetricsBand items={metrics} />

      <section className="section-wrap py-20 md:py-24">
        <Reveal>
          <p className="kicker"><span className="tac-index">[01]</span>Advisory Capability Matrix</p>
          <h2 className="section-title mt-3">Operational domains built for mission execution under federal scrutiny.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <CapabilityConsole />
        </Reveal>
      </section>

      <section className="border-y intel-divider relative overflow-hidden py-20 md:py-24">
        {/* Ambient video backdrop */}
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
          style={{ filter: "blur(4px) saturate(0.7)", transform: "scale(1.06)" }}
        >
          <source src="/ops-environment.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="pointer-events-none absolute inset-0" style={{ background: "rgba(4,11,20,0.78)" }} />
        <div className="section-wrap relative">
          <Reveal>
            <p className="kicker"><span className="tac-index">[02]</span>Representative Mission Environments</p>
            <h2 className="section-title mt-3">Operational contexts where this advisory work is delivered.</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 intel-panel px-7">
            {missionEnvironments.map((env) => (
              <article key={env.label} className="brief-row last:border-b-0">
                <div className="grid gap-2 md:grid-cols-[300px_1fr] md:gap-8 md:items-center">
                  <h3 className="font-semibold text-white">{env.label}</h3>
                  <p className="text-sm leading-7 text-slate">{env.detail}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-y intel-divider bg-steel/70 py-20 md:py-24">
        <div className="section-wrap">
          <p className="kicker">Engagement Profiles</p>
          <Reveal>
            <h2 className="section-title mt-3">Representative delivery model dossiers for advisory engagements.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {engagementProfiles.map((profile) => (
              <article key={profile.title} className="intel-panel p-6">
                <h3 className="text-lg font-semibold text-white">{profile.title}</h3>
                <div className="mt-5 space-y-3 text-sm text-slate">
                  <p>
                    <span className="font-semibold uppercase tracking-[0.12em] text-teal/80">Engagement Type</span>
                    <br />
                    {profile.engagementType}
                  </p>
                  <p>
                    <span className="font-semibold uppercase tracking-[0.12em] text-teal/80">Delivery Model</span>
                    <br />
                    {profile.deliveryModel}
                  </p>
                  <p>
                    <span className="font-semibold uppercase tracking-[0.12em] text-teal/80">Supported Clients</span>
                    <br />
                    {profile.supportedClients}
                  </p>
                  <p>
                    <span className="font-semibold uppercase tracking-[0.12em] text-teal/80">Typical Scope</span>
                    <br />
                    {profile.typicalScope}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-20 md:py-24">
        <Reveal>
          <p className="kicker"><span className="tac-index">[03]</span>Who We Support</p>
          <h2 className="section-title mt-3">Advisory support across government and GovCon operating layers.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {supportedClientTypes.map((clientType) => (
            <article key={clientType} className="intel-panel p-5">
              <Building2 className="h-5 w-5 text-teal" />
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-white">{clientType}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y intel-divider bg-steel/70 py-20 md:py-24">
        <div className="section-wrap">
          <Reveal>
            <p className="kicker"><span className="tac-index">[04]</span>Representative Outcomes</p>
            <h2 className="section-title mt-3">Operational case briefs with measurable mission results.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <CaseBriefsPanel />
          </Reveal>
        </div>
      </section>

      <section className="section-wrap py-20 md:py-24">
        <div className="intel-panel relative px-8 py-10 md:flex md:items-center md:justify-between md:px-10">
          <div className="absolute inset-0 rounded-xl bg-[linear-gradient(90deg,rgba(20,184,166,0.12),transparent_45%)]" />
          <div className="relative">
            <p className="kicker">Engagement Access</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold uppercase leading-[1] tracking-[0.03em] text-white md:text-5xl">
              Ready for an executive-level assessment?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate">
              We provide concise strategic support for agencies and partners preparing for complex mission decisions.
            </p>
          </div>
          <Link href="/contact" className="cta-primary relative mt-6 md:mt-0">
            Initiate Advisory Discussion
          </Link>
        </div>
      </section>

      <section className="border-t intel-divider bg-steel/60 py-20 md:py-24">
        <div className="section-wrap grid gap-8 md:grid-cols-3">
          <Reveal className="intel-panel p-6">
            <Radar className="h-6 w-6 text-teal" />
            <h3 className="mt-4 text-xl font-semibold text-white">Institutional Credibility</h3>
            <p className="mt-3 text-sm leading-7 text-slate">
              Advisory posture built to align with federal operational standards, compliance expectations, and
              executive communication norms.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="intel-panel p-6 md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/75">Credentials and Framework Alignment</h3>
            <h2 className="mt-4 font-serif text-4xl font-semibold uppercase leading-[1] tracking-[0.03em] text-white md:text-5xl">
              Operating familiarity with mission-critical standards.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {frameworkBadges.map((framework) => (
                <span
                  key={framework}
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-navy/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white"
                >
                  <FileBadge2 className="h-4 w-4 text-teal" />
                  {framework}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <a href={company.capabilitiesStatementUrl} className="cta-secondary">
                <Network size={16} />
                Access Capability Brief
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
