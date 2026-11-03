export const summary =
  "对象用来装一组有名字的数据。读的时候，普通名字用点，名字来自变量、或者里面有横线，就用方括号。查一个字段在不在，要分清是自己的，还是从原型上继承来的。";

export const keyPoints = [
  "属性名里有横线、空格，或者名字存在变量里，必须写成 `obj[dynamicKey]`。",
  "`'toString' in obj` 会顺着原型往上找，所以通常是 true。`Object.hasOwn(obj, 'toString')` 只看这个对象自己有没有这个字段。",
  "`delete obj.prop` 是从对象上删掉这个属性。如果只是想要一份「去掉某字段」的新对象，用解构：`const { removed, ...rest } = obj`。",
];

export const remember = [
  "判断自己有没有某个字段，用 `Object.hasOwn(obj, key)`。不要写 `obj[key] !== undefined`，因为这个字段的值本身就可能是 `undefined`。",
];

export const taskDescription =
  "写 `pickOwnFields(record, keys)`，按给定的字段名，从档案里取出一份新对象。只取这份档案自己已有的字段，用 `Object.hasOwn` 判断。原型上同名的字段不要取。";

export async function runDemo(ctx) {
  const user = { id: "u1", undefinedField: undefined };
  ctx.log("Object.hasOwn(user, 'undefinedField'):", Object.hasOwn(user, "undefinedField"));
  ctx.log("Object.hasOwn(user, 'toString'):", Object.hasOwn(user, "toString"));
}
