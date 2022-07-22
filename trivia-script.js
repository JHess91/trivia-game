// The list of questions
const questions = {
    "questions": [
        {
            "question": "The capital of Florida is Miami.",
            "answer": false
        },
        {
            "question": "The capital of California is Sacramento.",
            "answer": true
        },
        {
            "question": "The United States was founded in 1998.",
            "answer": false
        },
        {
            "question": "Albert Einstein is Magician",
            "answer": false
        },
        {
            "question": "The inventor of the first computer is Alan Turing.",
            "answer": true
        },
        {
            "question": "The maker of mac book pro is Facebook.",
            "answer": false
        },
        {
            "question": "Facebook bought whatsapp for 19 billion dollars.",
            "answer": true
        },
        {
            "question": "Ahmed was going a little to fast.",
            "answer": true
        }
    ]
}

// DOM accessing via ID
const question = document.getElementById('question')


// Variable to keep track of score
let playerScore = 0

// Variable to keep track of what question you are on
let questionIndex = 0

// Variable to keep track if you reached the last question / finished game
let didReachLastQuestion = false

// Loading the first question
question.innerText = questions.questions[questionIndex].question

// Handles when you click on true
function handleTrue() {
    const currentQuestionObject = questions.questions[questionIndex]
    if (currentQuestionObject && currentQuestionObject.answer == true && didReachLastQuestion == false) {
        playerScore += 1
    }

    nextQuestion()
}

// Handles when you click false
function handleFalse() {
    const currentQuestionObject = questions.questions[questionIndex]
    if (currentQuestionObject && currentQuestionObject.answer == false && didReachLastQuestion == false) {
        playerScore += 1
    }

    nextQuestion()
}

// True or false goes to next question
function nextQuestion() {
    questionIndex += 1
    if (questionIndex >= questions.questions.length) {
        didReachLastQuestion = true
        const yourFinalScore = `Your score is ${(playerScore / questions.questions.length) * 100}%`
        question.innerText = yourFinalScore
        shouldHideAnswerButtons(true)
    } else {
        question.innerText = questions.questions[questionIndex].question
    }
}


// Function to replay game
function replay() {
    shouldHideAnswerButtons(false)
    playerScore = 0
    questionIndex = 0
    questionIndex = Math.floor(Math.random() * questions.questions.length)
    didReachLastQuestion = false
    question.innerText = questions.questions[questionIndex].question
}

// Hides true or false buttons
function shouldHideAnswerButtons(flag) {
    const trueButton = document.getElementById('true-button')
    const falseButton = document.getElementById('false-button')
    const replayButton = document.getElementById('replay-button')

    if (flag == true) {
        replayButton.style.display = 'block'
        trueButton.style.display = 'none'
        falseButton.style.display = 'none'
    } else {
        replayButton.style.display = 'none'
        trueButton.style.display = 'block'
        falseButton.style.display = 'block'
    }
}


