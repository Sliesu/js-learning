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
  "活期账户的余额不能让外面直接改。请写 createBankAccount(initialBalance = 0)，返回 { deposit(amount), withdraw(amount), getBalance() }。deposit 把金额加进余额并返回最新余额。withdraw 在余额够时扣款并返回 true；余额不够时一分不扣，返回 false。余额只留在函数内部，外面只能通过这三个方法碰它。";

export async function runDemo(ctx) {
  function createCounter(start = 0) {
    let count = start;
    return () => ++count;
  }
  const c1 = createCounter(10);
  const c2 = createCounter(0);
  ctx.log("c1():", c1(), c1(), "c2():", c2());
}
