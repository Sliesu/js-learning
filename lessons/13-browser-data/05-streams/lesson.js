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
  "实现 `consumeUppercaseStream(chunks)`：用 `new ReadableStream` 将字符串数组 `chunks` 逐个 `enqueue`，再用 `stream.getReader()` 读出所有块转大写并拼接成一个完整字符串返回。";

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
