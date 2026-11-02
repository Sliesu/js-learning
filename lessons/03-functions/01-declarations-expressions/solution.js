export function runOperation(opName, a, b) {
  const ops = {
    add(x, y) {
      return x + y;
    },
    sub(x, y) {
      return x - y;
    },
    mul(x, y) {
      return x * y;
    },
  };
  const fn = ops[opName];
  return typeof fn === "function" ? fn(a, b) : null;
}

export async function test(mod, assert) {
  assert.equal(mod.runOperation("add", 3, 7), 10, "add 3 + 7 = 10");
  assert.equal(mod.runOperation("sub", 10, 4), 6, "sub 10 - 4 = 6");
  assert.equal(mod.runOperation("mul", 5, 6), 30, "mul 5 * 6 = 30");
  assert.equal(mod.runOperation("unknown", 1, 2), null, "未知操作返回 null");
}
