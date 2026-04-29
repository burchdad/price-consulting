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
      <h1 className="section-title mt-3">Schedule a Consultation</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.35fr]">
        <aside className="rounded-2xl border border-navy/10 bg-white p-6 shadow-panel">
          <h2 className="text-xl font-semibold text-navy">Connect With Our Team</h2>
          <p className="mt-3 text-sm leading-7 text-slate">
            Share your mission priorities and engagement objectives. We will respond with a recommended next step.
          </p>

          <dl className="mt-6 space-y-4 text-sm text-slate">
            <div>
              <dt className="font-semibold text-navy">Phone</dt>
              <dd>{company.phone}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Email</dt>
              <dd>{company.email}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Office</dt>
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