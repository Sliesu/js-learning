export function welcomeMessage(name) {
  return `你好，${name}，开始 JS 脚本训练`;
}

export async function test(mod, assert) {
  assert.equal(
    mod.welcomeMessage("林晓"),
    "你好，林晓，开始 JS 脚本训练",
    "拼接林晓的欢迎语"
  );
  assert.equal(
    mod.welcomeMessage("JavaScript"),
    "你好，JavaScript，开始 JS 脚本训练",
    "拼接任意名称"
  );
}
