export const summary =
  "一层层往下取属性时，中间可能是空的。`?.` 遇到 `null` 或 `undefined` 就停，返回 `undefined`，而不是抛错。给数字设默认值时，用 `??`，不要用 `||`，不然 `0` 会被当成没填。";

export const keyPoints = [
  "`user?.address?.city`、`arr?.[0]`、`obj.callback?.()` 遇到 `null` 或 `undefined` 就停下来，返回 `undefined`，不会抛 `TypeError`。",
  "`count || 10` 在 `count` 是 0 时会变成 10。`count ?? 10` 只在 `null` 或 `undefined` 时才用 10，`0`、`false`、空字符串都会留着。",
  "`config.timeout ??= 3000` 的意思是：这一项还没填，才写成 3000。",
];

export const remember = [
  "数字、布尔值的默认值用 `??`，不要用 `||`。`0` 和 `false` 往往是有效输入。",
];

export const taskDescription =
  "写 `readShippingFee(order)`，读取订单上的运费，位置在 `order.delivery.fee`。订单或配送信息可能不存在。这一栏没填时返回 12。如果明确写了 0，那就是免运费，必须返回 0，不能把它当成没填。";

export async function runDemo(ctx) {
  const freeOrder = { delivery: { fee: 0 } };
  ctx.log("使用 || 误伤 0:", freeOrder.delivery?.fee || 12);
  ctx.log("使用 ?? 保留 0:", freeOrder.delivery?.fee ?? 12);
}
