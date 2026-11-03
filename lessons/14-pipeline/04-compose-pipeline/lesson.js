export const summary =
  "编写通用的同步管道 `pipe(...fns)` 与异步管道 `pipeAsync(...fns)`，把独立的小型纯函数像乐高一样串联成清晰的数据流水线。";

export const keyPoints = [
  "`pipe(f, g, h)(input)` 从左到右依次把上一步的返回值传给下一个函数，等价于 `h(g(f(input)))`。",
  "`pipeAsync(...fns)(input)` 在每一步之间自动 `await`，既能串联同步函数也能串联异步函数。",
];

export const remember = [
  "每个步骤只做一件事（单一职责），管道组合起来就既好读又好单测。",
];

export const taskDescription =
  "pipe(...fns) 把多个函数串起来。它返回一个新函数，从上一个函数的结果开始，按从左到右的顺序交给下一个函数。pipeAsync(...fns) 也是从左到右，但每一步都要等它完成，再把结果交给下一步。";

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
