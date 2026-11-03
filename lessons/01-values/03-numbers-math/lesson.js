export const summary =
  "理解双精度浮点数（IEEE 754）、`NaN`、`Infinity`、金额精度误差以及 `Math` 常用方法。";

export const keyPoints = [
  "`0.1 + 0.2 === 0.30000000000000004`：二进制无法精确表示十进制的 `0.1`，处理金额通常转为整数「分」计算（`Math.round(yuan * 100)`）。",
  "`NaN` 是唯一自己不等于自己的值（`NaN !== NaN`），检测必须用 `Number.isNaN(x)`，不要用全局 `isNaN()`（后者会先把参数转成数字）。",
  "`1 / 0 === Infinity`，`-1 / 0 === -Infinity`；可用 `Number.isFinite(x)` 检测是否为有限数字。",
];

export const remember = [
  "两个浮点数判等用 `Math.abs(a - b) < Number.EPSILON`。",
  "`Math.trunc` 直接抹掉小数位，`Math.floor` 向下取整，`Math.ceil` 向上取整，`Math.round` 四舍五入。",
];

export const taskDescription =
  "柜面把两笔存款记进同一个账户。0.10 元再加 0.20 元，余额必须正好是 0.30 元，不能多出一分钱。请写 addCurrency(a, b)：先把每一笔四舍五入成整数「分」，加总后再换回「元」。另外，风控规定单笔金额只能落在允许区间里。请写 clampNumber(val, min, max)：读到的值如果不是正常数字（NaN、无穷大），就按下限 min 入账；如果是正常数字，低于下限就用下限，高于上限就用上限。";

export async function runDemo(ctx) {
  ctx.log("0.1 + 0.2 直接相加:", 0.1 + 0.2);
  ctx.log("按分取整后相加:", (Math.round(0.1 * 100) + Math.round(0.2 * 100)) / 100);
  ctx.log("Number.isNaN(NaN):", Number.isNaN(NaN), "Number.isNaN('abc'):", Number.isNaN("abc"));
}
