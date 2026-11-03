export const summary =
  "理解二元 `+` 与其他算术运算符的隐式转换规则，养成使用 `Number()`、`String()`、`Boolean()` 显式转换的习惯。";

export const keyPoints = [
  "二元 `+` 若有一侧是字符串，则另一侧也被转为字符串拼接（`'5' + 2 === '52'`）；而 `-`、`*`、`/` 会把两侧都转为数字（`'5' - 2 === 3`）。",
  "`Number('') === 0`、`Number(null) === 0`，但 `Number(undefined)` 是 `NaN`。",
  "将外部输入（表单、URL 参数）转为严格数字时，先判空再调 `Number(str)`。",
];

export const remember = [
  "不要依赖 `'10' - 0` 这种隐式技巧，显式写出 `Number(raw)` 让意图清晰。",
];

export const taskDescription =
  "toStrictNumber(input) 把输入转成数字。本来就是有限数字，原样返回。\" 42.5 \" 这种带空格的字符串，去掉空格后能转成数字，就返回那个数字。空白、null、true、false、\"abc\" 都返回 null。不要把 true 当成 1，也不要把空字符串当成 0。";

export async function runDemo(ctx) {
  ctx.log("'10' + 5 =>", "10" + 5, "而 '10' - 5 =>", "10" - 5);
  ctx.log("Number('  42 ') =>", Number("  42 "), "Number('') =>", Number(""));
}
