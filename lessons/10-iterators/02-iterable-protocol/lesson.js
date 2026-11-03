export const summary =
  "理解可迭代协议（Iterable Protocol）：任何实现了 `[Symbol.iterator]()` 并返回 `{ next() { return { value, done }; } }` 的对象都能被 `for...of`、`[...obj]`、`Array.from` 消费。";

export const keyPoints = [
  "数组、字符串、`Map`、`Set`、`TypedArray` 都内置实现了 `[Symbol.iterator]`，而普通对象 `{}` 默认不可迭代。",
  "为自定义数据结构实现 `[Symbol.iterator]()`，就能无缝接入 JS 所有支持可迭代对象的语法。",
];

export const remember = [
  "当 `next()` 返回 `{ value: undefined, done: true }` 时，迭代正式结束。",
];

export const taskDescription =
  "会计期间要能用 for...of 一个个取，但不必先生成整张数组。请写 createSteppedRange(start, end, step = 1)，返回一个可迭代对象。它从 start 开始，每次加 step，产出所有小于等于 end 的数。例如 1 到 5、步长 2，展开后是 [1, 3, 5]。";

export async function runDemo(ctx) {
  const countdown = {
    [Symbol.iterator]() {
      let n = 3;
      return {
        next() {
          return n > 0 ? { value: n--, done: false } : { value: undefined, done: true };
        },
      };
    },
  };
  ctx.log("自定义可迭代对象展开:", [...countdown]);
}
