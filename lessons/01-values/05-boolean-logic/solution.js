export function isTruthy(val) {
  return Boolean(val);
}

export function pickFirstNonEmpty(a, b, fallback) {
  return a || b || fallback;
}

export async function test(mod, assert) {
  assert.equal(mod.isTruthy([]), true, "空数组也是真值");
  assert.equal(mod.isTruthy(0n), false, "0n 是假值");
  assert.equal(mod.isTruthy(""), false, "空字符串是假值");
  assert.equal(mod.pickFirstNonEmpty("", "上海", "未知"), "上海", "跳过空字符串");
  assert.equal(mod.pickFirstNonEmpty("", "", "默认城市"), "默认城市", "全部为空时返回 fallback");
}
