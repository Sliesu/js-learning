export function toStrictNumber(input) {
  if (typeof input === "number") {
    return Number.isFinite(input) ? input : null;
  }
  if (typeof input === "string") {
    const trimmed = input.trim();
    if (trimmed.length === 0) return null;
    const num = Number(trimmed);
    return Number.isFinite(num) ? num : null;
  }
  return null;
}

export async function test(mod, assert) {
  assert.equal(mod.toStrictNumber(" 42.5 "), 42.5, "解析带空格的数字字符串");
  assert.equal(mod.toStrictNumber(""), null, "空字符串返回 null 而不是 0");
  assert.equal(mod.toStrictNumber("   "), null, "纯空格字符串返回 null");
  assert.equal(mod.toStrictNumber(true), null, "布尔值不隐式转成 1");
  assert.equal(mod.toStrictNumber(null), null, "null 不隐式转成 0");
  assert.equal(mod.toStrictNumber(108), 108, "保留正常有限数字");
}
