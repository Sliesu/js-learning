export const summary =
  "使用 `Promise.all` 并发拉取 `data/users.json` 与 `data/orders.json`，并用 `Map` 索引将两份数据合并成富含用户信息的订单视图。";

export const keyPoints = [
  "两个互不依赖的数据源应当用 `await Promise.all([fetchA(), fetchB()])` 同时发起，耗时取决于较慢的那一个而非两者相加。",
  "合并两份列表时先用 `new Map(users.map(u => [u.id, u]))` 建立查找表。",
];

export const remember = [
  "并发请求 + Map 关联是前端和脚本层组装视图数据的标准范式。",
];

export const taskDescription =
  "loadEnrichedPaidOrders(ctx) 同时读取 data/users.json 和 data/orders.json，不要读完一个再读另一个。只保留 status 为 \"paid\" 的订单。每笔订单返回 { orderId, userName, city, total }。orderId 用订单的 id，姓名和城市用对应用户的资料，total 是这张订单里每一行 qty 乘 unitPrice 的合计。";

export async function runDemo(ctx) {
  const [users, orders] = await Promise.all([
    ctx.fetchJson("data/users.json"),
    ctx.fetchJson("data/orders.json"),
  ]);
  ctx.log(`并发拉取完成：${users.length} 名用户，${orders.length} 笔订单`);
}
