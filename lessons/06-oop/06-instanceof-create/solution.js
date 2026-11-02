export function countWordsSafe(words) {
  const counts = Object.create(null);
  for (const w of words) {
    counts[w] = (counts[w] || 0) + 1;
  }
  return counts;
}

export async function test(mod, assert) {
  const res = mod.countWordsSafe(["toString", "constructor", "toString", "js"]);
  assert.equal(Object.getPrototypeOf(res), null, "返回对象原型为 null");
  assert.equal(res.toString, 2, "toString 正常计数为 2");
  assert.equal(res.constructor, 1, "constructor 正常计数为 1");
  assert.equal(res.js, 1, "js 计数为 1");
}
