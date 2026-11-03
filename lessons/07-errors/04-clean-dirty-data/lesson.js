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
  "cleanProductRecords(rawList) 清洗一份商品表，返回可以留下的商品。没有编号的丢掉。编号先去掉首尾空格，同一个编号只留第一条。价格转成数字后必须大于 0，否则丢掉。标题去掉首尾空格，没有标题就用「未命名商品」。库存没有、不是数字，或者小于 0，都按 0。每条结果是 { id, title, price, stock }。";

export async function runDemo(ctx) {
  const dirty = [
    { id: " p1 ", title: " 键盘 ", price: "499", stock: "10" },
    { id: "p1", title: "重复键盘", price: 999 },
    { id: "p2", price: "free" },
  ];
  ctx.log("脏数据示例:", dirty);
}
