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
  "已签章的合同对象不能再改，里面嵌着的当事人、金额数组也不能改。请写 deepFreeze(obj)。把 obj 自己和里面每一层对象、数组都冻结，然后返回 obj。空值和非对象不用冻结。";

export async function runDemo(ctx) {
  const cfg = Object.freeze({ env: "prod" });
  ctx.log("Object.isFrozen(cfg):", Object.isFrozen(cfg));
}
