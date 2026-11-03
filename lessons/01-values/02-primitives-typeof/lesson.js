export const summary =
  "JavaScript 里的值，先分成原始值和对象。`typeof` 能告诉你大部分类型，但有一个老毛病：它把 `null` 说成对象。";

export const keyPoints = [
  "原始类型有 7 种：`string`、`number`、`bigint`、`boolean`、`undefined`、`symbol`、`null`。",
  "原始值不能被改。字符串方法都是返回一个新字符串，原来的那个还在。",
  "`typeof null` 得到 `'object'`，这是语言第一版留下来的。判断是不是 `null`，写 `val === null`。",
  "`typeof function(){}` 得到 `'function'`。数组、日期、普通对象用 `typeof` 都会得到 `'object'`。",
];

export const remember = [
  "要分清类型时，先看是不是 `null`，再看是不是数组（`Array.isArray`），剩下的再交给 `typeof`。",
];

export const taskDescription =
  "写 `preciseType(value)`，说明一个值到底是什么类型。`null` 要返回 `\"null\"`，不能返回 `\"object\"`。数组返回 `\"array\"`。其他情况跟 `typeof` 一样：数字返回 `\"number\"`，字符串返回 `\"string\"`。";

export async function runDemo(ctx) {
  const samples = ["hello", 42, 10n, true, undefined, Symbol("id"), null, [1, 2], { a: 1 }];
  for (const item of samples) {
    ctx.log("值:", item, "-> typeof:", typeof item);
  }
}
