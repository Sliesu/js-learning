export const summary =
  "在内存里查询一份列表，顺序不能乱：先按条件筛，记下筛完有多少条，再排序，再切出当前页，最后只留下要显示的字段。";

export const keyPoints = [
  "先过滤才能得到正确的 `total`。然后排序，再用 `slice((page - 1) * pageSize, page * pageSize)` 切出这一页，最后只挑需要的字段。",
  "两个键一起排：主字段相等时再比下一个。写成 `(b.price - a.price) || a.id.localeCompare(b.id)`，前面的差是 0 才会继续比 id。",
];

export const remember = [
  "先切出当前页，再做比较贵的字段转换。不在这一页上的数据，就不必算。",
];

export const taskDescription =
  "写 `queryProducts(products, { minPrice = 0, page = 1, pageSize = 2 })`，查询可卖的商品。最低价默认 0，页码默认 1，每页默认 2 条。只保留价格不低于最低价、并且库存大于 0 的商品。先按价格从高到低排，价格相同再按 id 从小到大排。返回 `{ total, items }`。`total` 是筛选后一共有多少条，`items` 是当前这一页，每条只留 `id`、`title` 和 `price`。";

export async function runDemo(ctx) {
  const products = await ctx.fetchJson("data/products.json");
  ctx.log("商品总数:", products.length);
}
