export const summary =
  "掌握对象的字面量创建、点语法与方括号动态属性读写、`delete` 删除属性，以及 `'key' in obj` 与 `Object.hasOwn(obj, 'key')` 的区别。";

export const keyPoints = [
  "当属性名包含连字符、空格或来自变量时，必须使用方括号 `obj[dynamicKey]` 访问。",
  "`'toString' in obj` 会沿着原型链向上查找并返回 `true`；而 `Object.hasOwn(obj, 'toString')` 只检查对象自身属性。",
  "`delete obj.prop` 会从对象上移除该属性；若只想生成去掉某属性的新对象，用解构 `const { removed, ...rest } = obj` 更干净。",
];

export const remember = [
  "判断对象自身是否含有某字段，优先使用 `Object.hasOwn(obj, key)`，不要用 `obj[key] !== undefined`（因为属性值本身可能就是 `undefined`）。",
];

export const taskDescription =
  "pickOwnFields(record, keys) 按给定的字段名，从档案里取出一份新对象。只取这份档案自身已有的字段，用 Object.hasOwn 判断。原型上同名的字段不要取。";

export async function runDemo(ctx) {
  const user = { id: "u1", undefinedField: undefined };
  ctx.log("Object.hasOwn(user, 'undefinedField'):", Object.hasOwn(user, "undefinedField"));
  ctx.log("Object.hasOwn(user, 'toString'):", Object.hasOwn(user, "toString"));
}
