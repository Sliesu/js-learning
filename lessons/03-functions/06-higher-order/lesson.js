export const summary =
  "掌握高阶函数（Higher-Order Function）：接收函数作为参数，或返回一个新函数（如 `once`、`memoize`、条件谓词组合）。";

export const keyPoints = [
  "把「遍历骨架」和「每项怎么处理的回调」拆开，是 `map`、`filter` 等所有集合操作的核心思想。",
  "用高阶函数包装原函数，可以在不改动原函数代码的前提下加上缓存、日志、只执行一次等横切能力。",
];

export const remember = [
  "包装函数时使用 `(...args) => fn(...args)` 可以无损转发任意数量的参数。",
];

export const taskDescription =
  "实现 `once(fn)`：返回一个包装函数，只在第一次调用时真正执行 `fn(...args)`，后续调用直接返回第一次的缓存结果。";

export async function runDemo(ctx) {
  const withLog = (fn) => (...args) => {
    const res = fn(...args);
    ctx.log(`调用 ${fn.name}(${args.join(", ")}) => ${res}`);
    return res;
  };
  const loggedAdd = withLog(function add(a, b) {
    return a + b;
  });
  loggedAdd(3, 4);
}
