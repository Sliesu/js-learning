export const summary =
  "区分会原地修改原数组的 `sort`/`reverse`/`splice`，与 ES2023 新增的拷贝式非破坏方法：`toSorted`、`toReversed`、`toSpliced`、`with`。";

export const keyPoints = [
  "`arr.sort()` 若不传比较函数，会把数字全部转成字符串按字典序排（`[10, 2].sort()` 变成 `[10, 2]`）！数值升序必须传 `(a, b) => a - b`。",
  "`arr.toSorted(compareFn)`、`arr.toReversed()`、`arr.toSpliced(start, deleteCount, ...items)`、`arr.with(index, newValue)` 全部返回新数组，原数组丝毫不变。",
];

export const remember = [
  "在需要保持原始数据不变的脚本管道中，优先使用 `toSorted`、`toReversed`、`toSpliced`、`with`。",
];

export const taskDescription =
  "实现 `sortAndReplaceFirst(nums, replacement)`：不修改原数组 `nums`，先按数字升序排列，再把第 0 项替换为 `replacement` 后返回新数组。";

export async function runDemo(ctx) {
  const raw = [30, 5, 12];
  const next = raw.toSorted((a, b) => a - b).with(0, 1);
  ctx.log("原数组 raw 保持不变:", raw, "新数组 next:", next);
}
