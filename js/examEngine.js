/* ======================================================
   GLOBAL STATE
   ====================================================== */
let examQuestions = [];
let answers = {};
let flagged = [];
let current = 0;
let EXAM_SIZE = 0; // Updated dynamically based on loaded bank

let examTimer;
let timeRemaining = 60 * 120; // 120 minutes

/* ======================================================
   CORE EXAM ENGINE
   ====================================================== */

// Wait for all scripts and the DOM to be fully ready
/*window.onload = function() {
    console.log("Checking for questionBank...");
    if (typeof questionBank !== 'undefined' && questionBank.length > 0) {
        console.log("Bank loaded with " + questionBank.length + " questions.");
        startExam(); 
    } else {
        alert("Error: questionBank not found. Ensure the JS data file is linked correctly in your HTML.");
    }
};*/

function startExam() {
    // Ensure data exists
    if (typeof questionBank === 'undefined') return;

    // Load questions (shuffled or direct)
    // To shuffle, use: examQuestions = shuffle(questionBank);
    examQuestions = [...questionBank]; 
    
    // Set the global size based on the actual bank size
    EXAM_SIZE = examQuestions.length; 

    // Reset session data
    current = 0;
    answers = {};
    flagged = [];
    
    startTimer();
    loadQuestion();
}

function loadQuestion() {
    let q = examQuestions[current];
    
    if (!q) {
        console.error("No question found at index: " + current);
        return;
    }

    // Render Question Text
    document.getElementById("question").innerHTML = (current + 1) + ". " + q.question;

    // Render Progress and Flag status
    let flagMark = flagged.includes(current) ? " 🚩" : "";
    document.getElementById("progress").innerHTML = `Question ${current + 1} / ${EXAM_SIZE}${flagMark}`;

    renderOptions(q);

    // Prepare Hint/Explanation (Hidden by default)
    const hintBox = document.getElementById("hint");
    hintBox.innerHTML = q.explanation || "No explanation available.";
    hintBox.style.display = "none"; 
}

function renderOptions(q) {
    let html = "";
    q.options.forEach((opt, i) => {
        let checked = answers[current] === i ? "checked" : "";
        html += `
            <label class="option" style="display:block; margin-bottom:10px; cursor:pointer;">
                <input type="radio" name="opt" value="${i}" ${checked} onclick="saveAnswer(${i})">
                ${opt}
            </label>
        `;
    });
    document.getElementById("options").innerHTML = html;
}

function saveAnswer(value) {
    answers[current] = value;
}

/* ======================================================
   NAVIGATION & UTILITIES
   ====================================================== */

function nextQuestion() {
    if (current < EXAM_SIZE - 1) {
        current++;
        loadQuestion();
        window.scrollTo(0,0);
    }
}

function prevQuestion() {
    if (current > 0) {
        current--;
        loadQuestion();
        window.scrollTo(0,0);
    }
}

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function showHint() {
    let h = document.getElementById("hint");
    h.style.display = (h.style.display === "block") ? "none" : "block";
}

function flagCurrent() {
    if (flagged.includes(current)) {
        flagged = flagged.filter(f => f !== current);
    } else {
        flagged.push(current);
    }
    loadQuestion();
}

function jumpTo(qIndex) {
    current = qIndex;
    loadQuestion();
    window.scrollTo(0,0);
}

/* ======================================================
   TIMER LOGIC
   ====================================================== */

function startTimer() {
    if (examTimer) clearInterval(examTimer);
    
    examTimer = setInterval(() => {
        timeRemaining--;
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;

        document.getElementById("timer").innerHTML = 
            `Time: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(examTimer);
            submitExam();
        }
    }, 1000);
}

/* ======================================================
   SUBMISSION & ANALYTICS
   ====================================================== */

function submitExam() {
    clearInterval(examTimer);
    let score = 0;
    let levelBreakdown = {}; 
    let detailedReviewHTML = ""; 

    examQuestions.forEach((q, i) => {
        const difficulty = q.difficulty || "unclassified";
        if (!levelBreakdown[difficulty]) {
            levelBreakdown[difficulty] = { correct: 0, total: 0 };
        }
        levelBreakdown[difficulty].total++;

        const isCorrect = answers[i] === q.answer;
        if (isCorrect) {
            score++;
            levelBreakdown[difficulty].correct++;
        }

        detailedReviewHTML += `
            <div class="review-item" style="margin-bottom:20px; padding:15px; border:1px solid #ddd; border-radius:8px;">
                <b>Q${i + 1}:</b> ${q.question}<br>
                <span style="color: ${answers[i] === undefined ? 'gray' : (isCorrect ? 'green' : 'red')}">
                    Your answer: ${q.options[answers[i]] || "<i>Not answered</i>"}
                </span><br>
                <span style="color: green">Correct answer: ${q.options[q.answer]}</span><br>
                <b>${isCorrect ? "✅ Correct" : "❌ Incorrect"}</b>
                <p style="font-size:0.9em; background:#f9f9f9; padding:5px;"><i>Explanation: ${q.explanation || ""}</i></p>
            </div>
        `;
    });

    const percent = Math.round((score / EXAM_SIZE) * 100);
    const passed = percent >= 70;

    // Save to LocalStorage
    saveExamResults(window.currentExamType || "Azure", score, EXAM_SIZE, levelBreakdown);

    // Render Results UI
    const summaryHTML = `
        <div class="results-summary" style="text-align:center; padding:20px; background:#f0f4f8; border-radius:10px;">
            <h2>Exam Completed</h2>
            <h1 style="font-size: 3rem; color: ${passed ? '#2ecc71' : '#e74c3c'}">${percent}%</h1>
            <h3>Score: ${score} / ${EXAM_SIZE}</h3>
            <p>${passed ? "CONGRATULATIONS! YOU PASSED." : "RETAKE SUGGESTED."}</p>
            <button onclick="location.reload()" style="padding:10px 20px;">Restart Exam</button>
        </div>
        <hr>
    `;

    document.getElementById("results").innerHTML = summaryHTML + detailedReviewHTML;
    window.scrollTo({ top: document.getElementById("results").offsetTop, behavior: 'smooth' });
}

function saveExamResults(examType, score, total, levelBreakdown) {
    let history = JSON.parse(localStorage.getItem("exam_history") || "[]");
    const session = {
        date: new Date().toLocaleString(),
        exam: examType,
        score: score,
        total: total,
        percentage: Math.round((score / total) * 100),
        levels: levelBreakdown 
    };
    history.push(session);
    localStorage.setItem("exam_history", JSON.stringify(history));
}

const ExamEngine = {
    getRandom: (bank, count) => [...bank].sort(() => 0.5 - Math.random()).slice(0, count),
    getByLevel: (bank, level) => bank.filter(q => q.difficulty === level),
    getByCategory: (bank, cat) => bank.filter(q => q.category.toLowerCase() === cat.toLowerCase())
};
