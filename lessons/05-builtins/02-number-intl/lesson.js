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
  "样式表里的宽度写成 \"18px\"，布局系统只要前面的整数。请写 parsePixelValue(cssStr)，按十进制取出整数；认不出来就返回 0，不要返回 NaN。金额给客户看时要带人民币符号和千分位。请写 formatCNY(amount)，用中国地区的货币格式把金额格式化成人民币字符串。";

export async function runDemo(ctx) {
  const fmt = new Intl.NumberFormat("zh-CN", { style: "currency", currency: "CNY" });
  ctx.log("货币格式化 12345.6:", fmt.format(12345.6));
  ctx.log("parseInt('0xff', 16):", Number.parseInt("0xff", 16));
}
