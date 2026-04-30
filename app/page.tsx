import { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  FileBadge2,
  FileDown,
  Landmark,
  Network,
  Radar,
  ShieldCheck,
  Waypoints
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

const capabilityMatrix = [
  {
    title: "Mission Strategy and Governance",
    domain: "Advisory Domain 01",
    description:
      "Executive-level strategy alignment, governance cadence design, and portfolio decision support for high-visibility programs.",
    impact:
      "Reduce strategic drift, sharpen decision traceability, and sustain leadership confidence across competing program priorities.",
    icon: Landmark
  },
  {
    title: "Modernization and Delivery Control",
    domain: "Advisory Domain 02",
    description:
      "Transformation sequencing, dependency management, and delivery risk controls for enterprise modernization portfolios.",
    impact:
      "Compress delivery timelines, cut schedule variance, and give stakeholders a credible and defensible modernization posture.",
    icon: Waypoints
  },
  {
    title: "Acquisition and Mission Integration",
    domain: "Advisory Domain 03",
    description:
      "Acquisition alignment, PMO operating structure, and mission partner integration across prime and government teams.",
    impact:
      "Reduce procurement delays, strengthen awardability, and improve downstream execution outcomes before money is obligated.",
    icon: BriefcaseBusiness
  },
  {
    title: "Cyber and Compliance Readiness",
    domain: "Advisory Domain 04",
    description:
      "Compliance-informed execution support aligned to federal security frameworks and audit-ready operating practices.",
    impact:
      "Harden delivery posture against compliance failures and enable controlled, audit-ready program execution under scrutiny.",
    icon: ShieldCheck
  }
];

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

const caseBriefs = [
  {
    title: "Portfolio Stabilization Case Brief",
    mission: "Civilian mission support portfolio facing schedule slippage and fragmented reporting.",
    actions: "Established executive governance rhythm, re-baselined interdependent workstreams, and standardized decision briefing formats.",
    result: "Restored portfolio predictability with a 29% reduction in milestone variance within two quarters."
  },
  {
    title: "Modernization Tempo Recovery",
    mission: "Enterprise modernization program delayed by cross-team dependency bottlenecks.",
    actions: "Introduced phased sequencing model, risk triage checkpoints, and integrated program management controls.",
    result: "Improved delivery velocity by 34% while increasing leadership confidence in release commitments."
  },
  {
    title: "Acquisition Readiness Brief",
    mission: "Acquisition team required stronger requirements clarity prior to solicitation release.",
    actions: "Facilitated requirements alignment sessions, created executive-ready evaluation artifacts, and mapped decision criteria.",
    result: "Reduced pre-award clarification churn by 41% and accelerated solicitation readiness timeline."
  }
];

const frameworkBadges = ["FAR / DFARS", "FedRAMP", "CMMC", "NIST 800-53 / 800-171", "Enterprise IT Programs"];

export default function HomePage() {
  return (
    <>
      <section className="hero-grid relative overflow-hidden border-b intel-divider">
        {/* Fine hero grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />
        <div className="section-wrap relative grid gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
          <Reveal>
            <div>
              <p className="kicker">Strategic Advisory for High-Consequence Operations</p>
              <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold uppercase leading-[0.98] tracking-[0.02em] text-white md:text-8xl">
                Mission-critical counsel for leaders operating under pressure.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate md:text-lg">
                Price Consulting, LLC helps agencies, primes, and mission partners execute modernization and acquisition
                priorities with disciplined governance and executive-ready clarity.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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

          <Reveal delay={0.15}>
            <HeroIntelPanel />
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
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {capabilityMatrix.map((capability) => (
            <article key={capability.title} className="intel-panel p-6 md:p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/80">{capability.domain}</p>
                <capability.icon className="h-5 w-5 text-teal" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{capability.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate">{capability.description}</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal/70">Why It Matters</p>
                <p className="mt-2 text-xs leading-6 text-slate/80">{capability.impact}</p>
              </div>
            </article>
          ))}
        </div>
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
          <Reveal delay={0.1} className="mt-10 intel-panel px-7">
            {caseBriefs.map((brief) => (
              <article key={brief.title} className="brief-row last:border-b-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Anonymized Case Brief</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{brief.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate">
                  <span className="font-semibold text-white">Mission Context:</span> {brief.mission}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate">
                  <span className="font-semibold text-white">Advisory Actions:</span> {brief.actions}
                </p>
                <p className="mt-2 text-sm leading-7 text-teal/90">
                  <span className="font-semibold text-white">Measured Result:</span> {brief.result}
                </p>
              </article>
            ))}
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
