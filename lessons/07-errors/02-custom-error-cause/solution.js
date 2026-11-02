export class DataValidationError extends Error {
  constructor(message, field, options) {
    super(message, options);
    this.name = "DataValidationError";
    this.field = field;
  }
}

export function parseOrderAmount(record) {
  if (typeof record?.amount !== "number" || !(record.amount > 0)) {
    const root = new RangeError("amount must be positive");
    throw new DataValidationError("Invalid order amount", "amount", { cause: root });
  }
  return record.amount;
}

export async function test(mod, assert) {
  assert.equal(mod.parseOrderAmount({ amount: 199 }), 199, "合法正数金额直接返回");
  let caught = null;
  try {
    mod.parseOrderAmount({ amount: -5 });
  } catch (e) {
    caught = e;
  }
  assert.ok(caught instanceof mod.DataValidationError, "抛出自定义 DataValidationError");
  assert.equal(caught.field, "amount", "记录出错字段名 amount");
  assert.ok(caught.cause instanceof RangeError, "保留底层 RangeError cause");
}
