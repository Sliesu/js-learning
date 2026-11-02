export const summary =
  "理解 Web Storage（`localStorage` / `sessionStorage`）只存储字符串的特性，封装带命名空间前缀与 JSON 序列化的安全存储工具。";

export const keyPoints = [
  "`localStorage.setItem(key, val)` 会把非字符串强制转成字符串（直接存对象会变成 `\"[object Object]\"`），因此读写结构化数据必须配合 `JSON.stringify` 与 `JSON.parse`。",
  "将 `storage` 作为默认参数 `storage = globalThis.localStorage` 注入，既能在浏览器直接读写 `localStorage`，又方便测试时传入内存伪对象。",
];

export const remember = [
  "读取 `localStorage` 时可能因数据被人为改动而解析报错，务必包裹 `try...catch` 并提供默认值。",
];

export const taskDescription =
  "实现 `createJsonStore(prefix, storage)`：返回 `{ save(key, value), load(key, fallback) }`，内部键名为 `` `${prefix}:${key}` ``，用 JSON 序列化存取。";

export async function runDemo(ctx) {
  const mem = new Map();
  const mockStorage = {
    getItem: (k) => (mem.has(k) ? mem.get(k) : null),
    setItem: (k, v) => mem.set(k, String(v)),
  };
  mockStorage.setItem("demo:user", JSON.stringify({ id: "u1" }));
  ctx.log("从存储读取并解析:", JSON.parse(mockStorage.getItem("demo:user")));
}
