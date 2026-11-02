export function readShippingFee(order) {
  return order?.delivery?.fee ?? 12;
}

export async function test(mod, assert) {
  assert.equal(mod.readShippingFee({ delivery: { fee: 0 } }), 0, "免运费 0 不会被当成缺失");
  assert.equal(mod.readShippingFee({ delivery: { fee: 25 } }), 25, "正常运费 25");
  assert.equal(mod.readShippingFee({}), 12, "缺失 delivery 时返回默认 12");
  assert.equal(mod.readShippingFee(null), 12, "order 为 null 时返回默认 12");
}
