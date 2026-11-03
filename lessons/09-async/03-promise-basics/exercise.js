// 等订单到达后计算商品金额合计。
// 合计大于 0：返回 { id, total }。
// 合计不大于 0，或中途失败：返回 { id: "fallback", total: 0 }。
export function chainOrderTransform(orderPromise) {
}
