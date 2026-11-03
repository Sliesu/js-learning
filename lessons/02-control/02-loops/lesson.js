export const summary =
  "循环有好几种写法。遍历一组值，优先用 `for...of`。`for...in` 走的是对象的键，不要拿它去扫数组。";

export const keyPoints = [
  "`for...of` 取出的是值，数组、字符串、`Map`、`Set` 都适合用它。",
  "`for...in` 取出的是可枚举的字符串键，连原型上的也会算进去。不要用它遍历数组。",
  "要同时拿到普通对象自己的键和值，写成 `for (const [k, v] of Object.entries(obj))`。",
];

export const remember = [
  "一句话区分：`for...of` 取的是值，`for...in` 取的是键。",
];

export const taskDescription =
  "写 `sumEvenNumbers(nums)`，把数组里的偶数加起来，奇数不管，用 `for...of`。再写 `listOwnKeys(obj)`，只列出这个对象自己的字段名，从原型继承来的不要。如果用 `for...in`，记得用 `Object.hasOwn` 过滤。";

export async function runDemo(ctx) {
  const arr = [10, 20, 30];
  let sum = 0;
  for (const n of arr) sum += n;
  ctx.log("for...of 累加 [10,20,30]:", sum);
}
