// 练习 9.4：用 async / await 按依赖顺序调用异步数据函数
export async function fetchUserLatestPaidOrder(userId, getUser, getOrdersByUser) {
  // TODO:
  // 1. const user = await getUser(userId); 若 !user || !user.active 返回 null
  // 2. const orders = await getOrdersByUser(user.id);
  // 3. 筛选 status === "paid"，按 createdAt 字符串降序排列，返回第一条（若无则返回 null）
}
