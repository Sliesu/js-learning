export const summary =
  "两种写法谁更快，用 `performance.now()` 量，不要靠感觉。比速度之前，先确认两种写法的结果是一样的。";

export const keyPoints = [
  "`performance.now()` 返回高精度的毫秒数，不受系统时钟被改来改去的影响，专门用来量一段代码花了多久。",
  "结果不一致的两份实现，快也没有意义。先看输出是不是一样，再看耗时。",
];

export const remember = [
  "只有几十条数据时，先把代码写清楚。数据上千、里面还有嵌套查找，再用 `Set` 或 `Map` 把反复扫描换成一次查找。",
];

export const taskDescription =
  "写 `benchmarkComparison(fnA, fnB, input)`，用 `performance.now()` 分别量两个函数处理同一份 `input` 花了多久。两个函数都要实际运行。返回 `{ resultA, resultB, durationAMs, durationBMs }`。";

export async function runDemo(ctx) {
  const t0 = performance.now();
  const s = new Set(Array.from({ length: 5000 }, (_, i) => i));
  const hit = s.has(4999);
  const elapsed = (performance.now() - t0).toFixed(3);
  ctx.log(`构建并查找 5000 元素 Set 命中=${hit}，耗时=${elapsed}ms`);
}
