export const summary =
  "先把这套课怎么学走一遍：左边看讲解，右边改代码，写完立刻检查。后面每一课都是这个样子。";

export const keyPoints = [
  "右边编辑器里就是这题的代码。你要改的是 `welcomeMessage`，它应该拼出一句欢迎语。",
  "写完点「检查这题」，或者按 ⌘↵。通过的会标成绿色，没通过的会告诉你差在哪。",
  "先自己写。卡住了再展开题解，对照着看为什么能通过，比一上来就看答案记得住。",
];

export const remember = [
  "先在终端运行 `npm start`，再用浏览器打开它给出的地址。直接双击 HTML 文件时，浏览器会拦住模块和数据，页面跑不起来。",
  "练习写成函数就好：传进数据，返回结果。这一课不用去改页面。",
];

export const taskDescription =
  "写 `welcomeMessage(name)`，返回一句欢迎语。传入「林晓」时，结果是「你好，林晓，开始 JS 脚本训练」。换成别的名字，句子里的名字也要跟着变。";

export async function runDemo(ctx) {
  ctx.log("欢迎来到 JS 系统学习工作台！");
  const sample = { lesson: "0.1", runtime: "Browser ES Module", ready: true };
  ctx.log("当前示例数据:", sample);
}
