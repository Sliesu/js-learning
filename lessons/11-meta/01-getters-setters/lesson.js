export const summary =
  "有些字段不该单独存，比如金额合计，它应该永远等于单价乘数量。用 getter 在读取时现算，用 setter 在赋值时拦住不合法的值。";

export const keyPoints = [
  "定义了 `get total()` 之后，外面写 `item.total` 就会触发计算，不要加括号。",
  "`set qty(val)` 会在外面写 `item.qty = newVal` 时被调用，你可以在这里检查数值。",
];

export const remember = [
  "getter 或 setter 里不要再读写同名的 `this.x`，那会无限调用自己，直到栈溢出。真正存数据的字段换一个名字，比如 `_x` 或 `#x`。",
];

export const taskDescription =
  "写 `createOrderLine(unitPrice, initialQty = 1)`，创建一行订单。`subtotal` 不能单独改，读取它时就是单价乘数量。`qty` 不能被设成负数。如果设成负数，抛出 `RangeError`，消息是 `\"qty cannot be negative\"`。";

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
