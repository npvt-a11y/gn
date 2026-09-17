export type Review = {
  id: string;
  name: string;
  city: string;
  type?: string;
  category: "wholesale" | "retail" | "general";
  text: string;
};

export const reviews: Review[] = [
  {
    id: "1",
    name: "Ahmed K.",
    city: "Lahore",
    type: "Retailer",
    category: "wholesale",
    text: "Clear communication and consistent product. Ordering wholesale felt professional from the first inquiry.",
  },
  {
    id: "2",
    name: "Sana R.",
    city: "Islamabad",
    type: "Wellness Store",
    category: "wholesale",
    text: "We needed a dependable Shilajit source for our store. The quality and packaging met our expectations.",
  },
  {
    id: "3",
    name: "Hassan M.",
    city: "Karachi",
    type: "Reseller",
    category: "wholesale",
    text: "Good experience requesting bulk supply. Responses were prompt and the product arrived as described.",
  },
  {
    id: "4",
    name: "Fatima Z.",
    city: "Peshawar",
    type: "Online Seller",
    category: "retail",
    text: "Appreciated the transparent information about sourcing and purification. Makes it easier to explain to customers.",
  },
  {
    id: "5",
    name: "Bilal A.",
    city: "Faisalabad",
    type: "Gym Owner",
    category: "wholesale",
    text: "Reliable wholesale option for our wellness shelf. Looking forward to continuing the partnership.",
  },
  {
    id: "6",
    name: "Maryam S.",
    city: "Multan",
    type: "Customer",
    category: "retail",
    text: "Product presentation felt premium. Storage guidance was clear and helpful.",
  },
  {
    id: "7",
    name: "Usman T.",
    city: "Rawalpindi",
    type: "Supplement Store",
    category: "wholesale",
    text: "Flexible quantities worked well for our first order. Professional tone throughout.",
  },
  {
    id: "8",
    name: "Ayesha N.",
    city: "Sialkot",
    type: "Customer",
    category: "general",
    text: "The educational content on the website helped me understand what I was buying.",
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
