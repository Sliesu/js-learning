export const summary =
  "理解唯一标识符 `Symbol(desc)`、全局注册表 `Symbol.for(key)` 以及常用内置知名符号（`Symbol.toPrimitive`、`Symbol.toStringTag`）。";

export const keyPoints = [
  "每次调用 `Symbol('tag')` 都返回宇宙间独一无二的值：`Symbol('a') !== Symbol('a')`。",
  "`Symbol` 作为对象属性键时，不会出现在 `Object.keys`、`for...in` 或 `JSON.stringify` 中，适合挂载不希望混入业务字段的内部元数据。",
  "对象实现 `[Symbol.toPrimitive](hint)` 可自定义它在转数字或转字符串时的值。",
];

export const remember = [
  "需要跨模块按名字共享同一个 Symbol 时用 `Symbol.for('app.key')`，读取其名字用 `Symbol.keyFor(sym)`。",
];

export const taskDescription =
  "有些备注不应该出现在普通字段列表里。attachHiddenMeta(record, metaVal) 用 Symbol.for(\"js_learn.meta\") 把备注写到 record 上，并返回这份 record。readHiddenMeta(record) 用同一个 Symbol 把备注读出来。";

export async function runDemo(ctx) {
  const s1 = Symbol("id");
  const s2 = Symbol("id");
  ctx.log("Symbol('id') === Symbol('id'):", s1 === s2);
  ctx.log("Symbol.for('shared') === Symbol.for('shared'):", Symbol.for("shared") === Symbol.for("shared"));
}
