export const summary =
  "`Symbol` 是一个独一无二的值。即使用了同样的描述，两次调用也不是同一个。把它当对象的键，普通的键列表和 JSON 都不会把它带出去。";

export const keyPoints = [
  "每次 `Symbol('tag')` 都是新的：`Symbol('a') !== Symbol('a')`。",
  "`Symbol` 做属性键时，不会出现在 `Object.keys`、`for...in` 或 `JSON.stringify` 里。适合放不想混进业务字段的内部备注。",
  "对象可以定义 `[Symbol.toPrimitive]`，决定自己被转成数字或字符串时拿出什么。",
];

export const remember = [
  "两个模块要按同一个名字共用一个 Symbol，用 `Symbol.for('app.key')`。想知道它注册时的名字，用 `Symbol.keyFor(sym)`。",
];

export const taskDescription =
  "有些备注不该出现在普通字段列表里。写 `attachHiddenMeta(record, metaVal)`，用 `Symbol.for(\"js_learn.meta\")` 把备注写到 `record` 上，并返回这份 `record`。再写 `readHiddenMeta(record)`，用同一个 Symbol 把备注读出来。";

export async function runDemo(ctx) {
  const s1 = Symbol("id");
  const s2 = Symbol("id");
  ctx.log("Symbol('id') === Symbol('id'):", s1 === s2);
  ctx.log("Symbol.for('shared') === Symbol.for('shared'):", Symbol.for("shared") === Symbol.for("shared"));
}
