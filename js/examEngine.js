let examQuestions = []
let answers = {}
let flagged = []
let current = 0
const EXAM_SIZE = 500 // 305 // 280

let examTimer
let timeRemaining = 60 * 120 // 120 minutes

function shuffle(array){
return [...array].sort(()=>Math.random()-0.5)
}

function startExam(){

//examQuestions = shuffle(questionBank).slice(0,EXAM_SIZE)
examQuestions = questionBank.slice(0,EXAM_SIZE)

startTimer()

loadQuestion()

}

function startTimer(){

examTimer = setInterval(()=>{

timeRemaining--

let minutes = Math.floor(timeRemaining/60)
let seconds = timeRemaining % 60

document.getElementById("timer").innerHTML =
"Time: " + minutes + ":" + (seconds<10?"0":"") + seconds

if(timeRemaining<=0){
clearInterval(examTimer)
submitExam()
}

},1000)

}

function loadQuestion(){

let q = examQuestions[current]

document.getElementById("question").innerHTML =
(current+1) + ". " + q.question

let flagMark = flagged.includes(current) ? " 🚩" : ""

document.getElementById("progress").innerHTML =
"Question " + (current+1) + " / " + EXAM_SIZE + flagMark

renderOptions(q)

document.getElementById("hint").innerHTML = q.explanation || ""

}

function renderOptions(q){

let html=""

q.options.forEach((opt,i)=>{

let checked = answers[current]===i ? "checked" : ""

html += `
<label class="option">
<input type="radio"
name="opt"
value="${i}"
${checked}
onclick="saveAnswer(${i})">
${opt}
</label>
`

})

document.getElementById("options").innerHTML = html

}

function saveAnswer(value){

answers[current] = value

}

function nextQuestion(){

if(current < EXAM_SIZE-1){
current++
loadQuestion()
}

}

function prevQuestion(){

if(current > 0){
current--
loadQuestion()
}

}

function showHint(){

let h = document.getElementById("hint")

h.style.display =
h.style.display === "block" ? "none":"block"

}

function flagCurrent(){

if(flagged.includes(current)){
flagged = flagged.filter(f => f !== current)
alert("Flag removed")
}
else{
flagged.push(current)
alert("Question flagged")
}

loadQuestion()

}

function reviewExam(){

let html = "<h3>Flagged Questions</h3><br>"

if(flagged.length===0){
html += "No flagged questions."
}
else{

flagged.forEach(q=>{

html += `
<button onclick="jumpTo(${q})">
Question ${q+1}
</button><br><br>
`

})

}

document.getElementById("results").innerHTML = html

}

function jumpTo(q){

current = q

loadQuestion()

window.scrollTo(0,0)

}

function submitExam() {
    clearInterval(examTimer);

    let score = 0;
    let levelBreakdown = {}; 
    let detailedReviewHTML = ""; // Temporary string to hold question reviews

    // Use actual length in case EXAM_SIZE was modified
    const totalQuestions = examQuestions.length;

    // SINGLE LOOP: Calculate score, breakdown, and build review HTML
    examQuestions.forEach((q, i) => {
        const difficulty = q.difficulty || "unclassified";
        
        // Initialize difficulty tracking
        if (!levelBreakdown[difficulty]) {
            levelBreakdown[difficulty] = { correct: 0, total: 0 };
        }
        levelBreakdown[difficulty].total++;

        // Check Answer
        const isCorrect = answers[i] === q.answer;
        if (isCorrect) {
            score++;
            levelBreakdown[difficulty].correct++;
        }

        // Build individual question review
        detailedReviewHTML += `
            <div class="review-item" style="margin-bottom:20px; padding:10px; border-bottom:1px solid #eee;">
                <b>Q${i + 1}:</b> ${q.question}<br>
                <span style="color: ${answers[i] === undefined ? 'gray' : 'black'}">
                    Your answer: ${q.options[answers[i]] || "<i>Not answered</i>"}
                </span><br>
                <span style="color: green">Correct answer: ${q.options[q.answer]}</span><br>
                <b>${isCorrect ? "✅ Correct" : "❌ Incorrect"}</b>
                <br><i style="font-size:0.9em; color:#555;">${q.explanation || ""}</i>
            </div>
        `;
    });

    // FINAL CALCULATIONS
    const percent = Math.round((score / totalQuestions) * 100);
    const passed = percent >= 70;

    // --- SAVE TO ANALYTICS (Call this ONCE) ---
    saveExamResults(window.currentExamType || "General", score, totalQuestions, levelBreakdown);

    // --- RENDER RESULTS UI ---
    const summaryHTML = `
        <div class="results-summary" style="text-align:center; padding:20px; background:#f8fafc; border-radius:10px;">
            <h2>Exam Results Submitted!</h2>
            <p>Data saved to your <a href="analytics.html">Study Analytics</a>.</p>
            <h1 style="font-size: 3.5rem; margin:10px 0; color: ${passed ? '#10b981' : '#ef4444'}">${percent}%</h1>
            <h3>Final Score: ${score} / ${totalQuestions}</h3>
            <span class="badge" style="background:${passed ? '#dcfce7' : '#fee2e2'}; color:${passed ? '#166534' : '#991b1b'}; padding:5px 15px; border-radius:20px; font-weight:bold;">
                ${passed ? "PASSED" : "RETAKE REQUIRED"}
            </span>
        </div>
        <hr style="margin:30px 0;">
        <h3>Detailed Review</h3>
    `;

    // Combine summary with the detailed review we built in the loop
    document.getElementById("results").innerHTML = summaryHTML + detailedReviewHTML;

    // Scroll to results
    window.scrollTo({ top: document.getElementById("results").offsetTop, behavior: 'smooth' });
}

// Add this helper function at the top for analytics 
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
