// 练习 14.3：实现用户表与已支付订单的 Left Join 汇总
export function leftJoinUserOrderStats(users, orders) {
  // TODO:
  // 统计每个 userId 在 status === "paid" 订单中的笔数 paidCount 与金额和 paidTotal
  // 按 users 原顺序返回 [{ userId: u.id, name: u.name, paidCount, paidTotal }, ...]
}
