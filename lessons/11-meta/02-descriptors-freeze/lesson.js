export const summary =
  "掌握 `Object.defineProperty` 的属性描述符（`writable`、`enumerable`、`configurable`）以及对象防篡改三剑客：`Object.freeze`、`Object.seal`、`Object.preventExtensions`。";

export const keyPoints = [
  "通过 `Object.defineProperty(obj, 'key', { value: 1, writable: false, enumerable: false })` 定义的属性默认不可写、不可枚举、不可删除。",
  "`Object.seal(obj)` 禁止新增或删除属性，但允许修改已有可写属性的值。",
  "`Object.freeze(obj)` 浅冻结：禁止新增、删除或修改第一层属性（严格模式下试图修改会直接抛 `TypeError`）。",
];

export const remember = [
  "`Object.freeze` 只冻结第一层；若要彻底锁定嵌套配置对象，需要递归调用 `Object.freeze`。",
];

export const taskDescription =
  "deepFreeze(obj) 把一个对象冻结，使它不能再被修改。里面嵌套的对象和数组也要一起冻结。处理完以后返回原来的 obj。null 和其他非对象不用管。";

export async function runDemo(ctx) {
  const cfg = Object.freeze({ env: "prod" });
  ctx.log("Object.isFrozen(cfg):", Object.isFrozen(cfg));
}
