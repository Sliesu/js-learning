export const summary =
  "对日志或订单数据做单遍分组聚合（`GROUP BY`），一次遍历同时算出每组的 `count`、`sum`、`avg`、`max`。";

export const keyPoints = [
  "使用 `Map` 或 `Object.groupBy` 分桶后，在每个桶内汇总指标；或者在单次 `for...of` 循环中直接累加每个桶的统计对象。",
];

export const remember = [
  "计算平均值 `avg` 时注意处理分母为 `0` 的情况，并按需求四舍五入。",
];

export const taskDescription =
  "实现 `aggregateServiceLogs(logs)`：按 `log.service` 分组统计 `data/logs.json`，返回按 `service` 字典序升序排列的 `{ service, count, errorCount, maxLatencyMs }` 数组。";

export async function runDemo(ctx) {
  const logs = await ctx.fetchJson("data/logs.json");
  ctx.log("日志样本条数:", logs.length);
}
