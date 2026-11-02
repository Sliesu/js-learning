export async function collectSettledSummary(promises) {
  const results = await Promise.allSettled(promises);
  const values = [];
  const errors = [];
  for (const r of results) {
    if (r.status === "fulfilled") {
      values.push(r.value);
    } else {
      errors.push(r.reason?.message ?? String(r.reason));
    }
  }
  return { values, errors };
}

export async function test(mod, assert) {
  const rejected = Promise.reject(new Error("timeout"));
  rejected.catch(() => {}); // 防止未实现的 exercise 忽略入参时触发全局 UnhandledRejection
  const summary = await mod.collectSettledSummary([
    Promise.resolve(10),
    rejected,
    Promise.resolve(20),
  ]);
  assert.deepEqual(
    summary,
    { values: [10, 20], errors: ["timeout"] },
    "准确分离成功值与失败错误消息"
  );
}
