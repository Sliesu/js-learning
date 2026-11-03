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
  "订单金额不合法时，调用方要知道是哪一栏错了，也要能看到底层原因。请写 DataValidationError，它是 Error 的子类。构造时接收 message、field、options。名字固定为 \"DataValidationError\"，并把 field 记在错误上，options 传给父类，这样 cause 才挂得住。再写 parseOrderAmount(record)：record.amount 是大于 0 的数字就返回它。否则抛出 DataValidationError，栏位名是 \"amount\"，消息是 \"Invalid order amount\"，底层原因是 RangeError(\"amount must be positive\")。";

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
