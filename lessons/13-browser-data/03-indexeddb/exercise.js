// 按 id 归并记录，后写入的覆盖先写入的。
// 有 indexedDB 就用它，没有就用 Map。
// 只返回 amount >= minAmount 的记录，并按 id 升序。
export async function putAndQueryByMinAmount(records, minAmount) {
}
