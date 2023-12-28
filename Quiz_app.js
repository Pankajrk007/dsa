const quizQuestions = [
   {
      question: "Q.1)  What is the capital of India?",
      options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
      answerIndex: 0,
   },
   {
      question: "Q.2)  Who is the president of India?",
      options: ["Modi", "Biden", "Murmu", "Kovind"],
      answerIndex: 2,
   },
   {
      question: "Q.3)  Who has written the Indian constitution?",
      options: ["Modi", "BabaSaheb", "Murmu", "Gandhiji"],
      answerIndex: 1,
   },
   {
      question: "Q.4)  Where is Taj Mahal located?",
      options: ["Agra", "Mumbai", "Chennai", "Bhutan"],
      answerIndex: 0,
   },
   {
      question: "Q.5)  Which is the strongest bone in the human body?",
      options: ["Mandible", "Femur", "Occipital-bone", "Frontal-bone"],
      answerIndex: 1,
   },

];

let currentQuestionIndex = 0;
let score = 0;

const questionCountDiv = document.getElementById("question-count");
const scoreDiv = document.getElementById("score");
const nextButton = document.getElementById("next-button");
const startButton = document.getElementById("start-button");
const contentDiv = document.getElementById("content");

scoreDiv.style.visibility = "hidden";
nextButton.style.visibility = "hidden";
questionCountDiv.style.visibility = "hidden";

startButton.addEventListener("click", startButtonClickHandler);
nextButton.addEventListener("click", nextButtonClickHandler());

function startButtonClickHandler() {
   scoreDiv.style.visibility = "visible";
   nextButton.style.visibility = "visible";
   questionCountDiv.style.visibility = "visible";
   showQuestion();
}
// function nextButtonClickHandler() {
//    const userAnswerRadioButton = document.querySelector("input[name=ans]:checked");

//    if (userAnswerRadioButton === null) {
//       alert("Please select an answer");
//       return;
//    }

//    const correctAnswer = quizQuestions[currentQuestionIndex].answerIndex;

//    if (parseInt(correctAnswer) === parseInt(userAnswerRadioButton.value)) {
//       score += 1;
//       updateScoreElement();
//    }

//    if (currentQuestionIndex >= quizQuestions.length - 1) {
//       nextButton.style.visibility = "hidden";
//       contentDiv.innerHTML = `<div style='text-align:center'><h1>Your score is : ${score}/${quizQuestions.length}</h1></div>`;
//    } else {
//       currentQuestionIndex += 1;
//       showQuestion();
//    }
// }



// function showQuestion() {
//    const currentQuestion = quizQuestions[currentQuestionIndex];
//    contentDiv.innerHTML = `<div>${currentQuestion.question}</div>`;

//    for (let index = 0; index < currentQuestion.options.length; index++) {
//       const option = currentQuestion.options[index];
//       contentDiv.innerHTML +=
//          `<div>
//          <input type="radio" name="ans" id="r${index}" value="${index}">
//          <label for="r${index}">${option}</label>
//        </div>`;
//    }

//    questionCountDiv.innerText = `Question: ${currentQuestionIndex + 1}/${quizQuestions.length}`;
// }

// function updateScoreElement() {
//    scoreDiv.innerText = `Score: ${score}`;
// }
