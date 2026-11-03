export const summary =
  "普通对象的键只能是字符串或 `Symbol`。键可能是别的东西、又要保持放入顺序、还要知道有多少项，用 `Map`。只要一份不重复的集合，用 `Set`。";

export const keyPoints = [
  "`Map` 的键可以是对象、数字、函数。长度直接看 `map.size`。",
  "数组去重，写成 `[...new Set(arr)]`。",
  "较新的环境里，`Set` 可以直接做集合运算：`union` 是并集，`intersection` 是交集，`difference` 是只在前者里有的那些。",
];

export const remember = [
  "要按 id 反复查找时，先建成 `new Map(list.map(u => [u.id, u]))`。不要在循环里一次次 `find`。",
];

export const taskDescription =
  "写 `analyzeTagSets(tagsA, tagsB)`，比较两份标签。`common` 是两边都有的，`onlyInA` 是只出现在第一份里的，`all` 是两份合起来、重复的只留一次。";

export async function runDemo(ctx) {
  const a = new Set(["js", "json", "fetch"]);
  const b = new Set(["fetch", "worker"]);
  const inter = typeof a.intersection === "function" ? [...a.intersection(b)] : [...a].filter((x) => b.has(x));
  ctx.log("Set 交集:", inter);
}
