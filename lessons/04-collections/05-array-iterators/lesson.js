export const summary =
  "处理一组数据时，少写循环，多用这几个方法：转换用 `map`，筛选用 `filter`，汇总成一个结果用 `reduce`。它们都返回新值，不改原数组。";

export const keyPoints = [
  "`map` 是一项变一项。`filter` 按条件留下一些。`flatMap` 是先变、再拍平一层，适合把「订单里的每一行」摊成一份明细。",
  "`reduce` 一定要传第二个参数，也就是初值，比如 `0`、`{}` 或 `[]`。空数组又不给初值，会直接抛错。",
  "`some` 只要有一项满足就返回 true，后面不再看。`every` 要每一项都满足才是 true。空数组调用 `every`，结果恒为 true。",
];

export const remember = [
  "`map`、`filter`、`reduce` 这些方法都返回新值，原来的数组还是原来的样子。",
];

export const taskDescription =
  "写 `calcPaidItemsRevenue(orders)`，只统计已经支付的订单。`status` 不是 `\"paid\"` 的整单跳过。已支付订单里，每一行金额是数量 `qty` 乘单价 `unitPrice`。把这些金额加起来返回。";

export async function runDemo(ctx) {
  const sampleOrders = [
    { status: "paid", items: [{ qty: 2, unitPrice: 100 }] },
    { status: "cancelled", items: [{ qty: 1, unitPrice: 999 }] },
  ];
  const rev = sampleOrders
    .filter((o) => o.status === "paid")
    .flatMap((o) => o.items)
    .reduce((sum, it) => sum + it.qty * it.unitPrice, 0);
  ctx.log("已支付订单营收:", rev);
}
