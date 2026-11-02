const PAIRS = {
  "(": ")",
  "[": "]",
  "{": "}",
  '"': '"',
  "'": "'",
  "`": "`",
};

const OPEN_BRACKETS = { "(": ")", "[": "]", "{": "}" };

function edit(textarea, start, end, text, cursor, cursorEnd = cursor) {
  const value = textarea.value;
  textarea.value = value.slice(0, start) + text + value.slice(end);
  textarea.selectionStart = cursor;
  textarea.selectionEnd = cursorEnd;
}

function lineStartAt(value, index) {
  return value.lastIndexOf("\n", index - 1) + 1;
}

function indentOf(text) {
  return text.match(/^[ ]*/)[0];
}

function wantsContinuation(line) {
  const trimmed = line.trim();
  if (!trimmed || /[;{}]\s*$/.test(trimmed)) return false;
  return /^(if|else|for|while|do|try|catch|finally)\b/.test(trimmed) || /=>\s*$/.test(trimmed);
}

function scanLine(text, state) {
  let delta = 0;
  let leadingClosers = 0;
  let seenCode = false;
  let i = 0;

  while (i < text.length) {
    const char = text[i];
    const next = text[i + 1];

    if (state === "block") {
      if (char === "*" && next === "/") {
        state = "code";
        i += 2;
        continue;
      }
      i += 1;
      continue;
    }

    if (state === "squote" || state === "dquote" || state === "template") {
      if (char === "\\") {
        i += 2;
        continue;
      }
      const end = state === "squote" ? "'" : state === "dquote" ? '"' : "`";
      if (char === end) state = "code";
      i += 1;
      continue;
    }

    if (char === "/" && next === "/") break;
    if (char === "/" && next === "*") {
      state = "block";
      i += 2;
      continue;
    }
    if (char === "'") {
      state = "squote";
      seenCode = true;
      i += 1;
      continue;
    }
    if (char === '"') {
      state = "dquote";
      seenCode = true;
      i += 1;
      continue;
    }
    if (char === "`") {
      state = "template";
      seenCode = true;
      i += 1;
      continue;
    }
    if (char === "(" || char === "[" || char === "{") {
      delta += 1;
      seenCode = true;
    } else if (char === ")" || char === "]" || char === "}") {
      delta -= 1;
      if (!seenCode) leadingClosers += 1;
      seenCode = true;
    } else if (!/\s/.test(char)) {
      seenCode = true;
    }
    i += 1;
  }

  return { state, delta, leadingClosers };
}

export function formatSource(source) {
  const text = source.replace(/\r\n/g, "\n").replace(/\t/g, "  ");
  const lines = text.split("\n");
  let depth = 0;
  let state = "code";
  let hanging = false;
  const formatted = [];

  for (const line of lines) {
    if (state !== "code") {
      formatted.push(line);
      state = scanLine(line, state).state;
      continue;
    }

    const trimmed = line.trim();
    if (!trimmed) {
      formatted.push("");
      hanging = false;
      continue;
    }

    const info = scanLine(trimmed, "code");
    const extra = hanging && !trimmed.startsWith("{") ? 1 : 0;
    const lineDepth = Math.max(0, depth - info.leadingClosers + extra);
    formatted.push(`${"  ".repeat(lineDepth)}${trimmed}`);
    depth = Math.max(0, depth + info.delta);
    state = info.state;
    hanging = wantsContinuation(trimmed);
  }

  return formatted.join("\n");
}

function placeCursor(textarea, value, index) {
  const before = value.slice(0, index);
  const line = before.split("\n").length - 1;
  const column = index - (before.lastIndexOf("\n") + 1);
  const lines = textarea.value.split("\n");
  const safeLine = Math.min(line, lines.length - 1);
  const offset = lines.slice(0, safeLine).join("\n").length + (safeLine > 0 ? 1 : 0);
  const next = offset + Math.min(column, lines[safeLine].length);
  textarea.selectionStart = textarea.selectionEnd = next;
}

export function formatTextarea(textarea) {
  const before = textarea.value;
  const formatted = formatSource(before);
  if (formatted === before) return false;
  const cursor = textarea.selectionStart;
  textarea.value = formatted;
  placeCursor(textarea, before, cursor);
  return true;
}

function indentSelection(textarea, outdent) {
  const value = textarea.value;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const from = lineStartAt(value, start);
  let sliceEnd = end;
  if (end > start && value[end - 1] === "\n") sliceEnd = end - 1;
  if (start === end) {
    const newline = value.indexOf("\n", from);
    sliceEnd = newline === -1 ? value.length : newline;
  } else if (sliceEnd < value.length && value[sliceEnd] !== "\n") {
    const newline = value.indexOf("\n", sliceEnd);
    sliceEnd = newline === -1 ? value.length : newline;
  }
  const selected = value.slice(from, sliceEnd);
  const lines = selected.split("\n");
  const nextLines = lines.map((line) => {
    if (outdent) return line.replace(/^ {1,2}/, "");
    return line.length ? `  ${line}` : line;
  });
  const next = nextLines.join("\n");
  const deltaStart = nextLines[0].length - lines[0].length;
  const delta = next.length - selected.length;
  const nextStart = Math.max(from, start + deltaStart);
  const nextEnd = start === end ? nextStart : Math.max(nextStart, end + delta);
  edit(textarea, from, sliceEnd, next, nextStart, nextEnd);
}

function handleEnter(textarea) {
  const value = textarea.value;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const before = value.slice(0, start);
  const after = value.slice(end);
  const current = before.slice(lineStartAt(before, before.length));
  const indent = indentOf(current);
  const charBefore = before.slice(-1);
  const charAfter = after[0] || "";

  if (start === end && OPEN_BRACKETS[charBefore] === charAfter) {
    const inner = `${indent}  `;
    const text = `\n${inner}\n${indent}`;
    edit(textarea, start, end, text, start + 1 + inner.length);
    return;
  }

  const bump = /[{\[(]\s*$/.test(current) || wantsContinuation(current) ? "  " : "";
  const text = `\n${indent}${bump}`;
  edit(textarea, start, end, text, start + text.length);
}

function handlePair(textarea, key) {
  const value = textarea.value;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const close = PAIRS[key];

  if (start !== end) {
    const selected = value.slice(start, end);
    edit(textarea, start, end, key + selected + close, start + 1, end + 1);
    return;
  }

  if (value[start] === key && (key === close || key === ")" || key === "]" || key === "}")) {
    textarea.selectionStart = textarea.selectionEnd = start + 1;
    return;
  }

  edit(textarea, start, end, key + close, start + 1);
}

export function handleEditorKeydown(textarea, event) {
  if (event.isComposing || event.key === "Process") return false;
  if (event.metaKey || event.ctrlKey || event.altKey) return false;

  if (event.key === "Tab") {
    event.preventDefault();
    if (textarea.selectionStart === textarea.selectionEnd && !event.shiftKey) {
      edit(textarea, textarea.selectionStart, textarea.selectionEnd, "  ", textarea.selectionStart + 2);
    } else {
      indentSelection(textarea, event.shiftKey);
    }
    return true;
  }

  if (event.key === "Enter") {
    event.preventDefault();
    handleEnter(textarea);
    return true;
  }

  if (event.key === "Backspace" && textarea.selectionStart === textarea.selectionEnd) {
    const start = textarea.selectionStart;
    const value = textarea.value;
    const prev = value[start - 1];
    const next = value[start];
    if (prev && PAIRS[prev] === next) {
      event.preventDefault();
      edit(textarea, start - 1, start + 1, "", start - 1);
      return true;
    }
    const from = lineStartAt(value, start);
    const indent = value.slice(from, start);
    if (/^  +$/.test(indent)) {
      event.preventDefault();
      edit(textarea, start - 2, start, "", start - 2);
      return true;
    }
    return false;
  }

  if (")]}".includes(event.key)) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    if (start === end && value[start] === event.key) {
      event.preventDefault();
      textarea.selectionStart = textarea.selectionEnd = start + 1;
      return true;
    }
    if (start === end) {
      const from = lineStartAt(value, start);
      const indent = value.slice(from, start);
      if (/^ +$/.test(indent) && indent.length >= 2) {
        event.preventDefault();
        const text = `${indent.slice(2)}${event.key}`;
        edit(textarea, from, start, text, from + text.length);
        return true;
      }
    }
    return false;
  }

  if (PAIRS[event.key]) {
    event.preventDefault();
    handlePair(textarea, event.key);
    return true;
  }

  return false;
}

export function renderGutter(gutter, source) {
  const count = Math.max(source.split("\n").length, 1);
  const rows = [];
  for (let line = 1; line <= count; line += 1) rows.push(String(line));
  gutter.textContent = rows.join("\n");
}
