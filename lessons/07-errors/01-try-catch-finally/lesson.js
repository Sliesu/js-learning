export const summary =
  "掌握 `try / catch / finally` 的执行流与标准内置错误类型（`TypeError`、`RangeError`、`SyntaxError`、`ReferenceError`）。";

export const keyPoints = [
  "无论 `try` 块是正常 return 还是抛出异常进入 `catch`，`finally` 块中的清理代码都一定会执行。",
  "根据错误性质抛出准确的内置子类：参数类型不对抛 `new TypeError(...)`，数值越界抛 `new RangeError(...)`。",
];

export const remember = [
  "不要在 `catch (e) {}` 中吞掉所有错误却不做任何记录或降级返回值。",
];

export const taskDescription =
  "实现 `safeParseJson(rawStr, fallbackValue)`：用 `try...catch` 解析 JSON，成功返回 `{ ok: true, data }`，失败返回 `{ ok: false, data: fallbackValue, errorName: err.name }`。";

export async function runDemo(ctx) {
  try {
    JSON.parse("{broken");
  } catch (err) {
    ctx.log("捕获到错误类型:", err.name, "消息:", err.message);
  }
}
