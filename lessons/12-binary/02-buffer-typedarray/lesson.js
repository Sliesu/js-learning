export const summary =
  "`ArrayBuffer` 是一段固定长度的内存，不能直接用下标读写。要套上一层视图：定型数组，或者能指定字节序的 `DataView`。";

export const keyPoints = [
  "`new ArrayBuffer(字节数)` 只是分配内存。读写要经过 `Uint8Array`、`Int32Array` 或 `DataView`。",
  "几个视图可以看着同一段内存的不同位置。改其中一个，底层的字节就变了，别的视图也能看见。",
  "`DataView` 可以按大端或小端读写。网络上的字节序通常是大端，也就是 `littleEndian` 传 `false`。",
];

export const remember = [
  "自己定的二进制头，比如 2 字节版本号再加 4 字节长度，用 `DataView` 来写、来读。不要靠普通数组去拼字节。",
];

export const taskDescription =
  "写 `packHeader(version, payloadLength)`，打包一个 6 字节的报文头，用大端序。前 2 个字节写 `version`，后 4 个字节写 `payloadLength`。返回 `Uint8Array`。";

export async function runDemo(ctx) {
  const buf = new ArrayBuffer(4);
  const view = new DataView(buf);
  view.setUint16(0, 258, false); // 0x0102
  ctx.log("大端序写入 0x0102 后的字节:", [...new Uint8Array(buf)]);
}
