export function createPrefixer(prefix) {
  return {
    prefix,
    formatAll(items) {
      return items.map((item) => `${this.prefix}${item}`);
    },
  };
}

export async function test(mod, assert) {
  const p = mod.createPrefixer("ORD-");
  assert.deepEqual(p.formatAll(["101", "102"]), ["ORD-101", "ORD-102"], "拼接前缀");
  p.prefix = "NEW-";
  assert.deepEqual(p.formatAll(["1"]), ["NEW-1"], "动态读取当前对象的 this.prefix");
}
