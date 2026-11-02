export function createStepRecorder() {
  const snapshots = [];
  function tap(stepName) {
    return function (data) {
      snapshots.push({
        stepName,
        count: Array.isArray(data) ? data.length : 1,
        preview: structuredClone(data),
      });
      return data;
    };
  }
  return { tap, snapshots };
}

export async function test(mod, assert) {
  const { tap, snapshots } = mod.createStepRecorder();
  const res = tap("afterDouble")([1, 2, 3].map((x) => x * 2));
  assert.deepEqual(res, [2, 4, 6], "tap 原样返回传入数据");
  assert.deepEqual(
    snapshots,
    [{ stepName: "afterDouble", count: 3, preview: [2, 4, 6] }],
    "准确记录步骤名、元素个数与深拷贝快照"
  );
}
