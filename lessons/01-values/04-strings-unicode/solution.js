export function formatOrderLine(title, qty, price) {
  return `${title} x${qty} = ¥${qty * price}`;
}

export function countCodePoints(str) {
  return [...str].length;
}

export async function test(mod, assert) {
  assert.equal(
    mod.formatOrderLine("机械键盘", 2, 499),
    "机械键盘 x2 = ¥998",
    "格式化订单行"
  );
  assert.equal(mod.countCodePoints("A🚀B"), 3, "包含四字节字符时长度为 3");
  assert.equal(mod.countCodePoints("你好世界"), 4, "普通中文字符计数");
}
