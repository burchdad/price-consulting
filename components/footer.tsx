import Link from "next/link";
import { company, navLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-[#F8FAFC]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <h2 className="text-lg font-semibold text-navy">{company.name}</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate">
            Strategic federal consulting for agencies and mission partners pursuing measurable public outcomes.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-navy">Navigate</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-teal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-navy">Connect</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate">
            <li>{company.phone}</li>
            <li>{company.email}</li>
            <li>
              {company.address.streetAddress}, {company.address.addressLocality}, {company.address.addressRegion}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy/10 py-4 text-center text-xs text-slate">
        Copyright {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}