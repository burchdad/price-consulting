import { Metadata } from "next";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesColumn,
  ClipboardCheck,
  FileDown,
  Landmark,
  LockKeyhole,
  Network,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import MetricsBand from "@/components/metrics-band";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Price Consulting, LLC partners with federal leaders to deliver strategy, modernization, and measurable mission outcomes."
};

const services = [
  {
    title: "Strategic Advisory",
    description:
      "Leadership-focused guidance that aligns mission intent, governance, and executable priorities.",
    icon: Landmark
  },
  {
    title: "Program Modernization",
    description:
      "Operational modernization plans designed to reduce delivery exposure and accelerate critical outcomes.",
    icon: ChartNoAxesColumn
  },
  {
    title: "Acquisition and PMO Support",
    description:
      "Structured procurement and PMO oversight for disciplined execution under high accountability.",
    icon: BriefcaseBusiness
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

const trustCards = [
  {
    title: "Federal Context",
    detail: "Built for public-sector decision cycles and mission-critical accountability.",
    icon: Building2
  },
  {
    title: "Secure Delivery Mindset",
    detail: "Structured for discretion, governance discipline, and executive trust.",
    icon: LockKeyhole
  },
  {
    title: "Acquisition Alignment",
    detail: "Operating models aligned to procurement constraints and partner ecosystems.",
    icon: ClipboardCheck
  },
  {
    title: "Cross-Functional Coordination",
    detail: "Unified execution narrative across leadership, program, and delivery teams.",
    icon: Network
  }
];

const outcomes = [
  {
    title: "Portfolio Stabilization",
    detail: "Governance reset improved executive visibility and predictability across competing workstreams."
  },
  {
    title: "Modernization Acceleration",
    detail: "Sequenced roadmap reduced inter-team delays and restored implementation tempo."
  },
  {
    title: "Acquisition Readiness",
    detail: "Decision support and requirements alignment strengthened procurement preparedness."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero-grid relative overflow-hidden border-b intel-divider">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-25" />
        <div className="section-wrap relative grid gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
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
                Download Capability Brief
              </a>
            </div>
          </div>

          <div className="intel-panel relative p-8 md:p-10">
            <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_10%_20%,rgba(20,184,166,0.2),transparent_30%),radial-gradient(circle_at_82%_75%,rgba(248,250,252,0.08),transparent_26%)]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal/80">Operational Snapshot</p>
              <h2 className="mt-6 font-serif text-4xl font-semibold uppercase leading-[1] tracking-[0.03em] text-white md:text-5xl">
                Executive support built for sensitive environments.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate">
                Advisory coverage spanning strategy, modernization controls, and stakeholder-aligned execution rhythm.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-navy/55 p-4">
                  <p className="text-3xl font-semibold text-white">15+ yrs</p>
                  <p className="mt-2 text-sm text-slate">Supporting federal mission leaders and delivery stakeholders.</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-navy/55 p-4">
                  <p className="text-3xl font-semibold text-white">Cross-sector</p>
                  <p className="mt-2 text-sm text-slate">Agency and implementation perspective for complex initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b intel-divider py-12">
        <div className="section-wrap">
          <p className="kicker">Operating Advantages</p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {trustCards.map((card) => (
              <div key={card.title} className="intel-panel p-5">
                <card.icon className="h-5 w-5 text-teal" />
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MetricsBand items={metrics} />

      <section className="section-wrap py-20 md:py-24">
        <p className="kicker">Core Services</p>
        <h2 className="section-title mt-3">Advisory coverage for strategy, modernization, and execution control.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="intel-panel p-7">
              <service.icon className="h-7 w-7 text-teal" />
              <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y intel-divider bg-steel/70 py-20 md:py-24">
        <div className="section-wrap">
          <p className="kicker">Client Outcomes</p>
          <h2 className="section-title mt-3">Representative impact in high-accountability engagements.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <article key={outcome.title} className="intel-panel p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Anonymized Outcome</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate">{outcome.detail}</p>
              </article>
            ))}
          </div>
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
            Initiate Consultation
          </Link>
        </div>
      </section>

      <section className="border-t intel-divider bg-steel/60 py-20 md:py-24">
        <div className="section-wrap grid gap-8 md:grid-cols-3">
          <div className="intel-panel p-6">
            <ShieldCheck className="h-6 w-6 text-teal" />
            <h3 className="mt-4 text-xl font-semibold text-white">Governance Integrity</h3>
            <p className="mt-3 text-sm leading-7 text-slate">
              Frameworks engineered for compliance, transparency, and sustained leadership confidence.
            </p>
          </div>
          <div className="intel-panel p-6 md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/75">Capability Access</h3>
            <h2 className="mt-4 font-serif text-4xl font-semibold uppercase leading-[1] tracking-[0.03em] text-white md:text-5xl">
              Download the mission capability brief.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate">
              A concise overview of competencies, differentiators, and engagement structures for contracting and
              program leadership teams.
            </p>
            <a href={company.capabilitiesStatementUrl} className="cta-secondary mt-7">
              <FileDown size={16} />
              Download Capability Brief
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
