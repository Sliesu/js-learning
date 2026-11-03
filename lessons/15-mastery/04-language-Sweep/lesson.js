export const summary =
  "总表查漏补缺：一次检阅 `globalThis`、幂运算 `**`、`Array.prototype.at`、`findLast` / `findLastIndex`、`Object.hasOwn`、`Object.entries` / `Object.fromEntries` 等所有现代语法拼图。";

export const keyPoints = [
  "`globalThis` 在浏览器、Worker、Node.js 中统一指向全局对象。",
  "`2 ** 10 === 1024`（幂运算符，右结合：`2 ** 3 ** 2 === 2 ** 9 === 512`）。",
  "`arr.findLast(fn)` 与 `arr.findLastIndex(fn)` 从数组末尾向前查找第一个匹配项，无需先克隆反转数组。",
  "`Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v)]))` 是转换对象所有属性值的黄金组合。",
];

export const remember = [
  "`Object.entries` -> 数组方法处理 -> `Object.fromEntries` 让对象也能用上数组的整套链式方法。",
];

export const taskDescription =
  "sweepModernFeatures(nums, priceMapObj) 返回一个包含五项的对象。hasGlobal 表示 globalThis 是不是对象。power 是 2 的 8 次方。lastItem 是 nums 的最后一项。lastEven 是 nums 里最后一个偶数。doubledPrices 把 priceMapObj 中的每个价格乘以 2，键名保持不变。";

export async function runDemo(ctx) {
  const nums = [1, 4, 7, 10, 13];
  ctx.log("nums.at(-1):", nums.at(-1), "nums.findLast(偶数):", nums.findLast((n) => n % 2 === 0));
  const prices = { p1: 100, p2: 250 };
  const doubled = Object.fromEntries(Object.entries(prices).map(([k, v]) => [k, v * 2]));
  ctx.log("entries + fromEntries 翻倍对象值:", doubled);
}
