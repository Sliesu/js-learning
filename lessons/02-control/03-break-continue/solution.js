export function findInMatrix(grid, target) {
  for (let row = 0; row < grid.length; row++) {
    const line = grid[row];
    if (!Array.isArray(line)) continue;
    for (let col = 0; col < line.length; col++) {
      if (line[col] === target) {
        return { row, col };
      }
    }
  }
  return null;
}

export async function test(mod, assert) {
  const sample = [[10, 20], null, [30, 40, 50]];
  assert.deepEqual(mod.findInMatrix(sample, 40), { row: 2, col: 1 }, "跳过异常行并定位 40");
  assert.equal(mod.findInMatrix(sample, 99), null, "不存在时返回 null");
}
