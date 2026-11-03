export const summary =
  "掌握正则表达式字面量、标志位（`g`、`i`、`u`）、命名捕获组 `(?<name>...)` 与转义用户输入 `RegExp.escape`（及兼容回退写法）。";

export const keyPoints = [
  "命名捕获组 `/(?<key>\\w+)=(?<val>\\w+)/` 让匹配结果的 `match.groups` 直接变成可读的对象 `{ key, val }`，告别数括号下标。",
  "配合 `str.matchAll( globalRegex )` 可以一次性提取字符串中所有匹配项及其命名组。",
  "将用户输入的动态文本拼进 `new RegExp(...)` 前必须转义正则元字符：优先用标准 `RegExp.escape`，若旧环境无此方法则用 `.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')`。",
];

export const remember = [
  "`str.matchAll(re)` 要求正则必须带 `g` 标志，否则会抛出 `TypeError`。",
];

export const taskDescription =
  "parseLogKeyValues(msg) 解析一行日志。\"user=u1 action=login\" 要变成 { user: \"u1\", action: \"login\" }。一行里有好几对，就全部留下。";

export async function runDemo(ctx) {
  const re = /(?<k>\w+)=(?<v>\w+)/g;
  const msg = "user=u1 action=login";
  const pairs = [...msg.matchAll(re)].map((m) => m.groups);
  ctx.log("命名捕获组提取结果:", pairs);
  const hasEscape = typeof RegExp.escape === "function";
  ctx.log("RegExp.escape 原生支持:", hasEscape);
}
