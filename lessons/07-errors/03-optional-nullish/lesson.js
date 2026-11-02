export const summary =
  "熟练使用可选链 `?.`（属性、下标、方法调用）与空值合并 `??`（仅对 `null`/`undefined` 生效，不误伤 `0` 和 `''`），以及逻辑赋值 `??=`、`||=`、`&&=`。";

export const keyPoints = [
  "`user?.address?.city`、`arr?.[0]`、`obj.callback?.()` 在遇到 `null` 或 `undefined` 时立即短路返回 `undefined`，不会抛 `TypeError`。",
  "`count || 10` 在 `count === 0` 时会错误地变成 `10`！而 `count ?? 10` 只在 `count` 为 `null` 或 `undefined` 时才取 `10`，完整保留 `0`、`false`、`''`。",
  "`config.timeout ??= 3000` 等价于当 `config.timeout` 为 `null`/`undefined` 时才赋默认值 `3000`。",
];

export const remember = [
  "给数字或布尔配置项设默认值时，一律用 `??` 而不是 `||`。",
];

export const taskDescription =
  "实现 `readShippingFee(order)`：读取 `order?.delivery?.fee`，若为 `null` 或 `undefined` 则返回默认运费 `12`（注意免运费 `0` 必须保留为 `0`！）。";

export async function runDemo(ctx) {
  const freeOrder = { delivery: { fee: 0 } };
  ctx.log("使用 || 误伤 0:", freeOrder.delivery?.fee || 12);
  ctx.log("使用 ?? 保留 0:", freeOrder.delivery?.fee ?? 12);
}
