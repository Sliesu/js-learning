export const summary =
  "同样的输入，永远得到同样的输出，而且不改外面的数据，这样的函数最好测、也最好查错。没有 `return` 的函数，返回的是 `undefined`。";

export const keyPoints = [
  "函数里没有 `return`，或者只写了 `return;`，调用方拿到的是 `undefined`。",
  "改了传进来的数组或对象、改了全局变量、发了网络请求，这些都是副作用。调用完，外面的世界已经变了。",
  "把「数据怎么变」写成不碰外部的函数，测试、复用、查错都会轻松很多。",
];

export const remember = [
  "要更新数组或对象时，返回一份新的，比如 `[...list, newItem]` 或 `{ ...user, active: true }`。原来传进来的那份一个字都别改。",
];

export const taskDescription =
  "写 `appendTagPure(user, newTag)`，给客户加一个标签，但不能改原来那份数据。返回一个新对象，其他字段保持不变，`tags` 是原来的标签再加上这个新标签。不要对原来的数组调用 `push`。";

export async function runDemo(ctx) {
  const origin = { name: "林晓", tags: ["vip"] };
  const next = { ...origin, tags: [...origin.tags, "shanghai"] };
  ctx.log("原对象未变:", origin);
  ctx.log("新对象:", next);
}
