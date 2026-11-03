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
  "客户改资料时，新提交的内容盖过旧档案，没改的栏保留。请写 normalizeUserConfig(rawUser, patch)。先把 patch 盖到 rawUser 上。然后取出 id；name 没填就用「匿名」；城市字段 city 改名叫 location 交给后面的系统，没填城市就用「未知」。返回 { id, name, location }。";

export async function runDemo(ctx) {
  const raw = { id: "u1", city: "上海" };
  const { id, name = "匿名", city: location } = raw;
  ctx.log("解构结果:", { id, name, location });
}
