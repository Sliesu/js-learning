export function calcPaidItemsRevenue(orders) {
  return orders
    .filter((o) => o.status === "paid")
    .flatMap((o) => o.items || [])
    .reduce((acc, item) => acc + item.qty * item.unitPrice, 0);
}

export async function test(mod, assert) {
  const orders = [
    {
      status: "paid",
      items: [
        { qty: 1, unitPrice: 499 },
        { qty: 2, unitPrice: 159 },
      ],
    },
    { status: "cancelled", items: [{ qty: 1, unitPrice: 1899 }] },
    { status: "paid", items: [{ qty: 1, unitPrice: 299 }] },
  ];
  assert.equal(mod.calcPaidItemsRevenue(orders), 1116, "499 + 318 + 299 = 1116");
  assert.equal(mod.calcPaidItemsRevenue([]), 0, "空订单列表返回 0");
}
