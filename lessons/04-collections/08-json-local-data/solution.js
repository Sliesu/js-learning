export function exportActiveUserNames(usersJsonStr) {
  const list = JSON.parse(usersJsonStr);
  return list.filter((u) => u.active === true).map((u) => u.name);
}

export async function test(mod, assert, ctx) {
  const users = await ctx.fetchJson("data/users.json");
  const rawJson = JSON.stringify(users);
  assert.deepEqual(
    mod.exportActiveUserNames(rawJson),
    ["林晓", "周牧", "宋然", "顾言"],
    "准确解析并筛选出 4 位活跃用户"
  );
}
