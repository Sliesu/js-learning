export function rangeStep(start, count, step = 1) {
  return Array.from({ length: count }, (_, i) => start + i * step);
}

export function compactHoles(sparseArr) {
  const out = [];
  for (const item of sparseArr) {
    if (item !== undefined) {
      out.push(item);
    }
  }
  return out;
}

export async function test(mod, assert) {
  assert.deepEqual(mod.rangeStep(5, 4, 3), [5, 8, 11, 14], "生成等差数列");
  // eslint-disable-next-line no-sparse-arrays
  const sparse = [1, , 2, undefined, 3];
  assert.deepEqual(mod.compactHoles(sparse), [1, 2, 3], "移除稀疏空洞与 undefined");
}
