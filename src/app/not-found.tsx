import Link from "next/link";
import { PageHero } from "@/components/ui/SectionHeader";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page not found"
        description="The page you are looking for does not exist or may have moved."
      >
        <Link
          href="/"
          className="btn-primary"
        >
          Return Home
        </Link>
      </PageHero>
    </>
  );
}
