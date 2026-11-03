export const summary =
  "JavaScript 一次只做一件事。当前这段同步代码跑完，才会去清空微任务，然后才轮到 `setTimeout` 这类宏任务。顺序错了，日志和界面更新都会让你看不懂。";

export const keyPoints = [
  "顺序是固定的：先把当前同步代码跑完；再把现在排着的微任务全部做完，做的过程中新加的微任务也要清掉；然后取一个宏任务，做完再清一轮微任务。",
  "`Promise.resolve().then(fn)` 和 `queueMicrotask(fn)` 都是微任务，永远排在 `setTimeout(fn, 0)` 前面。",
];

export const remember = [
  "异步结果对不上时，按这个顺序想：同步代码，然后全部微任务，然后下一个宏任务。",
];

export const taskDescription =
  "写 `recordExecutionOrder()`，返回一个 Promise，记录三段代码谁先谁后。最终结果必须是 `[\"sync\", \"micro\", \"macro\"]`。同步代码里放入 `\"sync\"`。`Promise.resolve().then` 里放入 `\"micro\"`。`setTimeout` 延迟 0 毫秒时放入 `\"macro\"`，然后把这个数组 resolve 出去。";

export async function runDemo(ctx) {
  const order = [];
  order.push("1:同步开始");
  Promise.resolve().then(() => order.push("3:Promise微任务"));
  order.push("2:同步结束");
  await Promise.resolve();
  ctx.log("执行顺序记录:", order);
}
