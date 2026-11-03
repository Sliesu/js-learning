export const summary =
  "条件里不只 `true` 和 `false`。JavaScript 会把各种值当成真或假，而且 `&&`、`||` 交回来的常常是原来的那个值，不一定是布尔值。";

export const keyPoints = [
  "只有 8 个值会被当成假：`false`、`0`、`-0`、`0n`、`\"\"`、`null`、`undefined`、`NaN`。其余都算真，包括 `'0'`、空数组 `[]`、空对象 `{}`。",
  "`a && b`：如果 `a` 是假的，就停在这儿，直接返回 `a`；否则返回 `b`。",
  "`a || b`：如果 `a` 是真的，就停在这儿，直接返回 `a`；否则返回 `b`。",
];

export const remember = [
  "`&&` 和 `||` 返回的是决定结果的那个值本身，不一定是 `true` 或 `false`。如果你只要布尔值，写成 `Boolean(x)` 或 `!!x`。",
];

export const taskDescription =
  "写 `isTruthy(val)`，判断一个值算不算真，结果只能是 true 或 false。再写 `pickFirstNonEmpty(a, b, fallback)`，在三句话里找第一句有内容的。空字符串要跳过，用 `||` 继续看下一句。";

export async function runDemo(ctx) {
  ctx.log("Boolean([]):", Boolean([]), "Boolean(''):", Boolean(""));
  ctx.log("'' || '备选' =>", "" || "备选");
  ctx.log("'前置' && 42 =>", "前置" && 42);
}
