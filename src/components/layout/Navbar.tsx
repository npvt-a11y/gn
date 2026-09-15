"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { NAV_LINKS } from "@/lib/constants";
import { IconClose, IconMenu } from "@/components/ui/Icons";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
            <Link
              key={link.href}
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
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/request-quote"
            className={clsx(
              "hidden px-4 py-2.5 text-[0.6875rem] font-medium tracking-[0.08em] uppercase transition-all duration-500 sm:inline-flex lg:px-5",
              lightNav
                ? "border border-white/70 bg-transparent text-white hover:bg-white hover:text-forest"
                : "bg-forest text-cream hover:bg-forest-light"
            )}
          >
            Request Wholesale Quote
          </Link>
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
          "fixed inset-0 top-[57px] z-40 bg-cream transition-all duration-500 xl:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <nav className="flex h-full flex-col px-6 py-10">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "border-b border-border py-4 font-serif text-2xl text-forest transition-all duration-500",
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                )}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
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
        </nav>
      </div>
    </header>
  );
}
