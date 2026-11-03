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
  "普通订单只按原价收。会员订单在原价上再乘自己的费率。下面已经有 BaseOrder。请写子类 VipOrder。constructor(id, amount, rate) 先按父类记下单号和金额，再记下 rate。finalAmount() 返回父类算出的金额再乘 rate。柜面还有一个快捷入口：VipOrder.halfPrice(id, amount) 直接生成费率为 0.5 的会员订单。";

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
