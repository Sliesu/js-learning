export const summary =
  "Promise 有三种状态：进行中、成功、失败。一旦成功或失败，就不会再变。`.then` 每次都返回一个新的 Promise，把上一步的结果交给下一步。";

export const keyPoints = [
  "`.then` 里的函数如果返回一个普通值，下一个 `.then` 就收到它。如果返回的是另一个 Promise，外面会等那个 Promise 有结果再继续。",
  "链上任何一环抛错或失败，都会跳过后面的成功回调，直到被某个 `.catch` 接住。",
  "`.finally` 不接收成功值或失败原因，它跑完以后，原来的成功或失败还会继续往下传。",
];

export const remember = [
  "`.then` 里算完了一定要 `return`。忘了返回，下一步拿到的是 `undefined`。",
];

export const taskDescription =
  "写 `chainOrderTransform(orderPromise)`，等订单到了以后计算总金额。每一行是 `qty` 乘 `unitPrice`。订单没有 `items` 时，按空数组算。总金额大于 0，返回 `{ id: 订单的 id, total }`。总金额小于等于 0，或者中途出错，都不要把错误抛出去，返回 `{ id: \"fallback\", total: 0 }`。";

export async function runDemo(ctx) {
  const res = await Promise.resolve(10)
    .then((n) => n * 2)
    .then((n) => n + 5);
  ctx.log("Promise 链式计算 10 -> *2 -> +5:", res);
}
