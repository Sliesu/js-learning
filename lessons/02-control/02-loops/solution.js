export function sumEvenNumbers(nums) {
  let total = 0;
  for (const n of nums) {
    if (n % 2 === 0) total += n;
  }
  return total;
}

export function listOwnKeys(obj) {
  const keys = [];
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      keys.push(key);
    }
  }
  return keys;
}

export async function test(mod, assert) {
  assert.equal(mod.sumEvenNumbers([1, 2, 3, 4, 6]), 12, "累加偶数 2+4+6=12");
  assert.equal(mod.sumEvenNumbers([1, 3, 5]), 0, "无偶数时返回 0");
  const proto = { inherited: true };
  const child = Object.assign(Object.create(proto), { id: "u1", city: "上海" });
  assert.deepEqual(mod.listOwnKeys(child), ["id", "city"], "只包含自身属性，忽略继承属性");
}
