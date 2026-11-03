export const summary =
  "`Reflect` 把读属性、写属性、列出自己的键这些操作都做成了函数。它们和 `Proxy` 能拦截的动作一一对应，要把默认行为交回去时就调用它们。";

export const keyPoints = [
  "`Reflect.set`、`Reflect.defineProperty` 用返回值告诉你成功没有，失败时不抛异常。`Object.defineProperty` 失败则会抛。",
  "`Reflect.ownKeys(obj)` 返回自己的全部键：普通字符串、不可枚举的、还有 `Symbol`。`Object.keys` 看不到后面这两种。",
];

export const remember = [
  "在 `Proxy` 里把默认行为交回去时，调用同名的 `Reflect` 方法，并且把 `receiver` 一并传过去。漏了它，getter 里的 `this` 会指错。",
];

export const taskDescription =
  "写 `inspectAllOwnKeys(obj)`，返回这个对象自己拥有的全部键，请用 `Reflect.ownKeys`。普通遍历看不到的键，以及 `Symbol` 键，都要包含在内。";

export async function runDemo(ctx) {
  const sym = Symbol("secret");
  const obj = { a: 1, [sym]: 2 };
  ctx.log("Object.keys(obj):", Object.keys(obj));
  ctx.log("Reflect.ownKeys(obj) 数量:", Reflect.ownKeys(obj).length);
}
