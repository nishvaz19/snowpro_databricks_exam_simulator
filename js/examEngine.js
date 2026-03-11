let examQuestions = []
let answers = {}
let flagged = []
let current = 0
const EXAM_SIZE = 100

function shuffle(array){
return array.sort(()=>Math.random()-0.5)
}

function startExam(){

examQuestions = shuffle(questionBank).slice(0,EXAM_SIZE)

loadQuestion()

}

function loadQuestion(){

let q = examQuestions[current]

document.getElementById("question").innerHTML =
(current+1) + ". " + q.question

document.getElementById("progress").innerHTML =
"Question " + (current+1) + " / " + EXAM_SIZE

let html=""

q.options.forEach((opt,i)=>{

html += `
<label>
<input type="radio" name="opt" value="${i}"
${answers[current]==i?"checked":""}>
${opt}
</label><br>
`

})

document.getElementById("options").innerHTML = html

document.getElementById("hint").innerHTML = q.hint

}

function saveAnswer(){

let selected =
document.querySelector('input[name="opt"]:checked')

if(selected)
answers[current] = parseInt(selected.value)

}

function nextQuestion(){

saveAnswer()

if(current < EXAM_SIZE-1){
current++
loadQuestion()
}

}

function prevQuestion(){

saveAnswer()

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

if(!flagged.includes(current))
flagged.push(current)

alert("Question flagged")

}

function reviewExam(){

let html = "<h3>Flagged Questions</h3>"

flagged.forEach(q=>{
html += "Question " + (q+1) + "<br>"
})

document.getElementById("results").innerHTML = html

}

function submitExam(){

saveAnswer()

let score = 0

examQuestions.forEach((q,i)=>{

if(answers[i] == q.answer)
score++

})

let percent = Math.round(score/EXAM_SIZE*100)

document.getElementById("results").innerHTML =
"Score: "+score+" / "+EXAM_SIZE+" ("+percent+"%)"

}
