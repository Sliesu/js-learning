export function maskPhone(raw) {
  const clean = raw.trim().replaceAll("-", "");
  return `${clean.slice(0, 3)}****${clean.slice(-4)}`;
}

export async function test(mod, assert) {
  assert.equal(mod.maskPhone(" 138-1234-5678 "), "138****5678", "清理空格与连字符并脱敏");
  assert.equal(mod.maskPhone("18600009999"), "186****9999", "无连字符手机号脱敏");
}
