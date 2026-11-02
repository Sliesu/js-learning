export function deepFreeze(obj) {
  if (typeof obj !== "object" || obj === null) return obj;
  for (const key of Reflect.ownKeys(obj)) {
    const val = obj[key];
    if (typeof val === "object" && val !== null && !Object.isFrozen(val)) {
      deepFreeze(val);
    }
  }
  return Object.freeze(obj);
}

export async function test(mod, assert) {
  const config = mod.deepFreeze({
    db: { host: "localhost", ports: [5432, 5433] },
  });
  assert.equal(Object.isFrozen(config), true, "顶层已冻结");
  assert.equal(Object.isFrozen(config.db), true, "嵌套对象已冻结");
  assert.equal(Object.isFrozen(config.db.ports), true, "嵌套数组已冻结");
  assert.throws(() => {
    config.db.host = "hacked";
  }, TypeError, "修改深层属性在严格模式下抛出 TypeError");
}
