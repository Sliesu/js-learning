export function sortAndReplaceFirst(nums, replacement) {
  return nums.toSorted((a, b) => a - b).with(0, replacement);
}

export async function test(mod, assert) {
  const input = [40, 10, 30, 20];
  const res = mod.sortAndReplaceFirst(input, 99);
  assert.deepEqual(res, [99, 20, 30, 40], "排序后首项被替换为 99");
  assert.deepEqual(input, [40, 10, 30, 20], "原数组顺序与内容完全未变");
}
