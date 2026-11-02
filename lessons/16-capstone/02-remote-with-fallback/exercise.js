// 练习 16.2：远程数据获取失败时自动回退到本地 data/users.json 并完成管道计算
export async function runResilientUserPipeline(ctx, remoteFetcher) {
  // TODO:
  // 1. 尝试调用 const remoteData = await remoteFetcher()
  //    若成功且 Array.isArray(remoteData) && remoteData.length > 0，则 source = "remote", list = remoteData
  // 2. 若抛错或返回空，则回退 source = "fallback", list = await ctx.fetchJson("data/users.json")
  // 3. 筛选 list 中 active !== false 的用户，提取 name 数组 names
  // 4. 返回 { source, activeCount: names.length, names }
}
