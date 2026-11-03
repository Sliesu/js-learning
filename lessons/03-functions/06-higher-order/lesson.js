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
  "开户短信只能发一次，客户连点也不能重发。请写 once(fn)，返回一个新函数。这个新函数第一次被调用时，才真正执行 fn，参数原样传进去，并记住返回值。之后无论再调用多少次，都直接交回第一次的结果，fn 不能再跑。";

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
