// 两笔人民币入同一个账户。0.1 元 + 0.2 元必须等于 0.3 元。
// 先把每一笔四舍五入成「分」，加完再除以 100 换回「元」。
export function addCurrency(a, b) {
}

// 单笔金额只能落在 [min, max]。
// 不是有限数字（NaN、Infinity）时，按下限 min 入账。
export function clampNumber(val, min, max) {
}
