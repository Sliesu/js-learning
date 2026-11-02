export function pickOwnFields(record, keys) {
  const out = {};
  for (const k of keys) {
    if (Object.hasOwn(record, k)) {
      out[k] = record[k];
    }
  }
  return out;
}

export async function test(mod, assert) {
  const sample = { id: "u1", name: "林晓", extra: undefined };
  assert.deepEqual(
    mod.pickOwnFields(sample, ["id", "extra", "toString", "missing"]),
    { id: "u1", extra: undefined },
    "只保留自身存在的属性，忽略原型属性与不存在的键"
  );
}
