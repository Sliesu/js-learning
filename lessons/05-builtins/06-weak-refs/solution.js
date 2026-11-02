export function createObjectCache(computeFn) {
  const cache = new WeakMap();
  return function (obj) {
    if (cache.has(obj)) {
      return cache.get(obj);
    }
    const val = computeFn(obj);
    cache.set(obj, val);
    return val;
  };
}

export async function test(mod, assert) {
  let calls = 0;
  const getSummary = mod.createObjectCache((item) => {
    calls += 1;
    return `${item.id}:${item.price * 2}`;
  });
  const p1 = { id: "p1", price: 100 };
  const p2 = { id: "p2", price: 50 };
  assert.equal(getSummary(p1), "p1:200", "首次计算 p1");
  assert.equal(getSummary(p1), "p1:200", "二次读取 p1 命中 WeakMap 缓存");
  assert.equal(calls, 1, "computeFn 对 p1 只执行 1 次");
  assert.equal(getSummary(p2), "p2:100", "计算新对象 p2");
  assert.equal(calls, 2, "总调用次数为 2");
}
