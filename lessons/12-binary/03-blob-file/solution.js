export function recordsToJsonBlob(records) {
  return new Blob([JSON.stringify(records)], { type: "application/json" });
}

export async function parseJsonBlob(blob) {
  const text = await blob.text();
  return JSON.parse(text);
}

export async function test(mod, assert) {
  const sample = [{ id: "p1", price: 499 }];
  const blob = mod.recordsToJsonBlob(sample);
  assert.equal(blob.type, "application/json", "Blob MIME 类型正确");
  const parsed = await mod.parseJsonBlob(blob);
  assert.deepEqual(parsed, sample, "异步读取 Blob 文本并还原为原始数组");
}
