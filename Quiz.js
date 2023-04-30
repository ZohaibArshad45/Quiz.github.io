const quizData = [
	{
		question: "Q 1 - Which of the following is correct about features of JavaScript?",
		choices: ["JavaScript is open and cross-platform", "B - JavaScript is open and cross-platform ", "Both of the above", "Non"],
		answer: "Both of the above"
	},
	{
		question: "Q 2 - Which built-in method returns the calling string value converted to lower case?",
		choices: ["toLowerCase()", "toLower()", "changeCase(case) ", "None of the above."],
		answer: "toLowerCase()"
	},
	{
		question: "Q 3 - Hyper Text Markup Language is ",
		choices: ["Html", "CSS", "JavaScript", "PHP"],
		answer: "HTML"
	},
	{
		question: "Q 4 - Which of the following function of Array object sorts the elements of an array?",
		choices: ["unshift()", "toString()", "sort()", "toSource()"],
		answer: "sort()"
	},
	{
		question: "Q 5 - JavaScript is a ___ -side programming language?",
		choices: ["Client", "Server", "Both", "None"],
		answer: "Both"
	},
	{
		question: "Q 6 - How do you find the minimum of x and y using JavaScript?",
		choices: [" min(x,y);", " min(x,y);", "Math.min(xy)", " min(xy);"],
		answer: "Math.min(xy)"
	},
	{
		question: "Q 7 - Which JavaScript label catches all the values, except for the ones specified?",
		choices: ["catch", "label", "try", "default"],
		answer: "default"
	},
	{
		question: "Q 8 - Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
		choices: ["if(x != 2 )", "if(x == 2)", "if(x = 2)", " if(x 2)"],
		answer: "if(x = 2)"
	},
	{
		question: "Q 9 - What will the code return? Boolean(3 < 7)",
		choices: [" SyntaxError", "NaN", " false", "true"],
		answer: "true"
	},
	{
		question: "Q 10 - Determine the result – String(“Hello”) === “Hello”;",
		choices: ["ReferenceError", "SyntaxError", "true", "false"],
		answer: "true"
	}
];

const startBtn = document.getElementById("start-btn");
const quizPage = document.getElementById("quiz-page");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const timerEl = document.getElementById("time");
const submitBtn = document.getElementById("submit-btn");
const resultsPage = document.getElementById("results-page");
const correctEl = document.getElementById("correct");
const totalEl =document.getElementById("total");
const restartBtn = document.getElementById("restart-btn");

let currentQuestion = 0;
let correctAnswers = 0;
let timeLeft = 60;
let timerInterval;

function startQuiz() {
// Hide start page and show quiz page
document.getElementById("start-page").classList.add("hidden");
quizPage.classList.remove("hidden");
// Display first question
displayQuestion();

// Start timer
timerInterval = setInterval(updateTimer, 1000);
}

function displayQuestion() {
// Display question and choices
questionEl.innerText = quizData[currentQuestion].question;
choicesEl.innerHTML = "";
for (let i = 0; i < quizData[currentQuestion].choices.length; i++) {
	const li = document.createElement("li");
	const radio = document.createElement("input");
	const label = document.createElement("label");
	
	radio.setAttribute("type", "radio");
	radio.setAttribute("name", "choice");
	radio.setAttribute("value", quizData[currentQuestion].choices[i]);
	label.innerText = quizData[currentQuestion].choices[i];
	
	li.appendChild(radio);
	li.appendChild(label);
	choicesEl.appendChild(li);
}
}

function updateTimer() {
// Update timer display and check if time is up
timeLeft--;
timerEl.innerText = timeLeft;
if (timeLeft === 0) {
	clearInterval(timerInterval);
	endQuiz();
}
}

function submitAnswer() {
// Check if an answer is selected
const selected = document.querySelector('input[name="choice"]:checked');
if (!selected) {
	alert("Please select an answer!");
	return;
}

// Check if answer is correct and update score
if (selected.value === quizData[currentQuestion].answer) {
	correctAnswers++;
}

// Move to next question or end quiz if all questions answered
currentQuestion++;

if (currentQuestion === quizData.length) {
	clearInterval(timerInterval);
	endQuiz();
} else {
	displayQuestion();
}
}

function endQuiz() {
// Hide quiz page and show results page
quizPage.classList.add("hidden");
resultsPage.classList.remove("hidden");
// Display score
correctEl.innerText = correctAnswers;
totalEl.innerText = quizData.length;
// Display score
correctEl.innerText = correctAnswers;
totalEl.innerText = quizData.length;
}

function restartQuiz() {
// Reset variables and display start page
currentQuestion = 0;
correctAnswers = 0;
timeLeft = 30;
timerEl.innerText = timeLeft;
clearInterval(timerInterval);
resultsPage.classList.add("hidden");
document.getElementById("start-page").classList.remove("hidden");
}

// Add event listeners
startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", submitAnswer);
restartBtn.addEventListener("click", restartQuiz);