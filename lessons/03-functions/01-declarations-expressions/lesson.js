export const summary =
  "区分函数声明（Function Declaration，整体提升）与函数表达式（Function Expression，受 `const`/`let` TDZ 约束），掌握函数是一等公民（First-class Citizen）。";

export const keyPoints = [
  "`function add(a, b) {}` 是函数声明，可以在声明语句之前调用。",
  "`const add = function(a, b) {}` 是函数表达式，在赋值语句执行前处于暂时性死区。",
  "具名函数表达式 `const fn = function calc(n) {}` 的内部名字 `calc` 只在函数体内部可见，便于自递归和报错堆栈定位。",
];

export const remember = [
  "在 JS 中，函数和普通对象一样：可以赋给变量、放进数组、作为参数传给别的函数、或者从函数中返回。",
];

export const taskDescription =
  "runOperation(opName, a, b) 按名字做计算。\"add\" 是相加，\"sub\" 是相减，\"mul\" 是相乘。遇到不认识的运算名就返回 null。把这三种计算放进一个对象，再按名字取出调用。";

export async function runDemo(ctx) {
  ctx.log("函数声明可在定义前调用:", hoistedDouble(6));
  function hoistedDouble(n) {
    return n * 2;
  }
}
