// 错误要记下是哪一栏，并保留原来的原因。
export class DataValidationError extends Error {
  constructor(message, field, options) {
    super(message);
  }
}

// amount 必须是大于 0 的数字，否则抛出 DataValidationError。
// 字段名是 "amount"，消息是 "Invalid order amount"。
// 底层原因是 RangeError("amount must be positive")。
export function parseOrderAmount(record) {
}
