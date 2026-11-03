export const summary =
  "一批 Promise 要一起等的时候，先想清楚：是要全部成功，还是允许有的失败，还是谁先完成就用谁。选错方法，一个失败就会把其他结果一起丢掉。";

export const keyPoints = [
  "`Promise.all`：全部成功才给你结果数组。有一个失败，整个就失败。",
  "`Promise.allSettled`：一个都不拒绝。全部结束以后，每一项都会告诉你是成功还是失败，适合做汇总。",
  "`Promise.any` 取第一个成功的；全部失败才抛 `AggregateError`。`Promise.race` 取第一个有结果的，成功或失败都算。",
  "`Promise.withResolvers()` 直接给你 `{ promise, resolve, reject }`。`Promise.try(fn)` 把「同步就抛错」和「返回 Promise」统一包成 Promise。",
];

export const remember = [
  "允许部分失败，用 `Promise.allSettled`。好几个地址抢同一个结果、用最快的那个，用 `Promise.any`。",
];

export const taskDescription =
  "写 `collectSettledSummary(promises)`，等这一批 Promise 全部结束。其中有的失败了，也不要丢掉已经成功的。返回 `{ values, errors }`。`values` 是成功的值，`errors` 是失败原因的 `message`。两组都保持原来的顺序。";

export async function runDemo(ctx) {
  const settled = await Promise.allSettled([
    Promise.resolve("ok-1"),
    Promise.reject(new Error("boom")),
  ]);
  ctx.log("allSettled 结果:", settled);
  ctx.log("Promise.withResolvers 支持:", typeof Promise.withResolvers === "function");
}
