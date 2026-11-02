// 练习 12.3：使用 Blob 封装 JSON 数据并异步读取解析
export function recordsToJsonBlob(records) {
  // TODO: 返回 new Blob([JSON.stringify(records)], { type: "application/json" })
}

export async function parseJsonBlob(blob) {
  // TODO: const text = await blob.text(); 返回 JSON.parse(text)
}
