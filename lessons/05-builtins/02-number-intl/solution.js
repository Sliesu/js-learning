export function parsePixelValue(cssStr) {
  const n = Number.parseInt(cssStr, 10);
  return Number.isNaN(n) ? 0 : n;
}

export function formatCNY(amount) {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
  }).format(amount);
}

export async function test(mod, assert) {
  assert.equal(mod.parsePixelValue("240px"), 240, "提取 240px 中的整数");
  assert.equal(mod.parsePixelValue("auto"), 0, "无法解析时返回 0");
  assert.equal(mod.formatCNY(1899), "¥1,899.00", "人民币千分位与两位小数格式化");
}
