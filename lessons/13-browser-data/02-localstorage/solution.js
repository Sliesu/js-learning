export function createJsonStore(prefix, storage = globalThis.localStorage) {
  return {
    save(key, value) {
      storage.setItem(`${prefix}:${key}`, JSON.stringify(value));
    },
    load(key, fallback = null) {
      try {
        const raw = storage.getItem(`${prefix}:${key}`);
        return raw === null ? fallback : JSON.parse(raw);
      } catch {
        return fallback;
      }
    },
  };
}

export async function test(mod, assert) {
  const map = new Map();
  const fakeStorage = {
    getItem: (k) => (map.has(k) ? map.get(k) : null),
    setItem: (k, v) => map.set(k, String(v)),
  };
  const store = mod.createJsonStore("app", fakeStorage);
  store.save("filter", { city: "上海", active: true });
  assert.deepEqual(
    store.load("filter"),
    { city: "上海", active: true },
    "JSON 序列化存取还原一致"
  );
  assert.equal(store.load("missing", "def"), "def", "不存在的键返回 fallback");
  fakeStorage.setItem("app:broken", "{bad");
  assert.equal(store.load("broken", "safe"), "safe", "损坏的 JSON 安全降级到 fallback");
}
