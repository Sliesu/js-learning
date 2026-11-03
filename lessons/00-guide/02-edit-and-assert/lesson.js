export const summary =
  "检查不只看一个数字对不对，还会看你交回来的整个对象，每个字段是不是都对上了。";

export const keyPoints = [
  "两个数字是不是同一个值，用精确比较。`1` 和 `\"1\"` 不是同一个值。",
  "对象要逐项核对。`{ first: 3, second: 4, sum: 7 }` 里三个字段都得对。",
  "后面有的题会要求：非法输入必须抛错。报错也是一种正确结果。",
];

export const remember = [
  "先在脑子里算一个例子，再动手写。比如 `buildPair(3, 4)` 应该是 first 为 3、second 为 4、sum 为 7。",
  "检查没过时，先看失败那一行写的期望值和实际值。",
];

export const taskDescription =
  "写 `buildPair(a, b)`，把两个数写成一个对象：`first` 是第一个数，`second` 是第二个数，`sum` 是两者之和。3 和 4 的 sum 是 7。";

export async function runDemo(ctx) {
  ctx.log("断言示例：Object.is(1 + 2, 3) =>", Object.is(1 + 2, 3));
  ctx.log("深比较示例：{ first: 2, second: 5, sum: 7 }");
}
