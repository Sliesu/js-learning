export const summary =
  "按服务、按城市把记录分成几组，再数条数、求和、找最大，一遍循环就能做完。不必先分组再对每组扫描第二次。";

export const keyPoints = [
  "用 `Map` 记住每一组的统计对象。`for...of` 走过每条记录时，找到它那一组，把 count、错误数、最大耗时更新掉。",
];

export const remember = [
  "算平均值时先看这一组是不是空的。分母为 0 就不要除。需要的话再四舍五入。",
];

export const taskDescription =
  "写 `aggregateServiceLogs(logs)`，按 `service` 把日志分组。每一组返回 `service`、`count`、`errorCount` 和 `maxLatencyMs`。`count` 是这一组的总条数，`errorCount` 只数 `level` 为 `\"ERROR\"` 的，`maxLatencyMs` 是这一组里最大的 `latencyMs`。结果按 `service` 的名字排序。";

export async function runDemo(ctx) {
  const logs = await ctx.fetchJson("data/logs.json");
  ctx.log("日志样本条数:", logs.length);
}
