export const summary =
  "`Proxy` 可以站在对象前面，拦截读取、写入和删除。缺的键可以给个默认值，不合法的赋值可以拒绝，每次修改也可以记下来。";

export const keyPoints = [
  "`get` 可以在属性不存在时返回一个默认值，也可以记下谁读过它。",
  "`set` 在严格模式下必须返回 `true` 才表示写成功。返回 `false` 会抛 `TypeError`。校验不过，你也可以自己抛一个更清楚的错误。",
];

export const remember = [
  "拦截了还想保留原来的行为，就在处理完自己的逻辑之后调用对应的 `Reflect` 方法。",
];

export const taskDescription =
  "写 `createAuditedObject(initialObj)`，返回 `{ proxy, history }`。每次通过 `proxy` 修改属性，都先往 `history` 里加一条 `{ key, oldValue, newValue }`，`key` 要转成字符串，然后再真正写入。直接改原来的对象时，不要记入 `history`。";

export async function runDemo(ctx) {
  const log = [];
  const p = new Proxy(
    { count: 0 },
    {
      set(target, key, val, receiver) {
        log.push(`${String(key)}: ${target[key]} -> ${val}`);
        return Reflect.set(target, key, val, receiver);
      },
    }
  );
  p.count = 1;
  p.count = 5;
  ctx.log("Proxy 捕获到的变更记录:", log);
}
