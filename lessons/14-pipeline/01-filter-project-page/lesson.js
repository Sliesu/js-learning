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
  "商品查询页只卖有库存、而且达到最低价的商品。请写 queryProducts(products, 条件)。默认最低价 0、第 1 页、每页 2 条。先留下 price 大于等于最低价且 stock 大于 0 的商品。按价格从高到低，价格相同按 id 从小到大。total 是筛选后的总条数，不是当前页条数。items 只取当前页，每条只留 { id, title, price }。返回 { total, items }。";

export async function runDemo(ctx) {
  const products = await ctx.fetchJson("data/products.json");
  ctx.log("商品总数:", products.length);
}
