export async function generateLocalBusinessReport(ctx) {
  const [users, products, orders] = await Promise.all([
    ctx.fetchJson("data/users.json"),
    ctx.fetchJson("data/products.json"),
    ctx.fetchJson("data/orders.json"),
  ]);

  const userMap = new Map(users.map((u) => [u.id, u]));
  const productMap = new Map(products.map((p) => [p.id, p]));

  let totalRevenue = 0;
  const revenueByCategory = {};
  const cityRevenue = new Map();

  for (const order of orders) {
    if (order.status !== "paid") continue;
    const user = userMap.get(order.userId);
    if (!user || !user.active) continue;

    for (const item of order.items) {
      const lineAmount = item.qty * item.unitPrice;
      totalRevenue += lineAmount;

      const prod = productMap.get(item.productId);
      const cat = prod?.category ?? "其他";
      revenueByCategory[cat] = (revenueByCategory[cat] || 0) + lineAmount;

      cityRevenue.set(user.city, (cityRevenue.get(user.city) || 0) + lineAmount);
    }
  }

  let topCity = "";
  let maxCityRev = -1;
  for (const [city, rev] of cityRevenue.entries()) {
    if (rev > maxCityRev) {
      maxCityRev = rev;
      topCity = city;
    }
  }

  return { totalRevenue, revenueByCategory, topCity };
}

export async function test(mod, assert, ctx) {
  const report = await mod.generateLocalBusinessReport(ctx);
  assert.deepEqual(
    report,
    {
      totalRevenue: 3912,
      revenueByCategory: {
        外设: 1695,
        配件: 318,
        显示: 1899,
      },
      topCity: "深圳",
    },
    "准确算出总营收 3912、各品类营收以及最高消费城市深圳(2497)"
  );
}
