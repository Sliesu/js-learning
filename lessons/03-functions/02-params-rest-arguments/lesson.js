export const summary =
  "参数可以带默认值，多出来的参数也可以收集成一个真正的数组。默认值只在对方没传，或者传了 `undefined` 时才用上。";

export const keyPoints = [
  "`function greet(tag = '普通')` 的默认值，只在没传或者传入 `undefined` 时生效。传入 `null` 或 `''`，不会换成默认值。",
  "默认值的表达式每次调用都会重新算一遍。`function append(item, list = [])` 每次都会新建一个数组，不会大家共用同一个。",
  "`...rest` 把多出来的实参收集成真正的数组，可以直接 `.map`、`.reduce`。它必须放在参数列表的最后。",
];

export const remember = [
  "新代码用 `...args`，不要再用 `arguments`。箭头函数里根本没有自己的 `arguments`。",
];

export const taskDescription =
  "写 `calcWeightedSum(multiplier = 1, ...numbers)`。先把后面传进来的数字加起来，再乘以系数。没写系数时，系数按 1 算。";

export async function runDemo(ctx) {
  function demo(a = 10, ...rest) {
    return { a, rest, isRealArray: Array.isArray(rest) };
  }
  ctx.log("demo(undefined, 1, 2, 3) =>", demo(undefined, 1, 2, 3));
  ctx.log("demo(null, 1) =>", demo(null, 1));
}
