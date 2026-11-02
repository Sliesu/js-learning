export const TAX_RATE = 0.06;

export function calcTax(amount) {
  return Math.round(amount * TAX_RATE * 100) / 100;
}
