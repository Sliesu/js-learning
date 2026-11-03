export const summary =
  "请求不能无限等。`AbortController` 可以在超时或用户离开时，把还在进行的操作取消掉。";

export const keyPoints = [
  "`new AbortController()` 得到一个控制器。把 `controller.signal` 传给 `fetch` 或你自己的异步函数，调用 `controller.abort()` 就会中止。",
  "`AbortSignal.timeout(ms)` 直接给你一个到点就中止的信号，不用自己再写定时器。",
];

export const remember = [
  "访问外面的网络，都该有一个超时。挂住的请求会一直占着连接。",
];

export const taskDescription =
  "写 `runWithTimeout(taskFn, timeoutMs)`，给一次异步操作加上时间限制。把 `signal` 传给 `taskFn(signal)`。在限定时间内完成，就返回它的结果。超时就取消这次操作，并产生一个错误，消息是 `\"Timeout\"`。";

export async function runDemo(ctx) {
  const ctrl = new AbortController();
  ctrl.abort("手动取消");
  ctx.log("signal.aborted:", ctrl.signal.aborted, "reason:", ctrl.signal.reason);
}
