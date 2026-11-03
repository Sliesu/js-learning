export const summary =
  "`async` 函数始终返回 Promise。`await` 会等右边的结果，这段时间主线程还能干别的事。两步互不依赖时，不要一个等完再发下一个。";

export const keyPoints = [
  "`async` 函数里 `return 42`，调用方得到的是一个会成功成 42 的 Promise。里面 `throw err`，就相当于这个 Promise 失败了。",
  "`await` 暂停的是这个 async 函数，不是整个页面。等右边的 Promise 有了结果，函数再从这一行继续。",
  "下一步要用上一步的结果，就先后写两个 `await`。两件事互不依赖，用 `Promise.all` 一起发。",
];

export const remember = [
  "在 `async` 函数里，`await` 失败了，用普通的 `try / catch` 就能接住。",
];

export const taskDescription =
  "写 `fetchUserLatestPaidOrder(userId, getUser, getOrdersByUser)`，找出一个用户最近的一笔已支付订单。先等待 `getUser(userId)`。没有这个用户，或者用户的 `active` 不是 true，就返回 `null`，不用再查订单。用户有效时，再等待 `getOrdersByUser(user.id)`。只留 `status` 为 `\"paid\"` 的订单，按 `createdAt` 从新到旧排序，返回第一笔。一笔都没有就返回 `null`。";

export async function runDemo(ctx) {
  async function stepDemo() {
    const a = await Promise.resolve(20);
    const b = await Promise.resolve(a + 15);
    return b;
  }
  ctx.log("async/await 串行依赖结果:", await stepDemo());
}
