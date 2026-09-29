const app = document.getElementById("app");
const STORAGE_KEY = "cbt_pkk_tka_data_v2";

let state = {
  studentName: "",
  currentStageId: null,
  currentQuestion: 0,
  answers: [],
  deadlineAt: null,
  timer: null
};

function getStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") || {};
  return {
    studentName: data.studentName || "",
    results: data.results || {},
    sessions: data.sessions || {}
  };
}

function saveStorage(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text ?? "";
  return div.innerHTML;
}

function formatTime(totalSeconds) {
  const secondsSafe = Math.max(0, totalSeconds || 0);
  const minutes = Math.floor(secondsSafe / 60);
  const seconds = secondsSafe % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getStage(stageId) {
  return stages.find(stage => stage.id === stageId);
}

function makeBlankAnswer(question) {
  if (question.type === "multi") return [];
  if (question.type === "tf") return question.statements.map(() => null);
  return null;
}

function makeBlankAnswers(stage) {
  return stage.questions.map(makeBlankAnswer);
}

function isQuestionAnswered(question, answer) {
  if (question.type === "multi") return Array.isArray(answer) && answer.length > 0;
  if (question.type === "tf") return Array.isArray(answer) && answer.every(value => value !== null);
  return answer !== null && answer !== undefined;
}

function answersEqual(question, studentAnswer) {
  if (question.type === "multi") {
    const a = [...(studentAnswer || [])].sort((x, y) => x - y);
    const b = [...question.answer].sort((x, y) => x - y);
    return a.length === b.length && a.every((value, index) => value === b[index]);
  }

  if (question.type === "tf") {
    if (!Array.isArray(studentAnswer) || studentAnswer.length !== question.statements.length) return false;
    return question.statements.every((statement, index) => studentAnswer[index] === statement.answer);
  }

  return studentAnswer === question.answer;
}

function questionTypeLabel(type) {
  if (type === "multi") return "PG Kompleks";
  if (type === "tf") return "PGK Benar/Salah";
  return "Pilihan Ganda";
}

function clearTimer() {
  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
}

function remainingSeconds() {
  if (!state.deadlineAt) return 0;
  return Math.max(0, Math.ceil((state.deadlineAt - Date.now()) / 1000));
}

function saveCurrentSession() {
  if (!state.currentStageId || !state.deadlineAt) return;
  const storage = getStorage();
  storage.sessions[state.currentStageId] = {
    currentQuestion: state.currentQuestion,
    answers: state.answers,
    deadlineAt: state.deadlineAt,
    updatedAt: new Date().toISOString()
  };
  saveStorage(storage);
}

function renderHeader(showLogout = true) {
  const storage = getStorage();
  return `
    <header class="cbt-header">
      <div class="container d-flex justify-content-between align-items-center gap-3">
        <div class="d-flex gap-3 align-items-center">
          <div class="brand-badge">CBT</div>
          <div>
            <div class="fw-bold">PKK TKA SMK</div>
            <small class="text-white-50">Computer Based Test</small>
          </div>
        </div>
        <div class="text-end">
          <div class="fw-semibold">${escapeHtml(storage.studentName)}</div>
          ${showLogout ? `<button class="btn btn-sm btn-outline-light mt-1" onclick="logout()">Keluar</button>` : ""}
        </div>
      </div>
    </header>`;
}

function renderLogin() {
  clearTimer();
  const saved = getStorage();

  app.innerHTML = `
    <div class="login-wrap">
      <section class="login-left">
        <div class="brand-badge mb-4">CBT</div>
        <span class="badge rounded-pill bg-primary-subtle text-primary-emphasis align-self-start mb-3">LATIHAN TKA SMK</span>
        <h1 class="fw-bold display-5">Produk/Projek Kreatif dan Kewirausahaan</h1>
        <p class="mt-3 fs-5 text-white-50">
          Latihan bertahap untuk memahami konsep, menerapkan perhitungan, menganalisis stimulus,
          dan mengikuti simulasi try out.
        </p>
        <div class="mt-4 feature-list">
          <div>✓ 130 soal dalam 4 tahapan</div>
          <div>✓ PG, PG kompleks, dan Benar/Salah</div>
          <div>✓ Kunci jawaban dan pembahasan</div>
          <div>✓ Sesi tersimpan otomatis di perangkat</div>
        </div>
      </section>

      <section class="login-right">
        <div class="login-card card-soft p-4 p-md-5">
          <span class="badge text-bg-primary mb-3">CBT PKK TKA SMK</span>
          <h2 class="fw-bold mb-2">Masuk ke Sistem</h2>
          <p class="muted mb-4">Masukkan nama lengkap siswa untuk memulai latihan.</p>

          <form id="loginForm">
            <label class="form-label fw-semibold">Nama Lengkap</label>
            <input id="studentName" type="text" class="form-control form-control-lg"
              placeholder="Contoh: Ahmad Fadli" value="${escapeHtml(saved.studentName)}" required minlength="3">
            <button class="btn btn-primary btn-lg w-100 mt-4">Masuk ke CBT</button>
          </form>

          <div class="footer-note mt-4">
            Nama, jawaban, sesi aktif, dan hasil latihan disimpan menggunakan LocalStorage pada browser ini.
          </div>
        </div>
      </section>
    </div>`;

  document.getElementById("loginForm").addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("studentName").value.trim();
    if (name.length < 3) return;
    const storage = getStorage();
    storage.studentName = name;
    saveStorage(storage);
    state.studentName = name;
    renderDashboard();
  });
}

function renderDashboard() {
  clearTimer();
  state.currentStageId = null;
  const storage = getStorage();

  const totalQuestions = stages.reduce((sum, stage) => sum + stage.questions.length, 0);
  const completed = Object.keys(storage.results).length;

  const cards = stages.map((stage, index) => {
    const result = storage.results[stage.id];
    const session = storage.sessions[stage.id];
    const sessionActive = session && session.deadlineAt > Date.now();

    let statusClass = "status-not-started";
    let statusText = "Belum dikerjakan";
    if (sessionActive) {
      statusClass = "status-progress";
      statusText = "Sedang dikerjakan";
    }
    if (result) {
      statusClass = "status-done";
      statusText = `Selesai • Nilai ${result.score}`;
    }

    const types = [...new Set(stage.questions.map(q => questionTypeLabel(q.type)))];

    return `
      <div class="col-md-6">
        <div class="stage-card" onclick="openStage('${stage.id}')">
          <div class="d-flex justify-content-between align-items-start gap-3 mb-3">
            <div class="stage-number">${index + 1}</div>
            <span class="status-pill ${statusClass}">${statusText}</span>
          </div>
          <h4 class="fw-bold mb-1">${stage.title}</h4>
          <div class="text-primary fw-semibold mb-3">${stage.subtitle}</div>
          <p class="muted">${stage.description}</p>
          <div class="d-flex flex-wrap gap-2 mb-3">
            ${types.map(type => `<span class="mini-tag">${type}</span>`).join("")}
          </div>
          <div class="d-flex justify-content-between small pt-3 border-top">
            <span><strong>${stage.questions.length}</strong> soal</span>
            <span><strong>${stage.duration}</strong> menit</span>
          </div>
        </div>
      </div>`;
  }).join("");

  app.innerHTML = `
    <div class="cbt-shell">
      ${renderHeader()}
      <main class="container py-5">
        <div class="dashboard-hero card-soft p-4 p-md-5 mb-4">
          <div class="row align-items-center g-4">
            <div class="col-lg-8">
              <p class="text-primary fw-bold mb-1">DASHBOARD SISWA</p>
              <h2 class="fw-bold mb-2">Halo, ${escapeHtml(storage.studentName)}</h2>
              <p class="muted mb-0">Kerjakan tahapan secara bertahap. Baca pembahasan setelah selesai untuk mengetahui alasan setiap jawaban.</p>
            </div>
            <div class="col-lg-4">
              <div class="row g-2 text-center">
                <div class="col-4"><div class="stat-box"><strong>${totalQuestions}</strong><span>Total Soal</span></div></div>
                <div class="col-4"><div class="stat-box"><strong>${completed}</strong><span>Tahap Selesai</span></div></div>
                <div class="col-4"><div class="stat-box"><strong>4</strong><span>Tahapan</span></div></div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div>
            <h3 class="fw-bold mb-1">Pilih Tahapan Latihan</h3>
            <p class="muted mb-0">Dari penguatan konsep sampai simulasi ujian komprehensif.</p>
          </div>
          <button class="btn btn-outline-danger" onclick="resetProgress()">Reset Seluruh Progress</button>
        </div>

        <div class="row g-4">${cards}</div>
      </main>
    </div>`;
}

function openStage(stageId) {
  clearTimer();
  const stage = getStage(stageId);
  const storage = getStorage();
  const result = storage.results[stageId];
  const session = storage.sessions[stageId];
  const hasActiveSession = session && session.deadlineAt > Date.now();

  const topicCount = {};
  stage.questions.forEach(q => topicCount[q.topic] = (topicCount[q.topic] || 0) + 1);
  const topicText = Object.entries(topicCount).map(([topic, count]) => `${topic} (${count})`).join(" • ");

  app.innerHTML = `
    <div class="cbt-shell">
      ${renderHeader()}
      <main class="container py-5">
        <button class="btn btn-light border mb-4" onclick="renderDashboard()">← Kembali</button>

        <div class="card-soft p-4 p-md-5">
          <span class="badge text-bg-primary mb-3">${stage.title}</span>
          <h2 class="fw-bold">${stage.subtitle}</h2>
          <p class="muted">${stage.description}</p>

          <div class="row g-3 my-3">
            <div class="col-md-4"><div class="info-box"><small>Jumlah Soal</small><strong>${stage.questions.length}</strong></div></div>
            <div class="col-md-4"><div class="info-box"><small>Waktu</small><strong>${stage.duration} menit</strong></div></div>
            <div class="col-md-4"><div class="info-box"><small>Nilai Terakhir</small><strong>${result ? result.score : "-"}</strong></div></div>
          </div>

          <div class="topic-box mb-4">
            <div class="fw-bold mb-2">Cakupan Soal</div>
            <div class="small muted">${topicText}</div>
          </div>

          <div class="alert alert-warning mb-4">
            <strong>Petunjuk:</strong> PG Kompleks dapat memiliki lebih dari satu jawaban benar. Pada soal Benar/Salah, semua pernyataan harus dijawab. Nilai satu soal diberikan jika seluruh bagian pada soal tersebut tepat.
          </div>

          <div class="d-flex gap-2 flex-wrap">
            ${hasActiveSession ? `<button class="btn btn-success btn-lg" onclick="resumeStage('${stageId}')">Lanjutkan Sesi</button>` : ""}
            <button class="btn btn-primary btn-lg" onclick="startStage('${stageId}')">${hasActiveSession ? "Mulai Ulang" : "Mulai Mengerjakan"}</button>
          </div>
        </div>
      </main>
    </div>`;
}

function startStage(stageId) {
  const storage = getStorage();
  if (storage.sessions[stageId] && storage.sessions[stageId].deadlineAt > Date.now()) {
    if (!confirm("Memulai ulang akan menghapus jawaban sesi yang sedang berjalan. Lanjutkan?")) return;
  }

  const stage = getStage(stageId);
  state.currentStageId = stageId;
  state.currentQuestion = 0;
  state.answers = makeBlankAnswers(stage);
  state.deadlineAt = Date.now() + stage.duration * 60 * 1000;
  saveCurrentSession();
  renderQuestion();
  startTimer();
}

function resumeStage(stageId) {
  const storage = getStorage();
  const session = storage.sessions[stageId];
  if (!session) return startStage(stageId);

  state.currentStageId = stageId;
  state.currentQuestion = session.currentQuestion || 0;
  state.answers = session.answers || makeBlankAnswers(getStage(stageId));
  state.deadlineAt = session.deadlineAt;

  if (remainingSeconds() <= 0) {
    finishStage(true);
    return;
  }
  renderQuestion();
  startTimer();
}


function textWithBreaks(value) {
  return escapeHtml(value || "").replace(/\n/g, "<br>");
}

function renderQuestionTable(table) {
  if (!table || !Array.isArray(table.headers) || !Array.isArray(table.rows)) return "";
  return `
    <div class="table-responsive my-3">
      <table class="table table-bordered table-sm align-middle stimulus-table mb-0">
        <thead>
          <tr>${table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${table.rows.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(String(cell))}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>`;
}

function renderStimulus(question) {
  if (!question.stimulus && !question.table) return "";
  return `
    <div class="stimulus-box">
      <div class="d-flex justify-content-between align-items-center gap-2 mb-2">
        <div class="stimulus-title mb-0">STIMULUS</div>
        ${question.stimulusRange ? `<span class="stimulus-range">${escapeHtml(question.stimulusRange)}</span>` : ""}
      </div>
      ${question.stimulus ? `<div class="stimulus-text">${textWithBreaks(question.stimulus)}</div>` : ""}
      ${renderQuestionTable(question.table)}
    </div>`;
}

function renderSingleOptions(question, answer) {
  return question.options.map((option, index) => {
    const active = answer === index ? "active" : "";
    return `
      <div class="option-item ${active}" onclick="selectSingle(${index})">
        <div class="d-flex gap-3 align-items-start">
          <div class="option-label">${String.fromCharCode(65 + index)}</div>
          <div class="pt-1">${escapeHtml(option)}</div>
        </div>
      </div>`;
  }).join("");
}

function renderMultiOptions(question, answer) {
  const selected = Array.isArray(answer) ? answer : [];
  return question.options.map((option, index) => {
    const active = selected.includes(index) ? "active" : "";
    return `
      <div class="option-item ${active}" onclick="toggleMulti(${index})">
        <div class="d-flex gap-3 align-items-start">
          <div class="option-check">${active ? "✓" : ""}</div>
          <div>
            <div class="fw-bold small mb-1">${String.fromCharCode(65 + index)}</div>
            <div>${escapeHtml(option)}</div>
          </div>
        </div>
      </div>`;
  }).join("");
}

function renderTfOptions(question, answer) {
  const values = Array.isArray(answer) ? answer : question.statements.map(() => null);
  return `
    <div class="tf-list">
      ${question.statements.map((statement, index) => `
        <div class="tf-row">
          <div class="tf-statement"><strong>${index + 1}.</strong> ${escapeHtml(statement.text)}</div>
          <div class="tf-actions">
            <button class="btn btn-sm ${values[index] === true ? "btn-success" : "btn-outline-success"}" onclick="selectTf(${index}, true)">Benar</button>
            <button class="btn btn-sm ${values[index] === false ? "btn-danger" : "btn-outline-danger"}" onclick="selectTf(${index}, false)">Salah</button>
          </div>
        </div>`).join("")}
    </div>`;
}

function renderQuestion() {
  const stage = getStage(state.currentStageId);
  const question = stage.questions[state.currentQuestion];
  const answer = state.answers[state.currentQuestion];
  const answeredCount = stage.questions.filter((q, index) => isQuestionAnswered(q, state.answers[index])).length;

  let answerHtml = "";
  let instruction = "Pilih satu jawaban yang paling tepat.";
  if (question.type === "multi") {
    answerHtml = renderMultiOptions(question, answer);
    instruction = "Pilih semua jawaban yang benar. Jawaban dapat lebih dari satu.";
  } else if (question.type === "tf") {
    answerHtml = renderTfOptions(question, answer);
    instruction = "Tentukan Benar atau Salah pada setiap pernyataan.";
  } else {
    answerHtml = renderSingleOptions(question, answer);
  }

  const nav = stage.questions.map((q, index) => {
    const answered = isQuestionAnswered(q, state.answers[index]);
    let cls = answered ? " answered" : "";
    if (index === state.currentQuestion) cls += " current";
    return `<button class="q-btn${cls}" onclick="goToQuestion(${index})">${index + 1}</button>`;
  }).join("");

  app.innerHTML = `
    <div class="cbt-shell">
      <header class="cbt-header">
        <div class="container d-flex justify-content-between align-items-center gap-3">
          <div>
            <div class="fw-bold">${stage.title}</div>
            <small class="text-white-50">${escapeHtml(getStorage().studentName)}</small>
          </div>
          <div class="text-end">
            <small class="text-white-50 d-block">Sisa Waktu</small>
            <div id="topTimer" class="fw-bold fs-5">${formatTime(remainingSeconds())}</div>
          </div>
        </div>
      </header>

      <main class="container py-4">
        <div class="question-layout">
          <section class="card-soft question-card overflow-hidden">
            <div class="question-toolbar d-flex flex-wrap justify-content-between gap-2">
              <div class="d-flex flex-wrap gap-2 align-items-center">
                <span class="badge text-bg-primary">Soal ${state.currentQuestion + 1}</span>
                <span class="badge badge-soft">${questionTypeLabel(question.type)}</span>
              </div>
              <span class="muted small">${state.currentQuestion + 1} / ${stage.questions.length}</span>
            </div>

            <div class="${question.stimulus || question.table ? 'tka-split' : 'question-only'}">
              ${question.stimulus || question.table ? `<div class="tka-stimulus-pane">${renderStimulus(question)}</div>` : ''}
              <div class="tka-question-pane">
                <h5 class="fw-semibold lh-base mb-2">${textWithBreaks(question.question)}</h5>
                <div class="question-instruction mb-4">${instruction}</div>
                <div class="d-grid gap-3">${answerHtml}</div>
              </div>
            </div>

            <div class="question-footer d-flex justify-content-between">
              <button class="btn btn-outline-secondary" onclick="previousQuestion()" ${state.currentQuestion === 0 ? "disabled" : ""}>Sebelumnya</button>
              ${state.currentQuestion === stage.questions.length - 1
                ? `<button class="btn btn-success" onclick="confirmFinish()">Selesai & Nilai</button>`
                : `<button class="btn btn-primary" onclick="nextQuestion()">Berikutnya</button>`}
            </div>
          </section>

          <aside>
            <div class="card-soft p-3 mb-3 sticky-panel">
              <div class="timer-box mb-3">
                <div class="small mb-1">Sisa Waktu</div>
                <div id="sideTimer" class="fs-4">${formatTime(remainingSeconds())}</div>
              </div>
              <div class="fw-bold mb-2">Navigasi Soal</div>
              <div class="question-nav">${nav}</div>
              <div class="small muted mt-3">Biru muda = sudah dijawab<br>Biru tua = soal aktif</div>
            </div>

            <div class="card-soft p-3">
              <div class="d-flex justify-content-between mb-2"><span class="fw-bold">Progress</span><span class="small">${answeredCount}/${stage.questions.length}</span></div>
              <div class="progress" role="progressbar">
                <div class="progress-bar" style="width:${(answeredCount / stage.questions.length) * 100}%"></div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>`;
}

function selectSingle(index) {
  state.answers[state.currentQuestion] = index;
  saveCurrentSession();
  renderQuestion();
}

function toggleMulti(index) {
  const current = Array.isArray(state.answers[state.currentQuestion]) ? [...state.answers[state.currentQuestion]] : [];
  const existing = current.indexOf(index);
  if (existing >= 0) current.splice(existing, 1);
  else current.push(index);
  state.answers[state.currentQuestion] = current.sort((a, b) => a - b);
  saveCurrentSession();
  renderQuestion();
}

function selectTf(statementIndex, value) {
  const question = getStage(state.currentStageId).questions[state.currentQuestion];
  const current = Array.isArray(state.answers[state.currentQuestion])
    ? [...state.answers[state.currentQuestion]]
    : question.statements.map(() => null);
  current[statementIndex] = value;
  state.answers[state.currentQuestion] = current;
  saveCurrentSession();
  renderQuestion();
}

function nextQuestion() {
  const stage = getStage(state.currentStageId);
  if (state.currentQuestion < stage.questions.length - 1) {
    state.currentQuestion++;
    saveCurrentSession();
    renderQuestion();
  }
}

function previousQuestion() {
  if (state.currentQuestion > 0) {
    state.currentQuestion--;
    saveCurrentSession();
    renderQuestion();
  }
}

function goToQuestion(index) {
  state.currentQuestion = index;
  saveCurrentSession();
  renderQuestion();
}

function startTimer() {
  clearTimer();
  state.timer = setInterval(() => {
    const remaining = remainingSeconds();
    const topTimer = document.getElementById("topTimer");
    const sideTimer = document.getElementById("sideTimer");
    if (topTimer) topTimer.textContent = formatTime(remaining);
    if (sideTimer) sideTimer.textContent = formatTime(remaining);
    if (remaining <= 0) {
      clearTimer();
      finishStage(true);
    }
  }, 1000);
}

function confirmFinish() {
  const stage = getStage(state.currentStageId);
  const unanswered = stage.questions.filter((q, index) => !isQuestionAnswered(q, state.answers[index])).length;
  const message = unanswered > 0
    ? `Masih ada ${unanswered} soal yang belum lengkap dijawab. Tetap akhiri ujian?`
    : "Yakin ingin mengakhiri tahapan ini dan melihat nilai?";
  if (confirm(message)) finishStage(false);
}

function finishStage(timeout = false) {
  clearTimer();
  const stage = getStage(state.currentStageId);
  if (!stage) return renderDashboard();

  let correct = 0;
  stage.questions.forEach((question, index) => {
    if (answersEqual(question, state.answers[index])) correct++;
  });

  const score = Math.round((correct / stage.questions.length) * 100);
  const storage = getStorage();
  storage.results[stage.id] = {
    score,
    correct,
    total: stage.questions.length,
    answers: state.answers,
    finishedAt: new Date().toISOString()
  };
  delete storage.sessions[stage.id];
  saveStorage(storage);
  renderResult(stage, score, correct, timeout);
}

function singleAnswerText(question, answer) {
  if (answer === null || answer === undefined) return "<em>Tidak dijawab</em>";
  return `${String.fromCharCode(65 + answer)}. ${escapeHtml(question.options[answer])}`;
}

function multiAnswerText(question, answer) {
  if (!Array.isArray(answer) || answer.length === 0) return "<em>Tidak dijawab</em>";
  return answer.map(index => `${String.fromCharCode(65 + index)}. ${escapeHtml(question.options[index])}`).join("<br>");
}

function tfAnswerText(question, answer, showKey = false) {
  const values = showKey ? question.statements.map(s => s.answer) : answer;
  if (!Array.isArray(values)) return "<em>Tidak dijawab</em>";
  return question.statements.map((statement, index) => {
    const value = values[index];
    const label = value === null || value === undefined ? "Belum dijawab" : (value ? "Benar" : "Salah");
    return `<div class="review-statement"><span>${index + 1}. ${escapeHtml(statement.text)}</span><strong>${label}</strong></div>`;
  }).join("");
}

function reviewAnswer(question, answer, key = false) {
  if (question.type === "multi") return multiAnswerText(question, key ? question.answer : answer);
  if (question.type === "tf") return tfAnswerText(question, answer, key);
  return singleAnswerText(question, key ? question.answer : answer);
}

function renderResult(stage, score, correct, timeout) {
  const result = getStorage().results[stage.id];
  const angle = Math.round((score / 100) * 360);

  const review = stage.questions.map((question, index) => {
    const studentAnswer = result.answers[index];
    const correctQuestion = answersEqual(question, studentAnswer);
    return `
      <div class="review-card ${correctQuestion ? "correct" : "wrong"}">
        <div class="d-flex flex-wrap justify-content-between gap-2 mb-2">
          <div>
            <span class="fw-bold me-2">Soal ${index + 1}</span>
            <span class="mini-tag">${questionTypeLabel(question.type)}</span>
            <span class="mini-tag">${escapeHtml(question.topic)}</span>
          </div>
          <span class="answer-chip ${correctQuestion ? "answer-correct" : "answer-wrong"}">${correctQuestion ? "Benar" : "Salah"}</span>
        </div>
        <div class="mb-3 fw-medium">${escapeHtml(question.question)}</div>
        <div class="answer-review-box mb-2">
          <div class="small fw-bold mb-1">Jawaban Anda</div>
          <div class="small">${reviewAnswer(question, studentAnswer, false)}</div>
        </div>
        <div class="answer-review-box key-box mb-2">
          <div class="small fw-bold mb-1">Kunci Jawaban</div>
          <div class="small">${reviewAnswer(question, studentAnswer, true)}</div>
        </div>
        <div class="explanation-box mt-3"><strong>Pembahasan:</strong><br>${escapeHtml(question.explanation)}</div>
      </div>`;
  }).join("");

  app.innerHTML = `
    <div class="cbt-shell">
      ${renderHeader()}
      <main class="container py-5">
        <div class="card-soft p-4 p-md-5 mb-4 text-center">
          ${timeout ? `<div class="alert alert-warning">Waktu habis. Sistem otomatis mengakhiri sesi dan menilai jawaban yang telah tersimpan.</div>` : ""}
          <p class="text-primary fw-bold mb-1">HASIL LATIHAN</p>
          <h2 class="fw-bold">${stage.title}</h2>
          <div class="result-score my-4" style="--score-angle:${angle}deg"><span>${score}</span></div>
          <div class="fs-5 mb-1">Jawaban benar: <strong>${correct}</strong> dari <strong>${stage.questions.length}</strong></div>
          <p class="muted">Nilai dihitung per soal. Untuk PG Kompleks dan Benar/Salah, seluruh pilihan/pernyataan pada satu soal harus tepat.</p>
          <div class="d-flex justify-content-center gap-2 flex-wrap mt-3">
            <button class="btn btn-outline-primary" onclick="openStage('${stage.id}')">Ulangi Tahap</button>
            <button class="btn btn-primary" onclick="renderDashboard()">Kembali ke Dashboard</button>
          </div>
        </div>

        <div class="mb-3">
          <h4 class="fw-bold">Kunci Jawaban & Pembahasan</h4>
          <p class="muted">Gunakan bagian ini untuk merefleksikan soal yang masih salah.</p>
        </div>
        ${review}
      </main>
    </div>`;
}

function resetProgress() {
  if (!confirm("Hapus seluruh hasil dan sesi latihan pada perangkat ini?")) return;
  const storage = getStorage();
  storage.results = {};
  storage.sessions = {};
  saveStorage(storage);
  renderDashboard();
}

function logout() {
  clearTimer();
  renderLogin();
}

window.addEventListener("beforeunload", saveCurrentSession);

document.addEventListener("DOMContentLoaded", () => {
  const storage = getStorage();
  if (storage.studentName) {
    state.studentName = storage.studentName;
    renderDashboard();
  } else {
    renderLogin();
  }
});
