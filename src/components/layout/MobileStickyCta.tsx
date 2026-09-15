import Link from "next/link";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-cream/95 p-3 backdrop-blur-md md:hidden">
      <Link
        href="/request-quote"
        className="flex w-full items-center justify-center bg-forest py-3.5 text-[0.75rem] font-medium tracking-[0.1em] text-cream uppercase"
      >
        Request Wholesale Quote
      </Link>
    </div>
  );
}
