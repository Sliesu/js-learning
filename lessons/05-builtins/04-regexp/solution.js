export function parseLogKeyValues(msg) {
  const re = /(?<key>\w+)=(?<val>[^\s]+)/g;
  const out = {};
  for (const match of msg.matchAll(re)) {
    const { key, val } = match.groups;
    out[key] = val;
  }
  return out;
}

export async function test(mod, assert) {
  assert.deepEqual(
    mod.parseLogKeyValues("user=u1 action=login"),
    { user: "u1", action: "login" },
    "解析日志字段"
  );
  assert.deepEqual(
    mod.parseLogKeyValues("service=payment latency=510ms status=fail"),
    { service: "payment", latency: "510ms", status: "fail" },
    "解析多组键值对"
  );
}
