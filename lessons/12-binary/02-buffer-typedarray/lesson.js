export const summary =
  "理解原始内存缓冲区 `ArrayBuffer`、定型数组视图 `Uint8Array` / `Int32Array` 以及跨字节序读写视图 `DataView`。";

export const keyPoints = [
  "`new ArrayBuffer(byteLength)` 分配一段固定长度的连续二进制内存，但不能直接下标读写，必须套一层视图（`TypedArray` 或 `DataView`）。",
  "多个视图可以指向同一个 `ArrayBuffer` 的不同偏移区间，修改其中一个视图会直接反映在底层内存上。",
  "`DataView` 允许显式控制大端序（Big-Endian，网络字节序，`littleEndian = false`）或小端序读写混合类型二进制协议头。",
];

export const remember = [
  "解析自定义二进制包头（如 2 字节版本号 + 4 字节长度）时使用 `DataView`。",
];

export const taskDescription =
  "渠道报文头固定 6 个字节，而且是大端序。请写 packHeader(version, payloadLength)。前 2 个字节写下 version，后 4 个字节写下 payloadLength。返回这 6 个字节组成的 Uint8Array。";

export async function runDemo(ctx) {
  const buf = new ArrayBuffer(4);
  const view = new DataView(buf);
  view.setUint16(0, 258, false); // 0x0102
  ctx.log("大端序写入 0x0102 后的字节:", [...new Uint8Array(buf)]);
}
