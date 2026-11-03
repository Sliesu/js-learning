export const summary =
  "`instanceof` 看的是原型链上有没有某个 `.prototype`，不是看你觉得它「像不像」。用对象当字典时，如果键可能和内置名字撞车，就用没有原型的对象。";

export const keyPoints = [
  "`a instanceof B` 就是在问：`B.prototype` 在不在 `a` 的原型链上。",
  "`Object.create(null)` 做出来的对象没有 `Object.prototype`。键就算叫 `toString` 或 `__proto__`，也不会撞上内置方法。",
  "`Object.getOwnPropertyDescriptor(obj, key)` 能看到这个属性能不能改、会不会被枚举、能不能再配置。",
];

export const remember = [
  "统计外部传进来的词出现了几次，别用普通对象当计数器。遇到 `constructor` 这种词会出事。用 `Object.create(null)` 或 `Map`。",
];

export const taskDescription =
  "写 `countWordsSafe(words)`，统计每个词出现了几次。不要用普通对象当计数器，因为文本里可能有 `\"constructor\"`、`\"toString\"` 这种词，会和对象自带的名字撞上。用 `Object.create(null)` 做计数器。";

export async function runDemo(ctx) {
  const dict = Object.create(null);
  dict.constructor = 1;
  ctx.log("无原型字典安全计数 constructor:", dict.constructor);
}
