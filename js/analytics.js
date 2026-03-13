function loadStats(){

let attempts =
localStorage.getItem("attempts") || 0

let correct =
localStorage.getItem("correct") || 0

let accuracy = attempts
? Math.round((correct/attempts)*100)
: 0

document.getElementById("stats").innerHTML =

`
Total Attempts: ${attempts}<br>
Correct Answers: ${correct}<br>
Accuracy: ${accuracy}%
`

}

function renderAnalytics() {
    const history = JSON.parse(localStorage.getItem("exam_history") || "[]");
    
    if (history.length === 0) {
        document.getElementById("historyTable").innerHTML = "<tr><td colspan='4'>No exam data recorded yet.</td></tr>";
        return;
    }

    // 1. Calculate Summary Stats
    const totalAttempts = history.length;
    const avgAccuracy = Math.round(history.reduce((acc, curr) => acc + curr.percentage, 0) / totalAttempts);
    const topScore = Math.max(...history.map(h => h.percentage));

    document.getElementById("totalAttempts").innerText = totalAttempts;
    document.getElementById("avgAccuracy").innerText = `${avgAccuracy}%`;
    document.getElementById("topScore").innerText = `${topScore}%`;

    // 2. Process Level Breakdown (Aggregate from all exams)
    const levelMap = {}; // { 'Associate': {correct: 10, total: 15} }
    
    history.forEach(session => {
        if (session.levels) {
            Object.keys(session.levels).forEach(lvl => {
                if (!levelMap[lvl]) levelMap[lvl] = { correct: 0, total: 0 };
                levelMap[lvl].correct += session.levels[lvl].correct;
                levelMap[lvl].total += session.levels[lvl].total;
            });
        }
    });

    const levelContainer = document.getElementById("levelStats");
    levelContainer.innerHTML = Object.keys(levelMap).map(lvl => {
        const perc = Math.round((levelMap[lvl].correct / levelMap[lvl].total) * 100);
        return `
            <div class="stat-card">
                <h3 style="color: #3b82f6">${lvl}</h3>
                <p>${perc}%</p>
                <small>${levelMap[lvl].correct}/${levelMap[lvl].total} Correct</small>
            </div>
        `;
    }).join('');

    // 3. Render Table History
    const tableBody = document.getElementById("historyTable");
    tableBody.innerHTML = history.reverse().map(session => `
        <tr>
            <td>${session.date}</td>
            <td><strong>${session.exam.toUpperCase()}</strong></td>
            <td>${session.score} / ${session.total} (${session.percentage}%)</td>
            <td>
                <span class="badge ${session.percentage >= 70 ? 'pass' : 'fail'}">
                    ${session.percentage >= 70 ? 'PASSED' : 'RETAKE'}
                </span>
            </td>
        </tr>
    `).join('');
}
