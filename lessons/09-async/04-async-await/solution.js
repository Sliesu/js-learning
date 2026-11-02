export async function fetchUserLatestPaidOrder(userId, getUser, getOrdersByUser) {
  const user = await getUser(userId);
  if (!user || !user.active) return null;
  const orders = await getOrdersByUser(user.id);
  const paid = (orders || [])
    .filter((o) => o.status === "paid")
    .toSorted((a, b) => b.createdAt.localeCompare(a.createdAt));
  return paid[0] ?? null;
}

export async function test(mod, assert, ctx) {
  const users = await ctx.fetchJson("data/users.json");
  const orders = await ctx.fetchJson("data/orders.json");
  const getUser = async (id) => users.find((u) => u.id === id);
  const getOrders = async (uid) => orders.filter((o) => o.userId === uid);

  const latest = await mod.fetchUserLatestPaidOrder("u1", getUser, getOrders);
  assert.equal(latest?.id, "o106", "找到 u1 最新一笔已支付订单 o106");
  const inactive = await mod.fetchUserLatestPaidOrder("u3", getUser, getOrders);
  assert.equal(inactive, null, "非活跃用户 u3 返回 null");
}
