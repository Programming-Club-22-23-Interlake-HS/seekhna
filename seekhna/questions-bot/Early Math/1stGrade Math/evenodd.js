const questions = [
    {
        question: "Is 4 even or odd?",
        optionA: "Even",
        optionB: "Odd",
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionA"
    },

    {
        question: "Is 19 even or odd?",
        optionA: "Even",
        optionB: "Odd",
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionB"
    },

    {
        question: "Is 30 even or odd?",
        optionA: "Even",
        optionB: "Odd",
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionA"
    },

    {
        question: "Is 41 even or odd?",
        optionA: "Even",
        optionB: "Odd",
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionB"
    },

    {
        question: "Is 69 even or odd?",
        optionA: "Even",
        optionB: "Odd",
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionB"
    },

    {
        question: "Is 8 even or odd?",
        optionA: "Even",
        optionB: "Odd",
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionA"
    },

    {
        question: "Is 8 even or odd?",
        optionA: "Even",
        optionB: "Odd",
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionA"
    },

    {
        question: "Is 8 even or odd?",
        optionA: "Even",
        optionB: "Odd",
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionA"
    },

    {
        question: "Is 8 even or odd?",
        optionA: "Even",
        optionB: "Odd",
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionB"
    },

    {
        question: "Is 7 even or odd?",
        optionA: "Even",
        optionB: "Odd",
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionB"
    },

    {
        question: "Is 92 even or odd?",
        optionA: "Even",
        optionB: "Odd",
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionA"
    },

    {
        question: "Is 83 even or odd?",
        optionA: "Even",
        optionB: "Odd",
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionB"
    },


    {
        question: "Is 54 even or odd?",
        optionA: "Even",
        optionB: "Odd",
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionA"
    },

    {
        question: "Pick the odd number:",
        optionA: "23",
        optionB: "28",
        optionC: "22",
        optionD: "20",
        correctOption: "optionA"
    },

    {
        question: "Pick the odd number:",
        optionA: "45",
        optionB: "42",
        optionC: "44",
        optionD: "46",
        correctOption: "optionA"
    },

    {
        question: "Pick the odd number:",
        optionA: "73",
        optionB: "78",        
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionA"
    },

    {
        question: "Pick the odd number:",
        optionA: "88",
        optionB: "78",
        optionC: "89",
        optionD: "90",
        correctOption: "optionC"
    },

    {
        question: "Pick the odd number:",
        optionA: "14",
        optionB: "10",
        optionC: "13",
        optionD: "20",
        correctOption: "optionC"
    },

    {
        question: "Pick the odd number:",
        optionA: "98",
        optionB: "99",
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionB"
    },

    {
        question: "Pick the even number:",
        optionA: "73",
        optionB: "78",
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionB"
    },

    {
        question: "Pick the even number:",
        optionA: "80",
        optionB: "81",
        optionC: "79",
        optionD: "83",
        correctOption: "optionA"
    },

    {
        question: "Pick the even number:",
        optionA: "35",
        optionB: "16",
        optionC: "I don't know",
        optionD: "Both?",
        correctOption: "optionB"
    },

    {
        question: "Pick the even number:",
        optionA: "11",
        optionB: "77",
        optionC: "75",
        optionD: "14",
        correctOption: "optionD"
    },

    {
        question: "Pick the even number:",
        optionA: "45",
        optionB: "001",
        optionC: "100",
        optionD: "101",        
        correctOption: "optionC"
    },

    {
        question: "Pick the even number:",
        optionA: "19",
        optionB: "13",
        optionC: "15",
        optionD: "16",
        correctOption: "optionD"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 5 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 4) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 4) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 2.9) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 3 && playerScore < 4) {
        remark = "Average Grades, Try Again."
        remarkColor = "orange"
    }
    else if (playerScore >= 4) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 5) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}