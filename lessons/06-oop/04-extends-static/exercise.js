export class BaseOrder {
  constructor(id, amount) {
    this.id = id;
    this.amount = amount;
  }
  finalAmount() {
    return this.amount;
  }
}

// 会员订单：在原价上再乘 rate。
// halfPrice(id, amount) 生成费率为 0.5 的会员订单。
export class VipOrder extends BaseOrder {
}
