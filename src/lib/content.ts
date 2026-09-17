export type Review = {
  id: string;
  name: string;
  city: string;
  type?: string;
  category: "wholesale" | "retail" | "general";
  text: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    id: "1",
    name: "Ahmed R.",
    city: "Islamabad",
    category: "retail",
    rating: 5,
    text: "Ordered the Shilajit resin for the first time. The packaging was neat and the order arrived properly sealed. Communication throughout the order was also good.",
  },
  {
    id: "2",
    name: "Hamza K.",
    city: "Rawalpindi",
    category: "retail",
    rating: 5,
    text: "Good experience overall. I liked that the product information and usage instructions were clearly provided. Delivery was also smooth.",
  },
  {
    id: "3",
    name: "Bilal M.",
    city: "Lahore",
    category: "retail",
    rating: 5,
    text: "I was looking specifically for Shilajit sourced from Gilgit. The ordering process was straightforward and the packaging looked professional.",
  },
  {
    id: "4",
    name: "Usman A.",
    city: "Peshawar",
    category: "retail",
    rating: 4,
    text: "Received my order safely. The team responded quickly when I asked about the product and delivery.",
  },
  {
    id: "5",
    name: "Saad H.",
    city: "Karachi",
    category: "retail",
    rating: 5,
    text: "Ordered from Karachi and the package arrived in good condition. I appreciated the simple and professional packaging.",
  },
  {
    id: "6",
    name: "Muhammad Z.",
    city: "Lahore",
    type: "Supplement Retailer",
    category: "wholesale",
    rating: 5,
    text: "We contacted Gilgit Naturals regarding a bulk requirement. The team explained the available quantities and packaging options clearly. Communication was professional.",
  },
  {
    id: "7",
    name: "Fahad R.",
    city: "Islamabad",
    type: "Health & Wellness Store",
    category: "wholesale",
    rating: 5,
    text: "Our first wholesale inquiry was handled quickly. We received the information we needed regarding quantity, packaging and delivery before proceeding.",
  },
  {
    id: "8",
    name: "Ali S.",
    city: "Rawalpindi",
    type: "Online Retailer",
    category: "wholesale",
    rating: 5,
    text: "We were looking for a supplier for regular Shilajit orders. The quotation process was straightforward and the team was responsive.",
  },
];

export const faqs = [
  {
    question: "What is Shilajit?",
    answer:
      "Shilajit is a naturally occurring mineral-rich resin found in high mountain regions. It forms over long periods as organic plant material decomposes within rocky mountain environments.",
  },
  {
    question: "Where does your Shilajit come from?",
    answer:
      "Gilgit Naturals sources Shilajit connected to the mountains of Gilgit in northern Pakistan, with a focus on authenticity and careful handling.",
  },
  {
    question: "Is it purified?",
    answer:
      "Yes. Our Shilajit goes through selection, cleaning, purification, and quality review before packaging for wholesale supply.",
  },
  {
    question: "How is it stored?",
    answer:
      "We store purified Shilajit in controlled conditions — cool, dry, and sealed — to help maintain texture and consistency before dispatch.",
  },
  {
    question: "How should it be stored after purchase?",
    answer:
      "Keep Shilajit in a cool, dry place away from direct sunlight. Seal the container tightly and avoid introducing moisture during handling.",
  },
  {
    question: "Do you offer wholesale?",
    answer:
      "Yes. We supply retailers, resellers, pharmacies, gyms, wellness businesses, online sellers, and brands seeking bulk Shilajit.",
  },
  {
    question: "What minimum quantity is required?",
    answer:
      "Minimum quantities depend on packaging and business needs. Share your estimated requirement when requesting a wholesale quote and we will advise accordingly.",
  },
  {
    question: "Do you offer private label?",
    answer:
      "Private-label potential can be discussed based on volume and requirements. Mention private label in your wholesale inquiry so we can explore options with you.",
  },
  {
    question: "Where do you deliver?",
    answer:
      "We aim to support Pakistan-wide delivery. Delivery details and timelines are confirmed during order discussion based on your city and quantity.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery timelines vary by location and order size. Estimated timelines are shared when your wholesale inquiry is reviewed.",
  },
  {
    question: "How can I request wholesale pricing?",
    answer:
      "Use the Request Wholesale Quote page or contact form. Include your business type, city, and estimated quantity for a meaningful response.",
  },
  {
    question: "How can I contact you?",
    answer:
      "Reach us via the Contact page using phone, WhatsApp, email, or the contact form. Wholesale inquiries can also be submitted through the quote form.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "Payment methods are confirmed during order discussion. Details will be shared once your wholesale requirements are reviewed.",
  },
];
