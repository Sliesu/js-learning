export const summary =
  "掌握 `Number.parseInt(str, radix)`、`Number.parseFloat`、`toFixed` 以及国际化数字与货币格式化 `Intl.NumberFormat`。";

export const keyPoints = [
  "调用 `parseInt(str, 10)` 始终显式写出第二个参数基数 `10`（或 `16` 解析十六进制）。",
  "注意：`parseInt('12px', 10)` 会解析出 `12`（遇到非数字字符停止），而 `Number('12px')` 返回 `NaN`。",
  "`new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(n)` 能生成标准的千分位与货币符号字符串。",
];

export const remember = [
  "`(12.345).toFixed(2)` 返回的是字符串 `'12.35'`，不是数字。",
];

export const taskDescription =
  "实现 `parsePixelValue(cssStr)` 用十进制 `parseInt` 提取像素整数（失败返回 `0`），以及 `formatCNY(amount)` 用 `Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' })` 格式化金额。";

export async function runDemo(ctx) {
  const fmt = new Intl.NumberFormat("zh-CN", { style: "currency", currency: "CNY" });
  ctx.log("货币格式化 12345.6:", fmt.format(12345.6));
  ctx.log("parseInt('0xff', 16):", Number.parseInt("0xff", 16));
}
