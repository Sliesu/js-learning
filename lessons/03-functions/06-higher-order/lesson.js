export const summary =
  "函数可以接收另一个函数，也可以返回一个新函数。集合方法、缓存、只执行一次，都是这个想法。";

export const keyPoints = [
  "把「怎么遍历」和「每一项怎么处理」拆开，就是 `map`、`filter` 这些方法在做的事。",
  "用一个函数包住原来的函数，可以不改原函数，就给它加上缓存、日志，或者让它只真正执行一次。",
];

export const remember = [
  "包一层的时候写成 `(...args) => fn(...args)`，原来有多少个参数，都原样传进去。",
];

export const taskDescription =
  "写 `once(fn)`，包住一个函数，让它只真正执行一次。第一次调用时执行 `fn`，参数原样传入，并记住返回值。之后再怎么调用，都直接返回第一次的结果。";

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
