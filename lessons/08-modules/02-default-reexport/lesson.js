import formatBadge, { DEFAULT_TIER } from "./badge.js";

export const summary =
  "一个模块可以有一个默认导出，导入时名字随你起。也可以把别的文件的导出在这里再转手交出去，调用方就不用知道原来散落在哪个文件。";

export const keyPoints = [
  "一个模块最多一个 `export default`。导入时写成 `import formatBadge from './badge.js'`，名字可以自己取。",
  "想在一个入口文件里集中再导出，写成 `export { default as formatBadge } from './badge.js'`。",
  "`import * as badgeMod from './badge.js'` 会得到一个模块对象，具名导出和 `default` 都在它上面。",
];

export const remember = [
  "把默认导出再转手交出去，语法是 `export { default as formatBadge } from './badge.js'`。不是 `export default from`。",
];

export const taskDescription =
  "胸牌的格式在 `./badge.js` 里。写 `renderUserBadge(user)`，调用这个文件默认导出的 `formatBadge`。用户自己有等级 `tier` 就用自己的，没有就用文件里的 `DEFAULT_TIER`。把等级和 `user.name` 传进去，返回生成的文字。";

export async function runDemo(ctx) {
  ctx.log("调用默认导出函数:", formatBadge(DEFAULT_TIER, "宋然"));
}
