"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { NAV_GROUPS, NAV_LINKS } from "@/lib/constants";
import { IconClose, IconMenu } from "@/components/ui/Icons";
import { CartButton } from "@/components/cart/CartButton";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  const isHome = pathname === "/";
  // White nav only on home hero (top). Once scrolled — or on other pages — use dark style.
  const lightNav = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border/80 bg-cream/95 py-3 shadow-[0_1px_0_rgba(26,58,42,0.04)] backdrop-blur-md"
          : "bg-transparent py-5 md:py-6"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className={clsx(
            "font-serif text-lg tracking-[0.12em] uppercase transition-colors duration-500 md:text-xl",
            lightNav ? "text-white" : "text-forest"
          )}
        >
          Gilgit Naturals
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="relative">
              {NAV_GROUPS[link.label as keyof typeof NAV_GROUPS] ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setDropdown((current) =>
                        current === link.label ? null : link.label
                      )
                    }
                    aria-expanded={dropdown === link.label}
                    className={clsx(
                      "nav-link flex items-center gap-1 text-[0.75rem] tracking-[0.1em] uppercase transition-colors duration-500",
                      lightNav
                        ? "text-white/80 hover:text-white"
                        : "text-charcoal-muted hover:text-forest"
                    )}
                  >
                    {link.label}
                    <span className="text-[10px]">
                      {dropdown === link.label ? "−" : "+"}
                    </span>
                  </button>
                  {dropdown === link.label && (
                    <div className="absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 border border-border bg-cream p-2 shadow-[0_16px_35px_rgba(26,58,42,0.12)]">
                      {NAV_GROUPS[
                        link.label as keyof typeof NAV_GROUPS
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-3 text-xs tracking-[0.08em] text-charcoal-muted uppercase transition-colors hover:bg-cream-dark hover:text-forest"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className={clsx(
                    "nav-link text-[0.75rem] tracking-[0.1em] uppercase transition-colors duration-500",
                    lightNav && "nav-link-light",
                    lightNav
                      ? pathname === link.href
                        ? "active text-white"
                        : "text-white/80 hover:text-white"
                      : pathname === link.href
                        ? "active text-forest"
                        : "text-charcoal-muted hover:text-forest"
                  )}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/request-quote"
            className={clsx(
              "hidden px-4 py-2.5 text-[0.6875rem] font-medium tracking-[0.08em] uppercase transition-all duration-500 xl:inline-flex xl:px-5",
              lightNav
                ? "border border-white/70 bg-transparent text-white hover:bg-white hover:text-forest"
                : "bg-forest text-cream hover:bg-forest-light"
            )}
          >
            Request Wholesale Quote
          </Link>
          <CartButton light={lightNav} />
          <button
            type="button"
            className={clsx(
              "flex h-10 w-10 items-center justify-center transition-colors duration-500 xl:hidden",
              lightNav
                ? "bg-forest/85 text-white hover:bg-forest"
                : "bg-forest text-cream hover:bg-forest-light"
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <IconClose className="h-5 w-5" />
            ) : (
              <IconMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        className={clsx(
          "fixed inset-x-0 top-[4.25rem] z-[60] h-[calc(100dvh-4.25rem)] overflow-y-auto bg-[#f7f5f0] shadow-[0_8px_20px_rgba(26,58,42,0.12)] xl:hidden",
          open ? "block" : "hidden"
        )}
        style={{ backgroundColor: "#f7f5f0" }}
      >
        <nav className="flex h-full flex-col px-6 py-10">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-border py-4 font-serif text-2xl text-[#1a3a2a]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/request-quote"
            className="mt-10 bg-forest py-4 text-center text-sm font-medium tracking-[0.1em] text-cream uppercase"
          >
            Request Wholesale Quote
          </Link>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link
              href="/cart"
              className="border border-forest py-3 text-center text-sm font-medium tracking-[0.08em] text-forest uppercase"
            >
              View Cart
            </Link>
            <Link
              href="/contact"
              className="border border-border bg-white py-3 text-center text-sm font-medium tracking-[0.08em] text-forest uppercase"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
