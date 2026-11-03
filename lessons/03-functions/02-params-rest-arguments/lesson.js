export const summary =
  "掌握默认参数（仅当实参为 `undefined` 时触发）、剩余参数 `...rest`（真数组）以及与旧式 `arguments` 类数组对象的区别。";

export const keyPoints = [
  "默认参数 `function greet(tag = '普通')` 只有传入 `undefined` 或不传时才生效；若传入 `null` 或 `''`，不会触发默认值。",
  "默认参数表达式每次调用时都会重新求值（如 `function append(item, list = [])` 每次调用都会新建一个独立数组）。",
  "`...rest` 收集多余实参为一个真正的 `Array`，可直接调用 `.map`/`.reduce`；且必须放在形参列表最后。",
];

export const remember = [
  "新代码一律用 `...args` 替代 `arguments`；箭头函数内部没有自己的 `arguments`。",
];

export const taskDescription =
  "calcWeightedSum(multiplier = 1, ...numbers) 先把后面传进来的数字加起来，再乘以系数。没有传系数时，系数按 1 计算。";

export async function runDemo(ctx) {
  function demo(a = 10, ...rest) {
    return { a, rest, isRealArray: Array.isArray(rest) };
  }
  ctx.log("demo(undefined, 1, 2, 3) =>", demo(undefined, 1, 2, 3));
  ctx.log("demo(null, 1) =>", demo(null, 1));
}
