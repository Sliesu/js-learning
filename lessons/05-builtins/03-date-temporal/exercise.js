// 练习 5.3：UTC 日期格式化与 Temporal 环境探测
export function formatUtcDate(isoStr) {
  // TODO: 将 isoStr 转为 Date，用 getUTCFullYear / getUTCMonth()+1 / getUTCDate 拼成 "YYYY-MM-DD"
}

export function detectTemporalSupport() {
  // TODO: 返回 typeof globalThis.Temporal !== "undefined"
}
