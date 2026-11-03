export const summary =
  "熟练使用字符串清洗与提取高频方法：`trim`、`startsWith`、`endsWith`、`includes`、`padStart`、`slice`、`split`、`replaceAll`、`matchAll`。";

export const keyPoints = [
  "`str.replaceAll(search, replacement)` 无需写全局正则即可替换全部子串。",
  "`str.padStart(targetLen, '0')` 常用于生成固定位数的编号（如 `'42'.padStart(5, '0') === '00042'`）或时间补零。",
  "`str.slice(start, end)` 支持负数索引（从末尾倒数），比 `substring` 更一致。",
];

export const remember = [
  "所有字符串方法都不会改动原字符串，记得接收返回值。",
];

export const taskDescription =
  "maskPhone(raw) 给手机号打码。先去掉首尾空格和里面所有的 \"-\"。然后保留前 3 位和后 4 位，中间换成 ****。\"138-1234-5678\" 的结果是 \"138****5678\"。";

export async function runDemo(ctx) {
  const code = "7".padStart(4, "0");
  ctx.log("padStart 补零编号:", `ORD-${code}`);
  ctx.log("replaceAll 替换连字符:", "2026-11-02".replaceAll("-", "/"));
}
