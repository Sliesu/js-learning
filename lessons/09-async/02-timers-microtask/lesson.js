export const summary =
  "`setTimeout` 把一件事放到以后再做，句柄留着就能取消。输入框这种连续触发的事件，通常只想要最后一次，这就是防抖。";

export const keyPoints = [
  "`setTimeout(fn, ms)` 返回一个句柄。到点之前调用 `clearTimeout(句柄)`，这件事就不会发生。",
  "`queueMicrotask(fn)` 用来安排一个微任务，意思比 `Promise.resolve().then(fn)` 更直接。",
];

export const remember = [
  "搜索框每敲一个字都请求，会打爆接口。防抖的做法是：每次触发先取消上一次的定时器，从这一次重新计时。",
];

export const taskDescription =
  "写 `delayValue(ms, value)`，返回一个 Promise，等到 `ms` 毫秒以后给出 `value`。再写 `createDebounced(fn, waitMs)`，返回一个新函数。它被连续调用时，只执行最后一次，并且从最后一次调用开始，等满 `waitMs` 才执行。";

export async function runDemo(ctx) {
  const start = Date.now();
  await new Promise((r) => setTimeout(r, 15));
  ctx.log("setTimeout 15ms 实际经过:", `${Date.now() - start}ms`);
}
