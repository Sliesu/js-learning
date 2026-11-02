export function leftJoinUserOrderStats(users, orders) {
  const statsByUser = new Map();
  for (const o of orders) {
    if (o.status !== "paid") continue;
    const orderTotal = o.items.reduce((s, it) => s + it.qty * it.unitPrice, 0);
    const cur = statsByUser.get(o.userId) || { paidCount: 0, paidTotal: 0 };
    cur.paidCount += 1;
    cur.paidTotal += orderTotal;
    statsByUser.set(o.userId, cur);
  }

  return users.map((u) => {
    const st = statsByUser.get(u.id) || { paidCount: 0, paidTotal: 0 };
    return {
      userId: u.id,
      name: u.name,
      paidCount: st.paidCount,
      paidTotal: st.paidTotal,
    };
  });
}

export async function test(mod, assert, ctx) {
  const [users, orders] = await Promise.all([
    ctx.fetchJson("data/users.json"),
    ctx.fetchJson("data/orders.json"),
  ]);
  assert.deepEqual(
    mod.leftJoinUserOrderStats(users, orders),
    [
      { userId: "u1", name: "林晓", paidCount: 2, paidTotal: 1116 },
      { userId: "u2", name: "周牧", paidCount: 1, paidTotal: 299 },
      { userId: "u3", name: "陈予", paidCount: 0, paidTotal: 0 },
      { userId: "u4", name: "宋然", paidCount: 1, paidTotal: 2497 },
      { userId: "u5", name: "顾言", paidCount: 0, paidTotal: 0 },
    ],
    "保留全部 5 名用户并汇总各自已支付订单"
  );
}
