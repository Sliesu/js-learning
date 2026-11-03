export const summary =
  "查询参数里有中文、空格和 `&`，手写字符串很容易拼错。用 `URL` 和 `URLSearchParams`，编码交给它们。";

export const keyPoints = [
  "`new URL('/api/orders', 'https://shop.example.com')` 会帮你接好路径，并拆出源、路径和查询参数。",
  "`url.searchParams.set(key, value)` 会把中文、空格、`&` 编码好。你不用自己替换。",
  "`Object.fromEntries(url.searchParams)` 可以把查询参数变成一个普通对象。",
];

export const remember = [
  "组装查询参数用 `URLSearchParams`。不要写成 `` `?q=${keyword}` ``，关键字里一带特殊字符就会坏。",
];

export const taskDescription =
  "写 `buildQueryUrl(baseUrl, paramsObj)`，根据基础地址和查询条件拼出完整地址。值为 `null` 或 `undefined` 的条件不要放进去，其他值先转成字符串再放入。";

export async function runDemo(ctx) {
  const u = new URL("https://api.example.com/orders");
  u.searchParams.set("city", "上海");
  u.searchParams.set("page", "2");
  ctx.log("生成的完整 URL:", u.toString());
}
