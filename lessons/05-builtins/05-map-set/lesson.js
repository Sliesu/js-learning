export const summary =
  "精通 `Map`（任意类型键、保持插入顺序、高频增删）与 `Set`（O(1) 存在性查询、去重及 `union`/`intersection`/`difference` 集合运算）。";

export const keyPoints = [
  "普通对象的键只能是字符串或 `Symbol`，而 `Map` 的键可以是对象、数字、函数等任意值，且通过 `map.size` 直接拿长度。",
  "数组去重最快写法：`[...new Set(arr)]`。",
  "ES2025 `Set` 原生支持集合运算：`setA.union(setB)`（并集）、`setA.intersection(setB)`（交集）、`setA.difference(setB)`（差集）。",
];

export const remember = [
  "在两表关联或需要频繁按 `id` 查找时，先用 `new Map(list.map(u => [u.id, u]))` 建索引，把 \\(O(n^2)\\) 降为 \\(O(n)\\)。",
];

export const taskDescription =
  "实现 `analyzeTagSets(tagsA, tagsB)`：返回 `{ common: 交集数组, onlyInA: A减B差集数组, all: 并集数组 }`。";

export async function runDemo(ctx) {
  const a = new Set(["js", "json", "fetch"]);
  const b = new Set(["fetch", "worker"]);
  const inter = typeof a.intersection === "function" ? [...a.intersection(b)] : [...a].filter((x) => b.has(x));
  ctx.log("Set 交集:", inter);
}
