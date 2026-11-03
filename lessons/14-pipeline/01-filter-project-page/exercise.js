// 留下 price >= minPrice 且 stock > 0 的商品。
// 价格从高到低，同价按 id 从小到大。
// 返回 { total, items }。total 是筛选后的总条数；items 是当前页，每条只有 id、title、price。
export function queryProducts(products, { minPrice = 0, page = 1, pageSize = 2 } = {}) {
}
