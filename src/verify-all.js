import { ALL_LESSONS, FEATURE_INDEX } from "./curriculum.js";
import { createAssert } from "./assert.js";
import { createContext } from "./context.js";

async function main() {
  console.log(`开始校验全部 ${ALL_LESSONS.length} 课...`);
  let totalAssertions = 0;

  for (const lesson of ALL_LESSONS) {
    const lessonMod = await import(`../${lesson.lessonPath}`);
    const exerciseMod = await import(`../${lesson.exercisePath}`);
    const solutionMod = await import(`../${lesson.solutionPath}`);

    const demoCtx = createContext();
    if (typeof lessonMod.runDemo !== "function") {
      throw new Error(`课程 ${lesson.id} 缺少 runDemo`);
    }
    await lessonMod.runDemo(demoCtx);

    // 验证未作答 exercise 会失败
    let exerciseFailed = false;
    try {
      const exAssert = createAssert();
      const exCtx = createContext();
      await solutionMod.test(exerciseMod, exAssert, exCtx);
    } catch {
      exerciseFailed = true;
    }
    if (!exerciseFailed) {
      throw new Error(`课程 ${lesson.id} 的 exercise.js 在初始未作答状态下竟然通过了测试`);
    }

    // 验证 solution 全部通过
    const solAssert = createAssert();
    const solCtx = createContext();
    await solutionMod.test(solutionMod, solAssert, solCtx);
    totalAssertions += solAssert.results.length;
    console.log(`✓ ${lesson.id} ${lesson.title} (${solAssert.results.length} 项断言)`);
  }

  const lessonIds = new Set(ALL_LESSONS.map((l) => l.id));
  for (const item of FEATURE_INDEX) {
    if (!lessonIds.has(item.lessonId)) {
      throw new Error(`特性索引 "${item.feature}" 指向了不存在的课号 ${item.lessonId}`);
    }
  }

  console.log(
    `\n校验完成：${ALL_LESSONS.length} 课全部通过，${totalAssertions} 项断言，${FEATURE_INDEX.length} 项特性索引有效。`
  );
}

main().catch((err) => {
  console.error("校验失败:", err);
  process.exit(1);
});
