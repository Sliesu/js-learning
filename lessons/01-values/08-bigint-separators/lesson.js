export const summary =
  "理解 `Number.MAX_SAFE_INTEGER`（\\(2^{53}-1\\)）上限，使用 `BigInt` 处理 64 位大整数 ID 与高精度计数，以及使用 `_` 数值分隔符提高可读性。";

export const keyPoints = [
  "超过 `9_007_199_254_740_991`（`Number.MAX_SAFE_INTEGER`）的整数用 `Number` 会丢失末位精度（如数据库雪花 ID、区块链金额）。",
  "在整数字面量后加 `n`（如 `9007199254740993n`）或调用 `BigInt(str)` 得到任意精度整数。",
  "`BigInt` 不能与 `Number` 直接混合做 `+ - * /`，必须显式转换其中一方；`BigInt` 除法会自动向零截断小数部分（`5n / 2n === 2n`）。",
];

export const remember = [
  "`JSON.stringify` 默认不支持直接序列化 `BigInt`，通常转为字符串存储。",
];

export const taskDescription =
  "实现 `addSnowflakeIds(idStrA, idStrB)`：把两个超大整数字符串按 `BigInt` 相加后返回字符串结果。";

export async function runDemo(ctx) {
  const max = Number.MAX_SAFE_INTEGER;
  ctx.log("Number 精度丢失:", max + 1 === max + 2);
  ctx.log("BigInt 精确计算:", (BigInt(max) + 1n).toString(), (BigInt(max) + 2n).toString());
  ctx.log("数值分隔符 1_000_000_000:", 1_000_000_000);
}
