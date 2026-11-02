export const summary =
  "总表查漏补缺：一次检阅 `globalThis`、幂运算 `**`、`Array.prototype.at`、`findLast` / `findLastIndex`、`Object.hasOwn`、`Object.entries` / `Object.fromEntries` 等所有现代语法拼图。";

export const keyPoints = [
  "`globalThis` 在浏览器、Worker、Node.js 中统一指向全局对象。",
  "`2 ** 10 === 1024`（幂运算符，右结合：`2 ** 3 ** 2 === 2 ** 9 === 512`）。",
  "`arr.findLast(fn)` 与 `arr.findLastIndex(fn)` 从数组末尾向前查找第一个匹配项，无需先克隆反转数组。",
  "`Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v)]))` 是转换对象所有属性值的黄金组合。",
];

export const remember = [
  "`Object.entries` -> 数组方法处理 -> `Object.fromEntries` 让对象也能享受数组的整套链式方法。",
];

export const taskDescription =
  "实现 `sweepModernFeatures(nums, priceMapObj)`：返回 `{ hasGlobal: typeof globalThis === 'object', power: 2 ** 8, lastItem: nums.at(-1), lastEven: nums.findLast(n => n % 2 === 0), doubledPrices: 用 entries + fromEntries 把 priceMapObj 所有值乘 2 }`。";

export async function runDemo(ctx) {
  const nums = [1, 4, 7, 10, 13];
  ctx.log("nums.at(-1):", nums.at(-1), "nums.findLast(偶数):", nums.findLast((n) => n % 2 === 0));
  const prices = { p1: 100, p2: 250 };
  const doubled = Object.fromEntries(Object.entries(prices).map(([k, v]) => [k, v * 2]));
  ctx.log("entries + fromEntries 翻倍对象值:", doubled);
}
