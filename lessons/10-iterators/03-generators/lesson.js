export const summary =
  "生成器用 `function*` 和 `yield` 写。调用它不会马上跑完函数体，而是给你一个可以一点一点往下要值的对象。数据很多、或者还没到头时，这样比一次分配一个大数组省。";

export const keyPoints = [
  "调用生成器函数，得到的是一个生成器对象，函数体还没执行。",
  "每次 `.next()`，函数跑到下一个 `yield` 就暂停，并把那个值交出来。再调用 `.next()`，从暂停的地方继续。",
  "`yield*` 后面接另一个可迭代对象，会把它里面的值一个一个交出来。",
];

export const remember = [
  "要分批处理很大的数组，或者编号可以一直往下加，用 `function*`。不必先把所有值放进内存。",
];

export const taskDescription =
  "写生成器 `chunkGenerator(items, size)`，把数据分成一批一批交出来。`[1, 2, 3, 4, 5]` 按每批 2 个，依次交出 `[1, 2]`、`[3, 4]`、`[5]`。最后剩下的不够一批，也要交出来。";

export async function runDemo(ctx) {
  function* idMaker() {
    let i = 1;
    while (true) yield `ID-${i++}`;
  }
  const gen = idMaker();
  ctx.log("惰性生成器按需取前 3 个:", [gen.next().value, gen.next().value, gen.next().value]);
}
