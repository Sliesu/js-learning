export function addCurrency(a, b) {
  return (Math.round(a * 100) + Math.round(b * 100)) / 100;
}

export function clampNumber(val, min, max) {
  if (!Number.isFinite(val)) return min;
  return Math.min(max, Math.max(min, val));
}

export async function test(mod, assert) {
  assert.equal(mod.addCurrency(0.1, 0.2), 0.3, "0.1 + 0.2 精确等于 0.3");
  assert.equal(mod.addCurrency(19.99, 0.01), 20, "19.99 + 0.01 等于 20");
  assert.equal(mod.clampNumber(15, 0, 10), 10, "超过上限截断到 max");
  assert.equal(mod.clampNumber(-5, 0, 10), 0, "低于下限截断到 min");
  assert.equal(mod.clampNumber(NaN, 0, 10), 0, "NaN 回退到 min");
  assert.equal(mod.clampNumber(Infinity, 2, 8), 2, "Infinity 回退到 min");
}
