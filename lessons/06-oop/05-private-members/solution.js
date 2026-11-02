export class TokenVault {
  #token;

  constructor(token) {
    this.#token = token;
  }

  verify(candidate) {
    return candidate === this.#token;
  }

  static isVault(obj) {
    return typeof obj === "object" && obj !== null && #token in obj;
  }
}

export async function test(mod, assert) {
  const v = new mod.TokenVault("sec-99");
  assert.equal(v.verify("sec-99"), true, "正确口令验证通过");
  assert.equal(v.verify("wrong"), false, "错误口令返回 false");
  assert.equal(Object.keys(v).length, 0, "私有字段不会出现在 Object.keys 中");
  assert.equal(mod.TokenVault.isVault(v), true, "识别真实 TokenVault 实例");
  assert.equal(mod.TokenVault.isVault({}), false, "识别伪造对象");
  assert.equal(mod.TokenVault.isVault(null), false, "安全处理 null");
}
