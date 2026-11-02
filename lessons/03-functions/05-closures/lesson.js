export const summary =
  "深入理解闭包（Closure）：函数能够记住并持续访问它定义时所在的词法作用域，即使外层函数已经执行完毕。";

export const keyPoints = [
  "每次调用外部工厂函数，都会创建一份全新的词法环境，不同实例之间的闭包变量完全隔离。",
  "闭包常用于：封装外部无法直接篡改的私有状态、实现记忆化缓存（memoize）、函数柯里化。",
];

export const remember = [
  "闭包捕获的是「变量的绑定（引用）」，不是创建瞬间的值快照；若闭包内修改了该变量，下次再读就是新值。",
];

export const taskDescription =
  "实现 `createBankAccount(initialBalance = 0)`：返回 `{ deposit(n), withdraw(n), getBalance() }`；余额不足时 `withdraw` 不扣款并返回 `false`，成功扣款返回 `true`。";

export async function runDemo(ctx) {
  function createCounter(start = 0) {
    let count = start;
    return () => ++count;
  }
  const c1 = createCounter(10);
  const c2 = createCounter(0);
  ctx.log("c1():", c1(), c1(), "c2():", c2());
}
