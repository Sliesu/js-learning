export function normalizeUserConfig(rawUser, patch) {
  const merged = { ...rawUser, ...patch };
  const { id, name = "匿名", city: location = "未知" } = merged;
  return { id, name, location };
}

export async function test(mod, assert) {
  assert.deepEqual(
    mod.normalizeUserConfig({ id: "u1", city: "北京" }, { name: "周牧" }),
    { id: "u1", name: "周牧", location: "北京" },
    "合并 patch 并把 city 重命名为 location"
  );
  assert.deepEqual(
    mod.normalizeUserConfig({ id: "u9" }, {}),
    { id: "u9", name: "匿名", location: "未知" },
    "缺失字段自动填充默认值"
  );
}
