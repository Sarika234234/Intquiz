const allQuestions = {
  default: [
    { q: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Control Processing Unit"], answer: 0 },
    { q: "Which language is used for web apps?", options: ["PHP", "Python", "JavaScript", "All"], answer: 3 },
    { q: "What is the full form of HTML?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Main Language"], answer: 0 },
    { q: "Which tag is used to define JavaScript?", options: ["<js>", "<javascript>", "<script>", "<code>"], answer: 2 },
    { q: "What is 5 + 10?", options: ["10", "15", "20", "25"], answer: 1 },
    { q: "What is the brain of computer?", options: ["RAM", "Monitor", "CPU", "Keyboard"], answer: 2 },
    { q: "Which one is a programming language?", options: ["HTML", "CSS", "Java", "Photoshop"], answer: 2 },
    { q: "Who developed Python?", options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"], answer: 0 },
    { q: "Which is not an operating system?", options: ["Windows", "Linux", "Oracle", "Mac"], answer: 2 },
    { q: "Which company makes the iPhone?", options: ["Samsung", "Microsoft", "Apple", "Google"], answer: 2 },
  ],
  ai: [
    { q: "What does AI stand for?", options: ["Artificial Intelligence", "Automatic Input", "Analog Interface", "Advanced Internet"], answer: 0 },
    { q: "AI is used in?", options: ["Speech recognition", "Robotics", "Self-driving cars", "All of these"], answer: 3 },
    { q: "Which is a type of AI?", options: ["Narrow AI", "Wide AI", "Shallow AI", "Mini AI"], answer: 0 },
    { q: "What language is most used in AI?", options: ["Python", "C++", "HTML", "PHP"], answer: 0 },
    { q: "Which is an AI framework?", options: ["TensorFlow", "Photoshop", "CorelDraw", "Premiere Pro"], answer: 0 },
    { q: "AI can learn using?", options: ["Machine Learning", "Painting", "Video Editing", "Cropping"], answer: 0 },
    { q: "Who is the father of AI?", options: ["John McCarthy", "Bill Gates", "Elon Musk", "Mark Zuckerberg"], answer: 0 },
    { q: "What is NLP in AI?", options: ["Natural Language Processing", "New Language Programming", "Normal Logic Processing", "None"], answer: 0 },
    { q: "AI is part of?", options: ["Data Science", "Math only", "Chemistry", "Biology"], answer: 0 },
    { q: "Siri and Alexa are examples of?", options: ["Robots", "Smartphones", "AI Assistants", "Games"], answer: 2 },
  ],
  cyber: [
    { q: "What does Cyber Security protect?", options: ["Data", "Devices", "Networks", "All of the above"], answer: 3 },
    { q: "Which one is a cyber attack?", options: ["Phishing", "Fishing", "Singing", "None"], answer: 0 },
    { q: "Strong passwords include?", options: ["Letters", "Numbers", "Symbols", "All"], answer: 3 },
    { q: "What is a firewall?", options: ["Security system", "Wall of fire", "Game", "Network"], answer: 0 },
    { q: "What does HTTPS mean?", options: ["Secure website", "Hacking tool", "Hyper Tool", "None"], answer: 0 },
    { q: "VPN stands for?", options: ["Virtual Private Network", "Very Personal Network", "Verified Protected Network", "None"], answer: 0 },
    { q: "Which is safe?", options: ["https://example.com", "http://example.com", "freeoffers.com", "randomlink.org"], answer: 0 },
    { q: "Ransomware is?", options: ["A virus", "Antivirus", "Firewall", "Cleaner"], answer: 0 },
    { q: "Phishing tries to?", options: ["Steal information", "Fix bugs", "Clean PC", "Boost speed"], answer: 0 },
    { q: "Best way to stay safe online?", options: ["Update software", "Click all links", "Use weak passwords", "Ignore updates"], answer: 0 },
  ]
};

let questions = [];
let current = 0;
let correct = 0;
let wrong = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.q;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correctIndex = questions[current].answer;
  if (selected === correctIndex) correct++;
  else wrong++;

  current++;
  if (current < questions.length) loadQuestion();
  else showResult();
}

function showResult() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("result-box").style.display = "block";
  document.getElementById("correct-count").textContent = correct;
  document.getElementById("wrong-count").textContent = wrong;
}

function startQuiz(type = "default") {
  questions = allQuestions[type];
  current = 0;
  correct = 0;
  wrong = 0;

  document.getElementById("result-box").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  loadQuestion();
}

window.onload = () => startQuiz();
