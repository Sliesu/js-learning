export const summary =
  "普通数字能精确表示的整数是有上限的。订单号、雪花 ID 这种超长整数，要用 `BigInt`，不然末尾会被悄悄改掉。";

export const keyPoints = [
  "整数一旦超过 `Number.MAX_SAFE_INTEGER`（也就是 `9007199254740991`），用普通数字会丢掉末位。数据库里的长 ID 就属于这种。",
  "在整数字面量后面加 `n`，比如 `9007199254740993n`，或者调用 `BigInt(str)`，就能得到任意精度的整数。",
  "`BigInt` 不能和普通数字直接加减乘除，得先把其中一边转成同一种。`BigInt` 相除会丢掉小数，向零取整：`5n / 2n` 是 `2n`。",
];

export const remember = [
  "`JSON.stringify` 不能直接写出 `BigInt`。要存进 JSON，先把它变成字符串。",
  "长数字字面量可以加下划线，比如 `1_000_000`，只是让人好读，数值本身不变。",
];

export const taskDescription =
  "流水号太长，用普通数字相加会丢掉末尾。写 `addSnowflakeIds(idStrA, idStrB)`，把两个流水号字符串按 `BigInt` 相加，结果仍然用字符串返回。";

export async function runDemo(ctx) {
  const max = Number.MAX_SAFE_INTEGER;
  ctx.log("Number 精度丢失:", max + 1 === max + 2);
  ctx.log("BigInt 精确计算:", (BigInt(max) + 1n).toString(), (BigInt(max) + 2n).toString());
  ctx.log("数值分隔符 1_000_000_000:", 1_000_000_000);
}
