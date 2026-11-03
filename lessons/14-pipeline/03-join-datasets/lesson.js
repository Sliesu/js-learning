export const summary =
  "把用户和订单对上时，不要对每个用户都把订单表扫一遍。先用 `Map` 按 id 建好索引，两边就都只走一遍。";

export const keyPoints = [
  "在 `users.map` 里面调用 `orders.find`，数据一大就是两层循环。先 `new Map` 把右边建好，查找就是一次取值。",
  "左连接保留左边的每一行，对不上就补 0 或空。内连接只留下两边都有的。",
];

export const remember = [
  "一个用户有多笔订单时，先按 `userId` 把订单分组，再去跟用户对。不要在用户循环里反复过滤整张订单表。",
];

export const taskDescription =
  "写 `leftJoinUserOrderStats(users, orders)`，统计每个用户的已支付订单。即使用户没有订单，也要留下这个用户。只统计 `status` 为 `\"paid\"` 的订单。按用户原来的顺序返回 `{ userId, name, paidCount, paidTotal }`。没有订单时，笔数和金额都是 0。";

export async function runDemo(ctx) {
  const [users, orders] = await Promise.all([
    ctx.fetchJson("data/users.json"),
    ctx.fetchJson("data/orders.json"),
  ]);
  ctx.log(`准备关联 ${users.length} 名用户与 ${orders.length} 笔订单`);
}
