var currentQuestion = 0; 
var score = 0;

var questions = [
  {   
    question: "What is JavaScript?",
    options: [
      "A programming language",
      "A type of coffee",
      "A web server",
      "An operating system"
    ],
    answer: "A programming language"
  },
  {
    question: "Which is the largest planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Jupiter"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Which HTML tag is used to include JavaScript?",
    options: ["<css>", "<script>", "<js>", "<javascript>"],
    answer: "<script>"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: "Netscape"
  }
];

function loadQuestion() {
    var questionElement = document.getElementById('question');
    var optionsElement = document.getElementById('options');
    var nextBtn = document.getElementById('next-btn');
    var message = document.getElementById('message');
    
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";
    message.textContent = "Let's Choose the option!";
    nextBtn.style.display = "none";

    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        var button = document.createElement('button');
        button.setAttribute("class" , "btn");
        button.textContent = questions[currentQuestion].options[i];
        button.onclick = function() {
          if (questions[currentQuestion].options[i] === questions[currentQuestion].answer) {
            score++;
          }
          message.textContent = ""; 
          message.style.margin = "8px";
          nextBtn.style.display = "block"; 
        };
        optionsElement.appendChild(button);
    }
}

function goToNextQuestion() {
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
      document.getElementById('next-btn').style.display = "none";
    } else {
      showResult();
    }
}

document.getElementById('next-btn').onclick = goToNextQuestion;

function showResult() {
    var quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
      <h2>Quiz Completed</h2>
      <p>Your score: ${score} / ${questions.length}</p>
      <a href="./index.html">Restart</a>
    `;
}

loadQuestion(); 