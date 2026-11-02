export function benchmarkComparison(fnA, fnB, input) {
  const t0 = performance.now();
  const resultA = fnA(input);
  const durationAMs = performance.now() - t0;

  const t1 = performance.now();
  const resultB = fnB(input);
  const durationBMs = performance.now() - t1;

  return { resultA, resultB, durationAMs, durationBMs };
}

export async function test(mod, assert) {
  const data = Array.from({ length: 200 }, (_, i) => i);
  const report = mod.benchmarkComparison(
    (arr) => arr.filter((x) => x % 2 === 0).length,
    (arr) => arr.reduce((c, x) => c + (x % 2 === 0 ? 1 : 0), 0),
    data
  );
  assert.equal(report.resultA, 100, "fnA 计算结果为 100");
  assert.equal(report.resultB, 100, "fnB 计算结果为 100");
  assert.ok(typeof report.durationAMs === "number" && report.durationAMs >= 0, "记录非负耗时 A");
  assert.ok(typeof report.durationBMs === "number" && report.durationBMs >= 0, "记录非负耗时 B");
}
