export const summary =
  "掌握字符串不可变性、模板字面量（`` `${expr}` ``）、标签模板以及 UTF-16 码元与 Unicode 码点的区别。";

export const keyPoints = [
  "模板字符串支持多行文本与内嵌任意表达式 `` `总价: ${(price * qty).toFixed(2)}` ``。",
  "JS 字符串内部按 UTF-16 编码，一个生僻汉字或 Emoji（如 `'🚀'`）占 2 个 UTF-16 码元（`'🚀'.length === 2`）。",
  "使用 `[...str]` 或 `Array.from(str)` 按完整 Unicode 码点（字符）切分，长度才是人类视觉上的字符数。",
];

export const remember = [
  "`str.codePointAt(0)` 与 `String.fromCodePoint(...)` 能正确处理超出 `0xFFFF` 的字符。",
];

export const taskDescription =
  "收银台要打一行小票：商品名、数量、金额。请写 formatOrderLine(title, qty, price)，例如「拿铁」、2、18 得到「拿铁 x2 = ¥36」。短信里的表情也算一个字。请写 countCodePoints(str)，「A🚀B」必须数成 3，不能把火箭拆成两个字。";

export async function runDemo(ctx) {
  const rocket = "🚀";
  ctx.log("'🚀'.length (UTF-16 码元数):", rocket.length);
  ctx.log("[...'🚀'].length (Unicode 码点数):", [...rocket].length);
}
