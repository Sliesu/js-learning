export const summary =
  "使用 `AbortController`、`AbortSignal.timeout(ms)` 或超时竞速控制异步任务取消与超时保护。";

export const keyPoints = [
  "`const controller = new AbortController()`，把 `controller.signal` 传给 `fetch(url, { signal })` 或自定义异步函数，调用 `controller.abort()` 即可中止任务。",
  "`AbortSignal.timeout(ms)` 可直接生成一个到时间自动中止的信号。",
];

export const remember = [
  "所有外部网络请求都应当设置合理的超时上限，避免挂起请求长期占用资源。",
];

export const taskDescription =
  "调用渠道不能无限等。请写 runWithTimeout(taskFn, timeoutMs)。把取消信号交给 taskFn(signal)。在时限内完成就返回它的结果，并清掉计时器。超时就取消这次调用，并拒绝为 Error，消息正好是 \"Timeout\"。";

export async function runDemo(ctx) {
  const ctrl = new AbortController();
  ctrl.abort("手动取消");
  ctx.log("signal.aborted:", ctrl.signal.aborted, "reason:", ctrl.signal.reason);
}
