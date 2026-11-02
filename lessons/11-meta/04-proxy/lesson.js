export const summary =
  "使用 `new Proxy(target, handler)` 拦截对象的读取（`get`）、写入（`set`）、删除（`deleteProperty`），实现缺失键默认值、数据校验与变更审计日志。";

export const keyPoints = [
  "`get(target, prop, receiver)` 可在属性不存在时返回默认值，或自动记录读取行为。",
  "`set(target, prop, value, receiver)` 在严格模式下必须返回 `true` 表示写入成功；若返回 `false` 会抛出 `TypeError`（或直接在校验失败时抛自定义错误）。",
];

export const remember = [
  "响应式框架（如 Vue 3）、Mock 测试工具与配置审计底层都构建在 `Proxy` + `Reflect` 之上。",
];

export const taskDescription =
  "实现 `createAuditedObject(initialObj)`：返回 `{ proxy, history }`；每次通过 `proxy` 设置属性 `proxy[k] = v` 时，向 `history` 推入 `{ key: String(k), oldValue, newValue: v }` 并用 `Reflect.set` 完成写入。";

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
