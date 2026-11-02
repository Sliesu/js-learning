export function createContext(onLog = () => {}) {
  const logs = [];

  function formatArg(arg) {
    if (typeof arg === "string") return arg;
    if (typeof arg === "bigint") return `${arg.toString()}n`;
    if (typeof arg === "symbol") return arg.toString();
    if (arg instanceof Error) return `${arg.name}: ${arg.message}`;
    if (arg instanceof Map) return `Map(${JSON.stringify([...arg.entries()])})`;
    if (arg instanceof Set) return `Set(${JSON.stringify([...arg.values()])})`;
    try {
      return JSON.stringify(arg);
    } catch {
      return String(arg);
    }
  }

  function log(...args) {
    const line = args.map(formatArg).join(" ");
    logs.push(line);
    onLog(line);
  }

  async function fetchJson(relativePath) {
    const cleanPath = relativePath.replace(/^\.\//, "").replace(/^\//, "");
    if (typeof window !== "undefined" && typeof window.fetch === "function") {
      const res = await fetch(`./${cleanPath}`);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${cleanPath}`);
      }
      return res.json();
    }
    const fs = await import("node:fs/promises");
    const path = await import("node:path");
    const url = await import("node:url");
    const rootDir = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
    const full = path.join(rootDir, cleanPath);
    const raw = await fs.readFile(full, "utf8");
    return JSON.parse(raw);
  }

  return {
    logs,
    log,
    fetchJson,
  };
}
