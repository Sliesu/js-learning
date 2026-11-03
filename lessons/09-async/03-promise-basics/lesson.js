export const summary =
  "理解 `Promise` 的三种状态（`pending`、`fulfilled`、`rejected` 一旦敲定永不改变）以及 `.then()`、`.catch()`、`.finally()` 的链式值传递。";

export const keyPoints = [
  "`.then(onFulfilled)` 每次都会返回一个全新的 Promise：若回调返回普通值 `x`，下一个 `.then` 收到 `x`；若回调返回另一个 Promise，外层会自动等待它敲定（展开/Unwrap）。",
  "链条中任意一环抛出的异常或 reject，都会顺着链条向下跳过中间的 `onFulfilled`，直到被最近的 `.catch()` 捕获。",
  "`.finally(cleanup)` 不接收结果参数，且默认透传原有的成功值或失败原因。",
];

export const remember = [
  "在 `.then` 链中千万别忘了写 `return` 把处理结果传给下一环。",
];

export const taskDescription =
  "订单详情是稍后才到的 Promise。请写 chainOrderTransform(orderPromise)。订单到达后，用 items 里每行的 qty * unitPrice 算出 total。没有 items 就按空数组。total 大于 0 时返回 { id: order.id, total }。total 小于等于 0，或者前面任何一步失败，都不要把异常抛出去，统一返回兜底单 { id: \"fallback\", total: 0 }。";

export async function runDemo(ctx) {
  const res = await Promise.resolve(10)
    .then((n) => n * 2)
    .then((n) => n + 5);
  ctx.log("Promise 链式计算 10 -> *2 -> +5:", res);
}
