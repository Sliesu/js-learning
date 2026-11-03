export const summary =
  "理解传统构造函数、`Fn.prototype` 共享方法，以及 `new Fn(...args)` 在底层自动执行的四个步骤。";

export const keyPoints = [
  "`new Fn(...args)` 的四步：1) 创建以 `Fn.prototype` 为原型的新对象 `instance`；2) 将 `this` 绑定到 `instance` 执行 `Fn`；3) 若 `Fn` 返回了一个非空对象则取该返回值，否则返回 `instance`。",
  "在函数内部可通过 `new.target` 检测函数是否是通过 `new` 调用的。",
];

export const remember = [
  "把方法挂在 `Fn.prototype` 上可以让成千上万个实例共享同一个函数对象，而不是每个实例各自拷贝一份。",
];

export const taskDescription =
  "simulateNew(Constructor, ...args) 自己实现 new 的效果，函数里面不要写 new。先根据构造函数的原型做出一个对象，再让构造函数在这个对象上执行。如果构造函数返回了对象或函数，就用那个返回值。否则用你做出来的对象。";

export async function runDemo(ctx) {
  function Product(title, price) {
    this.title = title;
    this.price = price;
  }
  Product.prototype.label = function () {
    return `${this.title}:¥${this.price}`;
  };
  const p = new Product("鼠标", 299);
  ctx.log("new 实例调用原型方法:", p.label());
}
