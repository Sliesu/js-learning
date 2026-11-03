export const summary =
  "函数可以记住它诞生时周围的那些变量。外层函数已经执行完了，内层函数下次被调用，那些变量还在。";

export const keyPoints = [
  "每调用一次外层函数，都会做出一份新的环境。两份闭包里的变量互不相干。",
  "闭包常用来藏住外面不该直接改的状态，也用来做缓存，或者把函数的参数拆开、分几次传入。",
];

export const remember = [
  "闭包记住的是那个变量本身，不是当时的一份快照。里面如果改了它，下次再读就是新值。",
];

export const taskDescription =
  "写 `createBankAccount(initialBalance = 0)`，创建一个账户。余额不能从外面直接读到，只能通过返回的三个方法来操作。`deposit(amount)` 存钱，并返回存完后的余额。`withdraw(amount)` 余额够就扣掉并返回 true，不够就一分不扣并返回 false。`getBalance()` 返回当前余额。";

export async function runDemo(ctx) {
  function createCounter(start = 0) {
    let count = start;
    return () => ++count;
  }
  const c1 = createCounter(10);
  const c2 = createCounter(0);
  ctx.log("c1():", c1(), c1(), "c2():", c2());
}
