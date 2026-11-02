// 练习 13.3：将一批带 id 与 amount 的记录存入异步存储并按最小金额筛选返回
export async function putAndQueryByMinAmount(records, minAmount) {
  // TODO:
  // 若在浏览器且支持 indexedDB，可打开临时库写入 records 再读取（或者用 Map 按 record.id 覆盖写入去重后读取）
  // 筛选 amount >= minAmount 的记录，按 id 升序返回
}
