export const summary =
  "掌握 `fetch()` 的两阶段响应模型（先拿到 HTTP 头与 `res.ok`，再 `await res.json()` 读取响应体），将本地 JSON 转换成带计算字段的业务对象。";

export const keyPoints = [
  "重要陷阱：`fetch` 在收到 HTTP `404` 或 `500` 时**不会**自动 reject！必须显式检查 `if (!res.ok) throw new Error(...)`。",
  "在课程中可通过 `ctx.fetchJson('data/products.json')`（浏览器下底层即调用 `fetch`）读取本地数据并加工。",
];

export const remember = [
  "每次写 `fetch(url)` 紧接着第一行永远是 `if (!res.ok) throw new Error(\`HTTP \${res.status}\`)`。",
];

export const taskDescription =
  "仓库要看每样商品还压着多少钱。请写 loadInventoryValue(ctx)。用 ctx.fetchJson(\"data/products.json\") 读取商品。每样变成 { id, title, stockValue }，stockValue 是 price * stock。按 stockValue 从高到低返回。";

export async function runDemo(ctx) {
  const products = await ctx.fetchJson("data/products.json");
  ctx.log("读取商品数据:", products.map((p) => `${p.title}(库存:${p.stock})`));
}
