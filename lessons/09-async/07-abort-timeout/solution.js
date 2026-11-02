export async function runWithTimeout(taskFn, timeoutMs) {
  const controller = new AbortController();
  let timer = null;
  const timeoutPromise = new Promise((_, reject) => {
    timer = setTimeout(() => {
      controller.abort();
      reject(new Error("Timeout"));
    }, timeoutMs);
  });

  try {
    return await Promise.race([taskFn(controller.signal), timeoutPromise]);
  } finally {
    clearTimeout(timer);
  }
}

export async function test(mod, assert) {
  const fast = await mod.runWithTimeout(
    async () => "ok",
    50
  );
  assert.equal(fast, "ok", "未超时任务正常返回");

  let signalAborted = false;
  await assert.rejects(
    () =>
      mod.runWithTimeout(
        (signal) =>
          new Promise((resolve) => {
            signal.addEventListener("abort", () => {
              signalAborted = true;
            });
            setTimeout(() => resolve("late"), 60);
          }),
        10
      ),
    "Timeout",
    "超时任务抛出 Timeout 错误"
  );
  assert.equal(signalAborted, true, "超时后触发了 signal 的 abort 事件");
}
