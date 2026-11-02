export async function loadAndComputeStats(nums) {
  const mod = await import("./lazy-stats.js");
  return mod.computeStats(nums);
}

export async function test(mod, assert) {
  const res = await mod.loadAndComputeStats([2, 4, 6, 8]);
  assert.deepEqual(res, { count: 4, sum: 20, avg: 5 }, "动态导入模块并计算统计指标");
}
