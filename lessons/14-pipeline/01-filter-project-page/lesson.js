export const summary =
  "如同在内存里写 SQL 的 `WHERE -> ORDER BY -> SELECT -> LIMIT/OFFSET`：对数据列表依次完成条件过滤、多字段排序、字段投影与分页切片。";

export const keyPoints = [
  "执行顺序非常关键：必须先过滤（Filter）算出总条数 `total`，再排序（Sort），再分页切片（`slice((page - 1) * pageSize, page * pageSize)`），最后投影（Project）所需字段。",
  "多键排序技巧：主字段相等（差值为 `0`）时，用 `||` 短路继续比较次要字段：`(b.price - a.price) || a.id.localeCompare(b.id)`。",
];

export const remember = [
  "先分页再做重型字段映射，能避免对不在当前页的数据做无用计算。",
];

export const taskDescription =
  "queryProducts(products, 条件) 查询可卖的商品。默认最低价是 0，页码是 1，每页 2 条。只保留价格不低于最低价、并且库存大于 0 的商品。先按价格从高到低排，价格相同再按 id 从小到大排。返回 { total, items }。total 是筛选后的总条数，items 是当前这一页，每条只保留 id、title 和 price。";

export async function runDemo(ctx) {
  const products = await ctx.fetchJson("data/products.json");
  ctx.log("商品总数:", products.length);
}
