export const summary =
  "数组用下标取元素，最后一个可以直接写 `.at(-1)`。小心空位：看起来有长度，`.map()` 却会跳过那些洞。";

export const keyPoints = [
  "`arr.at(-1)` 就是最后一项，不用再写 `arr[arr.length - 1]`。",
  "`new Array(3)` 得到的是 3 个空位，不是 3 个 `undefined`。`.map()` 会跳过这些洞。要生成固定长度并填上值，用 `Array.from({ length: n }, (_, i) => ...)`。",
];

export const remember = [
  "不要做出带洞的数组，比如 `arr[100] = 1`，或者 `[1, , 3]`。后面很多方法都会把这些洞跳过，结果和你想的不一样。",
];

export const taskDescription =
  "写 `rangeStep(start, count, step = 1)`，生成一串数字。从 `start` 开始，一共 `count` 个，每次增加 `step`。从 10 开始、要 3 个、步长 5，结果是 `[10, 15, 20]`。再写 `compactHoles(sparseArr)`，去掉数组里的空位和 `undefined`，只留下真正有值的项。";

export async function runDemo(ctx) {
  const seq = Array.from({ length: 4 }, (_, i) => (i + 1) * 10);
  ctx.log("Array.from 生成序列:", seq, "最后一个元素 seq.at(-1):", seq.at(-1));
}
