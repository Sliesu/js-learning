export const summary =
  "从一段文字里取出数字，用 `parseInt` 或 `parseFloat`。要把金额显示成带千分位和货币符号的样子，交给 `Intl.NumberFormat`。";

export const keyPoints = [
  "调用 `parseInt` 时把进制写上，十进制就是 `parseInt(str, 10)`。解析十六进制再传 `16`。",
  "`parseInt('12px', 10)` 会得到 `12`，它读到不是数字的字符就停。`Number('12px')` 则是 `NaN`，整个字符串必须都是数字。",
  "`new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(n)` 会给出带人民币符号和千分位的字符串。",
];

export const remember = [
  "`(12.345).toFixed(2)` 得到的是字符串 `'12.35'`，不是数字。还要拿去计算的话，得再转一次。",
];

export const taskDescription =
  "写 `parsePixelValue(cssStr)`，从 `\"18px\"` 这样的字符串里取出整数。解析不出来就返回 0，不要返回 `NaN`。再写 `formatCNY(amount)`，把金额显示成人民币，使用 `zh-CN`，要带货币符号和千分位。";

export async function runDemo(ctx) {
  const fmt = new Intl.NumberFormat("zh-CN", { style: "currency", currency: "CNY" });
  ctx.log("货币格式化 12345.6:", fmt.format(12345.6));
  ctx.log("parseInt('0xff', 16):", Number.parseInt("0xff", 16));
}
