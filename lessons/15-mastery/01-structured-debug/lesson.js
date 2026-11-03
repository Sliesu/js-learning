export const summary =
  "一长串 `filter`、`map`、`reduce` 算错了，很难知道是哪一步开始坏的。插一个只看不动的探针：记下这一步的样子，再把数据原样传下去。";

export const keyPoints = [
  "探针收到当前的值，记下你要看的信息，然后把原值返回。观察的时候传一份深拷贝，避免你看的时候不小心改掉了正在流动的数据。",
];

export const remember = [
  "链条中间插一个只记录、不修改的函数，比把整条链拆开再拼回去快。记下的预览一定是当时的拷贝。",
];

export const taskDescription =
  "写 `createStepRecorder()`，返回 `{ tap, snapshots }`，用来观察处理过程中的数据，同时不改变这份数据。`tap(步骤名)` 再返回一个函数。数据经过它时，往 `snapshots` 里加一条 `{ stepName, count, preview }`，然后把数据原样返回。数据是数组时，`count` 用数组长度，否则 `count` 为 1。`preview` 必须是当时数据的深拷贝，之后再改原数据，不能影响已经记下的内容。";

export async function runDemo(ctx) {
  ctx.log("调试探针模式：边流转数据边收集每一步的条数与快照");
}
