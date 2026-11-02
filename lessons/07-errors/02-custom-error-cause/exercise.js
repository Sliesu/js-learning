// 练习 7.2：自定义错误子类与 error.cause 链
export class DataValidationError extends Error {
  constructor(message, field, options) {
    // TODO: 调用 super(message, options)，设置 this.name = "DataValidationError" 与 this.field = field
    super(message);
  }
}

export function parseOrderAmount(record) {
  // TODO:
  // 如果 typeof record?.amount !== "number" || !(record.amount > 0)
  // 构造底层原因 const root = new RangeError("amount must be positive")
  // 并抛出 new DataValidationError("Invalid order amount", "amount", { cause: root })
  // 正常时返回 record.amount
}
