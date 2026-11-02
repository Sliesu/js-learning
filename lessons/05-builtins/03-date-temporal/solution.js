export function formatUtcDate(isoStr) {
  const d = new Date(isoStr);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function detectTemporalSupport() {
  return typeof globalThis.Temporal !== "undefined";
}

export async function test(mod, assert) {
  assert.equal(mod.formatUtcDate("2025-03-06T11:45:00Z"), "2025-03-06", "提取 UTC 年月日");
  assert.equal(
    mod. detectTemporalSupport(),
    typeof globalThis.Temporal !== "undefined",
    "准确探测当前环境的 Temporal 支持状态"
  );
}
