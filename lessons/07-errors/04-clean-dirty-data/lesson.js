export const summary =
  "综合运用类型转换、空值合并与 `Set` 去重，把真实世界里缺字段、类型错乱、带重复项的脏数据清洗成规整的数据集。";

export const keyPoints = [
  "外部接口或 CSV 导入的数据常见问题：ID 前后有空格、价格是字符串 `'299'` 或非法 `'N/A'`、同一个 `id` 重复出现、缺失默认状态。",
  "清洗管道标准动作：1) 过滤空记录与无 ID 记录；2) 按主键首次出现去重；3) 规范化字符串与数值类型并填充默认值。",
];

export const remember = [
  "在进入业务计算前，先把脏数据在边界层一次性清洗成结构固定的干净数组。",
];

export const taskDescription =
  "实现 `cleanProductRecords(rawList)`：跳过无有效 `id` 或价格转数字后 `<= 0` / `NaN` 的项，按 `id.trim()` 去重（保留第一条），返回 `{ id, title: title?.trim() || '未命名商品', price: Number(price), stock: Math.max(0, Number(stock ?? 0) || 0) }` 数组。";

export async function runDemo(ctx) {
  const dirty = [
    { id: " p1 ", title: " 键盘 ", price: "499", stock: "10" },
    { id: "p1", title: "重复键盘", price: 999 },
    { id: "p2", price: "free" },
  ];
  ctx.log("脏数据示例:", dirty);
}
