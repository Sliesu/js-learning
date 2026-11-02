export function createSteppedRange(start, end, step = 1) {
  return {
    [Symbol.iterator]() {
      let cur = start;
      return {
        next() {
          if (cur <= end) {
            const value = cur;
            cur += step;
            return { value, done: false };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}

export async function test(mod, assert) {
  const range = mod.createSteppedRange(2, 10, 3);
  assert.deepEqual([...range], [2, 5, 8], "展开第一次得到 [2, 5, 8]");
  assert.deepEqual([...range], [2, 5, 8], "可重复迭代");
}
