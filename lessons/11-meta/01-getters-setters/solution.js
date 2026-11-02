export function createOrderLine(unitPrice, initialQty = 1) {
  let _qty = initialQty;
  return {
    unitPrice,
    get qty() {
      return _qty;
    },
    set qty(v) {
      if (v < 0) {
        throw new RangeError("qty cannot be negative");
      }
      _qty = v;
    },
    get subtotal() {
      return this.unitPrice * _qty;
    },
  };
}

export async function test(mod, assert) {
  const line = mod.createOrderLine(150, 2);
  assert.equal(line.subtotal, 300, "初始小计 150*2 = 300");
  line.qty = 4;
  assert.equal(line.subtotal, 600, "更新 qty 后小计变为 600");
  assert.throws(() => {
    line.qty = -1;
  }, RangeError, "赋负数时抛出 RangeError");
}
