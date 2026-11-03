export const summary =
  "JavaScript 字符串不是字节。要发出去、要算文件有多大，看的是 UTF-8 字节。`TextEncoder` 负责编码，`TextDecoder` 负责解码回来。";

export const keyPoints = [
  "`new TextEncoder().encode(str)` 得到 UTF-8 的 `Uint8Array`。英文字母一般 1 个字节，常见汉字 3 个字节，一个四字节的表情是 4 个字节。",
  "`new TextDecoder('utf-8').decode(bytes)` 把字节还原成字符串。",
];

export const remember = [
  "网络、哈希、文件大小限制看的是字节长度，不是 `str.length`。`length` 数的是 UTF-16 码元。",
];

export const taskDescription =
  "写 `utf8ByteLength(str)`，返回这段文本按 UTF-8 编码后占多少字节。汉字通常不止 1 个字节。再写 `roundTripUtf8(uint8Bytes)`，把一组 UTF-8 字节解码还原成原来的文本。";

export async function runDemo(ctx) {
  const bytes = new TextEncoder().encode("你好JS");
  ctx.log("'你好JS' 的 UTF-8 字节:", [...bytes], "字节数:", bytes.byteLength);
}
