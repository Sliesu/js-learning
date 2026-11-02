export async function runResilientUserPipeline(ctx, remoteFetcher) {
  let source = "remote";
  let list = null;
  try {
    const remoteData = await remoteFetcher();
    if (Array.isArray(remoteData) && remoteData.length > 0) {
      list = remoteData;
    } else {
      throw new Error("Empty remote payload");
    }
  } catch {
    source = "fallback";
    list = await ctx.fetchJson("data/users.json");
  }

  const activeUsers = list.filter((u) => u.active !== false);
  const names = activeUsers.map((u) => u.name);
  return {
    source,
    activeCount: names.length,
    names,
  };
}

export async function test(mod, assert, ctx) {
  const okRemote = await mod.runResilientUserPipeline(ctx, async () => [
    { id: "r1", name: "远程用户A", active: true },
    { id: "r2", name: "远程用户B", active: false },
  ]);
  assert.deepEqual(
    okRemote,
    { source: "remote", activeCount: 1, names: ["远程用户A"] },
    "远程接口正常时优先使用 remote 数据"
  );

  const fallbackRes = await mod.runResilientUserPipeline(ctx, async () => {
    throw new Error("Network unreachable");
  });
  assert.deepEqual(
    fallbackRes,
    {
      source: "fallback",
      activeCount: 4,
      names: ["林晓", "周牧", "宋然", "顾言"],
    },
    "远程接口失败时平滑回退到本地 data/users.json 并完成统计"
  );
}
