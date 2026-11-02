export function calcWeightedSum(multiplier = 1, ...numbers) {
  let sum = 0;
  for (const n of numbers) {
    sum += n;
  }
  return sum * multiplier;
}

export async function test(mod, assert) {
  assert.equal(mod.calcWeightedSum(2, 10, 20, 5), 70, "2 * (10+20+5) = 70");
  assert.equal(mod.calcWeightedSum(undefined, 4, 6), 10, "multiplier 传 undefined 时取默认值 1");
  assert.equal(mod.calcWeightedSum(3), 0, "不传 numbers 时总和为 0");
}
