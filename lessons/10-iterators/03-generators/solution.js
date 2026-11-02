export function* chunkGenerator(items, size) {
  for (let i = 0; i < items.length; i += size) {
    yield items.slice(i, i + size);
  }
}

export async function test(mod, assert) {
  const chunks = [...mod.chunkGenerator([1, 2, 3, 4, 5], 2)];
  assert.deepEqual(chunks, [[1, 2], [3, 4], [5]], "按大小 2 分块产出");
  assert.deepEqual([...mod.chunkGenerator([], 3)], [], "空数组不产出任何块");
}
