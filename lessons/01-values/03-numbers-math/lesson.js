export const summary =
  "电脑里的小数不是你在纸上算的那个十进制。0.1 加 0.2 不会正好等于 0.3。金额、特殊数字，都要按这个前提来处理。";

export const keyPoints = [
  "`0.1 + 0.2` 等于 `0.30000000000000004`，因为二进制写不准十进制的 0.1。算金额时，先换成「分」：`Math.round(yuan * 100)`，用整数加完再换回去。",
  "`NaN` 是唯一自己不等于自己的值，`NaN !== NaN`。要检测它，用 `Number.isNaN(x)`。不要用全局的 `isNaN()`，那个会先把参数转成数字。",
  "`1 / 0` 是 `Infinity`，`-1 / 0` 是 `-Infinity`。想知道一个数是不是正常的有限数字，用 `Number.isFinite(x)`。",
];

export const remember = [
  "两个小数要不要当成相等，用 `Math.abs(a - b) < Number.EPSILON`，不要直接写 `===`。",
  "`Math.trunc` 是直接砍掉小数；`Math.floor` 往小的方向取整；`Math.ceil` 往大的方向取整；`Math.round` 是四舍五入。",
];

export const taskDescription =
  "写 `addCurrency(a, b)`，把两笔人民币加在一起。0.1 元加 0.2 元必须等于 0.3 元。先把每一笔四舍五入成「分」，加完再换回「元」。再写 `clampNumber(val, min, max)`，把一个数限制在最小值和最大值之间。如果 `val` 不是有限数字（比如 `NaN` 或 `Infinity`），就返回最小值。";

export async function runDemo(ctx) {
  ctx.log("0.1 + 0.2 直接相加:", 0.1 + 0.2);
  ctx.log("按分取整后相加:", (Math.round(0.1 * 100) + Math.round(0.2 * 100)) / 100);
  ctx.log("Number.isNaN(NaN):", Number.isNaN(NaN), "Number.isNaN('abc'):", Number.isNaN("abc"));
}
