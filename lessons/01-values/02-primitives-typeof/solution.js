export function preciseType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

export async function test(mod, assert) {
  assert.equal(mod.preciseType(null), "null", "识别 null");
  assert.equal(mod.preciseType([1, 2]), "array", "识别数组");
  assert.equal(mod.preciseType({ a: 1 }), "object", "识别普通对象");
  assert.equal(mod.preciseType(99n), "bigint", "识别 bigint");
  assert.equal(mod.preciseType(Symbol("x")), "symbol", "识别 symbol");
}
