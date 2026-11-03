export const summary =
  "`Date` 能用，但月份从 0 开始，时区也容易搞混。跨机器传递时间，用 ISO 字符串或毫秒时间戳。新的 `Temporal` 还在陆续落地，用之前先看环境有没有。";

export const keyPoints = [
  "`getMonth()` 和 `getUTCMonth()` 返回 0 到 11，0 是一月。`getDate()` 和 `getUTCDate()` 才是一个月里的第几天，从 1 开始。",
  "要把时间交给另一台机器，用 `date.toISOString()`，或者 `Date.now()` 的毫秒数。不要传一个本地时间的字符串。",
  "`Temporal` 是用来接替 `Date` 的新日期对象。当前环境有没有，看 `typeof globalThis.Temporal !== 'undefined'`。",
];

export const remember = [
  "两个时间相隔几天：用毫秒相减，再除以 `86_400_000`。下划线只是方便读，不影响数值。",
];

export const taskDescription =
  "写 `formatUtcDate(isoStr)`，把时间格式化成 UTC 日期，样子是 `\"YYYY-MM-DD\"`。月份和日期不足两位时补 0。按 UTC 来排，不要改用本地时区。再写 `detectTemporalSupport()`，当前环境有 `Temporal` 就返回 true，没有就返回 false。";

export async function runDemo(ctx) {
  const d = new Date("2025-03-06T11:45:00Z");
  ctx.log("ISO:", d.toISOString(), "UTC 月份(+1):", d.getUTCMonth() + 1);
  const hasTemporal = typeof globalThis.Temporal !== "undefined";
  ctx.log("当前运行时是否原生提供 Temporal:", hasTemporal ? "已支持" : "运行时尚未提供");
}
