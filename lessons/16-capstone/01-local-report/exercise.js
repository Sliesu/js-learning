// 练习 16.1：三表关联生成经营汇总报表
export async function generateLocalBusinessReport(ctx) {
  // TODO:
  // 1. 并发读取 data/users.json, data/products.json, data/orders.json
  // 2. 只保留 order.status === "paid" 且对应 user.active === true 的订单
  // 3. 遍历订单下的 items，结合 product.category 累加：
  //    - totalRevenue: 全部有效明细 qty * unitPrice 总和
  //    - revenueByCategory: { [category]: 该品类总金额 }
  //    - 按 user.city 统计每个城市总金额，找出金额最高的城市名作为 topCity
  // 4. 返回 { totalRevenue, revenueByCategory, topCity }
}
