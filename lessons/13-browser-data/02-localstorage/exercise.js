// 练习 13.2：封装带前缀与异常兜底的 JSON Storage 访问器
export function createJsonStore(prefix, storage = globalThis.localStorage) {
  // TODO:
  // 返回 {
  //   save(key, value): 调用 storage.setItem(`${prefix}:${key}`, JSON.stringify(value))
  //   load(key, fallback = null): 读取对应项，若为 null 或 JSON.parse 抛错则返回 fallback
  // }
}
