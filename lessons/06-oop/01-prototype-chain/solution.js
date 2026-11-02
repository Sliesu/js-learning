export function getPrototypeChainDepth(obj) {
  let depth = 0;
  let cur = Object.getPrototypeOf(obj);
  while (cur !== null) {
    depth += 1;
    cur = Object.getPrototypeOf(cur);
  }
  return depth;
}

export async function test(mod, assert) {
  assert.equal(mod.getPrototypeChainDepth(Object.create(null)), 0, "无原型对象深度为 0");
  assert.equal(mod.getPrototypeChainDepth({}), 1, "普通对象 -> Object.prototype -> null 深度为 1");
  assert.equal(mod.getPrototypeChainDepth([]), 2, "数组 -> Array.prototype -> Object.prototype -> null 深度为 2");
}
