import { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Price Consulting, LLC to schedule a federal consulting consultation."
};

export default function ContactPage() {
  return (
    <section className="section-wrap py-16 md:py-24">
      <p className="kicker">Contact</p>
      <h1 className="section-title mt-3">Request Strategic Briefing</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.35fr]">
        <aside className="intel-panel px-6 py-2 shadow-panel">
          <h2 className="pt-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal/80">Contact Ledger</h2>
          <p className="mt-3 text-sm leading-7 text-slate">
            Share your mission priorities and engagement objectives. We will respond with a recommended next step.
          </p>

          <dl className="mt-4 text-sm text-slate">
            <div className="brief-row">
              <dt className="font-semibold uppercase tracking-[0.12em] text-white">Phone</dt>
              <dd className="mt-2">{company.phone}</dd>
            </div>
            <div className="brief-row">
              <dt className="font-semibold uppercase tracking-[0.12em] text-white">Email</dt>
              <dd className="mt-2">{company.email}</dd>
            </div>
            <div className="py-5">
              <dt className="font-semibold uppercase tracking-[0.12em] text-white">Office</dt>
              <dd>
                {company.address.streetAddress}, {company.address.addressLocality}, {company.address.addressRegion}{" "}
                {company.address.postalCode}
              </dd>
            </div>
          </dl>
        </aside>

        <ContactForm />
      </div>
    </section>
  );
}