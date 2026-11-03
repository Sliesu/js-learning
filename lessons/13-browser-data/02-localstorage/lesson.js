export const summary =
  "`localStorage` 只能存字符串。你把对象直接放进去，读出来会是 `\"[object Object]\"`。存的时候用 `JSON.stringify`，读的时候用 `JSON.parse`，并且准备好解析失败。";

export const keyPoints = [
  "`setItem` 只认字符串。结构化数据要先 `JSON.stringify`，读出来再 `JSON.parse`。",
  "把 `storage` 当成参数传进去，默认用 `localStorage`。测试时可以换一个内存里的假存储，不必真的写到浏览器。",
];

export const remember = [
  "用户或别的脚本可能改过 `localStorage` 里的内容，解析会失败。读的时候放进 `try...catch`，失败就返回你准备的默认值。",
];

export const taskDescription =
  "写 `createJsonStore(prefix, storage)`，返回 `{ save, load }`，用来在本地保存 JSON。实际使用的键名是「前缀:键名」。`save(key, value)` 把值存成 JSON。`load(key, fallback)` 读取并解析。如果没有这一项，或者内容不是合法 JSON，就返回 `fallback`。没传 `fallback` 时返回 `null`。";

export async function runDemo(ctx) {
  const mem = new Map();
  const mockStorage = {
    getItem: (k) => (mem.has(k) ? mem.get(k) : null),
    setItem: (k, v) => mem.set(k, String(v)),
  };
  mockStorage.setItem("demo:user", JSON.stringify({ id: "u1" }));
  ctx.log("从存储读取并解析:", JSON.parse(mockStorage.getItem("demo:user")));
}
