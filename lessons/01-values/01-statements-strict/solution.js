export function evaluateLinear(k, x, b) {
  return k * x + b;
}

export function isStrictMode() {
  return (function () {
    return this === undefined;
  })();
}

export async function test(mod, assert) {
  assert.equal(mod.evaluateLinear(2, 5, 1), 11, "2 * 5 + 1 = 11");
  assert.equal(mod.evaluateLinear(-3, 4, 12), 0, "-3 * 4 + 12 = 0");
  assert.equal(mod.isStrictMode(), true, "ES Module 下处于严格模式");
}
