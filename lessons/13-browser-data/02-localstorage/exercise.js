// save(key, value) 用「前缀:key」把值存成 JSON。
// load(key, fallback) 读出并解析。没有或解析失败时返回 fallback，默认 null。
export function createJsonStore(prefix, storage = globalThis.localStorage) {
}
