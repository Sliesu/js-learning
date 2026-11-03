export const summary =
  "`localStorage` 又小又只能同步存字符串。数据多了、还要按条件查，用 `IndexedDB`。它的原始接口是回调，用的时候通常包成 Promise。";

export const keyPoints = [
  "`IndexedDB` 是异步的，支持事务，也能建索引，容量比 `localStorage` 大得多。",
  "原生接口靠 `onsuccess` 和 `onerror`。实际写的时候先包成 Promise，再用 `async/await`。",
];

export const remember = [
  "创建对象仓库，比如 `db.createObjectStore('orders', { keyPath: 'id' })`，只能在版本升级的 `onupgradeneeded` 里做。平时的事务里做不了这件事。",
];

export const taskDescription =
  "写 `putAndQueryByMinAmount(records, minAmount)`，先按 id 保存这些记录。同一个 id 再次出现时，用后面的记录盖住前面的。浏览器有 `indexedDB` 就用它，没有就用 `Map`。最后只保留 `amount` 大于等于 `minAmount` 的记录，并按 id 从小到大返回。";

export async function runDemo(ctx) {
  const hasIdb = typeof globalThis.indexedDB !== "undefined";
  ctx.log("当前运行环境是否提供原生 indexedDB:", hasIdb);
}
