export const summary =
  "彻底理清 `var`（函数作用域与提升为 `undefined`）与 `let` / `const`（块级作用域与暂时性死区 TDZ）的核心差异。";

export const keyPoints = [
  "`var` 只有函数作用域，没有块级作用域，且声明提升到函数顶部并初始化为 `undefined`，可重复声明。",
  "`let` 与 `const` 在进入块 `{ ... }` 到声明语句执行前处于「暂时性死区（TDZ）」，提前访问会直接抛出 `ReferenceError`。",
  "`const` 保证的是「变量绑定的内存地址不可重新赋值」，若绑定的是对象或数组，其内部属性依然可以修改。",
];

export const remember = [
  "现代 JS 代码默认全部用 `const`；只有明确需要重新赋值的计数器或累加变量才用 `let`；不再使用 `var`。",
];

export const taskDescription =
  "demonstrateShadowing(outerVal, innerVal) 用来观察：块内部的同名变量会不会影响外部。外部的初始值是 outerVal。进入块以后，同名变量换成 innerVal。返回 { inside, outside }。inside 是块内的值，outside 是离开块后外部仍然保留的值。";

export async function runDemo(ctx) {
  const x = "外层";
  {
    const x = "内层块";
    ctx.log("块内部读取 x:", x);
  }
  ctx.log("块外部读取 x:", x);
}
