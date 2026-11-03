export const summary =
  "这一课先把学习方式跑通：左边看讲解，右边改代码，写完立刻检查。后续每课都沿用这个模式。";

export const keyPoints = [
  "右边编辑器里就是这题的代码。你改的是 `welcomeMessage`，它应该拼出一句欢迎语。",
  "点「检查这题」，或者按 ⌘↵。通过的检查会变绿，错的那条会告诉你差在哪。",
  "卡住时再展开题解。建议先自己动手写，通过一次之后再对照答案，理解会更扎实。",
];

export const remember = [
  "请先用 `npm start` 启动本地服务，再在浏览器中打开页面；直接双击 HTML 文件会因浏览器安全限制而无法加载模块和读取数据。",
  "练习尽量写成纯函数：给它数据，它返回结果，不要去改页面。",
];

export const taskDescription =
  "welcomeMessage(name) 返回一句欢迎语。传入「林晓」时，结果是「你好，林晓，开始 JS 脚本训练」。传入别的名字，句子要同步变化。";

export async function runDemo(ctx) {
  ctx.log("欢迎来到 JS 系统学习工作台！");
  const sample = { lesson: "0.1", runtime: "Browser ES Module", ready: true };
  ctx.log("当前示例数据:", sample);
}
