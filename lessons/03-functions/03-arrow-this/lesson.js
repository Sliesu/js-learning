export const summary =
  "普通函数的 `this` 取决于你怎么调用它。箭头函数没有自己的 `this`，用的是它写下来时外层的那个。";

export const keyPoints = [
  "写成 `obj.fn()` 时，普通函数里的 `this` 就是点号前面的 `obj`。一旦把方法摘出来 `const f = obj.fn; f()`，严格模式下 `this` 会变成 `undefined`。",
  "箭头函数没有自己的 `this`、`arguments`、`super`，也不能用 `new` 去构造。它的 `this` 永远是定义时外层的那个。",
  "箭头函数如果要直接返回一个对象，必须用圆括号包住：`x => ({ value: x })`。不然花括号会被当成函数体。",
];

export const remember = [
  "对象自己的方法如果要读 `this`，用方法简写 `method() {}`。方法里面的回调，比如 `.map()`、`setTimeout`，用箭头函数，这样还能用到外层的 `this`。",
];

export const taskDescription =
  "写 `createPrefixer(prefix)`，返回一个对象，里面有 `prefix` 和 `formatAll(items)`。`formatAll` 把每一项变成「前缀 + 这一项」。如果之后改了 `prefix`，下一次调用要读到新的前缀。处理每一项时用箭头函数，回调里的 `this` 才不会丢。";

export async function runDemo(ctx) {
  const counter = {
    step: 5,
    multiplyAll(nums) {
      return nums.map((n) => n * this.step);
    },
  };
  ctx.log("箭头函数继承外层方法 this.step:", counter.multiplyAll([1, 2, 3]));
}
