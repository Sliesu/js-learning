export function createKeyedRecord(keyPrefix, id, value) {
  return {
    id,
    [`${keyPrefix}_${id}`]: value,
    describe() {
      return `${this.id}:${value}`;
    },
  };
}

export async function test(mod, assert) {
  const rec = mod.createKeyedRecord("user", "u1", 95);
  assert.equal(rec.id, "u1", "简写属性 id");
  assert.equal(rec.user_u1, 95, "计算属性 user_u1");
  assert.equal(rec.describe(), "u1:95", "方法简写返回描述串");
}
