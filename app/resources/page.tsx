import { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/faq-accordion";

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
      <h1 className="section-title mt-3">Insights and Practical Guidance for Federal Decision-Makers</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-panel">
          <h2 className="text-xl font-semibold text-navy">Capabilities Statement</h2>
          <p className="mt-3 text-sm leading-7 text-slate">
            Download our capabilities statement to review core competencies, differentiators, and engagement models.
          </p>
          <a
            href="#"
            className="mt-5 inline-flex rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#102a50]"
          >
            Download Placeholder
          </a>
        </article>

        <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-panel">
          <h2 className="text-xl font-semibold text-navy">Need a tailored briefing?</h2>
          <p className="mt-3 text-sm leading-7 text-slate">
            We can provide a focused consultation around your mission priorities, transformation goals, and operating context.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-lg border border-navy/20 px-4 py-2 text-sm font-semibold text-navy transition hover:border-teal hover:text-teal"
          >
            Request Consultation
          </Link>
        </article>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">Frequently Asked Questions</h2>
        <div className="mt-5">
          <FaqAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}