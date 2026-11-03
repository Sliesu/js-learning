export const summary =
  "理解 `Web Worker` 独立线程模型：主线程通过 `worker.postMessage(data)` 发送结构化克隆数据，通过 `worker.onmessage` 接收计算结果，不阻塞页面主线程。";

export const keyPoints = [
  "Worker 运行在独立的全局上下文中，不能直接访问 DOM，与主线程之间通过消息传递（底层自动使用 `structuredClone` 复制数据或 `Transferable` 转移 `ArrayBuffer` 所有权）。",
  "利用 `Blob` + `URL.createObjectURL` 可以直接从一段 JS 代码字符串创建内联 `Worker`，无需额外拆分物理文件。",
];

export const remember = [
  "用完临时 Worker 后记得调用 `worker.terminate()` 释放线程资源。",
];

export const taskDescription =
  "一大串金额的平方和会卡住柜台页面。请写 runHeavySumInWorker(numbers)，返回 Promise。环境支持 Worker 时，把计算放进 Worker；不支持时就在异步回退里算。结果都是每一项 n * n 的总和。";

export async function runDemo(ctx) {
  ctx.log("当前环境是否支持 Web Worker:", typeof globalThis.Worker === "function");
}
