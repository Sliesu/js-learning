export const summary =
  "掌握 JavaScript 的 7 种原始类型（Primitive）与对象类型，以及 `typeof` 运算符唯一的语言历史遗留特例。";

export const keyPoints = [
  "7 种原始类型：`string`、`number`、`bigint`、`boolean`、`undefined`、`symbol`、`null`。",
  "原始值不可变（immutable）：任何字符串方法都返回新字符串，不会原地修改旧字符串。",
  "`typeof null === 'object'` 是 JS 第一版遗留的二进制标签特例，判断 `null` 必须用 `val === null`。",
  "`typeof function(){}` 返回 `'function'`，其余对象（数组、日期、普通对象）均返回 `'object'`。",
];

export const remember = [
  "精确判断类型标签时，区分 `null`、`Array.isArray(v)` 与 `typeof v`。",
];

export const taskDescription =
  "实现 `preciseType(value)`：若为 `null` 返回 `'null'`；若为数组返回 `'array'`；其余返回 `typeof value` 的结果。";

export async function runDemo(ctx) {
  const samples = ["hello", 42, 10n, true, undefined, Symbol("id"), null, [1, 2], { a: 1 }];
  for (const item of samples) {
    ctx.log("值:", item, "-> typeof:", typeof item);
  }
}
