export const summary =
  "全面掌握 `Promise.all`、`Promise.allSettled`、`Promise.race`、`Promise.any`、`Promise.withResolvers()` 与 `Promise.try()`。";

export const keyPoints = [
  "`Promise.all(tasks)`：全部成功才返回结果数组；只要有一个失败立即 reject。",
  "`Promise.allSettled(tasks)`：永不 reject，等待全部敲定后返回 `{ status: 'fulfilled', value } | { status: 'rejected', reason }` 数组，适合批量任务统计成功与失败。",
  "`Promise.any(tasks)`：取第一个 fulfilled 的结果（全部失败才抛 `AggregateError`）；而 `Promise.race` 取第一个敲定（无论成功或失败）。",
  "`Promise.withResolvers()` 直接解构出 `{ promise, resolve, reject }`；`Promise.try(fn)` 将同步抛错或异步返回统一包装成 Promise。",
];

export const remember = [
  "批量请求允许部分失败时用 `Promise.allSettled`；多镜像源竞速取最快可用结果时用 `Promise.any`。",
];

export const taskDescription =
  "collectSettledSummary(promises) 等待这一批 Promise 全部结束。其中有的失败了，也不要丢掉已经成功的。返回 { values, errors }。values 是成功的值，errors 是失败原因的 message。两组都保持原来的顺序。";

export async function runDemo(ctx) {
  const settled = await Promise.allSettled([
    Promise.resolve("ok-1"),
    Promise.reject(new Error("boom")),
  ]);
  ctx.log("allSettled 结果:", settled);
  ctx.log("Promise.withResolvers 支持:", typeof Promise.withResolvers === "function");
}
