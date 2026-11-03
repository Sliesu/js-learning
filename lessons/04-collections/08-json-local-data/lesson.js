export const summary =
  "JSON 是程序之间传递数据的文本。`JSON.stringify` 把值写成文本，`JSON.parse` 再读回来。读的时候可以顺手把某些字段转成你要的类型。";

export const keyPoints = [
  "`JSON.stringify` 会丢掉值为 `undefined`、函数或 `Symbol` 的属性。这些值如果出现在数组里，会变成 `null`。",
  "第二个参数可以指定只保留哪些字段，第三个参数是缩进。比如 `JSON.stringify(obj, ['id', 'name'], 2)`。",
  "`JSON.parse` 的第二个函数会在每个字段解析时被调用，适合把日期字符串、金额在这一步就转成目标类型。",
];

export const remember = [
  "文本不是合法 JSON 时，`JSON.parse` 会抛 `SyntaxError`。外部来的字符串，放进 `try...catch` 里再解析。",
];

export const taskDescription =
  "写 `exportActiveUserNames(usersJsonStr)`，解析一段用户 JSON。只保留 `active` 为 true 的用户，按原来的顺序返回他们的姓名。";

export async function runDemo(ctx) {
  const users = await ctx.fetchJson("data/users.json");
  ctx.log("从 data/users.json 读入用户条数:", users.length);
  ctx.log("前两条:", JSON.stringify(users.slice(0, 2)));
}
