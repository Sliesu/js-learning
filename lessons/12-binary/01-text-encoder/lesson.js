export const summary =
  "使用 `TextEncoder` 与 `TextDecoder` 在 JS 字符串与 UTF-8 字节序列（`Uint8Array`）之间双向转换。";

export const keyPoints = [
  "`new TextEncoder().encode(str)` 将字符串编码为 UTF-8 的 `Uint8Array`（1 个英文字符占 1 字节，1 个常见汉字占 3 字节，1 个四字节 Emoji 占 4 字节）。",
  "`new TextDecoder('utf-8').decode(bytes)` 将 `Uint8Array` 或 `ArrayBuffer` 还原为 JS 字符串。",
];

export const remember = [
  "网络传输、加密哈希、文件大小限制看的是「UTF-8 字节长度（`byteLength`）」，而不是 `str.length`。",
];

export const taskDescription =
  "报文按字节计费，汉字不能按字符数计价。请写 utf8ByteLength(str)，返回这段文字编码成 UTF-8 后的字节数。对方回传的是字节。请写 roundTripUtf8(uint8Bytes)，把这些字节解回文字。";

export async function runDemo(ctx) {
  const bytes = new TextEncoder().encode("你好JS");
  ctx.log("'你好JS' 的 UTF-8 字节:", [...bytes], "字节数:", bytes.byteLength);
}
