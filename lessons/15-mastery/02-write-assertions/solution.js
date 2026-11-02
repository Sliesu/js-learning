export function verifyDiscountFn(discountFn, assert) {
  assert.equal(discountFn(200, 0.8), 160, "正常折扣 200 * 0.8 = 160");
  assert.equal(discountFn(0, 0.5), 0, "0 元商品折后仍为 0");
  assert.throws(
    () => discountFn(100, 1.5),
    RangeError,
    "折扣率超出 (0, 1] 时抛出 RangeError"
  );
}

export async function test(mod, assert) {
  function goodDiscount(price, rate) {
    if (rate <= 0 || rate > 1) throw new RangeError("invalid rate");
    return price * rate;
  }
  mod.verifyDiscountFn(goodDiscount, assert);

  // 验证你的测试确实能抓出不抛异常的残缺实现
  let caughtBad = false;
  try {
    const subAssert = {
      equal: assert.equal,
      throws: assert.throws,
    };
    mod.verifyDiscountFn((p, r) => p * r, subAssert);
  } catch {
    caughtBad = true;
  }
  assert.equal(caughtBad, true, "你的断言成功拦截了未校验 rate 范围的错误实现");
}
