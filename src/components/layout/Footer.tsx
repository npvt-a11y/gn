import Link from "next/link";
import { CONTACT, FOOTER_NAV, POLICY_LINKS, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-1">
            <p className="font-serif text-xl tracking-[0.1em] uppercase">
              {SITE_NAME}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-cream/65">
              Premium Shilajit wholesale supply sourced from the mountains of
              Gilgit — for retailers, resellers, and wellness businesses across
              Pakistan.
            </p>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.16em] text-gold-light uppercase">
              Navigate
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.16em] text-gold-light uppercase">
              Policies
            </p>
            <ul className="mt-5 space-y-2.5">
              {POLICY_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.16em] text-gold-light uppercase">
              Contact
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-cream/70">
              <li>Phone: {CONTACT.phone}</li>
              <li>WhatsApp: {CONTACT.whatsapp}</li>
              <li>Email: {CONTACT.email}</li>
              <li>Location:{CONTACT.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-8 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p>Wholesale Shilajit supplier · Gilgit origin · Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
