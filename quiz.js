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

const questionCountDiv = document.getElementById('question');
const totalScores = document.getElementById("score");
const nextButton = document.getElementById("Next");
const startButton = document.getElementById("start-button");
const mcqs = document.getElementById("content");


totalScores.style.visibility = "hidden";
nextButton.style.visibility = "hidden";
questionCountDiv.style.visibility = "hidden";
startButton.addEventListener("click", startButtonClickHandler);

// nextButton.addEventListener("click", nextButtonClickHandler);

function startButtonClickHandler() {
    // startButton.style.display = "none";  // hide the start button

    totalScores.style.visibility = "visible";
   nextButton.style.visibility = "visible";
   questionCountDiv.style.visibility = "visible";
//    showQuestion();
}
startButtonClickHandler();


