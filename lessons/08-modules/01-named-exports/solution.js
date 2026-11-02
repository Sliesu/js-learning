import { calcTax } from "./tax-helper.js";

export function priceWithTax(amount) {
  return amount + calcTax(amount);
}

export async function test(mod, assert) {
  assert.equal(mod.priceWithTax(100), 106, "100 + 6 = 106");
  assert.equal(mod.priceWithTax(250), 265, "250 + 15 = 265");
}
