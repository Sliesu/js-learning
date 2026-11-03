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
  "开户勾选框、空备注、数字 0 不能混为一谈。请写 isTruthy(val)，把任意值收成 true 或 false。客服备注有三栏，屏幕只显示第一段真正写了字的内容。请写 pickFirstNonEmpty(a, b, fallback)：用 || 取 a、b、fallback 里第一个算「有内容」的值。空字符串要跳过。";

export async function runDemo(ctx) {
  ctx.log("Boolean([]):", Boolean([]), "Boolean(''):", Boolean(""));
  ctx.log("'' || '备选' =>", "" || "备选");
  ctx.log("'前置' && 42 =>", "前置" && 42);
}
