const META_KEY = Symbol.for("js_learn.meta");

export function attachHiddenMeta(record, metaVal) {
  record[META_KEY] = metaVal;
  return record;
}

export function readHiddenMeta(record) {
  return record[META_KEY];
}

export async function test(mod, assert) {
  const user = { id: "u1", name: "林晓" };
  mod.attachHiddenMeta(user, { traced: true });
  assert.deepEqual(Object.keys(user), ["id", "name"], "Symbol 属性不出现在 Object.keys 中");
  assert.deepEqual(mod.readHiddenMeta(user), { traced: true }, "可准确读取 Symbol 元数据");
}
