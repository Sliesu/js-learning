export async function loadInventoryValue(ctx) {
  const products = await ctx.fetchJson("data/products.json");
  return products
    .map((p) => ({
      id: p.id,
      title: p.title,
      stockValue: p.price * p.stock,
    }))
    .toSorted((a, b) => b.stockValue - a.stockValue);
}

export async function test(mod, assert, ctx) {
  const list = await mod.loadInventoryValue(ctx);
  assert.equal(list.length, 5, "共 5 件商品");
  assert.deepEqual(
    list[0],
    { id: "p3", title: "4K 显示器", stockValue: 22788 },
    "货值最高为 4K 显示器 1899*12=22788"
  );
  assert.equal(list.at(-1).stockValue, 0, "无库存商品货值为 0");
}
