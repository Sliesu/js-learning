export const summary =
  "子类用 `extends` 接上父类。自己写了构造函数的话，用 `this` 之前必须先 `super(...)`。挂在类上、而不是实例上的，用 `static`。";

export const keyPoints = [
  "`class Sub extends Base` 如果写了 `constructor`，在用 `this` 之前要先调用 `super(...args)`。",
  "`static` 的属性和方法在类自己身上，比如 `Order.fromJson(raw)`。子类也会继承这些静态成员。",
  "`static { ... }` 在类定义被执行时跑一次，适合做比较复杂的静态初始化。",
];

export const remember = [
  "能用组合就不要把继承写得很深。一般两层就够看了。",
];

export const taskDescription =
  "下面已经有 `BaseOrder`。请写子类 `VipOrder`。`constructor(id, amount, rate)` 先调用父类构造器，记下单号和金额，再记下 `rate`。`finalAmount()` 用父类算出的金额乘上 `rate`。`VipOrder.halfPrice(id, amount)` 直接创建一个 `rate` 为 0.5 的会员订单。";

export async function runDemo(ctx) {
  class Base {
    static version = "1.0";
    describe() {
      return "base";
    }
  }
  class Sub extends Base {
    describe() {
      return `${super.describe()}->sub`;
    }
  }
  ctx.log("Sub.version 继承静态属性:", Sub.version, "实例方法:", new Sub().describe());
}
