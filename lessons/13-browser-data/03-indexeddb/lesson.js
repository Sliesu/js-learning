export const summary =
  "理解浏览器异步对象数据库 `IndexedDB` 的核心概念：数据库版本（`onupgradeneeded`）、对象仓库（Object Store，指定主键 `keyPath`）、事务（Transaction）与按条件查询。";

export const keyPoints = [
  "相比 `localStorage`（5MB 同步字符串），`IndexedDB` 是异步、支持事务与二级索引的大容量结构化数据库。",
  "`IndexedDB` 原生 API 基于事件回调（`req.onsuccess` / `req.onerror`），实战中通常先用 `new Promise` 包装成 `async/await` 形态。",
];

export const remember = [
  "创建对象仓库 `db.createObjectStore('orders', { keyPath: 'id' })` 只能在 `onupgradeneeded` 版本升级回调中执行。",
];

export const taskDescription =
  "一批本地订单要先按单号归并，再查出达到金额门槛的单。请写 putAndQueryByMinAmount(records, minAmount)。同一 id 后写入的覆盖前面的。浏览器有 indexedDB 就用它保存；没有就用 Map 按 id 归并。最后只留 amount 大于等于 minAmount 的记录，按 id 字典序升序返回。";

export async function runDemo(ctx) {
  const hasIdb = typeof globalThis.indexedDB !== "undefined";
  ctx.log("当前运行环境是否提供原生 indexedDB:", hasIdb);
}
