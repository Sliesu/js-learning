// 练习 9.7：结合 AbortController 为异步任务增加超时取消控制
export async function runWithTimeout(taskFn, timeoutMs) {
  // TODO:
  // 创建 const controller = new AbortController();
  // 若 taskFn(controller.signal) 在 timeoutMs 内完成则清理定时器并返回结果
  // 若超时则调用 controller.abort() 并 reject new Error("Timeout")
}
