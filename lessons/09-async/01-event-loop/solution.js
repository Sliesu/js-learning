export function recordExecutionOrder() {
  return new Promise((resolve) => {
    const steps = [];
    setTimeout(() => {
      steps.push("macro");
      resolve(steps);
    }, 0);
    Promise.resolve().then(() => {
      steps.push("micro");
    });
    steps.push("sync");
  });
}

export async function test(mod, assert) {
  const steps = await mod.recordExecutionOrder();
  assert.deepEqual(steps, ["sync", "micro", "macro"], "严格遵循 同步 -> 微任务 -> 宏任务 顺序");
}
