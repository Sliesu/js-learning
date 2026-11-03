export const summary =
  "数据很大时，不必等全部到齐再处理。`ReadableStream` 让你一块一块地生产和读取。";

export const keyPoints = [
  "创建可读流时，在 `start` 里用 `controller.enqueue(chunk)` 放入一块，结束时调用 `controller.close()`。",
  "消费时用 `stream.getReader()`，循环 `await reader.read()`。`done` 为 true 就读完了，否则处理这一块 `value`。",
];

export const remember = [
  "`fetch` 响应的 `res.body` 就是一个可读流。超长日志可以边读边处理，不用先拼成一个巨大的字符串。",
];

export const taskDescription =
  "写 `consumeUppercaseStream(chunks)`，把一组字符串放进 `ReadableStream`，再读出来。每一块都转成大写，按原来的顺序拼成一个完整字符串并返回。";

export async function runDemo(ctx) {
  const stream = new ReadableStream({
    start(ctrl) {
      ctrl.enqueue("part-1|");
      ctrl.enqueue("part-2");
      ctrl.close();
    },
  });
  const reader = stream.getReader();
  let text = "";
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    text += value;
  }
  ctx.log("ReadableStream 分块读取结果:", text);
}
