export function analyzeTagSets(tagsA, tagsB) {
  const setA = new Set(tagsA);
  const setB = new Set(tagsB);
  const common =
    typeof setA.intersection === "function"
      ? [...setA.intersection(setB)]
      : [...setA].filter((x) => setB.has(x));
  const onlyInA =
    typeof setA.difference === "function"
      ? [...setA.difference(setB)]
      : [...setA].filter((x) => !setB.has(x));
  const all =
    typeof setA.union === "function"
      ? [...setA.union(setB)]
      : [...new Set([...setA, ...setB])];
  return { common, onlyInA, all };
}

export async function test(mod, assert) {
  assert.deepEqual(
    mod.analyzeTagSets(["a", "b", "c"], ["b", "c", "d"]),
    {
      common: ["b", "c"],
      onlyInA: ["a"],
      all: ["a", "b", "c", "d"],
    },
    "正确计算交集、差集与并集"
  );
}
