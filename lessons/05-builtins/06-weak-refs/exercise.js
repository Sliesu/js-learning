// 练习 5.6：使用 WeakMap 为对象实例做无内存泄漏的计算缓存
export function createObjectCache(computeFn) {
  // TODO: 创建 WeakMap，返回函数 (obj) => ...
  // 如果 WeakMap 中已有 obj，直接返回缓存结果；否则调用 computeFn(obj) 存入并返回
}
