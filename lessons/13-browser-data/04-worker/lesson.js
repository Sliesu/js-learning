export const summary =
  "很重的计算如果放在主线程，页面会卡住。`Worker` 在另一条线程里算，算完用消息把结果送回来。它看不到页面上的 DOM。";

export const keyPoints = [
  "主线程用 `worker.postMessage(data)` 把数据送过去，用 `onmessage` 收结果。送过去的是拷贝，不是原来那个对象。`ArrayBuffer` 还可以直接把所有权转过去。",
  "不一定要单独一个文件。把代码放进 `Blob`，再用 `URL.createObjectURL` 就能创建一个临时 Worker。",
];

export const remember = [
  "临时 Worker 用完要 `worker.terminate()`，把那条线程放掉。",
];

export const taskDescription =
  "写 `runHeavySumInWorker(numbers)`，计算数组里每个数的平方，再把它们加起来，结果用 Promise 返回。环境支持 `Worker` 时，把计算放进 Worker，避免卡住页面。不支持时，就在当前环境里异步算完。";

export async function runDemo(ctx) {
  ctx.log("当前环境是否支持 Web Worker:", typeof globalThis.Worker === "function");
}
