// 练习 9.8：并发请求 users 与 orders 并关联生成已支付订单摘要
export async function loadEnrichedPaidOrders(ctx) {
  // TODO:
  // 1. 用 Promise.all 并发调用 ctx.fetchJson("data/users.json") 和 ctx.fetchJson("data/orders.json")
  // 2. 筛选 status === "paid" 的订单
  // 3. 返回 { orderId: o.id, userName: 对应用户的 name, city: 对应用户的 city, total: items 总金额 } 数组
}
