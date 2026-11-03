export const summary =
  "理解普通函数的动态 `this`（由调用方式决定，可用 `call`/`apply`/`bind` 显式指定）与箭头函数的词法 `this`（继承外层作用域）。";

export const keyPoints = [
  "普通函数作对象方法调用 `obj.fn()` 时，`this` 指向点号前面的 `obj`；一旦把方法单独赋给变量 `const f = obj.fn; f()`，严格模式下 `this` 变成 `undefined`。",
  "箭头函数 `() => {}` 没有自己的 `this`、`arguments`、`super`、`new.target`，也不能用 `new` 构造；它的 `this` 永远等于定义时外层词法作用域的 `this`。",
  "若箭头函数直接返回对象字面量，必须用圆括号包住：`x => ({ value: x })`。",
];

export const remember = [
  "对象顶层方法需要读 `this` 时用简写方法 `method() {}`；方法内部的回调（如 `.map()`、`setTimeout`）用箭头函数自动复用外层 `this`。",
];

export const taskDescription =
  "createPrefixer(prefix) 返回一个对象，里面有 prefix 和 formatAll(items)。formatAll 把每一项变成「前缀 + 这一项」。如果之后修改了 prefix，下一次调用应使用新前缀。处理每一项时使用箭头函数，才能在回调里正确保留 this。";

export async function runDemo(ctx) {
  const counter = {
    step: 5,
    multiplyAll(nums) {
      return nums.map((n) => n * this.step);
    },
  };
  ctx.log("箭头函数继承外层方法 this.step:", counter.multiplyAll([1, 2, 3]));
}
