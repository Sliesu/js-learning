// 练习 6.2：手写模拟 new 运算符的四个步骤
export function simulateNew(Constructor, ...args) {
  // TODO:
  // 1. const instance = Object.create(Constructor.prototype);
  // 2. const ret = Constructor.apply(instance, args);
  // 3. 若 ret 是非 null 的对象或函数则返回 ret，否则返回 instance
}
