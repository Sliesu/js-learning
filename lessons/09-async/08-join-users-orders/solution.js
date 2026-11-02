export async function loadEnrichedPaidOrders(ctx) {
  const [users, orders] = await Promise.all([
    ctx.fetchJson("data/users.json"),
    ctx.fetchJson("data/orders.json"),
  ]);
  const userMap = new Map(users.map((u) => [u.id, u]));
  return orders
    .filter((o) => o.status === "paid")
    .map((o) => {
      const user = userMap.get(o.userId);
      const total = o.items.reduce((sum, it) => sum + it.qty * it.unitPrice, 0);
      return {
        orderId: o.id,
        userName: user?.name ?? "未知",
        city: user?.city ?? "未知",
        total,
      };
    });
}

export async function test(mod, assert, ctx) {
  const list = await mod.loadEnrichedPaidOrders(ctx);
  assert.deepEqual(
    list,
    [
      { orderId: "o101", userName: "林晓", city: "上海", total: 817 },
      { orderId: "o102", userName: "周牧", city: "北京", total: 299 },
      { orderId: "o104", userName: "宋然", city: "深圳", total: 2497 },
      { orderId: "o106", userName: "林晓", city: "上海", total: 299 },
    ],
    "并发读取并准确关联生成 4 笔已支付订单视图"
  );
}
