export const summary =
  "`class` 是写构造函数和原型的一种更清楚的写法。类里面的代码自动是严格模式，而且必须用 `new` 来创建。";

export const keyPoints = [
  "类里的方法默认不会出现在 `for...in` 或 `Object.keys` 里。",
  "写在类顶层的字段，比如 `items = []`，每次 `new` 时都会在这个实例自己身上准备好，而且发生在构造函数主体之前。",
  "把类当普通函数直接调用，会立刻抛出 `TypeError`。",
];

export const remember = [
  "`class` 底下仍然是原型。它比手写 `Fn.prototype` 更不容易写错，但没有变成另一套对象模型。",
];

export const taskDescription =
  "写一个 `ShoppingCart` 类。`addItem(title, price, qty = 1)` 往购物车里加商品，没写件数就按 1 件。`totalPrice()` 返回总金额，也就是每行的单价乘件数再加起来。`count()` 返回总件数，不是商品有几行。";

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
