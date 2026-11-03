export const summary =
  "`Map` 会一直抓住它的键。如果键是一个临时对象，这份对应关系就会让对象一直活着。`WeakMap` 不会：外面不再用这个对象时，缓存可以一起被回收。";

export const keyPoints = [
  "`WeakMap` 的键必须是对象。它不阻止垃圾回收，所以不能遍历，也没有 `.size`。",
  "给某个对象挂一份只有你知道的附加数据，或者按对象缓存计算结果，用 `WeakMap`。对象没了，缓存也没了。",
  "`new WeakRef(target)` 是更弱的一层。`.deref()` 还能拿到对象；如果已经被回收，得到的是 `undefined`。",
];

export const remember = [
  "按对象缓存计算结果，用 `WeakMap`，不要用 `Map`。否则这些对象会因为缓存一直留在内存里。",
];

export const taskDescription =
  "写 `createObjectCache(computeFn)`，返回一个函数，用来记住每个对象算出来的结果。同一个对象再次传进来时，直接返回上次的结果，不要重新计算。用 `WeakMap` 来存。对象不再被用到以后，这份缓存也可以被清掉。";

export async function runDemo(ctx) {
  const wm = new WeakMap();
  let userObj = { id: "u1" };
  wm.set(userObj, "私有标记");
  ctx.log("WeakMap 读取:", wm.get(userObj));
  const ref = new WeakRef(userObj);
  ctx.log("WeakRef.deref():", ref.deref());
}
