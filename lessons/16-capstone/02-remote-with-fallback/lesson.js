export const summary =
  "外面的接口会失败、会超时、也会返回空。先试远程名单，不行就改用本地数据。后面的筛选和统计不用关心数据是从哪来的。";

export const keyPoints = [
  "远程可能离线、解析失败，或者返回的根本不是一份有内容的数组。这些都要当成「这次远程不能用」。",
  "取数这一层负责决定用远程还是本地，并标上来源。后面的筛选只看那份列表，两边共用同一套计算。",
];

export const remember = [
  "取数和计算分开。接口换了、或者多了一种备用来源，计算那一段不用改。",
];

export const taskDescription =
  "写 `runResilientUserPipeline(ctx, remoteFetcher)`。优先用远程用户名单：如果 `remoteFetcher()` 返回了非空数组，来源记为 `\"remote\"`。如果它抛出错误、返回的不是数组，或者数组是空的，就改用 `data/users.json`，来源记为 `\"fallback\"`。最后只保留 `active` 不是 false 的用户。返回 `{ source, activeCount, names }`。`names` 是这些用户的姓名，`activeCount` 是人数。";

export async function runDemo(ctx) {
  let source = "remote";
  let users;
  try {
    throw new Error("模拟离线或网络受限");
  } catch {
    source = "fallback";
    users = await ctx.fetchJson("data/users.json");
  }
  ctx.log(`数据源 [${source}] 加载成功，共 ${users.length} 条记录`);
}
