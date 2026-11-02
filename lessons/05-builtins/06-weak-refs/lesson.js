export const summary =
  "理解弱引用容器 `WeakMap`、`WeakSet`（不阻止垃圾回收、防内存泄漏）以及底层弱引用 `WeakRef` 与 `FinalizationRegistry`。";

export const keyPoints = [
  "`WeakMap` 的键必须是对象（或非全局注册的 `Symbol`），对键是弱引用：一旦外部没有其他引用指向该键对象，GC 会自动回收该键值对，因此 `WeakMap` 不可枚举、没有 `.size`。",
  "最适合用 `WeakMap` 的场景：给第三方对象挂载私有元数据或计算缓存，对象销毁时缓存自动释放，绝不泄漏内存。",
  "`new WeakRef(target)` 通过 `.deref()` 获取目标对象（若已被回收则返回 `undefined`）。",
];

export const remember = [
  "针对对象实例做计算结果缓存（Memoization per Object）时，永远用 `WeakMap` 而不是 `Map`。",
];

export const taskDescription =
  "实现 `createObjectCache(computeFn)`：内部用 `WeakMap` 缓存每个对象参数的计算结果；同一对象再次传入时直接返回缓存值，不重复调用 `computeFn`。";

export async function runDemo(ctx) {
  const wm = new WeakMap();
  let userObj = { id: "u1" };
  wm.set(userObj, "私有标记");
  ctx.log("WeakMap 读取:", wm.get(userObj));
  const ref = new WeakRef(userObj);
  ctx.log("WeakRef.deref():", ref.deref());
}
