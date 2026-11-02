export function sweepModernFeatures(nums, priceMapObj) {
  return {
    hasGlobal: typeof globalThis === "object",
    power: 2 ** 8,
    lastItem: nums.at(-1),
    lastEven: nums.findLast((n) => n % 2 === 0),
    doubledPrices: Object.fromEntries(
      Object.entries(priceMapObj).map(([k, v]) => [k, v * 2])
    ),
  };
}

export async function test(mod, assert) {
  assert.deepEqual(
    mod.sweepModernFeatures([3, 8, 12, 15], { a: 10, b: 25 }),
    {
      hasGlobal: true,
      power: 256,
      lastItem: 15,
      lastEven: 12,
      doubledPrices: { a: 20, b: 50 },
    },
    "一次性验证全部现代语言特性"
  );
}
