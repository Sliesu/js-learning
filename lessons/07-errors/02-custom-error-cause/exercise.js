// 校验错误要带上栏位名，并挂住底层原因。
export class DataValidationError extends Error {
  constructor(message, field, options) {
    super(message);
  }
}

// amount 必须是大于 0 的数字，否则抛出 DataValidationError。
// 栏位是 "amount"，消息是 "Invalid order amount"。
// 底层原因是 RangeError("amount must be positive")。
export function parseOrderAmount(record) {
}
