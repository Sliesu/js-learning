export const summary =
  "解构是按名字或按位置把里面的值取出来。展开是把一份数据摊进另一份里。后面的同名属性会盖住前面的。";

export const keyPoints = [
  "对象按名字取：`const { id, city = '未知', name: userName } = user;`。`name: userName` 是换一个变量名来接。",
  "数组按位置取：`const [first, , third, ...rest] = list;`。空一格就是跳过那一项。",
  "`{ ...defaults, ...overrides }` 里，后面的同名属性盖住前面的。合并配置时常用这个顺序：先默认，再覆盖。",
];

export const remember = [
  "解构的默认值只在那边是 `undefined` 时才用上。如果那边是 `null`，你拿到的仍然是 `null`。",
];

export const taskDescription =
  "写 `normalizeUserConfig(rawUser, patch)`，用新提交的内容盖住旧资料，没提交的字段保留原值。最后返回 `{ id, name, location }`。`name` 没填就用「匿名」。原来的城市字段叫 `city`，返回时改叫 `location`，没填就用「未知」。";

export async function runDemo(ctx) {
  const raw = { id: "u1", city: "上海" };
  const { id, name = "匿名", city: location } = raw;
  ctx.log("解构结果:", { id, name, location });
}
