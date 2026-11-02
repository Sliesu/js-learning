export function chainOrderTransform(orderPromise) {
  return orderPromise
    .then((order) => {
      const total = (order.items || []).reduce((s, it) => s + it.qty * it.unitPrice, 0);
      if (total <= 0) {
        throw new Error("Invalid total");
      }
      return { id: order.id, total };
    })
    .catch(() => ({ id: "fallback", total: 0 }));
}

export async function test(mod, assert) {
  const okRes = await mod.chainOrderTransform(
    Promise.resolve({ id: "o1", items: [{ qty: 2, unitPrice: 150 }] })
  );
  assert.deepEqual(okRes, { id: "o1", total: 300 }, "正常计算订单总额");

  const zeroRes = await mod.chainOrderTransform(Promise.resolve({ id: "o2", items: [] }));
  assert.deepEqual(zeroRes, { id: "fallback", total: 0 }, "总额为 0 时触发异常并走 catch 兜底");
}
