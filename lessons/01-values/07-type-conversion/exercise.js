// 练习 1.7：显式安全转数字
export function toStrictNumber(input) {
  // TODO:
  // 1. 如果是 number 且 Number.isFinite(input) 返回 input
  // 2. 如果是非空字符串（trim 后长度 > 0），转成 Number 后若 isFinite 则返回该数字
  // 3. 其余情况（null, undefined, boolean, "", "abc"）一律返回 null
}
