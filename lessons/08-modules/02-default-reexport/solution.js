import formatBadge, { DEFAULT_TIER } from "./badge.js";

export function renderUserBadge(user) {
  return formatBadge(user.tier || DEFAULT_TIER, user.name);
}

export async function test(mod, assert) {
  assert.equal(mod.renderUserBadge({ name: "林晓", tier: "gold" }), "[GOLD] 林晓", "使用指定等级");
  assert.equal(mod.renderUserBadge({ name: "新客" }), "[BRONZE] 新客", "缺失等级时使用 DEFAULT_TIER");
}
