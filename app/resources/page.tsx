import { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/faq-accordion";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description: "Access insights, capabilities information, and FAQs from Price Consulting, LLC."
};

const faqs = [
  {
    question: "Which federal organizations do you support?",
    answer:
      "We support civilian and defense-related federal organizations, program offices, and mission delivery teams seeking strategic and operational advisory services."
  },
  {
    question: "How quickly can an engagement begin?",
    answer:
      "Most advisory engagements can begin within 2 to 4 weeks depending on scope, onboarding requirements, and procurement pathway."
  },
  {
    question: "Do you provide support beyond strategy?",
    answer:
      "Yes. Our engagements frequently include implementation support, PMO structures, and performance reporting to ensure strategy converts into measurable results."
  },
  {
    question: "Can you tailor services to existing contract vehicles?",
    answer:
      "Our team is experienced in aligning service delivery to agency-specific acquisition constraints and contract vehicle requirements."
  }
];

export default function ResourcesPage() {
  return (
    <section className="section-wrap py-16 md:py-24">
      <p className="kicker">Resources</p>
      <h1 className="section-title mt-3">Insights and guidance for federal decision-makers.</h1>

      <div className="mt-10 intel-panel px-7 shadow-panel">
        <article className="brief-row">
          <div className="grid gap-4 md:grid-cols-[220px_1fr_auto] md:items-center md:gap-6">
            <h2 className="text-lg font-semibold uppercase tracking-[0.03em] text-white">Capability Brief</h2>
            <p className="text-sm leading-7 text-slate">
              Review core competencies, differentiators, and engagement models in a concise executive format.
            </p>
            <a href={company.capabilitiesStatementUrl} className="cta-primary">
              Access Capability Brief
            </a>
          </div>
        </article>

        <article className="py-5">
          <div className="grid gap-4 md:grid-cols-[220px_1fr_auto] md:items-center md:gap-6">
            <h2 className="text-lg font-semibold uppercase tracking-[0.03em] text-white">Tailored Briefing</h2>
            <p className="text-sm leading-7 text-slate">
              Request focused guidance around mission priorities, transformation goals, and operating constraints.
            </p>
            <Link href="/contact" className="cta-secondary">
              Request Strategic Briefing
            </Link>
          </div>
        </article>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-white">Frequently Asked Questions</h2>
        <div className="mt-5">
          <FaqAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}