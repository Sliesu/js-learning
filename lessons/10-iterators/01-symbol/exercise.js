// 练习 10.1：使用 Symbol.for 挂载不污染 Object.keys 的元数据
export function attachHiddenMeta(record, metaVal) {
  // TODO: 使用 Symbol.for("js_learn.meta") 作为键写入 record 并返回 record
}

export function readHiddenMeta(record) {
  // TODO: 读取并返回 record[Symbol.for("js_learn.meta")]
}
