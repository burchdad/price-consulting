import Link from "next/link";
import { company, navLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <div className="mb-10 flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-7 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/80">Advisory Access</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">Need executive-ready support for your next initiative?</h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-teal px-7 py-4 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(15,118,110,0.5)] transition hover:bg-teal/90 hover:shadow-[0_6px_32px_rgba(15,118,110,0.65)]"
          >
            Schedule a Consultation
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <h2 className="text-lg font-semibold text-white">{company.name}</h2>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
              Strategic federal consulting for agencies and mission partners pursuing measurable public outcomes with
              executive-level rigor.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={company.capabilitiesStatementUrl}
                className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Capabilities Statement
              </a>
              <a
                href={company.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Navigate</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Connect</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>{company.phone}</li>
              <li>{company.email}</li>
              <li>
                {company.address.streetAddress}, {company.address.addressLocality}, {company.address.addressRegion}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>SAM and capability materials available upon request</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        Copyright {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}