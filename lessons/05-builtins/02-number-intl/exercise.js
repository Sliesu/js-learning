// 练习 5.2：parseInt 基数解析与 Intl.NumberFormat 货币格式化
export function parsePixelValue(cssStr) {
  // TODO: 使用 Number.parseInt(cssStr, 10) 解析，若结果为 NaN 则返回 0
}

export function formatCNY(amount) {
  // TODO: 使用 new Intl.NumberFormat("zh-CN", { style: "currency", currency: "CNY" }).format(amount)
}
