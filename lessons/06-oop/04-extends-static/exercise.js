export class BaseOrder {
  constructor(id, amount) {
    this.id = id;
    this.amount = amount;
  }
  finalAmount() {
    return this.amount;
  }
}

// 练习 6.4：实现继承 BaseOrder 的 VipOrder
export class VipOrder extends BaseOrder {
  // TODO:
  // 1. constructor(id, amount, rate) 调用 super(id, amount) 并保存 this.rate = rate
  // 2. finalAmount() 返回 super.finalAmount() * this.rate
  // 3. static halfPrice(id, amount) 返回 rate 为 0.5 的 VipOrder 实例
}
