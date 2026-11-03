export const summary =
  "掌握 `Date` 时间戳计算、UTC 方法（注意月份从 `0` 开始！）、`Intl.DateTimeFormat` 时区格式化，并探测新一代 `Temporal` API。";

export const keyPoints = [
  "`Date` 的 `getMonth()` / `getUTCMonth()` 返回 `0–11`（0 代表 1 月），而 `getDate()` / `getUTCDate()` 返回 `1–31`。",
  "跨时区传输一律使用 ISO 8601 字符串（`date.toISOString()`，如 `'2025-03-01T10:15:00.000Z'`）或毫秒时间戳 `Date.now()`。",
  "`Temporal` 是旨在替代 `Date` 的新一代标准日期对象，可通过 `typeof globalThis.Temporal !== 'undefined'` 探测当前运行环境是否已原生提供。",
];

export const remember = [
  "计算两个日期相差天数：`(msB - msA) / 86_400_000`。",
];

export const taskDescription =
  "formatUtcDate(isoStr) 把时间格式化成 UTC 日期，格式是 \"YYYY-MM-DD\"。月份和日期不足两位时补 0，不要用电脑自己的时区。detectTemporalSupport() 检查当前环境有没有 Temporal，有就返回 true，没有就返回 false。";

export async function runDemo(ctx) {
  const d = new Date("2025-03-06T11:45:00Z");
  ctx.log("ISO:", d.toISOString(), "UTC 月份(+1):", d.getUTCMonth() + 1);
  const hasTemporal = typeof globalThis.Temporal !== "undefined";
  ctx.log("当前运行时是否原生提供 Temporal:", hasTemporal ? "已支持" : "运行时尚未提供");
}
