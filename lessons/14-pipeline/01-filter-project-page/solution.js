export function queryProducts(products, { minPrice = 0, page = 1, pageSize = 2 } = {}) {
  const filtered = products
    .filter((p) => p.price >= minPrice && p.stock > 0)
    .toSorted((a, b) => b.price - a.price || a.id.localeCompare(b.id));
  const total = filtered.length;
  const start = (page - 1) * pageSize;
  const items = filtered
    .slice(start, start + pageSize)
    .map(({ id, title, price }) => ({ id, title, price }));
  return { total, items };
}

export async function test(mod, assert, ctx) {
  const products = await ctx.fetchJson("data/products.json");
  const page1 = mod.queryProducts(products, { minPrice: 200, page: 1, pageSize: 2 });
  assert.deepEqual(
    page1,
    {
      total: 3,
      items: [
        { id: "p3", title: "4K 显示器", price: 1899 },
        { id: "p1", title: "机械键盘", price: 499 },
      ],
    },
    "排除无库存的降噪耳机后共 3 条，第 1 页返回前 2 条"
  );
}
