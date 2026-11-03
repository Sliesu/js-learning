export const summary =
  "写代码之前，先分清两件事：表达式会算出一个值，语句是在做一件事。这个项目里的模块文件，一打开就是严格模式。";

export const keyPoints = [
  "像 `2 + 3`，或者 `x > 0 ? '正' : '非正'`，都是表达式。它们一定能算出一个值，所以凡是需要填一个值的地方都能放。",
  "像 `let a = 1;`、`if (...) {}` 是语句。语句负责做事，不能直接塞进函数参数里。",
  "带 `import` / `export` 的模块文件默认就是严格模式。你不能给没声明过的变量赋值；普通函数如果直接调用，里面的 `this` 是 `undefined`。",
];

export const remember = [
  "换行时，JavaScript 有时会替你补一个分号。如果下一行以 `(`、`[` 或反引号开头，上一行又没写分号，两行会被粘成一句然后报错。每句都写上分号最省事。",
  "`return` 后面如果立刻换行，会被当成 `return;`，函数就返回 `undefined`。要返回的值写在同一行。",
];

export const taskDescription =
  "写 `evaluateLinear(k, x, b)`，计算 k × x + b。可以把它想成：费率乘上金额，再加一笔固定费用。再写 `isStrictMode()`，判断当前是不是严格模式。这个函数被直接调用时，如果 `this` 是 `undefined`，就返回 true。";

export async function runDemo(ctx) {
  const exprValue = 3 * 4 + 2;
  ctx.log("表达式 3 * 4 + 2 的值:", exprValue);
  function checkThis() {
    return this === undefined;
  }
  ctx.log("ES Module 默认严格模式下普通函数 this === undefined:", checkThis());
}
