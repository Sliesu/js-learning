export function safeParseJson(rawStr, fallbackValue = null) {
  try {
    return { ok: true, data: JSON.parse(rawStr) };
  } catch (err) {
    return { ok: false, data: fallbackValue, errorName: err.name };
  }
}

export async function test(mod, assert) {
  assert.deepEqual(
    mod.safeParseJson('{"id":"u1"}'),
    { ok: true, data: { id: "u1" } },
    "解析合法 JSON"
  );
  assert.deepEqual(
    mod.safeParseJson("{invalid", []),
    { ok: false, data: [], errorName: "SyntaxError" },
    "非法 JSON 返回 fallbackValue 并记录 SyntaxError"
  );
}
