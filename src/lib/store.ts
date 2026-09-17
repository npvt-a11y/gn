export const PRODUCT_PRICES: Record<string, number> = {
  "10g": 2000,
  "20g": 3000,
  "50g": 6000,
};

export const DELIVERY_CHARGES = {
  islamabad: 200,
  other: 300,
} as const;

export const ORDER_SUBMISSION_URL =
  "https://script.google.com/macros/s/AKfycbyxE_WQcySuQBard8OCGy1IVZd32mVNCJqPCgIA6g_KRZB3KlkiR8m1yxnmtkJAGCVYiQ/exec";

export function getDeliveryCharge(city: string) {
  return city.trim().toLowerCase() === "islamabad"
    ? DELIVERY_CHARGES.islamabad
    : DELIVERY_CHARGES.other;
}

export function formatPKR(amount: number) {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}
