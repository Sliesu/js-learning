export const summary =
  "读取一个属性时，对象自己没有，就会到它的原型上找，再没有就继续往上，直到 `null`。写属性则不一样，永远写在对象自己身上。";

export const keyPoints = [
  "普通对象的原型默认是 `Object.prototype`。再往上，`Object.getPrototypeOf(Object.prototype)` 是 `null`，链到这里就停了。",
  "`Object.create(proto)` 做出一个以 `proto` 为原型的新对象。`Object.create(null)` 则什么都不继承，适合当一份干净的字典。",
  "给 `obj.x` 赋值，只会写在对象自己身上，不会去改原型上的同名属性。原型上如果是 setter，那是例外。",
];

export const remember = [
  "读原型用 `Object.getPrototypeOf(obj)`。`__proto__` 已经不该再用了。",
];

export const taskDescription =
  "写 `getPrototypeChainDepth(obj)`，数这个对象上面还有几层原型。从 `obj` 开始一层层往上找，数到 `null` 为止。`obj` 自己不算。上面没有原型时，结果是 0。";

export async function runDemo(ctx) {
  const base = { role: "viewer" };
  const admin = Object.create(base);
  admin.name = "林晓";
  ctx.log("admin.role (来自原型):", admin.role, "Object.hasOwn(admin, 'role'):", Object.hasOwn(admin, "role"));
}
