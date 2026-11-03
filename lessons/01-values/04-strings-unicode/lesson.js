export const summary =
  "字符串拼起来用模板最省事。另外，一个你眼里的「字」，在 JavaScript 里不一定只占一个长度，表情符号就是这样。";

export const keyPoints = [
  "模板字符串可以换行，也可以把表达式嵌进去，比如 `` `总价: ${(price * qty).toFixed(2)}` ``。",
  "字符串内部按 UTF-16 存。一个生僻字或表情（比如 `'🚀'`）会占 2 个码元，所以 `'🚀'.length` 是 2，不是 1。",
  "想按人眼看到的字符来切，用 `[...str]` 或 `Array.from(str)`。这样数出来的才是完整字符的个数。",
];

export const remember = [
  "超出 `0xFFFF` 的字符，用 `str.codePointAt(0)` 读取，用 `String.fromCodePoint(...)` 造回来。`charCodeAt` 只能看到一半。",
];

export const taskDescription =
  "写 `formatOrderLine(title, qty, price)`，生成一行小票。拿铁、数量 2、单价 18，应得到「拿铁 x2 = ¥36」。再写 `countCodePoints(str)`，按 Unicode 码点数字符，表情也算一个。「A🚀B」应返回 3，而不是 `length` 显示的 4。";

export async function runDemo(ctx) {
  const rocket = "🚀";
  ctx.log("'🚀'.length (UTF-16 码元数):", rocket.length);
  ctx.log("[...'🚀'].length (Unicode 码点数):", [...rocket].length);
}
