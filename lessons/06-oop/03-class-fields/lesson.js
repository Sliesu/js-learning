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
  "购物车要能加商品、看总金额、看总件数。请写 ShoppingCart 类。addItem(title, price, qty = 1) 加进一件商品，没写件数时按 1 件。totalPrice() 返回所有「单价 × 件数」的合计。count() 返回件数合计，不是商品行数。";

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
