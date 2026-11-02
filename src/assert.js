function formatValue(val) {
  if (typeof val === "bigint") return `${val.toString()}n`;
  if (typeof val === "symbol") return val.toString();
  if (typeof val === "function") return `[Function ${val.name || "anonymous"}]`;
  if (val === undefined) return "undefined";
  if (Number.isNaN(val)) return "NaN";
  if (Object.is(val, -0)) return "-0";
  try {
    return JSON.stringify(val, (_k, v) => {
      if (typeof v === "bigint") return `${v.toString()}n`;
      if (v instanceof Map) return { __type: "Map", entries: [...v.entries()] };
      if (v instanceof Set) return { __type: "Set", values: [...v.values()] };
      return v;
    });
  } catch {
    return String(val);
  }
}

export function isDeepEqual(a, b, seen = new WeakMap()) {
  if (Object.is(a, b)) return true;
  if (a === null || b === null || typeof a !== "object" || typeof b !== "object") {
    return false;
  }
  if (seen.get(a) === b) return true;
  seen.set(a, b);

  if (a instanceof Date && b instanceof Date) {
    return Object.is(a.getTime(), b.getTime());
  }
  if (a instanceof RegExp && b instanceof RegExp) {
    return a.source === b.source && a.flags === b.flags;
  }
  if (a instanceof Map && b instanceof Map) {
    if (a.size !== b.size) return false;
    for (const [k, v] of a.entries()) {
      if (!b.has(k) || !isDeepEqual(v, b.get(k), seen)) return false;
    }
    return true;
  }
  if (a instanceof Set && b instanceof Set) {
    if (a.size !== b.size) return false;
    for (const v of a.values()) {
      if (!b.has(v)) return false;
    }
    return true;
  }
  if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
    if (a.constructor !== b.constructor || a.byteLength !== b.byteLength) return false;
    const ua = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
    const ub = new Uint8Array(b.buffer, b.byteOffset, b.byteLength);
    for (let i = 0; i < ua.length; i++) {
      if (ua[i] !== ub[i]) return false;
    }
    return true;
  }
  if (Array.isArray(a) !== Array.isArray(b)) return false;

  const keysA = Reflect.ownKeys(a);
  const keysB = Reflect.ownKeys(b);
  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
    if (!isDeepEqual(a[key], b[key], seen)) return false;
  }
  return true;
}

export function createAssert() {
  const results = [];

  function record(ok, label, detail = "") {
    results.push({ ok, label, detail });
    if (!ok) {
      throw new Error(`${label}${detail ? ` -> ${detail}` : ""}`);
    }
  }

  return {
    results,
    ok(value, label = "断言为真") {
      record(Boolean(value), label, `实际值: ${formatValue(value)}`);
    },
    equal(actual, expected, label = "值相等") {
      const pass = Object.is(actual, expected);
      record(
        pass,
        label,
        pass ? "" : `期望 ${formatValue(expected)}，实际 ${formatValue(actual)}`
      );
    },
    deepEqual(actual, expected, label = "结构深相等") {
      const pass = isDeepEqual(actual, expected);
      record(
        pass,
        label,
        pass ? "" : `期望 ${formatValue(expected)}，实际 ${formatValue(actual)}`
      );
    },
    throws(fn, expectedMessagePart, label = "应当抛出异常") {
      let threw = false;
      let err = null;
      try {
        fn();
      } catch (e) {
        threw = true;
        err = e;
      }
      if (!threw) {
        record(false, label, "函数未抛出任何错误");
      }
      if (expectedMessagePart) {
        const msg = err?.message ?? String(err);
        const matched =
          expectedMessagePart instanceof RegExp
            ? expectedMessagePart.test(msg)
            : typeof expectedMessagePart === "function"
              ? err instanceof expectedMessagePart
              : msg.includes(String(expectedMessagePart));
        record(matched, label, `错误信息不匹配: ${msg}`);
      } else {
        record(true, label);
      }
    },
    async rejects(asyncFn, expectedMessagePart, label = "异步函数应当 reject") {
      let threw = false;
      let err = null;
      try {
        await asyncFn();
      } catch (e) {
        threw = true;
        err = e;
      }
      if (!threw) {
        record(false, label, "Promise 未 reject");
      }
      if (expectedMessagePart) {
        const msg = err?.message ?? String(err);
        const matched =
          expectedMessagePart instanceof RegExp
            ? expectedMessagePart.test(msg)
            : typeof expectedMessagePart === "function"
              ? err instanceof expectedMessagePart
              : msg.includes(String(expectedMessagePart));
        record(matched, label, `错误信息不匹配: ${msg}`);
      } else {
        record(true, label);
      }
    },
  };
}
