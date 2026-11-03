export const summary =
  "区分「语句（Statement）」与「表达式（Expression）」，理解 ES Module 默认开启严格模式（`'use strict'`）。";

export const keyPoints = [
  "表达式一定能求得一个值（如 `2 + 3`、`x > 0 ? '正' : '非正'`），可以放在任何需要值的位置。",
  "语句执行动作（如 `let a = 1;`、`if (...) {}`），不能直接当作函数参数。",
  "ES Module（`.js` 模块文件）天生处于严格模式：禁止给未声明变量赋值，函数直接调用时 `this` 为 `undefined`。",
];

export const remember = [
  "自动分号插入（ASI）会在换行处补分号，但以 `(`、`[`、`` ` `` 开头的行若上一行不写分号会连成一行导致报错，建议始终写分号。",
  "`return` 关键字后如果直接换行，会被自动插入分号变成 `return undefined;`。",
];

export const taskDescription =
  "信贷报价先按「系数 × 金额 + 固定费用」算出应收。请写 evaluateLinear(k, x, b)，返回 k * x + b。上线前还要自检运行环境：请写 isStrictMode()。这个函数被普通调用时，严格模式下函数里的 this 是 undefined，这时返回 true。";

export async function runDemo(ctx) {
  const exprValue = 3 * 4 + 2;
  ctx.log("表达式 3 * 4 + 2 的值:", exprValue);
  function checkThis() {
    return this === undefined;
  }
  ctx.log("ES Module 默认严格模式下普通函数 this === undefined:", checkThis());
}
