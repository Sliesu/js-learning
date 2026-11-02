export function delayValue(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

export function createDebounced(fn, waitMs) {
  let timer = null;
  return function (...args) {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, waitMs);
  };
}

export async function test(mod, assert) {
  const v = await mod.delayValue(10, "ready");
  assert.equal(v, "ready", "delayValue 延时返回指定值");

  const received = [];
  const debounced = mod.createDebounced((q) => received.push(q), 15);
  debounced("a");
  debounced("ab");
  debounced("abc");
  await mod.delayValue(30, null);
  assert.deepEqual(received, ["abc"], "防抖合并连续调用，只执行最后一次参数");
}
