export const summary =
  "掌握 `setTimeout`、`clearTimeout`、`queueMicrotask` 的使用，并编写高频实用的防抖函数 `debounce` 或延时器 `delay`。";

export const keyPoints = [
  "`const timerId = setTimeout(fn, ms)` 返回定时器句柄，在到期前调用 `clearTimeout(timerId)` 可取消执行。",
  "`queueMicrotask(fn)` 是安排微任务的标准 API，比 `Promise.resolve().then(fn)` 语义更直接。",
];

export const remember = [
  "搜索框输入等高频事件常用 `debounce`（每次触发先 `clearTimeout` 上一次的定时器，重新计时）。",
];

export const taskDescription =
  "delayValue(ms, value) 返回一个 Promise，等到 ms 毫秒以后给出 value。createDebounced(fn, waitMs) 返回一个新函数。它被连续调用时，只执行最后一次，并且从最后一次调用开始，等满 waitMs 才执行。";

export async function runDemo(ctx) {
  const start = Date.now();
  await new Promise((r) => setTimeout(r, 15));
  ctx.log("setTimeout 15ms 实际经过:", `${Date.now() - start}ms`);
}
