export const summary =
  "掌握 `JSON.parse(text, reviver)` 与 `JSON.stringify(value, replacer, space)`，并首次读取项目的 `data/users.json` 本地数据。";

export const keyPoints = [
  "`JSON.stringify` 会忽略值为 `undefined`、函数或 `Symbol` 的对象属性；数组中的这些值会变成 `null`。",
  "`JSON.stringify(obj, ['id', 'name'], 2)` 第二个参数可传入字段白名单数组或转换函数，第三个参数控制缩进空格数。",
  "`JSON.parse(jsonStr, (key, val) => ...)` 的 `reviver` 可以在解析阶段直接把日期字符串或金额字段转换成目标类型。",
];

export const remember = [
  "`JSON.parse` 遇到非法格式会抛 `SyntaxError`，处理外部不可信字符串时应配合 `try...catch`。",
];

export const taskDescription =
  "会员导出文件是一段 JSON 文字。请写 exportActiveUserNames(usersJsonStr)。先解析这段文字，只保留 active 为 true 的会员，按原来的顺序返回他们的 name 数组。停用会员不要出现。";

export async function runDemo(ctx) {
  const users = await ctx.fetchJson("data/users.json");
  ctx.log("从 data/users.json 读入用户条数:", users.length);
  ctx.log("前两条:", JSON.stringify(users.slice(0, 2)));
}
