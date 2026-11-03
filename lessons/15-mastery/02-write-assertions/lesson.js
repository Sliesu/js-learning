export const summary =
  "函数写完，顺手给它三条检查：一个正常例子，一个边界，一个不该接受的输入。能通过的实现留下来，算错或漏了边界的实现会被抓住。";

export const keyPoints = [
  "检查要能放行正确的实现，也要能抓住漏掉边界、或者公式写错的实现。只写一个开心路径，很多错误会漏过去。",
];

export const remember = [
  "纯函数至少写三条：正常值、空或 0 这种边界、非法输入应该抛错。",
];

export const taskDescription =
  "写 `verifyDiscountFn(discountFn, assert)`，为折扣函数做三项检查。`discountFn(200, 0.8)` 应该等于 160，`discountFn(0, 0.5)` 应该等于 0，这两项用 `assert.equal`。`discountFn(100, 1.5)` 应该抛出 `RangeError`，这一项用 `assert.throws`。";

export async function runDemo(ctx) {
  ctx.log("自己动手写断言：验证正常计算、0 值边界与非法折扣率异常");
}
