export const summary =
  "使用 `continue` 跳过当前轮次、`break` 终止当前循环，以及使用命名标签 `outer: for (...)` 一次性跳出多层嵌套循环。";

export const keyPoints = [
  "`continue` 立即进入下一轮循环迭代；`break` 立即退出所在的最内层循环或 `switch`。",
  "当二维表格/矩阵查找命中第一个目标需要立即停止整个双层循环时，`break labelName;` 可以精准跳出外层循环。",
];

export const remember = [
  "如果把双层循环封装成独立函数，直接 `return result;` 比写 `break outer;` 更直观。",
];

export const taskDescription =
  "findInMatrix(grid, target) 在二维表里找目标值第一次出现的位置，返回 { row, col }，行和列都从 0 开始。某一行如果不是数组，就跳过。都找不到就返回 null。找到以后就停，不要继续找。";

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
