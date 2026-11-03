export const summary =
  "业务上的失败，用自己的错误类说清楚是哪一栏、什么问题。原来的底层错误别丢掉，放进 `cause`，以后还能顺着查。";

export const keyPoints = [
  "抓住底层错误再往外抛时，写成 `new Error(msg, { cause: originalError })`，原来的错误和堆栈还在。",
  "`AggregateError` 用来把好几件失败包成一个错误。`Promise.any` 全部失败时，抛的就是它。",
];

export const remember = [
  "自己的错误类把 `this.name` 设成类名。日志里才能一眼看出是哪一种错误，而不是全叫 `Error`。",
];

export const taskDescription =
  "先写错误类 `DataValidationError`，继承 `Error`。构造时接收 `message`、`field` 和 `options`。`name` 固定写成 `\"DataValidationError\"`，`field` 记下是哪一栏，`options` 传给父类，这样 `cause` 才会留在错误上。再写 `parseOrderAmount(record)`：`amount` 是大于 0 的数字时返回它；否则抛出 `DataValidationError`，栏位是 `\"amount\"`，消息是 `\"Invalid order amount\"`，原因是一个 `RangeError`，消息为 `\"amount must be positive\"`。";

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
