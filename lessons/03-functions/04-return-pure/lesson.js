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
  "实现纯函数 `appendTagPure(user, newTag)`：不修改原 `user` 及其 `tags` 数组，返回一个追加了 `newTag` 的新用户对象。";

export async function runDemo(ctx) {
  const origin = { name: "林晓", tags: ["vip"] };
  const next = { ...origin, tags: [...origin.tags, "shanghai"] };
  ctx.log("原对象未变:", origin);
  ctx.log("新对象:", next);
}
