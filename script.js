let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

const mainQuizQuestions = [
    { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Control Processing Unit"], answer: "Central Processing Unit" },
    { question: "Which language is primarily used for web development?", options: ["Python", "Java", "HTML", "C++"], answer: "HTML" },
    { question: "Which company created Java?", options: ["Microsoft", "Apple", "Sun Microsystems", "Google"], answer: "Sun Microsystems" },
    { question: "Which protocol is used for secure communication over the internet?", options: ["HTTP", "HTTPS", "FTP", "TCP"], answer: "HTTPS" },
    { question: "What is the full form of RAM?", options: ["Random Access Memory", "Read Access Memory", "Rapid Action Module", "Run Access Memory"], answer: "Random Access Memory" },
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "High-Level Text Markup Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], answer: "HyperText Markup Language" },
    { question: "Which of these is a programming language?", options: ["Photoshop", "Python", "Windows", "Google"], answer: "Python" },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheet", "Colorful Style System"], answer: "Cascading Style Sheets" },
    { question: "What is the function of an operating system?", options: ["Manage hardware and software", "Create documents", "Browse the internet", "Edit images"], answer: "Manage hardware and software" },
    { question: "Which one is an example of cloud computing?", options: ["Google Drive", "MS Paint", "Windows Notepad", "Calculator"], answer: "Google Drive" }
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
        <br>
        <h3>Select a New Quiz:</h3>
        <button onclick="startQuiz('ai_ml')">AI & ML Quiz</button>
        <button onclick="startQuiz('cybersecurity')">Cybersecurity Quiz</button>
    `;
}

function startQuiz(quizType) {
    if (quizType === 'ai_ml') {
        alert("Starting AI & ML Quiz...");
        // Redirect or load AI & ML Quiz questions
    } else if (quizType === 'cybersecurity') {
        alert("Starting Cybersecurity Quiz...");
        // Redirect or load Cybersecurity Quiz questions
    }
}

loadQuestion();
