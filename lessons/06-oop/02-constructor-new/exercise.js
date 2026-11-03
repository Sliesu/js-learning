// 不许用 new。先按构造函数的原型做出对象，再让构造函数在这个对象上执行。
// 构造函数若返回对象或函数，就用返回值；否则用你做出的对象。
export function simulateNew(Constructor, ...args) {
}
