export const summary =
  "用递归（Recursion）处理层级未知的树形数据（部门树、分类目录、嵌套评论），掌握基准终止条件（Base Case）与递推步。";

export const keyPoints = [
  "每个递归函数必须有明确的终止条件（如叶子节点没有 `children` 或空数组），否则会导致 `RangeError: Maximum call stack size exceeded`。",
  "对于深层树或嵌套结构，递归比手写栈更直观；若深度可达数万层，可改写为显式数组栈循环。",
];

export const remember = [
  "处理树节点时：当前节点结果 = 自身值 + 所有子节点递归结果的汇总。",
];

export const taskDescription =
  "实现 `sumTreeValues(node)`：给定形如 `{ value: number, children?: Node[] }` 的树节点，递归计算整棵树所有节点的 `value` 总和（若 `node` 为空返回 `0`）。";

export async function runDemo(ctx) {
  const tree = {
    value: 10,
    children: [{ value: 5 }, { value: 8, children: [{ value: 2 }] }],
  };
  function collect(n) {
    return [n.value, ...(n.children || []).flatMap(collect)];
  }
  ctx.log("展平树节点值:", collect(tree));
}
