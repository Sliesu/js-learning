export const summary =
  "`Blob` 把一段内容包成可以下载、可以上传的一块数据。现在可以直接 `await blob.text()` 把里面的文字读出来，不必再写老的 `FileReader`。";

export const keyPoints = [
  "`new Blob([jsonString], { type: 'application/json' })` 把字符串或字节包成一块不可变的数据，并带上类型。",
  "`File` 是带文件名的 `Blob`。读取用 `await blob.text()` 或 `await blob.arrayBuffer()`。",
];

export const remember = [
  "要让用户下载一份你在脚本里生成的文件，就是造一个 `Blob`，再用 `URL.createObjectURL(blob)` 给出地址。",
];

export const taskDescription =
  "写 `recordsToJsonBlob(records)`，把数组序列化成 JSON 字符串，放进一个 `Blob`，类型设为 `application/json`。再写 `parseJsonBlob(blob)`，先读出里面的字符串，再解析回原来的数据。";

export async function runDemo(ctx) {
  const blob = new Blob([JSON.stringify({ hello: "world" })], { type: "application/json" });
  ctx.log("Blob size:", blob.size, "type:", blob.type, "内容:", await blob.text());
}
