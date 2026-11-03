export const summary =
  "以前在字段名前加下划线，只是提醒别人别碰，外面其实照样能读写。`#` 开头的字段是真的私有，类外面写出来，语法上就过不了。";

export const keyPoints = [
  "`#` 开头的字段和方法，只能在这个类的花括号里面用。在类外面写 `inst.#secret`，解析阶段就会报错。",
  "`#secret in obj` 可以安全地问：这个值是不是真的带有这块私有字段。问错了也不会抛异常。",
];

export const remember = [
  "`_secret` 只是约定。`#secret` 才是引擎不让外面碰的私有成员。",
];

export const taskDescription =
  "`TokenVault` 用私有字段 `#token` 保存令牌，外面不能直接读取。`constructor(token)` 把令牌存进去。`verify(candidate)` 判断传进来的值是不是这枚令牌。`TokenVault.isVault(obj)` 判断一个值是不是真的 `TokenVault`：它得是非 `null` 的对象，而且真的有这个私有字段。普通对象即使自己加了同名字段，也要返回 false。";

export async function runDemo(ctx) {
  class Box {
    #val;
    constructor(v) {
      this.#val = v;
    }
    read() {
      return this.#val;
    }
    static isBox(x) {
      return typeof x === "object" && x !== null && #val in x;
    }
  }
  const b = new Box(42);
  ctx.log("Box.isBox(b):", Box.isBox(b), "Box.isBox({}):", Box.isBox({}));
}
