export async function consumeUppercaseStream(chunks) {
  const stream = new ReadableStream({
    start(controller) {
      for (const c of chunks) {
        controller.enqueue(c);
      }
      controller.close();
    },
  });

  const reader = stream.getReader();
  let out = "";
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    out += String(value).toUpperCase();
  }
  return out;
}

export async function test(mod, assert) {
  const res = await mod.consumeUppercaseStream(["hello", "-", "stream"]);
  assert.equal(res, "HELLO-STREAM", "流式分块读取并转大写拼接");
}
