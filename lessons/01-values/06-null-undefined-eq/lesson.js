export const summary =
  "`null` 和 `undefined` 都像「没有」，但意思不一样。比较两个值时，日常用 `===`；有两个角落要单独记住。";

export const keyPoints = [
  "变量声明了还没赋值、对象上没有这个属性、函数没写返回值，你拿到的都是 `undefined`。`null` 是你故意放上去的空：这里现在没有值。",
  "`===` 不帮你做类型转换。有两个例外：`NaN === NaN` 是 false，`+0 === -0` 是 true。",
  "`Object.is(a, b)` 把这两个例外改了过来：`Object.is(NaN, NaN)` 是 true，`Object.is(+0, -0)` 是 false。",
  "`==` 平时别用。唯一常见的写法是 `x == null`，它同时接住 `null` 和 `undefined`。",
];

export const remember = [
  "平时比较一律用 `===` 和 `!==`。只有想同时拦住「没填」的两种情况时，才写 `x == null`。",
];

export const taskDescription =
  "写 `isNullish(val)`，判断这个值是不是「没填」。只有 `null` 和 `undefined` 返回 true。0 和空字符串都算已经填过，应返回 false。再写 `sameValue(a, b)`，用 `Object.is` 判断两个值是不是完全一样。`NaN` 和 `NaN` 算一样，`+0` 和 `-0` 不算一样。";

export async function runDemo(ctx) {
  ctx.log("null == undefined:", null == undefined, "null === undefined:", null === undefined);
  ctx.log("NaN === NaN:", NaN === NaN, "Object.is(NaN, NaN):", Object.is(NaN, NaN));
}
