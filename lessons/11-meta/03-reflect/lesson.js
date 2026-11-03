export const summary =
  "认识 `Reflect` 内置对象：提供与 `Proxy` 拦截器一一对应的 13 个函数式元操作（`Reflect.get`、`Reflect.set`、`Reflect.has`、`Reflect.ownKeys`）。";

export const keyPoints = [
  "`Reflect.set(target, key, val, receiver)` 与 `Reflect.defineProperty(...)` 返回布尔值表示操作是否成功，而不是像 `Object.defineProperty` 那样失败即抛异常。",
  "`Reflect.ownKeys(obj)` 返回对象自身的所有键（同时包含字符串键、不可枚举键与 `Symbol` 键），等价于 `Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj))`。",
];

export const remember = [
  "在 `Proxy` 的 trap 内部转发默认行为时，永远搭配对应的 `Reflect.<trap>(...)` 并透传 `receiver`。",
];

export const taskDescription =
  "审计要看一份档案上的全部自有钥匙，包括平时枚举看不见的，也包括 Symbol。请写 inspectAllOwnKeys(obj)，用 Reflect.ownKeys 返回这些钥匙。不要漏掉不可枚举属性和 Symbol 属性。";

export async function runDemo(ctx) {
  const sym = Symbol("secret");
  const obj = { a: 1, [sym]: 2 };
  ctx.log("Object.keys(obj):", Object.keys(obj));
  ctx.log("Reflect.ownKeys(obj) 数量:", Reflect.ownKeys(obj).length);
}
