export function packHeader(version, payloadLength) {
  const buf = new ArrayBuffer(6);
  const view = new DataView(buf);
  view.setUint16(0, version, false);
  view.setUint32(2, payloadLength, false);
  return new Uint8Array(buf);
}

export async function test(mod, assert) {
  const bytes = mod.packHeader(1, 256);
  assert.deepEqual(
    [...bytes],
    [0, 1, 0, 0, 1, 0],
    "大端序 2 字节 version(1) + 4 字节 length(256)"
  );
}
