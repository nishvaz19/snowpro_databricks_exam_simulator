let examQuestions = []
let answers = {}
let flagged = []
let current = 0
const EXAM_SIZE = 405 // 305 // 280

let examTimer
let timeRemaining = 60 * 60 // 60 minutes

function shuffle(array){
return [...array].sort(()=>Math.random()-0.5)
}

function startExam(){

examQuestions = shuffle(questionBank).slice(0,EXAM_SIZE)

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

function submitExam(){

clearInterval(examTimer)

let score = 0

examQuestions.forEach((q,i)=>{

if(answers[i] === q.answer)
score++

})

let percent = Math.round(score/EXAM_SIZE*100)

let resultHTML = `
<h2>Exam Results</h2>

<h3>${score} / ${EXAM_SIZE}</h3>

<h3>${percent}%</h3>

<hr>

<h3>Review Answers</h3>
`

examQuestions.forEach((q,i)=>{

let correct = answers[i]===q.answer

resultHTML += `
<div style="margin-bottom:20px">

<b>Q${i+1}:</b> ${q.question}<br>

Your answer: ${q.options[answers[i]] || "Not answered"}<br>

Correct answer: ${q.options[q.answer]}<br>

${correct ? "✅ Correct" : "❌ Incorrect"}

<br><i>${q.explanation}</i>

</div>
`

})

document.getElementById("results").innerHTML = resultHTML

window.scrollTo(0,document.body.scrollHeight)

}
