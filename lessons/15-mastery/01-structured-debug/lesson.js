export const summary =
  "在复杂数据管道中插入不破坏数据流的 `tap(label, logger)` 探针函数，提取中间态结构化快照（条数、样本、字段名）便于秒级定位问题。";

export const keyPoints = [
  "`tap(fn)` 接收当前值 `x`，执行观察逻辑 `fn(x)`，然后原封不动返回 `x`（或为了防止观察逻辑误改数据，向观察器传入 `structuredClone(x)`）。",
];

export const remember = [
  "排查长链条 `.filter().map().reduce()` Bug 时，在两步之间插一个 `tap` 比把整个链条拆碎再拼回去快得多。",
];

export const taskDescription =
  "createStepRecorder() 返回 { tap, snapshots }，用来观察处理过程中的数据，同时不改变这份数据。tap(步骤名) 再返回一个函数。数据经过它时，向 snapshots 添加一条 { stepName, count, preview }，然后把数据原样返回。数据是数组时 count 用数组长度，否则 count 为 1。preview 必须是当时数据的深拷贝，之后修改原数据不能影响已经记下的内容。";

export async function runDemo(ctx) {
  ctx.log("调试探针模式：边流转数据边收集每一步的条数与快照");
}
