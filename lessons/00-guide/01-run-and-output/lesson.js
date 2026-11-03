export const summary =
  "这一课先把学习方式跑通：左边看讲解，右边改代码，写完立刻检查。后面每一课都是这个节奏。";

export const keyPoints = [
  "右边编辑器里就是这题的代码。你改的是 `welcomeMessage`，它应该拼出一句欢迎语。",
  "点「检查这题」，或者按 ⌘↵。通过的检查会变绿，错的那条会告诉你差在哪。",
  "卡住时可以展开题解。先自己写，对过一次再看答案，记得更牢。",
];

export const remember = [
  "页面要通过 `npm start` 打开。直接双击 html 时，浏览器不允许模块和读取数据。",
  "练习尽量写成纯函数：给它数据，它返回结果，不要去改页面。",
];

export const taskDescription =
  "welcomeMessage(name) 返回一句欢迎语。传入「林晓」，结果是「你好，林晓，开始 JS 脚本训练」。名字变了，句子里的名字也要变。";

export async function runDemo(ctx) {
  ctx.log("欢迎来到 JS 系统学习工作台！");
  const sample = { lesson: "0.1", runtime: "Browser ES Module", ready: true };
  ctx.log("当前示例数据:", sample);
}
