export const summary =
  "学会自己编写单元测试：覆盖正常路径（Happy Path）、边界值（空数组、`0`、负数）与异常分支（`assert.throws`），用测试抓出隐藏 Bug。";

export const keyPoints = [
  "一个好的测试函数应当能够：1) 放行正确的实现；2) 揪出漏掉边界条件或算错公式的有缺陷实现。",
];

export const remember = [
  "每次写完纯函数，顺手写 3 条断言（正常值、空边界、非法输入抛错），代码质量会立刻跃升一个台阶。",
];

export const taskDescription =
  "折扣函数上线前要有三张验收单。请写 verifyDiscountFn(discountFn, assert)。用 assert.equal 确认 discountFn(200, 0.8) 等于 160，discountFn(0, 0.5) 等于 0。用 assert.throws 确认 discountFn(100, 1.5) 会抛出 RangeError。费率大于 1 或小于等于 0 都不允许。";

export async function runDemo(ctx) {
  ctx.log("自己动手写断言：验证正常计算、0 值边界与非法折扣率异常");
}
