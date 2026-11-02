export function demonstrateShadowing(outerVal, innerVal) {
  const value = outerVal;
  let inside;
  {
    const value = innerVal;
    inside = value;
  }
  return { inside, outside: value };
}

export async function test(mod, assert) {
  assert.deepEqual(
    mod.demonstrateShadowing("global", "block"),
    { inside: "block", outside: "global" },
    "块内同名 const/let 不会覆盖外层绑定"
  );
}
