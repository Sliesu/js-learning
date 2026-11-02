export function appendTagPure(user, newTag) {
  return {
    ...user,
    tags: [...user.tags, newTag],
  };
}

export async function test(mod, assert) {
  const raw = { id: "u1", tags: ["a", "b"] };
  const updated = mod.appendTagPure(raw, "c");
  assert.deepEqual(updated, { id: "u1", tags: ["a", "b", "c"] }, "返回包含新标签的对象");
  assert.deepEqual(raw, { id: "u1", tags: ["a", "b"] }, "原对象与原数组未被修改");
  assert.ok(raw !== updated && raw.tags !== updated.tags, "引用完全独立");
}
