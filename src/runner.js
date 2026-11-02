import { PHASES, ALL_LESSONS, FEATURE_INDEX } from "./curriculum.js";
import { createAssert } from "./assert.js";
import { createContext } from "./context.js";

const STORAGE_KEY = "js_learn_progress_v1";
const LAST_LESSON_KEY = "js_learn_current_lesson_v1";
const draftKey = (id) => `js_learn_draft_${id}`;

const state = {
  tab: "lessons",
  search: "",
  currentId: localStorage.getItem(LAST_LESSON_KEY) || "0.1",
  progress: loadJson(STORAGE_KEY, {}),
  originals: new Map(),
  solutionText: "",
};

const els = {
  progressSummary: document.getElementById("progress-summary"),
  progressBar: document.getElementById("progress-bar"),
  tabLessons: document.getElementById("tab-lessons"),
  tabFeatures: document.getElementById("tab-features"),
  searchInput: document.getElementById("search-input"),
  navList: document.getElementById("nav-list"),
  lessonPhase: document.getElementById("lesson-phase"),
  lessonId: document.getElementById("lesson-id"),
  lessonTitle: document.getElementById("lesson-title"),
  lessonDoc: document.getElementById("lesson-doc"),
  demoOutput: document.getElementById("demo-output"),
  editor: document.getElementById("editor"),
  gutter: document.getElementById("gutter"),
  resultPanel: document.getElementById("result-panel"),
  resultTitle: document.getElementById("result-title"),
  resultList: document.getElementById("result-list"),
  solutionFold: document.getElementById("solution-fold"),
  solutionView: document.getElementById("solution-view"),
  saveNote: document.getElementById("save-note"),
  verifyOutput: document.getElementById("verify-output"),
  btnPrev: document.getElementById("btn-prev"),
  btnNext: document.getElementById("btn-next"),
  btnRunLesson: document.getElementById("btn-run-lesson"),
  btnTest: document.getElementById("btn-test-exercise"),
  btnShowSolution: document.getElementById("btn-show-solution"),
  btnReset: document.getElementById("btn-reset"),
  btnUseSolution: document.getElementById("btn-use-solution"),
  btnVerifyAll: document.getElementById("btn-verify-all"),
};

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
  } catch {
    return fallback;
  }
}

function getLesson(id) {
  return ALL_LESSONS.find((lesson) => lesson.id === id) || ALL_LESSONS[0];
}

function lessonIndex(id) {
  return ALL_LESSONS.findIndex((lesson) => lesson.id === id);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function formatInlineCode(text) {
  return escapeHtml(text).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function updateProgress() {
  const done = ALL_LESSONS.filter((lesson) => state.progress[lesson.id]).length;
  els.progressSummary.textContent = `${done} / ${ALL_LESSONS.length} 课写完了`;
  els.progressBar.style.width = `${(done / ALL_LESSONS.length) * 100}%`;
}

function renderSidebar() {
  updateProgress();
  els.navList.innerHTML = "";
  const query = state.search.trim().toLowerCase();

  if (state.tab === "lessons") {
    for (const phase of PHASES) {
      const matched = phase.lessons.filter(
        (lesson) =>
          !query ||
          `${lesson.id} ${lesson.title} ${lesson.slug}`.toLowerCase().includes(query)
      );
      if (!matched.length) continue;
      const title = document.createElement("div");
      title.className = "phase-title";
      title.textContent = phase.title.replace(/^阶段\s*/, "");
      els.navList.appendChild(title);
      for (const lesson of matched) {
        els.navList.appendChild(navButton(`${lesson.id}  ${lesson.title}`, lesson.id, state.progress[lesson.id] ? "过了" : ""));
      }
    }
    return;
  }

  for (const item of FEATURE_INDEX) {
    if (query && !`${item.feature} ${item.lessonId}`.toLowerCase().includes(query)) continue;
    els.navList.appendChild(navButton(item.feature, item.lessonId, item.lessonId));
  }
}

function navButton(label, id, mark) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `nav-item ${id === state.currentId ? "active" : ""}`;
  const text = document.createElement("span");
  text.textContent = label;
  button.appendChild(text);
  if (mark) {
    const done = document.createElement("span");
    done.className = "done-mark";
    done.textContent = mark;
    button.appendChild(done);
  }
  button.addEventListener("click", () => selectLesson(id));
  return button;
}

function renderDoc(lessonMod) {
  const points = lessonMod.keyPoints || [];
  const notes = lessonMod.remember || [];
  const task = lessonMod.taskDescription || "按编辑器里的注释，把函数补完整。";
  els.lessonDoc.innerHTML = `
    <p class="lead">${formatInlineCode(lessonMod.summary || "")}</p>
    <ol class="points">
      ${points.map((point, index) => `<li><span class="num">${index + 1}</span><div>${formatInlineCode(point)}</div></li>`).join("")}
    </ol>
    ${
      notes.length
        ? `<aside class="note"><h3>写的时候留意</h3><ul>${notes.map((note) => `<li>${formatInlineCode(note)}</li>`).join("")}</ul></aside>`
        : ""
    }
    <aside class="task"><h3>这题要你写</h3><p>${formatInlineCode(task)}</p></aside>
  `;
}

function syncGutter() {
  const lines = els.editor.value.split("\n").length;
  els.gutter.textContent = Array.from({ length: lines }, (_, index) => index + 1).join("\n");
  els.gutter.scrollTop = els.editor.scrollTop;
}

function rememberDraft() {
  localStorage.setItem(draftKey(state.currentId), els.editor.value);
  els.saveNote.textContent = "草稿留在这个浏览器里，刷新也不会丢。";
}

function rewriteImports(source, exercisePath) {
  const base = new URL(exercisePath, window.location.href);
  return source.replace(
    /(\bfrom\s*|\bimport\s*\(\s*)(["'])(\.\.?\/[^"']+)\2/g,
    (_, prefix, quote, spec) => `${prefix}${quote}${new URL(spec, base).href}${quote}`
  );
}

async function importSource(source, exercisePath) {
  const rewritten = rewriteImports(source, exercisePath);
  const blobUrl = URL.createObjectURL(new Blob([rewritten], { type: "text/javascript" }));
  try {
    return await import(blobUrl);
  } finally {
    URL.revokeObjectURL(blobUrl);
  }
}

function showResult(kind, title, rows) {
  els.resultPanel.className = `result ${kind}`;
  els.resultTitle.textContent = title;
  els.resultList.innerHTML = rows
    .map((row) => `<li class="${row.ok ? "ok" : "bad"}">${row.ok ? "通过" : "还没对"} · ${escapeHtml(row.label)}</li>`)
    .join("");
}

async function runDemo(lessonMeta) {
  els.demoOutput.textContent = "";
  const ctx = createContext((line) => {
    els.demoOutput.textContent += `${line}\n`;
  });
  try {
    const lessonMod = await import(`../${lessonMeta.lessonPath}?t=${Date.now()}`);
    renderDoc(lessonMod);
    if (typeof lessonMod.runDemo === "function") await lessonMod.runDemo(ctx);
    if (!els.demoOutput.textContent.trim()) els.demoOutput.textContent = "这个例子没有打印内容。";
  } catch (error) {
    els.demoOutput.textContent = error?.stack || error?.message || String(error);
  }
}

async function loadEditor(lessonMeta) {
  const response = await fetch(`./${lessonMeta.exercisePath}?t=${Date.now()}`);
  const original = await response.text();
  state.originals.set(lessonMeta.id, original);
  const solutionResponse = await fetch(`./${lessonMeta.solutionPath}?t=${Date.now()}`);
  state.solutionText = await solutionResponse.text();
  els.solutionView.textContent = state.solutionText;
  els.solutionFold.open = false;
  els.editor.value = localStorage.getItem(draftKey(lessonMeta.id)) ?? original;
  syncGutter();
  showResult("idle", "写在右边。写完按「检查这题」，或者直接按 ⌘↵ / Ctrl+Enter。", []);
}

async function checkCurrentCode() {
  const lessonMeta = getLesson(state.currentId);
  rememberDraft();
  showResult("idle", "正在跑你的代码…", []);
  const assert = createAssert();
  const ctx = createContext();
  try {
    const [studentMod, solutionMod] = await Promise.all([
      importSource(els.editor.value, lessonMeta.exercisePath),
      import(`../${lessonMeta.solutionPath}?t=${Date.now()}`),
    ]);
    await solutionMod.test(studentMod, assert, ctx);
    showResult("pass", `这题过了，${assert.results.length} 个检查都对。可以去下一课。`, assert.results);
    state.progress[lessonMeta.id] = true;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
    renderSidebar();
    saveExerciseFile(lessonMeta.exercisePath, els.editor.value);
  } catch (error) {
    const passed = assert.results.filter((row) => row.ok);
    const failed = error?.message || "代码没有跑起来";
    showResult("fail", failed, [...passed, { ok: false, label: failed }]);
  }
}

async function saveExerciseFile(exercisePath, source) {
  try {
    const response = await fetch("/api/save-exercise", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: exercisePath, source }),
    });
    if (response.ok) els.saveNote.textContent = "这版已经写回练习文件，刷新也还在。";
  } catch {
    // 浏览器草稿已经留下，文件服务不支持保存时也不影响做题。
  }
}

async function verifyAllSolutions() {
  els.verifyOutput.hidden = false;
  els.verifyOutput.textContent = "正在把每一课的题解跑一遍…\n";
  let assertions = 0;
  for (const lessonMeta of ALL_LESSONS) {
    const assert = createAssert();
    try {
      const [lessonMod, solutionMod] = await Promise.all([
        import(`../${lessonMeta.lessonPath}?t=${Date.now()}`),
        import(`../${lessonMeta.solutionPath}?t=${Date.now()}`),
      ]);
      if (typeof lessonMod.runDemo === "function") await lessonMod.runDemo(createContext());
      await solutionMod.test(solutionMod, assert, createContext());
      assertions += assert.results.length;
      els.verifyOutput.textContent += `过了 ${lessonMeta.id} ${lessonMeta.title}\n`;
    } catch (error) {
      els.verifyOutput.textContent += `停在 ${lessonMeta.id}：${error.message}\n`;
      return;
    }
  }
  els.verifyOutput.textContent += `\n${ALL_LESSONS.length} 课题解都过了，一共 ${assertions} 项检查。`;
}

async function selectLesson(id) {
  if (els.editor.value && state.currentId) rememberDraft();
  const lessonMeta = getLesson(id);
  state.currentId = lessonMeta.id;
  localStorage.setItem(LAST_LESSON_KEY, lessonMeta.id);
  els.lessonPhase.textContent = lessonMeta.phaseTitle;
  els.lessonId.textContent = lessonMeta.id;
  els.lessonTitle.textContent = lessonMeta.title;
  const index = lessonIndex(lessonMeta.id);
  els.btnPrev.disabled = index <= 0;
  els.btnNext.disabled = index === ALL_LESSONS.length - 1;
  renderSidebar();
  document.querySelector(".nav-item.active")?.scrollIntoView({ block: "nearest" });
  await Promise.all([runDemo(lessonMeta), loadEditor(lessonMeta)]);
}

els.editor.addEventListener("input", () => {
  syncGutter();
  rememberDraft();
});
els.editor.addEventListener("scroll", () => {
  els.gutter.scrollTop = els.editor.scrollTop;
});
els.editor.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    const start = els.editor.selectionStart;
    const end = els.editor.selectionEnd;
    els.editor.value = `${els.editor.value.slice(0, start)}  ${els.editor.value.slice(end)}`;
    els.editor.selectionStart = els.editor.selectionEnd = start + 2;
    syncGutter();
    rememberDraft();
  }
  if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
    event.preventDefault();
    checkCurrentCode();
  }
});

els.tabLessons.addEventListener("click", () => {
  state.tab = "lessons";
  els.tabLessons.classList.add("active");
  els.tabFeatures.classList.remove("active");
  renderSidebar();
});
els.tabFeatures.addEventListener("click", () => {
  state.tab = "features";
  els.tabFeatures.classList.add("active");
  els.tabLessons.classList.remove("active");
  renderSidebar();
});
els.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderSidebar();
});
els.btnPrev.addEventListener("click", () => {
  const index = lessonIndex(state.currentId);
  if (index > 0) selectLesson(ALL_LESSONS[index - 1].id);
});
els.btnNext.addEventListener("click", () => {
  const index = lessonIndex(state.currentId);
  if (index < ALL_LESSONS.length - 1) selectLesson(ALL_LESSONS[index + 1].id);
});
els.btnRunLesson.addEventListener("click", () => runDemo(getLesson(state.currentId)));
els.btnTest.addEventListener("click", () => checkCurrentCode());
els.btnShowSolution.addEventListener("click", () => {
  els.solutionFold.open = true;
  els.solutionView.scrollIntoView({ block: "nearest" });
});
els.btnUseSolution.addEventListener("click", () => {
  els.editor.value = state.solutionText;
  syncGutter();
  rememberDraft();
  showResult("idle", "题解已经放进编辑器。再按一次检查，看它为什么能过。", []);
});
els.btnReset.addEventListener("click", () => {
  const original = state.originals.get(state.currentId);
  if (original == null) return;
  els.editor.value = original;
  localStorage.removeItem(draftKey(state.currentId));
  syncGutter();
  showResult("idle", "已经回到这题最初的空白。", []);
});
els.btnVerifyAll.addEventListener("click", () => verifyAllSolutions());

selectLesson(state.currentId);
