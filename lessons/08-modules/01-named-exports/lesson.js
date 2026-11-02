import { TAX_RATE, calcTax } from "./tax-helper.js";

export const summary =
  "掌握 ES Module 的具名导出（`export const`、`export function`）与具名导入（`import { a, b as alias } from './mod.js'`）。";

export const keyPoints = [
  "ES Module 导出的是「实时只读绑定（Live Binding）」：导入方不能直接给导入的变量重新赋值，但导出模块内部若更新了它，导入方读到的是最新值。",
  "在浏览器原生 ESM 中，相对路径导入必须写全扩展名 `.js`（如 `'./tax-helper.js'`）。",
];

export const remember = [
  "优先使用具名导出（Named Export），有利于编辑器自动补全、重构重命名与 Tree-shaking。",
];

export const taskDescription =
  "在 `exercise.js` 中从 `./tax-helper.js` 导入 `calcTax`，实现并导出 `priceWithTax(amount)` 返回 `amount + calcTax(amount)`。";

export async function runDemo(ctx) {
  ctx.log("从 ./tax-helper.js 导入的 TAX_RATE:", TAX_RATE);
  ctx.log("100 元的税额 calcTax(100):", calcTax(100));
}
