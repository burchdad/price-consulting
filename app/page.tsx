import { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesColumn,
  FileDown,
  Landmark,
  ShieldCheck,
  Target,
  Users
} from "lucide-react";
import Link from "next/link";
import MetricsBand from "@/components/metrics-band";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Price Consulting, LLC partners with federal leaders to deliver strategy, modernization, and measurable mission outcomes."
};

const services = [
  {
    title: "Strategic Advisory",
    description:
      "Executive advisory support that aligns mission priorities, policy direction, and program delivery for durable federal impact.",
    icon: Landmark,
    accent: "Mission strategy"
  },
  {
    title: "Program Modernization",
    description:
      "Modernization roadmaps that reduce delivery risk, improve cross-functional coordination, and accelerate value realization.",
    icon: ChartNoAxesColumn,
    accent: "Transformation oversight"
  },
  {
    title: "Acquisition and PMO Support",
    description:
      "Integrated acquisition planning and PMO governance to strengthen execution discipline and procurement outcomes.",
    icon: BriefcaseBusiness,
    accent: "Execution discipline"
  }
];

const engagementModels = [
  {
    title: "Embedded Advisory",
    detail: "Senior consultants embedded with leadership teams for day-to-day strategic and execution support."
  },
  {
    title: "Targeted Sprint",
    detail: "Focused 6-12 week engagements designed to unblock specific mission, modernization, or acquisition priorities."
  },
  {
    title: "Managed Workstream",
    detail: "Outcome-based delivery with clear governance, recurring reporting, and accountable performance metrics."
  }
];

const metrics = [
  { label: "Agency Initiatives Supported", value: "50+" },
  { label: "Average Delivery Acceleration", value: "32%" },
  { label: "Stakeholder Satisfaction", value: "96%" }
];

const supportGroups = [
  {
    title: "Federal Agencies",
    description: "Leadership teams navigating modernization, portfolio alignment, and mission execution under heightened accountability."
  },
  {
    title: "Prime Contractors",
    description: "Delivery organizations seeking trusted advisory support, executive communications, and program management rigor."
  },
  {
    title: "Specialized Subcontractors",
    description: "Firms that need strategic positioning, integration support, and structured client-facing delivery frameworks."
  }
];

const methodology = [
  {
    step: "01",
    title: "Diagnose the mission environment",
    description: "We assess stakeholder priorities, delivery friction, acquisition realities, and performance constraints before prescribing action."
  },
  {
    step: "02",
    title: "Design an executable path",
    description: "We translate strategic ambition into a sequenced roadmap with governance, decision rights, and measurable milestones."
  },
  {
    step: "03",
    title: "Drive disciplined execution",
    description: "We support implementation with PMO rigor, executive reporting, and rapid issue escalation where delivery risk emerges."
  },
  {
    step: "04",
    title: "Sustain and institutionalize",
    description: "We leave teams with repeatable operating rhythms, leadership-ready dashboards, and stronger internal alignment."
  }
];

const outcomes = [
  {
    title: "Portfolio Stabilization",
    detail: "Supported a federal program office in clarifying governance and re-prioritizing workstreams, improving leadership visibility and delivery predictability."
  },
  {
    title: "Modernization Acceleration",
    detail: "Helped a mission organization sequence transformation activity into a more executable roadmap, reducing delays across dependent teams."
  },
  {
    title: "Acquisition Readiness",
    detail: "Strengthened procurement preparation through clearer requirements alignment, decision support, and executive-ready briefing materials."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero-grid relative overflow-hidden border-b border-navy/10">
        <div className="section-wrap grid gap-12 py-20 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-28">
          <div className="relative z-10">
            <p className="kicker">Federal Consulting Advisory</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-[1.05] text-navy md:text-7xl">
              Strategic counsel for leaders operating where mission pressure and public accountability converge.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate md:text-lg">
              Price Consulting, LLC helps agencies, primes, and mission partners navigate transformation with executive
              clarity, structured delivery, and measurable progress in high-stakes federal environments.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#102a50]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-white/90 px-6 py-3.5 text-sm font-semibold text-navy transition hover:border-teal hover:text-teal"
              >
                <FileDown size={16} />
                Download Capabilities Statement
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px]">
            <div className="absolute inset-0 rounded-[2rem] border border-white/50 bg-gradient-to-br from-white via-[#EEF3F8] to-[#DDE8EE] shadow-[0_30px_80px_-30px_rgba(11,31,58,0.32)]" />
            <div className="absolute inset-5 rounded-[1.75rem] border border-navy/10 bg-navy p-8 text-white md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/80">Advisory Snapshot</p>
              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight md:text-4xl">
                A disciplined advisory partner for strategy, modernization, and execution oversight.
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-white">15+ yrs</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">Supporting executive stakeholders across mission, operations, and performance management.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-white">Cross-sector</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">Perspective spanning agencies, implementation partners, and high-visibility transformation efforts.</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-2 top-8 rounded-2xl border border-navy/10 bg-white/95 p-4 shadow-panel md:-left-10 md:w-52">
              <p className="text-2xl font-semibold text-navy">50+</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate">Initiatives Supported</p>
            </div>

            <div className="absolute -bottom-4 right-2 rounded-2xl border border-navy/10 bg-white/95 p-4 shadow-panel md:-right-8 md:w-56">
              <p className="text-sm font-semibold text-navy">Trusted for executive-facing delivery</p>
              <p className="mt-2 text-sm leading-6 text-slate">Built for structured decision-making, stakeholder confidence, and measurable outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-white/80">
        <div className="section-wrap flex flex-wrap items-center gap-5 py-6 text-xs font-semibold uppercase tracking-[0.14em] text-slate md:justify-between">
          <span>Trusted by Federal Program Offices</span>
          <span>Security-Conscious Delivery</span>
          <span>Acquisition-Aligned Advisory</span>
          <span>Outcome-Driven Engagements</span>
        </div>
      </section>

      <MetricsBand items={metrics} />

      <section className="section-wrap py-20 md:py-24">
        <p className="kicker">Core Services</p>
        <h2 className="section-title mt-3">Comprehensive support across strategy, modernization, and delivery oversight.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[1.75rem] border border-navy/10 bg-white p-7 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_25px_70px_-30px_rgba(11,31,58,0.35)]"
            >
              <div className="inline-flex rounded-2xl border border-teal/15 bg-teal/10 p-3 text-teal transition group-hover:bg-teal group-hover:text-white">
                <service.icon className="h-7 w-7" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate">{service.accent}</p>
              <h3 className="mt-3 text-xl font-semibold text-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy py-20 md:py-24">
        <div className="section-wrap rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))] p-8 text-white md:p-12">
          <p className="kicker text-teal/80">Why Work With Us</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-4xl">
            Federal Context. Executive-Level Rigor. Measurable Results.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/15 bg-white/5 p-5">
              <ShieldCheck className="h-6 w-6 text-teal" />
              <p className="mt-3 text-sm leading-6 text-slate-100">Governance frameworks designed for compliance, transparency, and accountability.</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-5">
              <Users className="h-6 w-6 text-teal" />
              <p className="mt-3 text-sm leading-6 text-slate-100">Stakeholder alignment across leadership, mission owners, and enabling functions.</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-5">
              <ChartNoAxesColumn className="h-6 w-6 text-teal" />
              <p className="mt-3 text-sm leading-6 text-slate-100">Performance reporting that links delivery milestones to mission outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF3F6] py-20 md:py-24">
        <div className="section-wrap grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="kicker">Meet the Principal</p>
            <h2 className="section-title mt-3">Senior advisory leadership shaped by federal execution realities.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate">
              Price Consulting is led by a principal advisor with deep experience supporting executive stakeholders,
              modernization efforts, and performance-driven delivery in federal environments where clarity and trust matter.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-navy/10 bg-white p-4">
                <BadgeCheck className="h-5 w-5 text-teal" />
                <p className="mt-3 text-sm font-semibold text-navy">Executive advisory</p>
              </div>
              <div className="rounded-2xl border border-navy/10 bg-white p-4">
                <Building2 className="h-5 w-5 text-teal" />
                <p className="mt-3 text-sm font-semibold text-navy">Federal delivery</p>
              </div>
              <div className="rounded-2xl border border-navy/10 bg-white p-4">
                <Target className="h-5 w-5 text-teal" />
                <p className="mt-3 text-sm font-semibold text-navy">Outcome focus</p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[0.75fr_1.25fr]">
            <div className="min-h-[320px] rounded-[2rem] border border-navy/10 bg-gradient-to-br from-[#DCE7EE] to-[#BCCDD9]" />
            <div className="rounded-[2rem] border border-navy/10 bg-white p-7 shadow-panel">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Credentials and perspective</p>
              <p className="mt-4 text-sm leading-7 text-slate">
                Combines strategic planning, modernization support, stakeholder engagement, and PMO discipline to help clients
                make better decisions and sustain momentum across complex initiatives.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate">
                <li>Experience advising federal leaders and mission delivery teams.</li>
                <li>Strong command of executive communications, governance, and performance reporting.</li>
                <li>Track record of bringing structure to ambiguous, high-visibility efforts.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-20 md:py-24">
        <p className="kicker">Engagement Models</p>
        <h2 className="section-title mt-3">Flexible Structures for Complex Mission Demands</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {engagementModels.map((model) => (
            <article key={model.title} className="rounded-2xl border border-navy/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-navy">{model.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate">{model.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F6F8] py-20 md:py-24">
        <div className="section-wrap">
          <p className="kicker">Process Timeline</p>
          <h2 className="section-title mt-3">A clear four-step approach for complex mission work.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {methodology.map((item) => (
              <article key={item.step} className="relative rounded-[1.75rem] border border-navy/10 bg-white p-6 shadow-panel">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{item.step}</div>
                <h3 className="mt-4 text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-navy/10 bg-white p-8 shadow-panel md:p-10">
            <p className="kicker">Who We Support</p>
            <h2 className="section-title mt-3">Built to support agencies and partners across the federal delivery ecosystem.</h2>
            <div className="mt-8 space-y-4">
              {supportGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-navy/10 bg-[#F8FAFC] p-5">
                  <h3 className="text-lg font-semibold text-navy">{group.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate">{group.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-navy p-8 text-white shadow-panel md:p-10">
            <p className="kicker text-teal/80">Capabilities Statement</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-4xl">
              Download a concise overview of competencies, differentiators, and engagement models.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-200">
              A clean, executive-ready summary designed for contracting officers, program leaders, and teaming partners.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy transition hover:bg-slate-100"
            >
              <FileDown size={16} />
              Download Capabilities Statement
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF3F6] py-20 md:py-24">
        <div className="section-wrap">
          <p className="kicker">Client Outcomes</p>
          <h2 className="section-title mt-3">Representative impact from high-accountability consulting engagements.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <article key={outcome.title} className="rounded-[1.75rem] border border-navy/10 bg-white p-7 shadow-panel">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Anonymized outcome</p>
                <h3 className="mt-4 text-xl font-semibold text-navy">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate">{outcome.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-20 md:py-24">
        <div className="rounded-[2rem] bg-teal px-8 py-10 text-white md:flex md:items-center md:justify-between md:px-12">
          <div>
            <p className="kicker text-white/80">Ready to Engage</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">Let us move your next mission initiative forward.</h2>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-teal transition hover:bg-slate-100 md:mt-0"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}