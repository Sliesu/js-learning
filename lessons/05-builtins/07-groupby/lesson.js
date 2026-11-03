export const summary =
  "使用 ES2024 标准 `Object.groupBy(items, callback)` 与 `Map.groupBy(items, callback)` 一行代码完成数据分组。";

export const keyPoints = [
  "`Object.groupBy(arr, item => keyStr)` 返回一个无原型对象（`null`-prototype object），属性是各个分组键，值是对应元素数组。",
  "`Map.groupBy(arr, item => anyKey)` 返回 `Map` 实例，允许使用对象或布尔值等非字符串作为分组键。",
];

export const remember = [
  "在统计每个城市的用户列表、每个状态的订单列表时，`Object.groupBy` 比手写 `reduce` 更直观易读。",
];

export const taskDescription =
  "groupUsersByCity(users) 按城市给用户分组，每组只保留姓名。比如上海有林晓和陈予，结果就是 { 上海: [\"林晓\", \"陈予\"] }。城市和姓名的顺序都跟原数据一致。";

export async function runDemo(ctx) {
  const users = await ctx.fetchJson("data/users.json");
  const grouped = Object.groupBy(users, (u) => u.tier);
  ctx.log("按会员等级分组:", grouped);
}
