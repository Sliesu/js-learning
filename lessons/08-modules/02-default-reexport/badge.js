export default function formatBadge(tier, name) {
  return `[${tier.toUpperCase()}] ${name}`;
}

export const DEFAULT_TIER = "bronze";
