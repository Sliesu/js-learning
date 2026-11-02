// 练习 14.4：实现 pipe 与 pipeAsync 函数组合器
export function pipe(...fns) {
  // TODO: 返回 (initialValue) => fns.reduce((val, fn) => fn(val), initialValue)
}

export function pipeAsync(...fns) {
  // TODO: 返回 async (initialValue) => { 依次 await fn(val) 并返回最终值 }
}
