export function calcDiscountRate(tier, amount) {
  switch (tier) {
    case "gold":
      return 0.85;
    case "silver":
      return 0.9;
    case "bronze":
      return amount >= 500 ? 0.95 : 1;
    default:
      return 1;
  }
}

export async function test(mod, assert) {
  assert.equal(mod.calcDiscountRate("gold", 100), 0.85, "gold 固定 0.85");
  assert.equal(mod.calcDiscountRate("silver", 100), 0.9, "silver 固定 0.9");
  assert.equal(mod.calcDiscountRate("bronze", 600), 0.95, "bronze 满 500 为 0.95");
  assert.equal(mod.calcDiscountRate("bronze", 499), 1, "bronze 未满 500 为 1");
  assert.equal(mod.calcDiscountRate("guest", 1000), 1, "未知等级为 1");
}
