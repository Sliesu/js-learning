export const summary =
  "每一步只做一件小事，再按顺序接起来：上一步的返回值就是下一步的输入。同步用 `pipe`，每一步都要等的用 `pipeAsync`。";

export const keyPoints = [
  "`pipe(f, g, h)(input)` 就是 `h(g(f(input)))`，从左到右执行。",
  "`pipeAsync` 在每一步之间都会 `await`。同步函数和异步函数可以接在同一条管道里。",
];

export const remember = [
  "每一步只做一件事。这样单看一个函数好懂，接起来以后哪一步错了也好查。",
];

export const taskDescription =
  "写 `pipe(...fns)`，把多个函数串起来。它返回一个新函数：从上一个函数的结果开始，按从左到右交给下一个。再写 `pipeAsync(...fns)`，顺序也是从左到右，但每一步都要等它完成，再把结果交给下一步。";

export async function runDemo(ctx) {
  const pipe =
    (...fns) =>
    (val) =>
      fns.reduce((acc, fn) => fn(acc), val);
  const process = pipe(
    (x) => x + 2,
    (x) => x * 10
  );
  ctx.log("pipe(x+2, x*10)(3) =>", process(3));
}
