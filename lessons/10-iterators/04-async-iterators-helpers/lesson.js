export const summary =
  "每一页都要等网络回来时，用异步生成器和 `for await...of`。可以随时 `break`，后面的页就不会再请求。";

export const keyPoints = [
  "`async function*` 配 `for await...of`，适合一页一页拉数据。循环里 `break`，后面的请求可以停掉。",
  "较新的迭代器还有 `map`、`filter`、`take`、`toArray`。你只要前 n 个时，它不会把后面的都算完。",
];

export const remember = [
  "`for await` 循环里如果 `break`，底层的异步生成器会被关掉，不必再手动收尾。",
];

export const taskDescription =
  "写 `collectPaginated(fetchPage)`，一页一页取出数据，从第 1 页开始。每一页的结果是 `{ items, hasMore }`。把每一页的 `items` 按顺序接成一个数组。`hasMore` 为 false 时停止，不要再请求下一页。";

export async function runDemo(ctx) {
  async function* asyncNums() {
    for (const n of [10, 20, 30]) {
      await Promise.resolve();
      yield n;
    }
  }
  const out = [];
  for await (const x of asyncNums()) out.push(x);
  ctx.log("for await...of 收集异步序列:", out);
}
