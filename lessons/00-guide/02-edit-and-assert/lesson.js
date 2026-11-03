export const summary =
  "检查不是只看一个数字对不对，还会看整个对象的结构是否一致。这一课让你交出一个带求和结果的对象。";

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
  "柜员把两笔记到一张回单上。请写 buildPair(a, b)，返回一张回单：first 是第一笔，second 是第二笔，sum 是两笔相加。例如 3 和 4，sum 必须是 7。";

export async function runDemo(ctx) {
  ctx.log("断言示例：Object.is(1 + 2, 3) =>", Object.is(1 + 2, 3));
  ctx.log("深比较示例：{ first: 2, second: 5, sum: 7 }");
}
