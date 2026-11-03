export const summary =
  "理解 JavaScript 的原型继承机制：读取属性时先查对象自身，找不到则顺着 `[[Prototype]]`（`Object.getPrototypeOf(obj)`）一路查到 `null`。";

export const keyPoints = [
  "普通对象的原型默认是 `Object.prototype`，而 `Object.getPrototypeOf(Object.prototype)` 是 `null`（原型链终点）。",
  "`Object.create(proto)` 创建一个以 `proto` 为原型的全新对象；`Object.create(null)` 创建没有任何继承属性的纯净字典。",
  "写属性 `obj.x = 1` 永远只写在对象自身上，不会修改原型对象上的同名属性（除非原型上是 setter）。",
];

export const remember = [
  "读取原型一律用标准方法 `Object.getPrototypeOf(obj)`，不要使用已废弃的 `__proto__`。",
];

export const taskDescription =
  "getPrototypeChainDepth(obj) 数这个对象上面有几层原型。从 obj 开始一层层往上找，数到 null 为止。obj 自己不算。上面没有原型时，结果是 0。";

export async function runDemo(ctx) {
  const base = { role: "viewer" };
  const admin = Object.create(base);
  admin.name = "林晓";
  ctx.log("admin.role (来自原型):", admin.role, "Object.hasOwn(admin, 'role'):", Object.hasOwn(admin, "role"));
}
