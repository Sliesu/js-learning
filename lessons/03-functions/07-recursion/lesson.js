export const summary =
  "一层套一层、事先不知道有多深的数据，比如部门树、评论楼中楼，用函数调用自己来处理最直接。一定要有停下来的条件。";

export const keyPoints = [
  "递归必须有尽头。比如叶子节点没有 `children`，或者数组已经空了。没有尽头，就会报栈溢出。",
  "树不太深的时候，递归比自己手写一个栈好读。如果可能深到几万层，再改成用数组当栈的循环。",
];

export const remember = [
  "处理树上的一个节点时：它的结果 = 它自己的值 + 每个子节点用同样办法算出来的结果。",
];

export const taskDescription =
  "写 `sumTreeValues(node)`，把一棵树上所有节点的 `value` 加起来。每个节点是 `{ value, children }`。没有节点时返回 0。有子节点，就用同样的函数继续加。";

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
