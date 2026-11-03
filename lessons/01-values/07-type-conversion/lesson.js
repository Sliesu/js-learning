export const summary =
  "JavaScript 会在你没注意的时候把类型换掉。`+` 碰到字符串就会去拼接，减号却会把两边都变成数字。外面传进来的数据，最好自己写明要转成什么。";

export const keyPoints = [
  "两边只要有一边是字符串，`+` 就会把另一边也变成字符串拼起来：`'5' + 2` 是 `'52'`。`-`、`*`、`/` 则会把两边都变成数字：`'5' - 2` 是 `3`。",
  "`Number('')` 和 `Number(null)` 都是 0，但 `Number(undefined)` 是 `NaN`。空和「没填」转出来并不一样。",
  "表单、网址参数这类外部输入，要当成数字用时，先看它是不是空的，再调用 `Number(str)`。",
];

export const remember = [
  "别靠 `'10' - 0` 这种小技巧把字符串变成数字。写成 `Number(raw)`，别人一看就知道你想干什么。",
];

export const taskDescription =
  "写 `toStrictNumber(input)`，把输入转成数字。本来就是有限数字，原样返回。`\" 42.5 \"` 这种带空格的字符串，去掉空格后能转成数字，就返回那个数字。空白、`null`、`true`、`false`、`\"abc\"` 都返回 `null`。不要把 `true` 当成 1，也不要把空字符串当成 0。";

export async function runDemo(ctx) {
  ctx.log("'10' + 5 =>", "10" + 5, "而 '10' - 5 =>", "10" - 5);
  ctx.log("Number('  42 ') =>", Number("  42 "), "Number('') =>", Number(""));
}
