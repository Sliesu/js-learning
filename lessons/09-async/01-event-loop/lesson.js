export const summary =
  "理解单线程调用栈（Call Stack）、微任务队列（Microtask Queue：`Promise.then`、`queueMicrotask`）与宏任务队列（Task Queue：`setTimeout`）的铁律执行顺序。";

export const keyPoints = [
  "执行顺序铁律：1) 先把当前同步代码（调用栈）全部执行到底；2) 清空当前所有微任务（包括微任务期间新排入的微任务）；3) 从宏任务队列取一个宏任务执行，再清空全部微任务，周而复始。",
  "`Promise.resolve().then(fn)` 与 `queueMicrotask(fn)` 都进入微任务队列，永远比 `setTimeout(fn, 0)` 先执行。",
];

export const remember = [
  "面试与实战排错核心：同步代码 -> 全部微任务 -> 下一个宏任务。",
];

export const taskDescription =
  "清算任务分三种：当场做完的同步步骤、当前同步代码结束后立刻做的微任务、下一轮才做的定时任务。请写 recordExecutionOrder()，返回一个 Promise。最终数组必须是 [\"sync\", \"micro\", \"macro\"]：先同步推进 \"sync\"，再用 Promise.resolve().then 推进 \"micro\"，再用 setTimeout 0 毫秒推进 \"macro\"，然后把这个顺序 resolve 出去。";

export async function runDemo(ctx) {
  const order = [];
  order.push("1:同步开始");
  Promise.resolve().then(() => order.push("3:Promise微任务"));
  order.push("2:同步结束");
  await Promise.resolve();
  ctx.log("执行顺序记录:", order);
}
