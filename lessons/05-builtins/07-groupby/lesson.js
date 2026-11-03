export const summary =
  "按某个字段把一组数据分成几堆，现在有现成方法，不必每次都手写 `reduce`。";

export const keyPoints = [
  "`Object.groupBy(arr, item => key)` 返回一个普通对象：属性名是分组的键，值是这一组的元素。这个对象没有原型上的那些方法名。",
  "`Map.groupBy` 返回的是 `Map`。分组的键可以是对象，也可以是布尔值，不限于字符串。",
];

export const remember = [
  "按城市归用户、按状态归订单，`Object.groupBy` 比手写循环更好读。键不是字符串时，改用 `Map.groupBy`。",
];

export const taskDescription =
  "写 `groupUsersByCity(users)`，按城市给用户分组，每组只保留姓名。比如上海有林晓和陈予，结果就是 `{ 上海: [\"林晓\", \"陈予\"] }`。城市和姓名的顺序都跟原来的数据一致。";

export async function runDemo(ctx) {
  const users = await ctx.fetchJson("data/users.json");
  const grouped = Object.groupBy(users, (u) => u.tier);
  ctx.log("按会员等级分组:", grouped);
}
