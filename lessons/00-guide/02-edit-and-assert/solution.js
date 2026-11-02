export function buildPair(a, b) {
  return { first: a, second: b, sum: a + b };
}

export async function test(mod, assert) {
  assert.deepEqual(
    mod.buildPair(3, 4),
    { first: 3, second: 4, sum: 7 },
    "3 和 4 的组合对象"
  );
  assert.deepEqual(
    mod.buildPair(-2, 10),
    { first: -2, second: 10, sum: 8 },
    "包含负数时的组合对象"
  );
}
