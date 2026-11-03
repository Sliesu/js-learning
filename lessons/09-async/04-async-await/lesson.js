export const summary =
  "使用 `async / await` 以同步代码的结构编写异步逻辑，并警惕循环中不必要串行 `await` 带来的性能退化。";

export const keyPoints = [
  "`async` 函数总是返回一个 Promise：`return 42` 等价于返回 `Promise.resolve(42)`，函数内 `throw err` 等价于返回 `Promise.reject(err)`。",
  "`await expr` 会暂停当前 `async` 函数的执行（不会阻塞主线程！），等右侧 Promise 敲定后再恢复执行。",
  "若两步异步操作存在先后依赖（第 2 步需要第 1 步返回的 `userId`），用先后两次 `await`；若互不依赖，用 `Promise.all` 并行发起。",
];

export const remember = [
  "在 `async` 函数中可以直接用标准的 `try / catch / finally` 捕获 `await` 出来的拒绝错误。",
];

export const taskDescription =
  "要查某个客户最近一笔已支付订单，必须先确认客户还有效。请写 fetchUserLatestPaidOrder(userId, getUser, getOrdersByUser)。先等待 getUser(userId)。没有这个客户，或 active 不是真，就返回 null，不要再查订单。客户有效时，再等待 getOrdersByUser(user.id)。只留 status 为 \"paid\" 的订单，按 createdAt 从新到旧排，返回第一笔。一笔已支付都没有就返回 null。";

export async function runDemo(ctx) {
  async function stepDemo() {
    const a = await Promise.resolve(20);
    const b = await Promise.resolve(a + 15);
    return b;
  }
  ctx.log("async/await 串行依赖结果:", await stepDemo());
}
