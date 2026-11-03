export const summary =
  "`var` 是老规则：函数里到处可见，还能重复声明。现在写代码用 `const`，需要改赋值时再用 `let`。它们在声明之前是碰不得的。";

export const keyPoints = [
  "`var` 只有函数作用域，没有块级作用域。声明会被抬到函数顶部，一开始是 `undefined`，而且同一个名字可以再声明一次。",
  "`let` 和 `const` 从进入花括号，到执行到那一行声明之前，这个名字处于暂时性死区。提前去读，会抛出 `ReferenceError`。",
  "`const` 保证的是这个名字不能再指向别的东西。如果它指向的是对象或数组，里面的内容仍然可以改。",
];

export const remember = [
  "新代码默认用 `const`。只有计数器、累加这种确实要重新赋值的，才用 `let`。不要再写 `var`。",
];

export const taskDescription =
  "写 `demonstrateShadowing(outerVal, innerVal)`，用来看块里面的同名变量会不会改到外面。外面一开始是 `outerVal`。进到块里，同名变量换成 `innerVal`。返回 `{ inside, outside }`：`inside` 是块里读到的值，`outside` 是离开块以后外面仍然保留的值。";

export async function runDemo(ctx) {
  const x = "外层";
  {
    const x = "内层块";
    ctx.log("块内部读取 x:", x);
  }
  ctx.log("块外部读取 x:", x);
}
