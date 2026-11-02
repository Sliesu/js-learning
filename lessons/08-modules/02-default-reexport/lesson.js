import formatBadge, { DEFAULT_TIER } from "./badge.js";

export const summary =
  "掌握默认导出 `export default`、命名空间导入 `import * as ns from '...'` 以及聚合重导出 `export { ... } from '...'`。";

export const keyPoints = [
  "一个模块最多只能有一个 `export default`，导入时可任意取名 `import myName from './badge.js'`。",
  "桶文件（Barrel File）常用 `export { a, default as formatBadge } from './badge.js'` 把多个子模块汇聚到一个入口。",
  "`import * as badgeMod from './badge.js'` 会把所有具名导出和 `default` 属性挂在一个模块命名空间对象上。",
];

export const remember = [
  "重导出默认导出时语法是 `export { default as formatBadge } from './badge.js'`。",
];

export const taskDescription =
  "在 `exercise.js` 中使用 `./badge.js` 的默认导出与 `DEFAULT_TIER`，实现 `renderUserBadge(user)`：返回 `formatBadge(user.tier || DEFAULT_TIER, user.name)`。";

export async function runDemo(ctx) {
  ctx.log("调用默认导出函数:", formatBadge(DEFAULT_TIER, "宋然"));
}
