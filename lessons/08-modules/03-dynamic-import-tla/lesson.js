export const summary =
  "写在文件顶上的 `import` 会在一开始就加载。有些模块只在某个分支里才需要，那时用 `import()`，它返回一个 Promise。模块顶层也可以直接 `await`。";

export const keyPoints = [
  "静态 `import` 只能写在文件最上面。`import(地址)` 是函数调用，返回 Promise，可以放在分支或事件里，用到时再加载。",
  "模块顶层可以直接写 `await`，不必再包一层 `async function`。谁导入了这个模块，就会等它先执行完。",
  "`import.meta.url` 是当前这个模块文件的地址。找同目录的资源时，常写成 `new URL('./data.json', import.meta.url)`。",
];

export const remember = [
  "顶层 `await` 会拖住所有依赖它的模块。只把它用在必须先准备好的轻量配置上，不要在那儿等一个很慢的请求。",
];

export const taskDescription =
  "写异步函数 `loadAndComputeStats(nums)`。真的要算的时候，再用 `await import(\"./lazy-stats.js\")` 加载那个模块，调用里面的 `computeStats(nums)`，把结果返回。";

export async function runDemo(ctx) {
  const mod = await import("./lazy-stats.js");
  ctx.log("动态 import('./lazy-stats.js') 计算结果:", mod.computeStats([10, 20, 30]));
}
