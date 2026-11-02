export function cloneAndUpdateQty(order, itemIndex, newQty) {
  const copy = structuredClone(order);
  copy.items[itemIndex].qty = newQty;
  return copy;
}

export async function test(mod, assert) {
  const orig = { id: "o101", items: [{ productId: "p1", qty: 1 }] };
  const updated = mod.cloneAndUpdateQty(orig, 0, 5);
  assert.equal(updated.items[0].qty, 5, "副本中数量更新为 5");
  assert.equal(orig.items[0].qty, 1, "原订单中数量仍为 1");
}
