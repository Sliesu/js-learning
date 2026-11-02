export const summary =
  "掌握类继承 `extends`、子类构造器必须先调 `super(...)`、`super.method()` 复用父类逻辑，以及 `static` 静态成员与 `static {}` 静态初始化块。";

export const keyPoints = [
  "派生类（`class Sub extends Base`）如果写了 `constructor`，必须在使用 `this` 之前先调用 `super(...args)`。",
  "`static` 属性和方法挂载在类本身上（如 `Order.fromJson(raw)` 工厂方法），连静态方法也会被子类继承！",
  "`static { ... }` 静态块在类加载定义时执行一次，适合做复杂的静态表初始化。",
];

export const remember = [
  "组合优于过深继承；继承层级一般不超过 2 层。",
];

export const taskDescription =
  "基于已给的 `BaseOrder(id, amount)`，实现子类 `VipOrder extends BaseOrder`：接收 `(id, amount, rate)`，重写 `finalAmount()` 返回 `super.finalAmount() * this.rate`，并实现静态工厂方法 `VipOrder.halfPrice(id, amount)`。";

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
