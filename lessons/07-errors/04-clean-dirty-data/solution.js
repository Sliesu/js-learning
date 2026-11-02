export function cleanProductRecords(rawList) {
  const seen = new Set();
  const clean = [];
  for (const item of rawList || []) {
    const id = typeof item?.id === "string" ? item.id.trim() : "";
    if (!id || seen.has(id)) continue;
    const price = Number(item.price);
    if (!Number.isFinite(price) || price <= 0) continue;
    seen.add(id);
    const title = typeof item.title === "string" && item.title.trim() ? item.title.trim() : "未命名商品";
    const rawStock = Number(item.stock ?? 0);
    const stock = Number.isFinite(rawStock) && rawStock > 0 ? rawStock : 0;
    clean.push({ id, title, price, stock });
  }
  return clean;
}

export async function test(mod, assert) {
  const dirty = [
    { id: " p1 ", title: " 机械键盘 ", price: "499", stock: "12" },
    { id: "p1", title: "重复项", price: 100, stock: 5 },
    { id: "p2", title: "", price: 299, stock: -3 },
    { id: "p3", title: "坏价格", price: "NaN" },
    null,
  ];
  assert.deepEqual(
    mod.cleanProductRecords(dirty),
    [
      { id: "p1", title: "机械键盘", price: 499, stock: 12 },
      { id: "p2", title: "未命名商品", price: 299, stock: 0 },
    ],
    "去重、修复字段、过滤非法价格与负数库存"
  );
}
