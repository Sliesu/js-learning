export const summary =
  "`continue` 是跳过这一轮，接着下一轮。`break` 是立刻离开当前这层循环。两层循环都要停的时候，可以给外层起个名字再跳出去。";

export const keyPoints = [
  "`continue` 马上进入下一轮；`break` 马上离开最里面的那层循环或 `switch`。",
  "在一张二维表里找到目标就该停。给外层循环起个标签，写 `break 标签名`，才能把两层一起跳出。",
];

export const remember = [
  "如果这两层循环本来就是一个函数在干的事，找到了直接 `return`，比写 `break outer` 更好读。",
];

export const taskDescription =
  "写 `findInMatrix(grid, target)`，在二维表里找目标值第一次出现的位置，返回 `{ row, col }`，行和列都从 0 开始。某一行如果不是数组，就跳过。都找不到就返回 `null`。找到以后立刻停，不要继续往后找。";

export async function runDemo(ctx) {
  const matrix = [
    [1, 2],
    [3, 4],
  ];
  let found = null;
  search: for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 3) {
        found = { r, c };
        break search;
      }
    }
  }
  ctx.log("矩阵查找 3 的坐标:", found);
}
