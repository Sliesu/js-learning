export const summary =
  "函数可以先写名字再写函数体，也可以先写成一个值再赋给变量。前一种在上面就能调用，后一种要等赋值执行完。函数和其他值一样，可以传来传去。";

export const keyPoints = [
  "`function add(a, b) {}` 是函数声明，写在后面也能在前面调用。",
  "`const add = function(a, b) {}` 是函数表达式。赋值那一行还没执行时，这个名字还不能用。",
  "写成 `const fn = function calc(n) {}` 时，内部名字 `calc` 只在函数体里看得见，方便自己调用自己，报错时堆栈里也有名字。",
];

export const remember = [
  "函数就是一种值：可以放进变量、放进数组、当成参数传出去，也可以从另一个函数里返回。",
];

export const taskDescription =
  "写 `runOperation(opName, a, b)`，按名字做计算。`\"add\"` 相加，`\"sub\"` 相减，`\"mul\"` 相乘。遇到不认识的运算名就返回 `null`。把这三种计算放进一个对象，再按名字取出来调用。";

export async function runDemo(ctx) {
  ctx.log("函数声明可在定义前调用:", hoistedDouble(6));
  function hoistedDouble(n) {
    return n * 2;
  }
}
