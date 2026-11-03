export const summary =
  "检查不是只看一个数字对不对，还会看整个对象的结构是否一致。这一课让你写出一个带求和结果的对象。";

export const keyPoints = [
  "两个数字是否同一个值，用精确比较。`1` 和 `\"1\"` 不算同一个。",
  "对象要逐项比对。`{ first: 3, second: 4, sum: 7 }` 里三个字段都得对。",
  "后面有些题会要求非法输入必须抛错。报错也是一种正确结果。",
];

export const remember = [
  "先在脑子里算一个例子，再写函数。比如 `buildPair(3, 4)` 应该是 first 3、second 4、sum 7。",
  "检查没过时，先看失败那一句写的期望值和实际值。",
];

export const taskDescription =
  "buildPair(a, b) 把两个数组合成一个对象。first 是第一个数，second 是第二个数，sum 是两者之和。3 和 4 的 sum 是 7。";

export async function runDemo(ctx) {
  ctx.log("断言示例：Object.is(1 + 2, 3) =>", Object.is(1 + 2, 3));
  ctx.log("深比较示例：{ first: 2, second: 5, sum: 7 }");
}
