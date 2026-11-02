export const summary =
  "学会自己编写单元测试：覆盖正常路径（Happy Path）、边界值（空数组、`0`、负数）与异常分支（`assert.throws`），用测试抓出隐藏 Bug。";

export const keyPoints = [
  "一个好的测试函数应当能够：1) 放行正确的实现；2) 揪出漏掉边界条件或算错公式的有缺陷实现。",
];

export const remember = [
  "每次写完纯函数，顺手写 3 条断言（正常值、空边界、非法输入抛错），代码质量会立刻跃升一个台阶。",
];

export const taskDescription =
  "实现测试套件函数 `verifyDiscountFn(discountFn, assert)`：用 `assert.equal` 和 `assert.throws` 对传入的 `discountFn(price, rate)` 进行三项校验：1) `discountFn(200, 0.8) === 160`；2) `discountFn(0, 0.5) === 0`；3) 当 `rate > 1` 或 `rate <= 0` 时必须抛出 `RangeError`。";

export async function runDemo(ctx) {
  ctx.log("自己动手写断言：验证正常计算、0 值边界与非法折扣率异常");
}
