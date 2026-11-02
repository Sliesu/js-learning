// 练习 7.4：清洗商品脏数据（去空格、校验正数价格、按 id 去重、补齐默认值）
export function cleanProductRecords(rawList) {
  // TODO:
  // 遍历 rawList，提取 id = item?.id?.trim()
  // 若 !id 或 seen.has(id) 则跳过
  // 将 item.price 转为 Number，若 !Number.isFinite(price) || price <= 0 则跳过
  // 记录 seen.add(id)，并推入 { id, title: item.title?.trim() || "未命名商品", price, stock: Math.max(0, Number(item.stock ?? 0) || 0) }
}
