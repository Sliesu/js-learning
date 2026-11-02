export class BaseOrder {
  constructor(id, amount) {
    this.id = id;
    this.amount = amount;
  }
  finalAmount() {
    return this.amount;
  }
}

export class VipOrder extends BaseOrder {
  constructor(id, amount, rate) {
    super(id, amount);
    this.rate = rate;
  }

  finalAmount() {
    return super.finalAmount() * this.rate;
  }

  static halfPrice(id, amount) {
    return new VipOrder(id, amount, 0.5);
  }
}

export async function test(mod, assert) {
  const vip = new mod.VipOrder("o1", 200, 0.8);
  assert.equal(vip instanceof mod.BaseOrder, true, "VipOrder 是 BaseOrder 的实例");
  assert.equal(vip.finalAmount(), 160, "200 * 0.8 = 160");
  const half = mod.VipOrder.halfPrice("o2", 300);
  assert.equal(half.finalAmount(), 150, "静态工厂方法生成半价订单");
}
