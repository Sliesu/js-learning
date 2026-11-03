// 优先用 remoteFetcher() 的非空数组，来源为 "remote"。
// 失败、不是数组或空数组时，改读 data/users.json，来源为 "fallback"。
// 只留 active 不是 false 的客户。
// 返回 { source, activeCount, names }。
export async function runResilientUserPipeline(ctx, remoteFetcher) {
}
