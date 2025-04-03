let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

const mainQuizQuestions = [
    { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Control Processing Unit"], answer: "Central Processing Unit" },
    { question: "Which language is primarily used for web development?", options: ["Python", "Java", "HTML", "C++"], answer: "HTML" },
    { question: "Which company created Java?", options: ["Microsoft", "Apple", "Sun Microsystems", "Google"], answer: "Sun Microsystems" }
];

function loadQuestion() {
    if (currentQuestionIndex < mainQuizQuestions.length) {
        let q = mainQuizQuestions[currentQuestionIndex];
        document.getElementById("question").innerText = q.question;
        let optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";

        q.options.forEach(option => {
            let btn = document.createElement("button");
            btn.innerText = option;
            btn.onclick = function() { selectAnswer(btn, option); };
            optionsDiv.appendChild(btn);
        });
    } else {
        showResults();
    }
}

function selectAnswer(button, selected) {
    let correctAnswer = mainQuizQuestions[currentQuestionIndex].answer;
    if (selected === correctAnswer) {
        correctCount++;
    } else {
        wrongCount++;
    }

    let buttons = document.querySelectorAll("#options button");
    buttons.forEach(btn => btn.disabled = true);
    button.classList.add("selected");

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1000);
}

function showResults() {
    document.querySelector(".container").innerHTML = `
        <h2>Quiz Completed!</h2>
        <p style="font-size: 18px; font-weight: bold;">Correct Answers: <span style="color: green;">${correctCount}</span></p>
        <p style="font-size: 18px; font-weight: bold;">Wrong Answers: <span style="color: red;">${wrongCount}</span></p>
    `;
}

loadQuestion();
