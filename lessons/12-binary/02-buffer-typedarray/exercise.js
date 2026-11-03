// 打包 6 字节报文头，大端序。
// 前 2 字节是 version，后 4 字节是 payloadLength。返回 Uint8Array。
export function packHeader(version, payloadLength) {
}
