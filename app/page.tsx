import { Metadata } from "next";
import { ArrowRight, BriefcaseBusiness, ChartNoAxesColumn, Landmark, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

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
    icon: Landmark
  },
  {
    title: "Program Modernization",
    description:
      "Modernization roadmaps that reduce delivery risk, improve cross-functional coordination, and accelerate value realization.",
    icon: ChartNoAxesColumn
  },
  {
    title: "Acquisition and PMO Support",
    description:
      "Integrated acquisition planning and PMO governance to strengthen execution discipline and procurement outcomes.",
    icon: BriefcaseBusiness
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

export default function HomePage() {
  return (
    <>
      <section className="section-wrap py-16 md:py-24">
        <p className="kicker">Federal Consulting Advisory</p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight text-navy md:text-6xl">
          Mission-Critical Consulting for Federal Leaders
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate md:text-lg">
          Price Consulting, LLC helps agencies and mission partners navigate complex transformation efforts with
          strategic clarity, operational rigor, and accountable delivery.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#102a50]"
          >
            Schedule a Consultation
            <ArrowRight size={16} />
          </Link>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-navy/20 bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-teal hover:text-teal"
          >
            Download Capabilities Statement
          </a>
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

      <section className="section-wrap py-16 md:py-20">
        <p className="kicker">Core Services</p>
        <h2 className="section-title mt-3">Comprehensive Support Across Strategy and Execution</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-panel">
              <service.icon className="h-8 w-8 text-teal" />
              <h3 className="mt-4 text-xl font-semibold text-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-8 md:py-14">
        <div className="rounded-3xl bg-navy p-8 text-white md:p-12">
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

      <section className="section-wrap py-16 md:py-20">
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

      <section className="section-wrap py-8 md:py-14">
        <div className="rounded-3xl border border-navy/10 bg-white p-8 md:p-10">
          <p className="kicker">Client Outcomes</p>
          <div className="mt-5 grid gap-8 md:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-serif text-5xl font-semibold text-navy">{metric.value}</p>
                <p className="mt-2 text-sm text-slate">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-16 md:py-20">
        <div className="rounded-3xl bg-teal px-8 py-10 text-white md:flex md:items-center md:justify-between md:px-12">
          <div>
            <p className="kicker text-white/80">Ready to Engage</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">Let us move your next mission initiative forward.</h2>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-teal transition hover:bg-slate-100 md:mt-0"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}