// 练习 13.5：创建并消费 ReadableStream
export async function consumeUppercaseStream(chunks) {
  // TODO:
  // 1. 创建 ReadableStream，在 start(controller) 中把 chunks 逐个 enqueue 后 close()
  // 2. 用 stream.getReader() 循环 await reader.read()，把每块 .toUpperCase() 拼接返回
}
