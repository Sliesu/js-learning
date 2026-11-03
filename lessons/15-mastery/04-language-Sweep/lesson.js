export const summary =
  "有些后来才加进语言的小工具，能少写不少绕弯的代码：统一的全局对象、乘方、从末尾取元素、从末尾查找，以及把对象当数组处理再变回去。";

export const keyPoints = [
  "`globalThis` 在浏览器、Worker 和 Node 里都指向全局对象，不用再猜是 `window` 还是 `global`。",
  "`2 ** 10` 是 1024。乘方从右往左结合：`2 ** 3 ** 2` 是 `2 ** 9`，也就是 512。",
  "`arr.at(-1)` 取最后一项。`findLast` 从末尾往前找第一个符合的，不必先把数组倒过来。",
  "想改对象里每个值、键保持不变：先 `Object.entries`，用数组方法处理，再 `Object.fromEntries` 变回对象。",
];

export const remember = [
  "`Object.entries` 出去，处理完，再 `Object.fromEntries` 回来。对象也就能用上数组那一套方法了。",
];

export const taskDescription =
  "写 `sweepModernFeatures(nums, priceMapObj)`，返回一个包含五项的对象。`hasGlobal` 表示 `globalThis` 是不是对象。`power` 是 2 的 8 次方。`lastItem` 是 `nums` 的最后一项。`lastEven` 是 `nums` 里最后一个偶数。`doubledPrices` 把 `priceMapObj` 里的每个价格乘以 2，键名保持不变。";

export async function runDemo(ctx) {
  const nums = [1, 4, 7, 10, 13];
  ctx.log("nums.at(-1):", nums.at(-1), "nums.findLast(偶数):", nums.findLast((n) => n % 2 === 0));
  const prices = { p1: 100, p2: 250 };
  const doubled = Object.fromEntries(Object.entries(prices).map(([k, v]) => [k, v * 2]));
  ctx.log("entries + fromEntries 翻倍对象值:", doubled);
}
