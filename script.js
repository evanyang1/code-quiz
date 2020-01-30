var jQueryScript = document.createElement('script')
jQueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.slim.js');
document.head.appendChild(jQueryScript);

let quiz = [
  {
    id: 0,
    question: "What is JavaScript?",
    answer_choices: [
      "Same as Java",
      "The main programming language of the browser",
      "The main programming language of computer systems",
      "A set of rules about styling your HTML"
    ],
    correct_answer: 1 // count from 0
  },
  {
    id: 1,
    question: "Which is better practice, let/const or var?",
    answer_choices: [
      "Let/const",
      "var",
      "Both",
      "Neither"
      
    ],
    correct_answer: 0
  },
  {
    id: 2,
    question: "What does document.getElementById() do?",
    answer_choices: [
      "Get an element by HTML element type",
      "Get an element by class",
      "Get an element by id",
      "Get all elements"
    ],
    correct_answer: 2
  }
]

let timer = 60 // 60 seconds for test
let isCompleted = false

$('#time-left').text(`Time left: ${timer}`)

setInterval(() => {
  if(timer > 0) timer--
  $('#time-left').text(`Time left: ${timer}`)
  if (timer <= 0 || isCompleted) {
    timer = ''
    $('#time-left').text(`Time left: ${timer}`)
  }

}, 1000);

$('#question-heading').text(quiz[0].question)
$('#answer-1').text(quiz[0].answer_choices[0])
$('#answer-2').text(quiz[0].answer_choices[1])
$('#answer-3').text(quiz[0].answer_choices[2])
$('#answer-4').text(quiz[0].answer_choices[3])