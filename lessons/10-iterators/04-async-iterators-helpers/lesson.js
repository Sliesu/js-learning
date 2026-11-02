export const summary =
  "掌握异步生成器 `async function*`、异步遍历 `for await (const x of stream)`，以及 ES2025 迭代器辅助方法（`Iterator.from(it).map().filter().take().toArray()`）。";

export const keyPoints = [
  "当每一批数据需要异步拉取（如分页 API 或可读流）时，用 `async function*` 搭配 `for await...of` 可以优雅地按页拉取并随时 `break` 停止后续请求。",
  "ES2025 新增 `Iterator.prototype.map / filter / take / drop / toArray`：对惰性迭代器做链式转换时，只计算 `take(n)` 所需的元素，不会遍历全集。",
];

export const remember = [
  "在 `for await (const item of asyncIterable)` 循环内部如果 `break`，会自动关闭底层的异步生成器。",
];

export const taskDescription =
  "实现 `collectPaginated(fetchPage)`：调用异步分页函数 `await fetchPage(page)`（从 `page = 1` 开始，返回 `{ items: [], hasMore: boolean }`），用 `async function*` 或循环收集全部 `items` 返回一维数组。";

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
