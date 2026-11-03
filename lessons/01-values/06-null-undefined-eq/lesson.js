export const summary =
  "区分 `undefined`（未赋值/不存在）与 `null`（明确置空），彻底搞清 `==`、`===` 与 `Object.is` 的差异。";

export const keyPoints = [
  "声明未赋值的变量、对象不存在的属性、函数无返回值时均为 `undefined`；`null` 用于主动表示「此处为空对象/空值」。",
  "`===` 严格相等：不做类型转换，但有两个特例：`NaN === NaN` 为 `false`，`+0 === -0` 为 `true`。",
  "`Object.is(a, b)` 修正了上述两个特例：`Object.is(NaN, NaN)` 为 `true`，`Object.is(+0, -0)` 为 `false`。",
  "`==` 宽松相等只在一个场景常用：`x == null` 等价于 `x === null || x === undefined`。",
];

export const remember = [
  "日常比较一律使用 `===` 和 `!==`；仅在同时拦截 `null` 和 `undefined` 时可使用 `x == null`。",
];

export const taskDescription =
  "网银里「这栏没填」和「客户故意填了 0 或空字符串」不是一回事。请写 isNullish(val)：只有 null 或 undefined 返回 true，0 和 \"\" 必须返回 false。对账还要判断两条记录是不是完全同一笔。请写 sameValue(a, b)，用 Object.is 比较。这样两个 NaN 算同一笔异常，+0 和 -0 不算同一个余额方向。";

export async function runDemo(ctx) {
  ctx.log("null == undefined:", null == undefined, "null === undefined:", null === undefined);
  ctx.log("NaN === NaN:", NaN === NaN, "Object.is(NaN, NaN):", Object.is(NaN, NaN));
}
