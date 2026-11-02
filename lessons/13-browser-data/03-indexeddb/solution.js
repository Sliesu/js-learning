function runInBrowserIdb(records) {
  return new Promise((resolve, reject) => {
    const req = globalThis.indexedDB.open("js_learn_idb_lesson", 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains("orders")) {
        db.createObjectStore("orders", { keyPath: "id" });
      }
    };
    req.onerror = () => reject(req.error);
    req.onsuccess = () => {
      const db = req.result;
      const tx = db.transaction("orders", "readwrite");
      const store = tx.objectStore("orders");
      store.clear();
      for (const r of records) {
        store.put(r);
      }
      const getAllReq = store.getAll();
      getAllReq.onsuccess = () => {
        const res = getAllReq.result;
        db.close();
        resolve(res);
      };
      getAllReq.onerror = () => {
        db.close();
        reject(getAllReq.error);
      };
    };
  });
}

export async function putAndQueryByMinAmount(records, minAmount) {
  let stored;
  if (typeof globalThis.indexedDB !== "undefined") {
    stored = await runInBrowserIdb(records);
  } else {
    const table = new Map();
    for (const r of records) table.set(r.id, structuredClone(r));
    stored = [...table.values()];
  }
  return stored
    .filter((r) => r.amount >= minAmount)
    .toSorted((a, b) => a.id.localeCompare(b.id));
}

export async function test(mod, assert) {
  const input = [
    { id: "o2", amount: 500 },
    { id: "o1", amount: 150 },
    { id: "o3", amount: 800 },
    { id: "o1", amount: 600 }, // 同主键覆盖更新
  ];
  const res = await mod.putAndQueryByMinAmount(input, 500);
  assert.deepEqual(
    res,
    [
      { id: "o1", amount: 600 },
      { id: "o2", amount: 500 },
      { id: "o3", amount: 800 },
    ],
    "按主键 put 覆盖并筛选出 amount >= 500 的记录"
  );
}
