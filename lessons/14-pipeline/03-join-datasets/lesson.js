export const summary =
  "用哈希表（`Map`）实现 \\(O(n + m)\\) 复杂度的两表关联：左连接（Left Join，保留左表全部行）与内连接（Inner Join，只保留匹配行）。";

export const keyPoints = [
  "绝不要在 `left.map(...)` 内部调用 `right.find(...)`（这会导致 \\(O(n \\times m)\\) 双重循环）；先用 `new Map` 构建右表索引即可降为线性耗时。",
];

export const remember = [
  "一对多关联（如一个用户对应多笔订单）可以先用 `Map.groupBy(orders, o => o.userId)` 建索引。",
];

export const taskDescription =
  "leftJoinUserOrderStats(users, orders) 统计每个用户的已支付订单。即使用户没有订单，也要保留这个用户。只统计 status 为 \"paid\" 的订单。按用户原来的顺序返回 { userId, name, paidCount, paidTotal }。没有订单时，笔数和金额都是 0。";

export async function runDemo(ctx) {
  const [users, orders] = await Promise.all([
    ctx.fetchJson("data/users.json"),
    ctx.fetchJson("data/orders.json"),
  ]);
  ctx.log(`准备关联 ${users.length} 名用户与 ${orders.length} 笔订单`);
}
