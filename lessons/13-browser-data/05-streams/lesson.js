export const summary =
  "使用 Web Streams API（`ReadableStream`、`getReader()`）分块产生和消费数据流，无需等全部数据到齐即可边读边处理。";

export const keyPoints = [
  "`new ReadableStream({ start(controller) { controller.enqueue(chunk); controller.close(); } })` 创建一个可读流。",
  "通过 `const reader = stream.getReader()` 循环调用 `const { value, done } = await reader.read()` 逐块消费。",
];

export const remember = [
  "`fetch` 的响应体 `res.body` 就是一个 `ReadableStream`，适合流式解析超长日志或大体积 NDJSON。",
];

export const taskDescription =
  "报文一块一块到达，展示前要转成大写再接成一条。请写 consumeUppercaseStream(chunks)。用 ReadableStream 把 chunks 逐块放进去并关闭。再把流读完，每块转成大写，按原顺序拼成一个字符串返回。";

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
