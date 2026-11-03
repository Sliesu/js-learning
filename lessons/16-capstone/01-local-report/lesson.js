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
  "generateLocalBusinessReport(ctx) 生成一张经营报表。同时读取 data/users.json、data/products.json 和 data/orders.json。只统计仍在使用的客户，以及 status 为 \"paid\" 的订单。金额按每个商品行的 qty 乘 unitPrice 累加。返回 { totalRevenue, revenueByCategory, topCity }。分类使用商品的 category。topCity 是消费金额最高的城市，如果金额相同，就保留先统计到的城市。";

export async function runDemo(ctx) {
  const [users, products, orders] = await Promise.all([
    ctx.fetchJson("data/users.json"),
    ctx.fetchJson("data/products.json"),
    ctx.fetchJson("data/orders.json"),
  ]);
  ctx.log(`综合报表数据源就绪：用户 ${users.length}、商品 ${products.length}、订单 ${orders.length}`);
}
