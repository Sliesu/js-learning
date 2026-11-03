export const summary =
  "使用生成器函数 `function*` 与 `yield`、`yield*` 轻松编写惰性序列（按需计算、支持无限序列与分块切片）。";

export const keyPoints = [
  "调用 `function* gen()` 不会立即执行函数体，而是返回一个既符合迭代器协议又符合可迭代协议的 Generator 对象。",
  "每次调用 `.next()`，函数执行到下一个 `yield expr` 处暂停并把 `expr` 作为 `value` 产出；下次 `.next()` 再从暂停处继续。",
  "`yield* anotherIterable` 会把另一个可迭代对象的所有值逐个委托产出。",
];

export const remember = [
  "处理超大数组的分批（chunk）或无限递增 ID 时，用 `function*` 比一次性分配大数组省内存。",
];

export const taskDescription =
  "chunkGenerator(items, size) 用生成器把数据分成一批一批逐步产出。[1, 2, 3, 4, 5] 按每批 2 个，依次产出 [1, 2]、[3, 4]、[5]。最后剩下的不够一批，也要产出。";

export async function runDemo(ctx) {
  function* idMaker() {
    let i = 1;
    while (true) yield `ID-${i++}`;
  }
  const gen = idMaker();
  ctx.log("惰性生成器按需取前 3 个:", [gen.next().value, gen.next().value, gen.next().value]);
}
