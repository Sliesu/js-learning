export function utf8ByteLength(str) {
  return new TextEncoder().encode(str).byteLength;
}

export function roundTripUtf8(uint8Bytes) {
  return new TextDecoder().decode(uint8Bytes);
}

export async function test(mod, assert) {
  assert.equal(mod.utf8ByteLength("ABC"), 3, "ASCII 字符每字 1 字节");
  assert.equal(mod.utf8ByteLength("你好"), 6, "常见中文每字 3 字节");
  assert.equal(mod.utf8ByteLength("🚀"), 4, "Emoji 占 4 字节");
  const encoded = new TextEncoder().encode("数据流");
  assert.equal(mod.roundTripUtf8(encoded), "数据流", "UTF-8 字节数组准确还原为字符串");
}
