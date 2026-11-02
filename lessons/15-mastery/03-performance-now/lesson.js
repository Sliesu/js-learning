export const summary =
  "使用高精度时间戳 `performance.now()` 测量并对比两种算法实现（如 `Array.includes` 线性查找 vs `Set.has` 哈希查找）的耗时与输出一致性。";

export const keyPoints = [
  "`performance.now()` 返回带小数的高精度毫秒数，不受系统时钟回拨影响，专用于性能基准测量。",
  "优化性能的前提是两种写法产生的结果必须完全一致（`isDeepEqual`）。",
];

export const remember = [
  "数据量在几十条以内时可读性优先；数据量上千且存在嵌套查找时，用 `Set` / `Map` 将 \\(O(n^2)\\) 优化为 \\(O(n)\\)。",
];

export const taskDescription =
  "实现 `benchmarkComparison(fnA, fnB, input)`：用 `performance.now()` 分别测量 `fnA(input)` 与 `fnB(input)`，返回 `{ resultA, resultB, durationAMs, durationBMs }`。";

export async function runDemo(ctx) {
  const t0 = performance.now();
  const s = new Set(Array.from({ length: 5000 }, (_, i) => i));
  const hit = s.has(4999);
  const elapsed = (performance.now() - t0).toFixed(3);
  ctx.log(`构建并查找 5000 元素 Set 命中=${hit}，耗时=${elapsed}ms`);
}
