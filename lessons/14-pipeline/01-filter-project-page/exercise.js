// 练习 14.1：实现内存数据查询（过滤 + 多键排序 + 分页 + 投影）
export function queryProducts(products, { minPrice = 0, page = 1, pageSize = 2 } = {}) {
  // TODO:
  // 1. 筛选 p.price >= minPrice && p.stock > 0
  // 2. 按 price 降序，若 price 相同按 id 升序
  // 3. 计算 total = 筛选后总长度，切片取第 page 页（从 1 开始）
  // 4. 投影每项只保留 { id, title, price }，返回 { total, items }
}
