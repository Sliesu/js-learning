export const summary =
  "综合实战一：并发拉取本地 `users.json`、`products.json`、`orders.json` 三张表，完成筛选、跨表关联与按品类/按城市经营指标汇总。";

export const keyPoints = [
  "真实脚本任务往往需要同时关联「用户表 + 订单表 + 商品表」：先并发读取，再用 `Map` 构建 `userById` 和 `productById` 两个查找索引。",
  "只统计活跃用户（`user.active === true`）且已支付（`order.status === 'paid'`）的有效订单。",
];

export const remember = [
  "把数据获取（IO）与报表计算（纯函数）分层，代码结构最清晰。",
];

export const taskDescription =
  "实现 `generateLocalBusinessReport(ctx)`：并发读取三份数据，筛选活跃用户的已支付订单，返回 `{ totalRevenue, revenueByCategory, topCity }`（`revenueByCategory` 为 `{ [category]: 金额 }`，`topCity` 为消费额最高的城市名）。";

export async function runDemo(ctx) {
  const [users, products, orders] = await Promise.all([
    ctx.fetchJson("data/users.json"),
    ctx.fetchJson("data/products.json"),
    ctx.fetchJson("data/orders.json"),
  ]);
  ctx.log(`综合报表数据源就绪：用户 ${users.length}、商品 ${products.length}、订单 ${orders.length}`);
}
