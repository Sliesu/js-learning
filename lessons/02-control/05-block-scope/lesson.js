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
  "实现 `createIndexGetters(count)`：返回一个长度为 `count` 的函数数组，第 `i` 个函数调用时返回其创建时的索引 `i`。";

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
