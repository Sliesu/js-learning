export const summary =
  "两份互不依赖的数据，一起去取，总时间取决于较慢的那一份，而不是两份相加。拿回来以后，用 `Map` 按 id 对上。";

export const keyPoints = [
  "写成 `await Promise.all([fetchA(), fetchB()])`，两个请求同时发出去。",
  "把用户列表先做成 `new Map(users.map(u => [u.id, u]))`，订单过来时用 id 就能找到人，不必每次扫描整张表。",
];

export const remember = [
  "同时请求，再用 `Map` 对上，是把两份列表合成一份视图时最常用的做法。",
];

export const taskDescription =
  "写 `loadEnrichedPaidOrders(ctx)`，同时读取 `data/users.json` 和 `data/orders.json`，不要读完一个再读另一个。只保留 `status` 为 `\"paid\"` 的订单。每笔返回 `{ orderId, userName, city, total }`。`orderId` 用订单的 id，姓名和城市用对应用户的资料，`total` 是这张订单里每一行 `qty` 乘 `unitPrice` 的合计。";

export async function runDemo(ctx) {
  const [users, orders] = await Promise.all([
    ctx.fetchJson("data/users.json"),
    ctx.fetchJson("data/orders.json"),
  ]);
  ctx.log(`并发拉取完成：${users.length} 名用户，${orders.length} 笔订单`);
}
