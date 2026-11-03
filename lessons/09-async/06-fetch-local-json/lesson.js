export const summary =
  "`fetch` 分两步：先拿到响应头，再去读正文。HTTP 404 和 500 不会自动变成失败，你得自己看 `res.ok`。";

export const keyPoints = [
  "`fetch` 收到 404 或 500 时不会 reject。只有网络本身断了才会。所以第一件事是 `if (!res.ok) throw new Error(...)`，然后再 `await res.json()`。",
  "这一课用 `ctx.fetchJson('data/products.json')` 读取本地数据，再加工成你要的对象。浏览器里它底层就是 `fetch`。",
];

export const remember = [
  "写完 `const res = await fetch(url)`，下一行就检查 `res.ok`。不要直接去读 JSON。",
];

export const taskDescription =
  "写 `loadInventoryValue(ctx)`，用 `ctx.fetchJson(\"data/products.json\")` 读取商品。每件商品转成 `{ id, title, stockValue }`，其中 `stockValue` 是 `price` 乘 `stock`。按 `stockValue` 从高到低返回。";

export async function runDemo(ctx) {
  const products = await ctx.fetchJson("data/products.json");
  ctx.log("读取商品数据:", products.map((p) => `${p.title}(库存:${p.stock})`));
}
