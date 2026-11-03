export const summary =
  "对日志或订单数据做单遍分组聚合（`GROUP BY`），一次遍历同时算出每组的 `count`、`sum`、`avg`、`max`。";

export const keyPoints = [
  "使用 `Map` 或 `Object.groupBy` 分桶后，在每个桶内汇总指标；或者在单次 `for...of` 循环中直接累加每个桶的统计对象。",
];

export const remember = [
  "计算平均值 `avg` 时注意处理分母为 `0` 的情况，并按需求四舍五入。",
];

export const taskDescription =
  "运维要按服务看日志。请写 aggregateServiceLogs(logs)。按 service 分组，每组给出 service、count（总条数）、errorCount（level 为 \"ERROR\" 的条数）、maxLatencyMs（最大 latencyMs）。结果按 service 字典序升序返回。";

export async function runDemo(ctx) {
  const logs = await ctx.fetchJson("data/logs.json");
  ctx.log("日志样本条数:", logs.length);
}
