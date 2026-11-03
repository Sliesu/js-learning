export const summary =
  "数组能用 `for...of`，是因为它实现了迭代协议。你自己的数据结构只要也交出一个 `next()`，就能用同样的语法消费，而且不必先做成完整数组。";

export const keyPoints = [
  "数组、字符串、`Map`、`Set` 都实现了 `[Symbol.iterator]`。普通对象 `{}` 默认不能被 `for...of`。",
  "你的对象如果有 `[Symbol.iterator]()`，并且它返回的东西有 `next()`，`for...of`、展开、`Array.from` 就都能用。",
];

export const remember = [
  "`next()` 返回 `{ done: true }` 时，这一轮迭代就结束了。`value` 这时通常是 `undefined`。",
];

export const taskDescription =
  "写 `createSteppedRange(start, end, step = 1)`，返回一个可以用 `for...of` 逐个取出的对象，不要先生成完整数组。从 `start` 开始，每次加 `step`，直到不超过 `end`。`createSteppedRange(1, 5, 2)` 展开后是 `[1, 3, 5]`。";

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
