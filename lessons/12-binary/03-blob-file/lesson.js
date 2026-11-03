export const summary =
  "掌握 `Blob` 与 `File` 对象：把内存中的结构化数据打包成可下载或可上传的二进制/文本实体，并用 `await blob.text()` 读取内容。";

export const keyPoints = [
  "`new Blob([jsonString], { type: 'application/json' })` 可将字符串或 `Uint8Array` 包装成不可变的类文件对象。",
  "现代 `Blob` 原生自带异步读取方法：`await blob.text()`、`await blob.arrayBuffer()`，无需再写繁琐的旧式 `FileReader` 事件回调。",
];

export const remember = [
  "在浏览器里把 JS 处理完的报表导出为用户本地文件，核心就是构造 `Blob` 并配合 `URL.createObjectURL(blob)`。",
];

export const taskDescription =
  "recordsToJsonBlob(records) 把数组序列化成 JSON 字符串，放进一个 Blob，类型设为 application/json。parseJsonBlob(blob) 先把 Blob 里的字符串读出来，再解析回原来的数据。";

export async function runDemo(ctx) {
  const blob = new Blob([JSON.stringify({ hello: "world" })], { type: "application/json" });
  ctx.log("Blob size:", blob.size, "type:", blob.type, "内容:", await blob.text());
}
