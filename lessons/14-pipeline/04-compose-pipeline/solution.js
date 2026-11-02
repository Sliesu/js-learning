export function pipe(...fns) {
  return function (initialValue) {
    return fns.reduce((val, fn) => fn(val), initialValue);
  };
}

export function pipeAsync(...fns) {
  return async function (initialValue) {
    let val = initialValue;
    for (const fn of fns) {
      val = await fn(val);
    }
    return val;
  };
}

export async function test(mod, assert) {
  const syncRun = mod.pipe(
    (nums) => nums.filter((n) => n > 0),
    (nums) => nums.map((n) => n * 2),
    (nums) => nums.reduce((a, b) => a + b, 0)
  );
  assert.equal(syncRun([-1, 2, 3]), 10, "同步管道 (2+3)*2 = 10");

  const asyncRun = mod.pipeAsync(
    async (x) => x + 5,
    (x) => x * 3
  );
  assert.equal(await asyncRun(5), 30, "异步管道 (5+5)*3 = 30");
}
