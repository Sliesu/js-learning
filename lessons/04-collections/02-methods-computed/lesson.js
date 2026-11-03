export const summary =
  "造对象的时候，名字和变量一样就可以简写。名字要现算出来，就把表达式放进方括号。方法也可以直接写在对象里面。";

export const keyPoints = [
  "变量名和属性名一样时，`{ id: id, name: name }` 写成 `{ id, name }` 就行。",
  "方法可以写成 `{ describe() { ... } }`，不必再写 `describe: function () {}`。",
  "名字要算出来时，写成 `{ [`tier_${tier}`]: count }`。方括号里可以放任意表达式。",
];

export const remember = [
  "把数组做成「以某个字段为键」的对照表时，计算属性名，或者先建对象再赋值，都是很常见的写法。",
];

export const taskDescription =
  "写 `createKeyedRecord(keyPrefix, id, value)`，返回一个对象。里面要有 `id`，还要有一个字段，字段名是「前缀_单号」，值是 `value`。再加一个 `describe()` 方法，返回「单号:值」。单号是 A1、值是 20 时，`describe()` 返回 `\"A1:20\"`。";

export async function runDemo(ctx) {
  const field = "city";
  const obj = { [field.toUpperCase()]: "上海" };
  ctx.log("计算属性名结果:", obj);
}
