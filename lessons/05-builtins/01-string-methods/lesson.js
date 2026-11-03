export const summary =
  "整理字符串，几乎都有现成方法：去空白、替换、补零、截取。它们都不会改原来的字符串，记得接住返回值。";

export const keyPoints = [
  "`replaceAll` 能换掉所有相同的子串，不用再写一个全局正则。",
  "`padStart` 用来补到固定位数，比如 `'42'.padStart(5, '0')` 得到 `'00042'`。日期、编号补零都靠它。",
  "`slice(start, end)` 支持负数，从末尾往回数。比 `substring` 更好记。",
];

export const remember = [
  "字符串的方法都不会改原来那一份。你得用它的返回值，不然等于白调用。",
];

export const taskDescription =
  "写 `maskPhone(raw)`，给手机号打码。先去掉首尾空格，再去掉里面所有的 `\"-\"`。然后保留前 3 位和后 4 位，中间换成 `****`。`\"138-1234-5678\"` 的结果是 `\"138****5678\"`。";

export async function runDemo(ctx) {
  const code = "7".padStart(4, "0");
  ctx.log("padStart 补零编号:", `ORD-${code}`);
  ctx.log("replaceAll 替换连字符:", "2026-11-02".replaceAll("-", "/"));
}
