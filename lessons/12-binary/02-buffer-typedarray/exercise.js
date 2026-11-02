// 练习 12.2：使用 ArrayBuffer + DataView 按大端序打包 6 字节协议头
export function packHeader(version, payloadLength) {
  // TODO:
  // 1. const buf = new ArrayBuffer(6);
  // 2. const view = new DataView(buf);
  // 3. view.setUint16(0, version, false);
  // 4. view.setUint32(2, payloadLength, false);
  // 5. 返回 new Uint8Array(buf)
}
