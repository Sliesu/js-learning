export const summary =
  "正则用来从一段文本里把你要的部分抠出来。给捕获组起名字，读结果时就不用去数第几个括号。用户输入进正则之前，先把特殊字符转义。";

export const keyPoints = [
  "写成 `/(?<key>\\w+)=(?<val>\\w+)/` 之后，匹配结果的 `groups` 就是 `{ key, val }`，不用再记括号的顺序。",
  "`matchAll` 可以一次取出所有匹配。它要求正则带 `g`，否则会抛 `TypeError`。",
  "把用户输入拼进 `new RegExp` 之前，特殊字符要转义。有 `RegExp.escape` 就用它；老环境没有的话，再自己替换那些元字符。",
];

export const remember = [
  "`matchAll` 忘了加 `g`，不会静默失败，而是直接抛错。",
];

export const taskDescription =
  "写 `parseLogKeyValues(msg)`，解析一行日志。`\"user=u1 action=login\"` 要变成 `{ user: \"u1\", action: \"login\" }`。一行里有好几对，就全部留下。";

export async function runDemo(ctx) {
  const re = /(?<k>\w+)=(?<v>\w+)/g;
  const msg = "user=u1 action=login";
  const pairs = [...msg.matchAll(re)].map((m) => m.groups);
  ctx.log("命名捕获组提取结果:", pairs);
  const hasEscape = typeof RegExp.escape === "function";
  ctx.log("RegExp.escape 原生支持:", hasEscape);
}
