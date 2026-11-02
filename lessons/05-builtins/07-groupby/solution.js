export function groupUsersByCity(users) {
  const groups = Object.groupBy(users, (u) => u.city);
  const result = {};
  for (const [city, list] of Object.entries(groups)) {
    result[city] = list.map((u) => u.name);
  }
  return result;
}

export async function test(mod, assert, ctx) {
  const users = await ctx.fetchJson("data/users.json");
  assert.deepEqual(
    mod.groupUsersByCity(users),
    {
      上海: ["林晓", "陈予"],
      北京: ["周牧"],
      深圳: ["宋然"],
      杭州: ["顾言"],
    },
    "按城市分组并映射为姓名列表"
  );
}
