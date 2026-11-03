export const summary =
  "使用 `if...else`、三元表达式 `cond ? a : b` 与 `switch`（基于 `===` 严格比较）实现分支决策。";

export const keyPoints = [
  "`switch (expr)` 每个 `case` 使用 `===` 严格相等匹配；若不写 `break` 或 `return` 会发生穿透（fall-through）。",
  "在 `case` 分支内部如果要声明 `let`/`const` 变量，必须用花括号 `{ ... }` 包裹成独立块作用域。",
  "卫语句（Guard Clause）：优先在函数开头提前 `return` 异常或边界分支，减少多层 `else` 缩进。",
];

export const remember = [
  "离散枚举值映射优先用 `switch` 或字典对象；区间范围判断用 `if...else if`。",
];

export const taskDescription =
  "calcDiscountRate(tier, amount) 按会员等级返回折扣，返回的是折扣本身，不是折后的价格。金卡是 0.85，银卡是 0.9。铜卡这单满 500 元是 0.95，不满是 1。其他等级都是 1，也就是不打折。";

export async function runDemo(ctx) {
  function labelStatus(status) {
    switch (status) {
      case "paid":
        return "已支付";
      case "pending":
        return "待支付";
      case "cancelled":
        return "已取消";
      default:
        return "未知状态";
    }
  }
  ctx.log("paid =>", labelStatus("paid"), "other =>", labelStatus("other"));
}
