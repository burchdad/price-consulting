import { Metadata } from "next";
import { BarChart3, BriefcaseBusiness, Building2, Milestone, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Price Consulting, LLC federal consulting services including strategic advisory, modernization, and mission support."
};

const services = [
  {
    title: "Strategic Advisory and Planning",
    body: "We support federal leaders with strategy development, portfolio prioritization, and governance structures that align mission objectives to executable plans.",
    icon: Building2
  },
  {
    title: "Program and Digital Modernization",
    body: "Our modernization advisory helps agencies de-risk transformation by defining practical operating models, sequencing initiatives, and strengthening delivery controls.",
    icon: Milestone
  },
  {
    title: "Acquisition and Procurement Support",
    body: "We provide acquisition lifecycle support from requirements refinement and solicitation alignment to award-readiness and post-award transition planning.",
    icon: BriefcaseBusiness
  },
  {
    title: "Performance and Data-Driven Operations",
    body: "Our team designs reporting frameworks, KPI dashboards, and decision-support mechanisms that improve transparency and mission accountability.",
    icon: BarChart3
  },
  {
    title: "Mission Support Services",
    body: "From PMO services to operational coordination, we provide structured support that helps agencies sustain momentum on critical initiatives.",
    icon: ShieldCheck
  }
];

export default function ServicesPage() {
  return (
    <section className="section-wrap py-16 md:py-24">
      <p className="kicker">Services</p>
      <h1 className="section-title mt-3">Federal Consulting Services Built for Real-World Delivery</h1>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-panel">
            <service.icon className="h-7 w-7 text-teal" />
            <h2 className="mt-4 text-xl font-semibold text-navy">{service.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate">{service.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}