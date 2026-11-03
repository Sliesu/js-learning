export const summary =
  "程序要分岔的时候，用 `if` 看范围，用 `switch` 对上某几个固定值。能提前返回的，就别再套一层 `else`。";

export const keyPoints = [
  "`switch` 的每个 `case` 用的是 `===`。写完一个分支如果不 `break` 或 `return`，会继续掉进下一个分支。",
  "在某个 `case` 里要用 `let` 或 `const`，得用花括号把这一支包起来，不然会和别的分支抢同一个名字。",
  "异常和边界放在函数开头就返回。主流程不用缩进三四层，读起来也清楚。",
];

export const remember = [
  "就那么几个固定值，用 `switch`，或者用一个对象当对照表。要比大小、看区间，用 `if...else if`。",
];

export const taskDescription =
  "写 `calcDiscountRate(tier, amount)`，按会员等级返回折扣，返回的是折扣本身，不是折后价。金卡是 0.85，银卡是 0.9。铜卡这单满 500 元是 0.95，不满是 1。其他等级都是 1，也就是不打折。";

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
