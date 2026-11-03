export const summary =
  "区分浅拷贝（`{ ...obj }`、`Object.assign`、`arr.slice()`）与原生深拷贝 `structuredClone(value)`。";

export const keyPoints = [
  "浅拷贝只复制第一层属性；若属性值是嵌套对象或数组，新旧对象仍然共享同一个内部子对象引用。",
  "`structuredClone(val)` 是浏览器与现代运行时内置的深拷贝标准 API，支持嵌套对象、数组、`Map`、`Set`、`Date`、`RegExp`、`ArrayBuffer` 甚至循环引用。",
  "注意：`structuredClone` 不能克隆函数（Function）或 DOM 节点。",
];

export const remember = [
  "需要安全修改嵌套结构（如订单里的 `items[0].qty`）而不影响缓存原件时，使用 `structuredClone`。",
];

export const taskDescription =
  "改订单里某一行的数量时，不能改到原订单。请写 cloneAndUpdateQty(order, itemIndex, newQty)。先把整张订单深拷贝，包括里面的商品行，再把副本里第 itemIndex 行的 qty 改成 newQty，返回这份副本。";

export async function runDemo(ctx) {
  const order = { id: "o1", items: [{ qty: 1 }] };
  const deep = structuredClone(order);
  deep.items[0].qty = 99;
  ctx.log("原订单 items[0].qty:", order.items[0].qty, "深拷贝修改后:", deep.items[0].qty);
}
