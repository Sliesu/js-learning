export const summary =
  "使用对象或类中的访问器属性 `get prop()` 与 `set prop(val)` 实现派生计算字段与赋值校验。";

export const keyPoints = [
  "定义了 `get total()` 后，外部通过读取属性 `item.total`（不加括号）触发计算。",
  "`set qty(val)` 可在外部执行 `item.qty = newVal` 时拦截并校验数值合法性。",
];

export const remember = [
  "不要在 `get x()` 或 `set x(v)` 内部直接读写同名的 `this.x`，否则会无限递归爆栈；底层存储应使用另一个字段（如 `this._x` 或 `#x`）。",
];

export const taskDescription =
  "createOrderLine(unitPrice, initialQty = 1) 创建一行订单。subtotal 不能单独修改，读取它时结果就是单价乘数量。qty 不能被设成负数。如果设成负数，抛出 RangeError，消息是 \"qty cannot be negative\"。";

export async function runDemo(ctx) {
  const rect = {
    w: 4,
    h: 5,
    get area() {
      return this.w * this.h;
    },
  };
  ctx.log("访问器 get area:", rect.area);
}
