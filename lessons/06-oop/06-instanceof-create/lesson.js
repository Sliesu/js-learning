export const summary =
  "理解 `obj instanceof Class` 的本质是检查 `Class.prototype` 是否出现在 `obj` 的原型链上，并初识属性描述符与无原型字典 `Object.create(null)`。";

export const keyPoints = [
  "`a instanceof B` 等价于 `B.prototype.isPrototypeOf(a)`。",
  "`Object.create(null)` 创建的对象没有 `Object.prototype`，因此即使外部传入键名 `'toString'` 或 `'__proto__'` 也不会和内置方法冲突（防止原型污染）。",
  "`Object.getOwnPropertyDescriptor(obj, key)` 可查看属性的四个特征：`value`、`writable`、`enumerable`、`configurable`。",
];

export const remember = [
  "统计任意外部输入词频时，用 `Object.create(null)` 或 `new Map()`，防止遇到词名为 `'constructor'` 时报错。",
];

export const taskDescription =
  "词频统计时，客户文本里可能出现 \"constructor\"、\"toString\" 这种和对象内置名字撞车的词。普通对象会算错。请写 countWordsSafe(words)，用一个没有原型的对象当计数器，返回每个词出现的次数。这些撞车词也要按普通词计数。";

export async function runDemo(ctx) {
  const dict = Object.create(null);
  dict.constructor = 1;
  ctx.log("无原型字典安全计数 constructor:", dict.constructor);
}
