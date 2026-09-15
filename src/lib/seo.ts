import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageSeo): Metadata {
  const url = `${SITE_URL}${path}`;
  const isHome = title === SITE_NAME;

  return {
    title: isHome
      ? {
          absolute: `${SITE_NAME} | Wholesale Shilajit Supplier Pakistan`,
        }
      : title,
    description,
    keywords: [
      "wholesale shilajit Pakistan",
      "Shilajit wholesale supplier Pakistan",
      "bulk Shilajit Pakistan",
      "Gilgit Shilajit",
      "Shilajit supplier",
      "premium Shilajit",
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: isHome
        ? `${SITE_NAME} | Wholesale Shilajit Supplier Pakistan`
        : `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_PK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isHome
        ? `${SITE_NAME} | Wholesale Shilajit Supplier Pakistan`
        : `${title} | ${SITE_NAME}`,
      description,
    },
  };
}
