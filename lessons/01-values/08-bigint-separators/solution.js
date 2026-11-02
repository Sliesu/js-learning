export function addSnowflakeIds(idStrA, idStrB) {
  return (BigInt(idStrA) + BigInt(idStrB)).toString();
}

export async function test(mod, assert) {
  assert.equal(
    mod.addSnowflakeIds("9007199254740993", "2"),
    "9007199254740995",
    "超出 Number 安全整数范围仍精确相加"
  );
  assert.equal(
    mod.addSnowflakeIds("100000000000000000000", "234567890123456789"),
    "100234567890123456789",
    "10^20 量级整数相加"
  );
}
