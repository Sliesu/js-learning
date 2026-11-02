export const summary =
  "掌握 8 个假值（falsy）以及逻辑运算符 `&&`、`||`、`!` 的「返回原操作数」与短路规则。";

export const keyPoints = [
  "JS 中只有 8 个值转为布尔是 `false`：`false`、`0`、`-0`、`0n`、`\"\"`、`null`、`undefined`、`NaN`；其余所有值（包括 `'0'`、`[]`、`{}`）都是真值（truthy）。",
  "`a && b`：若 `a` 是假值，短路直接返回 `a`；否则返回 `b`。",
  "`a || b`：若 `a` 是真值，短路直接返回 `a`；否则返回 `b`。",
];

export const remember = [
  "`&&` 和 `||` 返回的是决定结果的那个「原始操作数本身」，不一定是布尔值；需要纯布尔值时加 `Boolean(x)` 或 `!!x`。",
];

export const taskDescription =
  "实现 `isTruthy(val)` 返回布尔值，以及 `pickFirstNonEmpty(a, b, fallback)` 返回第一个非空字符串（用 `||` 短路）。";

export async function runDemo(ctx) {
  ctx.log("Boolean([]):", Boolean([]), "Boolean(''):", Boolean(""));
  ctx.log("'' || '备选' =>", "" || "备选");
  ctx.log("'前置' && 42 =>", "前置" && 42);
}
