// 练习 9.2：封装延时函数与防抖函数
export function delayValue(ms, value) {
  // TODO: 返回在 ms 毫秒后 resolve(value) 的 Promise
}

export function createDebounced(fn, waitMs) {
  // TODO: 返回一个包装函数 (...args) => void，连续调用时重置定时器，只在最后一次调用满 waitMs 后执行 fn(...args)
}
