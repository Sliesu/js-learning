export const summary =
  "通过 `class CustomError extends Error` 自定义业务错误类，并使用 ES2022 标准 `new Error(msg, { cause: err })` 保留底层根因链。";

export const keyPoints = [
  "捕获到底层错误（如 JSON 解析失败或网络错误）向上层抛出业务错误时，传入 `{ cause: originalError }` 可以完整保留原始错误堆栈。",
  "`AggregateError(errors, message)` 用于将多个并行错误打包成一个错误对象（例如 `Promise.any` 全部失败时）。",
];

export const remember = [
  "自定义 `Error` 子类时设置 `this.name = this.constructor.name` 便于日志区分。",
];

export const taskDescription =
  "先写错误类 DataValidationError，继承 Error。构造时接收 message、field 和 options。name 固定写成 \"DataValidationError\"，field 记下是哪一栏，options 传给父类，这样 cause 才会留在错误上。parseOrderAmount(record) 在 amount 是大于 0 的数字时返回它。否则抛出 DataValidationError：栏位是 \"amount\"，消息是 \"Invalid order amount\"，原因是一个 RangeError，消息为 \"amount must be positive\"。";

export async function runDemo(ctx) {
  try {
    try {
      JSON.parse("bad");
    } catch (lowErr) {
      throw new Error("读取订单配置失败", { cause: lowErr });
    }
  } catch (highErr) {
    ctx.log("顶层错误:", highErr.message, "| 底层根因 cause:", highErr.cause.name);
  }
}
