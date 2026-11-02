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
  "实现 `chainOrderTransform(orderPromise)`：在 `.then` 链中计算订单总金额 `total`，若 `total <= 0` 则抛出 `new Error('Invalid total')`，`.catch` 捕获任何错误并兜底返回 `{ id: 'fallback', total: 0 }`。";

export async function runDemo(ctx) {
  const res = await Promise.resolve(10)
    .then((n) => n * 2)
    .then((n) => n + 5);
  ctx.log("Promise 链式计算 10 -> *2 -> +5:", res);
}
