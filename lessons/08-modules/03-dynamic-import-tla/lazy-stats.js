export function computeStats(nums) {
  const count = nums.length;
  const sum = nums.reduce((a, b) => a + b, 0);
  return { count, sum, avg: count ? sum / count : 0 };
}
