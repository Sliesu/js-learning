export const summary =
  "理解单线程调用栈（Call Stack）、微任务队列（Microtask Queue：`Promise.then`、`queueMicrotask`）与宏任务队列（Task Queue：`setTimeout`）的铁律执行顺序。";

export const keyPoints = [
  "执行顺序铁律：1) 先把当前同步代码（调用栈）全部执行到底；2) 清空当前所有微任务（包括微任务期间新排入的微任务）；3) 从宏任务队列取一个宏任务执行，再清空全部微任务，周而复始。",
  "`Promise.resolve().then(fn)` 与 `queueMicrotask(fn)` 都进入微任务队列，永远比 `setTimeout(fn, 0)` 先执行。",
];

export const remember = [
  "排查异步问题就靠这条规律：同步代码 → 全部微任务 → 下一个宏任务。",
];

export const taskDescription =
  "recordExecutionOrder() 返回一个 Promise，用来记录三段代码的先后顺序。最终结果必须是 [\"sync\", \"micro\", \"macro\"]。同步代码里放入 \"sync\"。Promise.resolve().then 里放入 \"micro\"。setTimeout 延迟 0 毫秒时放入 \"macro\"，然后把这个数组 resolve 出去。";

export async function runDemo(ctx) {
  const order = [];
  order.push("1:同步开始");
  Promise.resolve().then(() => order.push("3:Promise微任务"));
  order.push("2:同步结束");
  await Promise.resolve();
  ctx.log("执行顺序记录:", order);
}
