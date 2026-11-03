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
  "客户名单优先用远程接口，接口失败或给空时改用本地档案，页面不能空着。请写 runResilientUserPipeline(ctx, remoteFetcher)。先等待 remoteFetcher()。结果是非空数组时，来源记为 \"remote\"。抛错、不是数组、或是空数组，都改读 data/users.json，来源记为 \"fallback\"。然后只统计 active 不是 false 的客户。返回 { source, activeCount, names }。names 是这些客户的姓名，activeCount 是 names 的长度。";

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
