export const summary =
  "使用标准 `URL` 与 `URLSearchParams` 解析、修改和自动编码 URL 查询参数，告别脆弱的手写字符串拼接。";

export const keyPoints = [
  "`new URL('/api/orders', 'https://shop.example.com')` 自动处理斜杠拼接并拆解出 `origin`、`pathname`、`searchParams`。",
  "`url.searchParams.set(k, v)` 会自动对中文、空格、`&` 等特殊字符做 URL 编码（Percent-encoding）。",
  "`Object.fromEntries(url.searchParams)` 可一键把查询参数转成普通键值对象。",
];

export const remember = [
  "永远用 `URLSearchParams` 或 `url.searchParams` 组装查询参数，不要手写 `` `?q=${keyword}` ``。",
];

export const taskDescription =
  "查询账户时，空条件不要出现在地址里。请写 buildQueryUrl(baseUrl, paramsObj)。从 baseUrl 做出 URL，只把值不是 null、也不是 undefined 的条件写进查询串，数值也转成文字。返回完整地址。";

export async function runDemo(ctx) {
  const u = new URL("https://api.example.com/orders");
  u.searchParams.set("city", "上海");
  u.searchParams.set("page", "2");
  ctx.log("生成的完整 URL:", u.toString());
}
