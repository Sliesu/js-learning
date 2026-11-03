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
  "sumEvenNumbers(nums) 把数组里的偶数加起来，奇数不管，用 for...of。listOwnKeys(obj) 列出这个对象自己的字段名，从原型继承来的不要。如果用 for...in，记得用 Object.hasOwn 过滤。";

export async function runDemo(ctx) {
  const arr = [10, 20, 30];
  let sum = 0;
  for (const n of arr) sum += n;
  ctx.log("for...of 累加 [10,20,30]:", sum);
}
