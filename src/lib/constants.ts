export const SITE_NAME = "Gilgit Naturals";
export const SITE_URL = "https://gilgitnaturals.com";
export const SITE_TAGLINE = "Authentic Shilajit from the Mountains of Gilgit";

export const CONTACT = {
  phone: "+923145666328",
  whatsapp: "+923145666328",
  email: "gilgitnaturals@gmail.com",
  instagram: "[@gilgitnaturals]",
  facebook: "[@gilgitnaturals]",
  location: "Pakistan",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/our-shilajit", label: "Shilajit" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/quality", label: "Quality" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/knowledge", label: "Blogs" },
  { href: "/contact", label: "Contact" },
] as const;

export const NAV_GROUPS = {
  Shilajit: [
    { href: "/our-shilajit", label: "Product" },
    { href: "/what-is-shilajit", label: "What Is Shilajit?" },
    { href: "/benefits", label: "Traditional Benefits" },
  ],
  Wholesale: [
    { href: "/wholesale", label: "Wholesale Supply" },
    { href: "/request-quote", label: "Request a Quote" },
    { href: "/shipping-policy#wholesale", label: "Wholesale Policy" },
  ],
  Quality: [
    { href: "/quality", label: "Quality Approach" },
    { href: "/processing", label: "Our Processing" },
    { href: "/sourcing", label: "Sourcing" },
  ],
} as const;

export const FOOTER_NAV = [
  { href: "/", label: "Home" },
  { href: "/our-shilajit", label: "Shilajit" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/quality", label: "Quality" },
  { href: "/sourcing", label: "Sourcing" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/knowledge", label: "Blogs" },
  { href: "/contact", label: "Contact" },
] as const;

export const POLICY_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/shipping-policy#wholesale", label: "Wholesale Policy" },
] as const;

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80",
  mountains:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
  mountainsAlt: "/gilgit shilajeet.png",
  product: "/gilgitnatural-brand0image.png",
  productPng: "/gilgit_naturals_product_transparent(1).png",
  productClose: "/salajeet-refined-packed-giligit-natural-from-gilgit.jpg",
  productJar: "/Gilgit Naturals Organic Jar in Nature.png",
  texture: "/gilgit shilajeet.png",
  landscape:
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1c2e5b?w=1600&q=80",
  jar: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
  valley:
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1600&q=80",
};
