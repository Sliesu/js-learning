// 练习 9.3：使用 Promise 链式调用转换并兜底异常
export function chainOrderTransform(orderPromise) {
  // TODO:
  // 对 orderPromise 调用 .then((order) => ...)
  // 计算 total = (order.items || []).reduce((s, it) => s + it.qty * it.unitPrice, 0)
  // 若 total <= 0 则 throw new Error("Invalid total")
  // 正常返回 { id: order.id, total }
  // 链尾用 .catch(() => ({ id: "fallback", total: 0 })) 兜底
}
