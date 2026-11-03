export const summary =
  "使用现代 `class` 语法、顶层实例字段声明、`constructor` 与原型方法组织业务领域对象。";

export const keyPoints = [
  "`class` 内部代码永远自动处于严格模式，且类方法默认是不可枚举的（`enumerable: false`）。",
  "类顶层字段（如 `items = [];`）会在每次 `new` 时于 `constructor` 主体执行前初始化在每个实例自身上。",
  "`class` 必须用 `new` 调用，直接当普通函数调用会立即抛出 `TypeError`。",
];

export const remember = [
  "`class` 本质上是基于原型链的语法糖，但比手写 `Fn.prototype` 更安全、约束更严格。",
];

export const taskDescription =
  "写一个 ShoppingCart 类。addItem(title, price, qty = 1) 往购物车里加商品，没写件数就按 1 件。totalPrice() 返回总金额，也就是每行的单价乘件数，再加起来。count() 返回总件数，不是商品有几行。";

export async function runDemo(ctx) {
  class Counter {
    value = 0;
    inc(step = 1) {
      this.value += step;
      return this;
    }
  }
  ctx.log("链式调用 Counter:", new Counter().inc(3).inc(2).value);
}
