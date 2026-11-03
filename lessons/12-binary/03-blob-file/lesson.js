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
  "对账结果要打包成一份 JSON 文件交给浏览器下载。请写 recordsToJsonBlob(records)，把数组变成 JSON 文字，放进类型为 application/json 的 Blob。收到这种文件时，请写 parseJsonBlob(blob)：先读出文字，再解析回原来的数据。";

export async function runDemo(ctx) {
  const blob = new Blob([JSON.stringify({ hello: "world" })], { type: "application/json" });
  ctx.log("Blob size:", blob.size, "type:", blob.type, "内容:", await blob.text());
}
