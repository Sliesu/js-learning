export const summary =
  "可能抛错的代码放进 `try`。接住之后在 `catch` 里决定怎么办。`finally` 里的清理，无论成功还是失败都会跑。";

export const keyPoints = [
  "`try` 正常返回也好，抛错进了 `catch` 也好，`finally` 都会执行。",
  "错误的种类写清楚。类型不对用 `TypeError`，数值超出范围用 `RangeError`。别什么都扔一个普通 `Error`。",
];

export const remember = [
  "空的 `catch (e) {}` 会把错误吃掉，后面的人完全不知道这里失败过。要么记下来，要么返回一个明确的降级结果。",
];

export const taskDescription =
  "写 `safeParseJson(rawStr, fallbackValue)`，解析一段 JSON。成功时返回 `{ ok: true, data }`。失败时不要把错误抛出去，返回 `{ ok: false, data: fallbackValue, errorName }`。`errorName` 是错误的名字，比如 `\"SyntaxError\"`。没传 `fallbackValue` 时，失败结果里的 `data` 用 `null`。";

export async function runDemo(ctx) {
  try {
    JSON.parse("{broken");
  } catch (err) {
    ctx.log("捕获到错误类型:", err.name, "消息:", err.message);
  }
}
