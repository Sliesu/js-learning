export const summary =
  "展开和 `slice` 只复制最外面一层。里面的对象，新旧两边仍然是同一个。要连里面一起分开，用 `structuredClone`。";

export const keyPoints = [
  "浅拷贝只复制第一层。属性值如果是对象或数组，新旧两份还是指着同一个里面的东西。改一边，另一边也变。",
  "`structuredClone(val)` 会把嵌套的对象、数组、`Map`、`Set`、`Date`，连循环引用一起复制成独立的一份。",
  "它不能复制函数，也不能复制 DOM 节点。",
];

export const remember = [
  "订单里某一行的数量要改，又不能动到缓存里的原件，先 `structuredClone`，再改副本。",
];

export const taskDescription =
  "写 `cloneAndUpdateQty(order, itemIndex, newQty)`。要改的是订单里某一行的数量，原来的订单不能被碰到。先把整张订单深拷贝，再改副本里那一行的 `qty`，返回副本。";

export async function runDemo(ctx) {
  const order = { id: "o1", items: [{ qty: 1 }] };
  const deep = structuredClone(order);
  deep.items[0].qty = 99;
  ctx.log("原订单 items[0].qty:", order.items[0].qty, "深拷贝修改后:", deep.items[0].qty);
}
