export const summary =
  "使用属性简写 `{ id, name }`、方法简写 `{ run() {} }` 与计算属性名 `{ [keyExpr]: value }` 高效构造数据对象。";

export const keyPoints = [
  "当变量名与对象属性名一致时，`{ id: id, name: name }` 可直接简写为 `{ id, name }`。",
  "计算属性名 `{ [`tier_${tier}`]: count }` 允许在字面量内部直接用任意表达式作为键名。",
];

export const remember = [
  "把数组转为以某个字段为键的字典时，计算属性名或动态赋键是高频操作。",
];

export const taskDescription =
  "实现 `createKeyedRecord(keyPrefix, id, value)`：返回 `{ id, [keyPrefix + '_' + id]: value, describe() }`，其中 `describe()` 返回 `\"<id>:<value>\"`。";

export async function runDemo(ctx) {
  const field = "city";
  const obj = { [field.toUpperCase()]: "上海" };
  ctx.log("计算属性名结果:", obj);
}
