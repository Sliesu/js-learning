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
  "经营报表只统计仍在用的客户、而且已经支付的订单。请写 generateLocalBusinessReport(ctx)。同时读取 data/users.json、data/products.json、data/orders.json。客户 active 不是 true，或订单 status 不是 \"paid\"，整单不算。对算得上的订单，按商品行累加 qty * unitPrice。返回 { totalRevenue, revenueByCategory, topCity }。revenueByCategory 的键是商品分类 category。topCity 是消费金额最高的客户城市。金额相同则保留先统计到的城市。";

export async function runDemo(ctx) {
  const [users, products, orders] = await Promise.all([
    ctx.fetchJson("data/users.json"),
    ctx.fetchJson("data/products.json"),
    ctx.fetchJson("data/orders.json"),
  ]);
  ctx.log(`综合报表数据源就绪：用户 ${users.length}、商品 ${products.length}、订单 ${orders.length}`);
}
