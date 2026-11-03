export const summary =
  "综合实战二：构建带「远程接口优先 + 超时/异常自动回退本地数据集」的高可用数据管道，确保无论联网与否脚本都能完成计算。";

export const keyPoints = [
  "生产环境脚本访问外部接口时，必须考虑离线、DNS 失败、HTTP 5xx 或响应超时。",
  "将数据源获取抽象为 `try { return { source: 'remote', list: await remoteFetcher() }; } catch { return { source: 'local-fallback', list: await ctx.fetchJson('data/users.json') }; }`，下游的数据清洗与统计管道代码完全复用。",
];

export const remember = [
  "数据源适配层（Adapter）与业务计算层（Pipeline）分离，是编写健壮脚本的终极心法。",
];

export const taskDescription =
  "runResilientUserPipeline(ctx, remoteFetcher) 优先使用远程用户名单。如果 remoteFetcher() 返回了非空数组，来源记为 \"remote\"。如果它抛出错误、返回的不是数组，或者数组是空的，就改用 data/users.json，来源记为 \"fallback\"。最后只保留 active 不是 false 的用户。返回 { source, activeCount, names }。names 是这些用户的姓名，activeCount 是姓名的数量。";

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
