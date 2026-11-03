export const summary =
  "使用动态导入 `await import('./mod.js')` 按需加载脚本模块，理解模块顶层 `await`（Top-level await）与 `import.meta.url`。";

export const keyPoints = [
  "静态 `import` 只能写在文件最顶层；而函数调用形式的 `import(specifier)` 返回一个 `Promise`，可在分支或事件中按需加载模块。",
  "ES Module 支持在模块顶层直接写 `await`（无需包在 `async function` 里），导入该模块的父模块会自动等待它执行完毕。",
  "`import.meta.url` 保存当前模块文件的完整 URL，常配合 `new URL('./data.json', import.meta.url)` 定位同目录资源。",
];

export const remember = [
  "顶层 `await` 若耗时过长会阻塞整个依赖图的初始化，仅用于轻量配置或必需的资源预热。",
];

export const taskDescription =
  "loadAndComputeStats(nums) 是一个异步函数。真的要计算时，再用 await import(\"./lazy-stats.js\") 加载那个模块，调用里面的 computeStats(nums)，把结果返回。";

export async function runDemo(ctx) {
  const mod = await import("./lazy-stats.js");
  ctx.log("动态 import('./lazy-stats.js') 计算结果:", mod.computeStats([10, 20, 30]));
}
