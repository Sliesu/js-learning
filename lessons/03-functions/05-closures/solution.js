export function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) return false;
      balance -= amount;
      return true;
    },
    getBalance() {
      return balance;
    },
  };
}

export async function test(mod, assert) {
  const acc = mod.createBankAccount(100);
  assert.equal(acc.getBalance(), 100, "初始余额 100");
  assert.equal(acc.deposit(50), 150, "存入 50 后余额 150");
  assert.equal(acc.withdraw(120), true, "取出 120 成功");
  assert.equal(acc.getBalance(), 30, "剩余 30");
  assert.equal(acc.withdraw(50), false, "余额不足时取款失败");
  assert.equal(acc.getBalance(), 30, "失败后余额仍为 30");
  assert.equal(acc.balance, undefined, "外部无法直接访问私有变量 balance");
}
