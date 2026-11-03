export const summary =
  "养成编写「纯函数（Pure Function）」的习惯：相同输入永远得到相同输出，且不修改外部变量或传入的对象/数组参数。";

export const keyPoints = [
  "没有 `return` 或 `return;` 的函数默认返回 `undefined`。",
  "副作用（Side Effect）包括：原地修改入参（如 `arr.push()`、`user.age++`）、修改全局状态、发起网络请求。",
  "把核心数据转换逻辑写成纯函数，最容易测试、复用和排查问题。",
];

export const remember = [
  "更新数组或对象入参时，返回新副本（如 `[...list, newItem]` 或 `{ ...user, active: true }`），保证原入参一字未改。",
];

export const taskDescription =
  "appendTagPure(user, newTag) 给客户加一个标签，但是不能改原来那份数据。返回一个新对象，其他字段保持不变，tags 是原来的标签再加上这个新标签。不要对原来的数组调用 push。";

export async function runDemo(ctx) {
  const origin = { name: "林晓", tags: ["vip"] };
  const next = { ...origin, tags: [...origin.tags, "shanghai"] };
  ctx.log("原对象未变:", origin);
  ctx.log("新对象:", next);
}
