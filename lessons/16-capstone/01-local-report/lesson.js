export const summary =
  "把前面学的合在一起：三份本地数据同时读出来，用 id 对上，只统计还在使用的客户和已支付的订单，再按品类和城市汇总。";

export const keyPoints = [
  "用户、订单、商品互不依赖，一起读取。然后用 `Map` 做出 `userById` 和 `productById`，后面就按 id 取。",
  "只统计 `user.active === true` 的客户，以及 `status` 为 `\"paid\"` 的订单。金额按每一行的数量乘单价累加。",
];

export const remember = [
  "读取数据是一回事，算报表是另一回事。把取数和纯计算分开，报表公式改起来不会碰到请求。",
];

export const taskDescription =
  "写 `generateLocalBusinessReport(ctx)`，生成一张经营报表。同时读取 `data/users.json`、`data/products.json` 和 `data/orders.json`。只统计仍在使用的客户，以及 `status` 为 `\"paid\"` 的订单。金额按每个商品行的 `qty` 乘 `unitPrice` 累加。返回 `{ totalRevenue, revenueByCategory, topCity }`。分类用商品的 `category`。`topCity` 是消费金额最高的城市；金额相同的话，保留先统计到的那一座。";

export async function runDemo(ctx) {
  const [users, products, orders] = await Promise.all([
    ctx.fetchJson("data/users.json"),
    ctx.fetchJson("data/products.json"),
    ctx.fetchJson("data/orders.json"),
  ]);
  ctx.log(`综合报表数据源就绪：用户 ${users.length}、商品 ${products.length}、订单 ${orders.length}`);
}
