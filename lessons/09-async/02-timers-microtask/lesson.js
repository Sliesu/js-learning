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
  "有些结果要等一会儿才能给。请写 delayValue(ms, value)，返回一个 Promise，过 ms 毫秒后交出 value。搜索框不能每敲一个字就打一次接口。请写 createDebounced(fn, waitMs)，返回一个新函数。连续调用时只认最后一次的参数，并且从最后一次调用起再等满 waitMs 才执行 fn。";

export async function runDemo(ctx) {
  const start = Date.now();
  await new Promise((r) => setTimeout(r, 15));
  ctx.log("setTimeout 15ms 实际经过:", `${Date.now() - start}ms`);
}
