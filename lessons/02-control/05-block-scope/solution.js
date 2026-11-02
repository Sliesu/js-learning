export function createIndexGetters(count) {
  const getters = [];
  for (let i = 0; i < count; i++) {
    getters.push(() => i);
  }
  return getters;
}

export async function test(mod, assert) {
  const fns = mod.createIndexGetters(4);
  assert.equal(fns.length, 4, "生成 4 个函数");
  assert.deepEqual(
    fns.map((fn) => fn()),
    [0, 1, 2, 3],
    "每个函数分别返回各自的索引 0, 1, 2, 3"
  );
}
