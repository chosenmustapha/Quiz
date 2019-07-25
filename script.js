const questions = [
  {
    question: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Mark", "Bill Gates"],
    answer: "Bill Gates",
    choice: null
  },
  {
    question: "What is ten to the power of 0?",
    options: ["0", "1", "2"],
    answer: "1",
    choice: null
  },

  {
    question: "What is the value of e in mathematics?",
    options: ["1.2", "3.14", "2.67"],
    answer: "2.67",
    choice: null
  },
  {
    question: "Is C an object oriented programming language?",
    options: ["Yes", "No", "C++"],
    answer: "No",
    choice: null
  },
  {
    question: "Is React a framework",
    options: ["No it is not", "It's JS library", "Yes it's a framework"],
    answer: "It's JS library",
    choice: null
  },

  {
    question: "Is this an awesome interactive page?",
    options: ["No, No", "YES!!!", "Um debatable"],
    answer: "YES!!!",
    choice: null
  }
];

let correct = 0;
let question_number = 0;

document.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
});

function loadQuestion() {
  let currentQuestion = questions[question_number];
  document.querySelector("#question").innerHTML = currentQuestion.question;
  let options = document.getElementById("options");
  options.innerHTML = "";

  for (const option of currentQuestion.options) {
    options.innerHTML += `<button class="option">${option}</button>`;
  }

  document.querySelectorAll(".option").forEach(option => {
    option.onclick = () => {
      question_number++;
      currentQuestion.choice = option.textContent;
      if (option.textContent === currentQuestion.answer) {
        correct++;
      }
      document.getElementById("correct").innerHTML =
        correct + "|" + question_number;

      question_number >= questions.length ? gameOver() : loadQuestion();
    };
  });
}

function gameOver() {
  document.getElementById("game").style = "display: none";
  document.getElementById("gameOver").style = "visibility: visible";
  document.querySelector(
    "#gameOver > h4"
  ).innerHTML = `You scored ${correct} out of ${questions.length}`;

  questions.map(question => {
    let li = document.createElement("li");
    li.innerHTML = `<strong>${question.question}</strong>
    Chose: ${question.choice} 
    Correct: ${question.answer}
    ${question.answer === question.choice ? "&check;" : "&times;"}`;
    li.style = `background-color: ${
      question.answer === question.choice ? "green" : "red"
    }`;
    document.querySelector("ul").appendChild(li);
  });
}
