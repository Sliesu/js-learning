export const summary =
  "表格和接口里的数据经常不干净：编号带空格、价格是字符串、同一条记了两遍。先在入口整理成结构固定的数组，再拿去计算。";

export const keyPoints = [
  "常见的脏数据：编号前后有空格，价格是 `'299'` 或 `'N/A'`，同一个 id 出现两次，该有的字段缺失。",
  "整理的顺序一般是：丢掉没有编号的；同一个编号只留第一次；再把字符串和数字整理成你要的类型，缺的补上默认值。",
];

export const remember = [
  "在进入后面的计算之前，先把数据一次性整理好。不要算到一半再临时补洞。",
];

export const taskDescription =
  "写 `cleanProductRecords(rawList)`，清洗一份商品表，返回应当保留的商品。没有编号的丢掉。编号先去掉首尾空格，同一个编号只留第一条。价格转成数字后必须大于 0，否则丢掉。标题去掉首尾空格，没有标题就用「未命名商品」。库存没有、不是数字，或者小于 0，都按 0。每条结果是 `{ id, title, price, stock }`。";

export async function runDemo(ctx) {
  const dirty = [
    { id: " p1 ", title: " 键盘 ", price: "499", stock: "10" },
    { id: "p1", title: "重复键盘", price: 999 },
    { id: "p2", price: "free" },
  ];
  ctx.log("脏数据示例:", dirty);
}
