export function aggregateServiceLogs(logs) {
  const map = new Map();
  for (const log of logs) {
    let bucket = map.get(log.service);
    if (!bucket) {
      bucket = {
        service: log.service,
        count: 0,
        errorCount: 0,
        maxLatencyMs: 0,
      };
      map.set(log.service, bucket);
    }
    bucket.count += 1;
    if (log.level === "ERROR") bucket.errorCount += 1;
    if (log.latencyMs > bucket.maxLatencyMs) {
      bucket.maxLatencyMs = log.latencyMs;
    }
  }
  return [...map.values()].toSorted((a, b) => a.service.localeCompare(b.service));
}

export async function test(mod, assert, ctx) {
  const logs = await ctx.fetchJson("data/logs.json");
  assert.deepEqual(
    mod.aggregateServiceLogs(logs),
    [
      { service: "auth", count: 2, errorCount: 0, maxLatencyMs: 18 },
      { service: "order", count: 2, errorCount: 0, maxLatencyMs: 240 },
      { service: "payment", count: 2, errorCount: 2, maxLatencyMs: 510 },
    ],
    "准确聚合三个服务的调用次数、错误数与最大耗时"
  );
}
