export const summary =
  "`new` 看起来只是一个关键字，背后其实做了固定的几步：先造对象，再拿这个对象当 `this` 去跑构造函数，最后决定返回谁。";

export const keyPoints = [
  "`new Fn(...args)` 做这些事：造一个以 `Fn.prototype` 为原型的对象；把 `this` 指到它，执行 `Fn`；如果 `Fn` 返回了一个对象，就用那个返回值，否则用刚造的对象。",
  "函数内部可以用 `new.target` 看自己是不是被 `new` 调用的。",
];

export const remember = [
  "方法放在 `Fn.prototype` 上，所有实例共用同一个函数。不要在每个实例里各拷贝一份。",
];

export const taskDescription =
  "写 `simulateNew(Constructor, ...args)`，自己做出 `new` 的效果，函数里面不要写 `new`。先按构造函数的原型造出一个对象，再让构造函数在这个对象上执行。如果构造函数返回了对象或函数，就用那个返回值，否则用你造出来的对象。";

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
