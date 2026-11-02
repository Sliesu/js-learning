export async function runHeavySumInWorker(numbers) {
  if (
    typeof globalThis.Worker === "function" &&
    typeof URL.createObjectURL === "function"
  ) {
    const code = `
      self.onmessage = (e) => {
        const total = e.data.reduce((s, n) => s + n * n, 0);
        self.postMessage(total);
      };
    `;
    const blob = new Blob([code], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    try {
      return await new Promise((resolve, reject) => {
        const worker = new Worker(url);
        worker.onmessage = (e) => {
          worker.terminate();
          resolve(e.data);
        };
        worker.onerror = (err) => {
          worker.terminate();
          reject(err);
        };
        worker.postMessage(numbers);
      });
    } finally {
      URL.revokeObjectURL(url);
    }
  }
  return numbers.reduce((s, n) => s + n * n, 0);
}

export async function test(mod, assert) {
  const sum = await mod.runHeavySumInWorker([1, 2, 3, 4]);
  assert.equal(sum, 30, "1^2 + 2^2 + 3^2 + 4^2 = 30");
}
