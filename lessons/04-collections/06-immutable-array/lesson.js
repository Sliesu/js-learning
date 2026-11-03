export const summary =
  "`sort`、`reverse`、`splice` 会改掉原数组。如果原数据还要留着，用 `toSorted`、`toReversed`、`toSpliced` 和 `with`，它们给你一份新的。";

export const keyPoints = [
  "`sort()` 不传比较函数时，会把数字先变成字符串再按字典序排。`[10, 2].sort()` 还是 `[10, 2]`，因为 `\"10\"` 排在 `\"2\"` 前面。数字要从小到大，写成 `(a, b) => a - b`。",
  "`toSorted`、`toReversed`、`toSpliced`、`with` 都返回新数组，原来的那份不动。",
];

export const remember = [
  "后面做数据处理时，原始列表通常还要留着。排序、倒序、替换某一项，优先用这些不改原数组的方法。",
];

export const taskDescription =
  "写 `sortAndReplaceFirst(nums, replacement)`，不要修改原来的数组。先按数字从小到大得到一份新数组，再把第一项换成 `replacement`，然后返回这份新数组。";

export async function runDemo(ctx) {
  const raw = [30, 5, 12];
  const next = raw.toSorted((a, b) => a - b).with(0, 1);
  ctx.log("原数组 raw 保持不变:", raw, "新数组 next:", next);
}
