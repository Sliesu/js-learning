export function inspectAllOwnKeys(obj) {
  return Reflect.ownKeys(obj);
}

export async function test(mod, assert) {
  const s = Symbol("k");
  const target = { visible: 1, [s]: 2 };
  Object.defineProperty(target, "hidden", { value: 3, enumerable: false });
  assert.deepEqual(
    mod.inspectAllOwnKeys(target),
    ["visible", "hidden", s],
    "包含普通键、不可枚举键与 Symbol 键"
  );
}
