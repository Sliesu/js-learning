export class ShoppingCart {
  items = [];

  addItem(title, price, qty = 1) {
    this.items.push({ title, price, qty });
    return this;
  }

  totalPrice() {
    return this.items.reduce((sum, it) => sum + it.price * it.qty, 0);
  }

  count() {
    return this.items.reduce((sum, it) => sum + it.qty, 0);
  }
}

export async function test(mod, assert) {
  const cart = new mod.ShoppingCart();
  cart.addItem("键盘", 499, 1);
  cart.addItem("扩展坞", 159, 2);
  assert.equal(cart.count(), 3, "总件数为 3");
  assert.equal(cart.totalPrice(), 817, "总金额为 499 + 318 = 817");
}
