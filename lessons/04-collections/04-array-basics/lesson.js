export const summary =
  "掌握数组索引、`.at(-1)` 负索引读取、`length` 截断、`Array.isArray`、`Array.from` 以及如何规避稀疏数组（Sparse Array）。";

export const keyPoints = [
  "`arr.at(-1)` 直接读取最后一个元素，无需写 `arr[arr.length - 1]`。",
  "`new Array(3)` 会产生 `[ <3 empty items> ]` 稀疏数组，`.map()` 会跳过空洞；创建定长填充数组应使用 `Array.from({ length: n }, (_, i) => ...)`。",
];

export const remember = [
  "永远不要产生带空洞的稀疏数组（如 `arr[100] = 1` 或 `[1, , 3]`）。",
];

export const taskDescription =
  "生成一批期次号。请写 rangeStep(start, count, step = 1)，返回 count 个数：从 start 开始，每次加 step。例如从 10 起、要 3 个、步长 5，得到 [10, 15, 20]。导入的表格里还有空洞和没填的格子。请写 compactHoles(sparseArr)，丢掉空洞和 undefined，只留下真正有值的项。";

export async function runDemo(ctx) {
  const seq = Array.from({ length: 4 }, (_, i) => (i + 1) * 10);
  ctx.log("Array.from 生成序列:", seq, "最后一个元素 seq.at(-1):", seq.at(-1));
}
