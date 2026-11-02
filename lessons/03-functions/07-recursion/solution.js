export function sumTreeValues(node) {
  if (!node) return 0;
  let total = node.value || 0;
  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      total += sumTreeValues(child);
    }
  }
  return total;
}

export async function test(mod, assert) {
  const tree = {
    value: 10,
    children: [
      { value: 4, children: [{ value: 1 }, { value: 3 }] },
      { value: 7 },
    ],
  };
  assert.equal(mod.sumTreeValues(tree), 25, "汇总整棵树 10+4+1+3+7 = 25");
  assert.equal(mod.sumTreeValues(null), 0, "空节点返回 0");
}
