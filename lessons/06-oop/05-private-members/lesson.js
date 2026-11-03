export const summary =
  "使用语言级硬私有字段 `#field`、私有方法 `#helper()` 以及品牌检查 `#field in obj` 实现真正不可被外部直接读取或覆盖的封装。";

export const keyPoints = [
  "以 `#` 开头的字段和方法只能在 `class { ... }` 花括号内部访问；在类外部写 `inst.#secret` 会在语法解析期直接报错。",
  "`#secret in obj`（Ergonomic brand checks）可以安全判断任意值 `obj` 是否是拥有该私有字段的本类真实实例，不会抛异常。",
];

export const remember = [
  "下划线 `_secret` 只是君子协定（外部照样能读写），`#secret` 才是引擎强制隔离的真私有成员。",
];

export const taskDescription =
  "TokenVault 用私有字段 #token 保存令牌，外面不能直接读取。constructor(token) 把令牌存进去。verify(candidate) 判断传进来的值是不是这枚令牌。TokenVault.isVault(obj) 判断一个值是不是真的 TokenVault。它必须是非 null 的对象，而且真的有这个私有字段。普通对象即使自己加了同名字段，也要返回 false。";

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
