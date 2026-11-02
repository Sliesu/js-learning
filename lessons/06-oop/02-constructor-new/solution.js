export function simulateNew(Constructor, ...args) {
  const instance = Object.create(Constructor.prototype);
  const ret = Constructor.apply(instance, args);
  if ((typeof ret === "object" && ret !== null) || typeof ret === "function") {
    return ret;
  }
  return instance;
}

export async function test(mod, assert) {
  function Item(name, qty) {
    this.name = name;
    this.qty = qty;
  }
  Item.prototype.total = function (price) {
    return this.qty * price;
  };
  const it = mod.simulateNew(Item, "键盘", 2);
  assert.equal(it instanceof Item, true, "原型链正确指向 Item.prototype");
  assert.equal(it.total(499), 998, "可调用原型方法");

  function CustomReturn() {
    return { custom: true };
  }
  assert.deepEqual(mod.simulateNew(CustomReturn), { custom: true }, "构造函数显式返回对象时优先使用该对象");
}
