export const summary =
  "精通数组核心高阶方法：`map`、`filter`、`reduce`、`find`、`some`、`every`、`flat`、`flatMap`。";

export const keyPoints = [
  "`map` 一对一转换；`filter` 按布尔谓词筛选；`flatMap` 先 `map` 再拍平一层（适合把订单数组展平为所有订单项明细）。",
  "`reduce(fn, initialValue)` 务必始终传入第二个参数 `initialValue`（如 `0`、`{}`、`[]`），防止空数组调用时直接抛 `TypeError`。",
  "`some` 只要有一项满足即短路返回 `true`；`every` 所有项都满足才返回 `true`（注意空数组 `.every(...)` 恒为 `true`）。",
];

export const remember = [
  "这批方法全部返回新值，不会修改原数组本身。",
];

export const taskDescription =
  "只统计已经支付的订单赚了多少钱。请写 calcPaidItemsRevenue(orders)。订单里 status 不是 \"paid\" 的整单跳过。已支付订单的 items 全部摊开，每一行金额是 qty * unitPrice，最后返回这些金额的合计。";

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
