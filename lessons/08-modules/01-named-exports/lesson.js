import { TAX_RATE, calcTax } from "./tax-helper.js";

export const summary =
  "一个文件里写好的函数，用 `export` 交出去，另一个文件用 `import` 接进来。你导入的是一份实时绑定：那边更新了，你再读就是新的；你不能在这边给它重新赋值。";

export const keyPoints = [
  "具名导出可以用 `export function` 或 `export const`。导入写成 `import { a, b as alias } from './mod.js'`。",
  "导出的是实时绑定。导入方不能给这个名字重新赋值，但导出模块内部如果改了它，导入方读到的是最新值。",
  "在浏览器里用原生模块，相对路径要把 `.js` 写全，比如 `'./tax-helper.js'`。",
];

export const remember = [
  "能用具名导出就用具名导出。编辑器补全、改名、以及打包时去掉没用到的代码，都更顺。",
];

export const taskDescription =
  "税额的算法已经写在 `./tax-helper.js` 的 `calcTax` 里。写 `priceWithTax(amount)`，返回金额加上这笔金额的税额。把 `calcTax` 从那个文件导入来用，不要自己再写一套税率。";

export async function runDemo(ctx) {
  ctx.log("从 ./tax-helper.js 导入的 TAX_RATE:", TAX_RATE);
  ctx.log("100 元的税额 calcTax(100):", calcTax(100));
}
