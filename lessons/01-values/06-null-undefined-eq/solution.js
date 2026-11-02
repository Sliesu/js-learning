export function isNullish(val) {
  return val === null || val === undefined;
}

export function sameValue(a, b) {
  return Object.is(a, b);
}

export async function test(mod, assert) {
  assert.equal(mod.isNullish(null), true, "null 是空值");
  assert.equal(mod.isNullish(undefined), true, "undefined 是空值");
  assert.equal(mod.isNullish(0), false, "0 不是 nullish");
  assert.equal(mod.isNullish(""), false, "空串不是 nullish");
  assert.equal(mod.sameValue(NaN, NaN), true, "Object.is 识别 NaN");
  assert.equal(mod.sameValue(+0, -0), false, "Object.is 区分 +0 和 -0");
}
