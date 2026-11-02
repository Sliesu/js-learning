export async function collectPaginated(fetchPage) {
  async function* pageStream() {
    let page = 1;
    while (true) {
      const res = await fetchPage(page);
      for (const item of res.items || []) {
        yield item;
      }
      if (!res.hasMore) break;
      page += 1;
    }
  }

  const all = [];
  for await (const item of pageStream()) {
    all.push(item);
  }
  return all;
}

export async function test(mod, assert) {
  const pages = {
    1: { items: ["a", "b"], hasMore: true },
    2: { items: ["c"], hasMore: false },
  };
  const list = await mod.collectPaginated(async (p) => pages[p]);
  assert.deepEqual(list, ["a", "b", "c"], "按页异步拉取并合并全部元素");
}
