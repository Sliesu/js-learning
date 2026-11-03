export const summary =
  "全面对比 `for`、`while`、`do...while`、`for...of`（遍历可迭代元素值）与 `for...in`（遍历对象可枚举属性键名）。";

export const keyPoints = [
  "`for...of` 遍历数组、字符串、`Map`、`Set` 的「值」，是遍历序列数据的首选。",
  "`for...in` 遍历对象的可枚举字符串键（包含原型链上的可枚举属性），绝不要用 `for...in` 遍历数组。",
  "遍历普通对象自身键值优先使用 `for (const [k, v] of Object.entries(obj))`。",
];

export const remember = [
  "记口诀：`for...of` 拿值（Value of Iterable），`for...in` 拿键（Key in Object）。",
];

export const taskDescription =
  "日终要把一批发生额里的偶数金额加总，奇数跳过。请写 sumEvenNumbers(nums)，用 for...of 遍历后返回偶数之和。另一张参数表只统计这张表自己的字段名，不能把原型上继承来的名字算进去。请写 listOwnKeys(obj)，返回自身可枚举属性名数组。若用 for...in，请配合 Object.hasOwn 排除继承属性。";

export async function runDemo(ctx) {
  const arr = [10, 20, 30];
  let sum = 0;
  for (const n of arr) sum += n;
  ctx.log("for...of 累加 [10,20,30]:", sum);
}
