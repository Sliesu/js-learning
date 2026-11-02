export function createAuditedObject(initialObj) {
  const history = [];
  const proxy = new Proxy(initialObj, {
    set(target, key, value, receiver) {
      const oldValue = Reflect.get(target, key, receiver);
      const ok = Reflect.set(target, key, value, receiver);
      if (ok) {
        history.push({ key: String(key), oldValue, newValue: value });
      }
      return ok;
    },
  });
  return { proxy, history };
}

export async function test(mod, assert) {
  const { proxy, history } = mod.createAuditedObject({ price: 100 });
  proxy.price = 120;
  proxy.stock = 10;
  assert.deepEqual(
    history,
    [
      { key: "price", oldValue: 100, newValue: 120 },
      { key: "stock", oldValue: undefined, newValue: 10 },
    ],
    "完整记录每次属性赋值的旧值与新值"
  );
  assert.equal(proxy.price, 120, "底层对象属性同步更新");
}
