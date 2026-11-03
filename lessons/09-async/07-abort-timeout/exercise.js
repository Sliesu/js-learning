// 把 signal 交给 taskFn。时限内完成就返回结果。
// 超时则取消任务，并拒绝为消息是 "Timeout" 的 Error。
export async function runWithTimeout(taskFn, timeoutMs) {
}
