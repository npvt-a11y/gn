import { clsx } from "clsx";
import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function IconMountain(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 20h18L14.5 6.5 11 12 8.5 8.5 3 20z" />
    </svg>
  );
}

export function IconBox(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
      <path d="M3 8l9 5 9-5M12 13v10" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
    </svg>
  );
}

export function IconEye(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function IconTruck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M1 7h13v10H1zM14 10h5l3 3v4h-8V10z" />
      <circle cx="5.5" cy="18.5" r="1.5" />
      <circle cx="17.5" cy="18.5" r="1.5" />
    </svg>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14z" />
      <path d="M5 19c0-6 4-10 10-12" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconQuote(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 11c0-3 1.5-5 4-6l.5 1.5C9.5 7.5 9 9 9 11h3v7H5v-7h2zm9 0c0-3 1.5-5 4-6l.5 1.5c-2 1-2.5 2.5-2.5 4.5H21v7h-7v-7h2z" />
    </svg>
  );
}

type TrustItemProps = {
  icon: ReactNode;
  title: string;
  className?: string;
};

export function TrustItem({ icon, title, className }: TrustItemProps) {
  return (
    <div className={clsx("flex flex-col items-center gap-4 text-center", className)}>
      <div className="flex h-12 w-12 items-center justify-center text-gold">
        {icon}
      </div>
      <p className="text-sm font-medium tracking-wide text-forest">{title}</p>
    </div>
  );
}
