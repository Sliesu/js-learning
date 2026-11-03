export const summary =
  "理解为什么 `for (let i = 0; ...)` 每一轮循环都会创建一个全新的词法绑定，而 `for (var i = 0; ...)` 所有闭包共享同一个 `i`。";

export const keyPoints = [
  "`for (var i = 0; i < 3; i++)` 中 `i` 只有一个，循环结束后变成 `3`，循环内创建的函数调用时拿到的全是 `3`。",
  "`for (let i = 0; i < 3; i++)` 语言规范规定：每次迭代都会为循环体创建新的词法环境并拷贝上一次的 `i`，因此每个闭包都锁定了当轮的 `i`。",
];

export const remember = [
  "在循环中创建回调或定时器时，使用 `let` 或 `const` 声明迭代变量即可天然避免经典的闭包共享变量陷阱。",
];

export const taskDescription =
  "createIndexGetters(count) 返回 count 个函数。调用第 1 个得到 0，调用第 2 个得到 1，依此类推。每个函数都要记住自己的编号，不能最后全部变成同一个数。用 for (let i = 0; i < count; i++)。";

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
