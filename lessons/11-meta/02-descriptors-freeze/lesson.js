export const summary =
  "属性不只是一个值，它还可以被标成不能改、不能枚举、不能删除。想把整个对象锁住，用 `freeze`；只锁结构、还允许改值，用 `seal`。";

export const keyPoints = [
  "用 `Object.defineProperty` 定义属性时，如果不写那些开关，默认是不可写、不可枚举、不可再配置。",
  "`Object.seal` 之后不能再新增或删除属性，已经有的、并且可写的值还可以改。",
  "`Object.freeze` 只冻住第一层：不能新增、删除，也不能改第一层的值。严格模式下硬改会抛 `TypeError`。里面的对象它不管。",
];

export const remember = [
  "`Object.freeze` 不是深冻结。嵌套的对象要一起锁住，得自己递归下去，对每一层调用 `freeze`。",
];

export const taskDescription =
  "写 `deepFreeze(obj)`，把对象冻住，让它不能再被修改。里面嵌套的对象和数组也要一起冻住。处理完返回原来的 `obj`。`null` 和其他不是对象的值不用管。";

export async function runDemo(ctx) {
  const cfg = Object.freeze({ env: "prod" });
  ctx.log("Object.isFrozen(cfg):", Object.isFrozen(cfg));
}
