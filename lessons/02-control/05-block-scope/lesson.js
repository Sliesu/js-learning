export const summary =
  "在循环里创建函数时，用 `var` 声明的那个 `i` 只有一个，循环结束大家都看到最后的值。用 `let`，每一轮都有自己的 `i`。";

export const keyPoints = [
  "`for (var i = 0; i < 3; i++)` 里的 `i` 只有一份。循环结束后它变成 3，循环里创建的函数以后调用，拿到的全是 3。",
  "`for (let i = 0; i < 3; i++)` 每一轮都会给循环体一份新的 `i`。每个函数记住的是自己那一轮的数字。",
];

export const remember = [
  "循环里要创建回调或定时器，迭代变量用 `let` 或 `const`。这样就不会所有回调共用最后一个值。",
];

export const taskDescription =
  "写 `createIndexGetters(count)`，返回 `count` 个函数。调用第 1 个得到 0，调用第 2 个得到 1，依此类推。每个函数都要记住自己的编号，不能最后全部变成同一个数。用 `for (let i = 0; i < count; i++)`。";

export async function runDemo(ctx) {
  const varFns = [];
  for (var i = 0; i < 3; i++) {
    varFns.push(() => i);
  }
  const letFns = [];
  for (let j = 0; j < 3; j++) {
    letFns.push(() => j);
  }
  ctx.log("var 循环生成的函数返回值:", varFns.map((fn) => fn()));
  ctx.log("let 循环生成的函数返回值:", letFns.map((fn) => fn()));
}
