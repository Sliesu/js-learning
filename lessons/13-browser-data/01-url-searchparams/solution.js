export function buildQueryUrl(baseUrl, paramsObj) {
  const url = new URL(baseUrl);
  for (const [key, val] of Object.entries(paramsObj || {})) {
    if (val !== null && val !== undefined) {
      url.searchParams.set(key, String(val));
    }
  }
  return url.toString();
}

export async function test(mod, assert) {
  assert.equal(
    mod.buildQueryUrl("https://api.example.com/users", {
      city: "上海",
      page: 1,
      empty: null,
      undef: undefined,
    }),
    "https://api.example.com/users?city=%E4%B8%8A%E6%B5%B7&page=1",
    "自动编码中文并忽略 null/undefined 参数"
  );
}
