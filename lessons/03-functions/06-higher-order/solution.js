export function once(fn) {
  let called = false;
  let cached;
  return function (...args) {
    if (!called) {
      called = true;
      cached = fn.apply(this, args);
    }
    return cached;
  };
}

export async function test(mod, assert) {
  let count = 0;
  const init = mod.once((x, y) => {
    count += 1;
    return x + y;
  });
  assert.equal(init(2, 3), 5, "第一次调用返回 5");
  assert.equal(init(10, 20), 5, "第二次调用仍返回第一次的结果 5");
  assert.equal(count, 1, "底层函数只被调用了 1 次");
}
