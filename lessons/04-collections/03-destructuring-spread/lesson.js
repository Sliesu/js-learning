export const summary =
  "精通对象解构、数组解构、重命名 `old: newName`、默认值 `= def`、嵌套解构以及展开语法 `...spread`。";

export const keyPoints = [
  "对象解构按属性名提取：`const { id, city = '未知', name: userName } = user;`。",
  "数组解构按位置提取：`const [first, , third, ...rest] = list;`。",
  "展开语法 `{ ...defaults, ...overrides }` 中后面的同名属性会覆盖前面的属性，常用于合并配置。",
];

export const remember = [
  "解构默认值只在属性值为 `undefined` 时触发；若属性值为 `null`，解构出来的仍是 `null`。",
];

export const taskDescription =
  "normalizeUserConfig(rawUser, patch) 用新提交的内容覆盖旧资料，没有提交的字段保留原值。最后返回 { id, name, location }。name 没填就用「匿名」。原来的城市字段叫 city，返回时改叫 location，没填就用「未知」。";

export async function runDemo(ctx) {
  const raw = { id: "u1", city: "上海" };
  const { id, name = "匿名", city: location } = raw;
  ctx.log("解构结果:", { id, name, location });
}
