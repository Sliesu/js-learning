// 先查客户。客户不存在或未激活，返回 null。
// 再查该客户的订单，只留已支付，按 createdAt 从新到旧，返回最近一笔。没有则 null。
export async function fetchUserLatestPaidOrder(userId, getUser, getOrdersByUser) {
}
