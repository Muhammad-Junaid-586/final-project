const questions = [
    {
        question : "Who Will be the futhure Prime Minister Of Pakistan",
        answers : [
            {text : 'Quaid', correct : true},
            {text : 'Imran Khan', correct : false},
            {text : 'Zardariii', correct : false},
            {text : 'Shahbaz Sharif', correct : false},

        ]
    },
    {
        question : "Who is the Richest person in the  Cricket world",
        answers : [
            {text : 'Imran khan', correct : false},
            {text : 'Shahid Khan Afridi', correct : false},
            {text : 'Virat Kohli', correct : true},
            {text : 'Ms-Dhone', correct : false},

        ]
    },


    {
        question : "Who is the most handsome  person in the  Cricket world",
        answers : [
            {text : 'Imran khan', correct : false},
            {text : 'Shahid Khan Afridi', correct : true},
            {text : 'Virat Kohli', correct : false},
            {text : 'Ms-Dhone', correct : false},

        ]
    },

    {
        question : "Which player hit 4 Sixes in single over in all formats",
        answers : [
            {text : 'Imran khan', correct : false},
            {text : 'Shahid Khan Afridi', correct : true},
            {text : 'Virat Kohli', correct : false},
            {text : 'Ms-Dhone', correct : false},

        ]
    }
];

let questionElement = document.querySelector('#question');
let answerBtns = document.querySelector('.answer-buttons');
let nextBtn = document.querySelector('#nextBtn');

let currentIndexNumber = 0;
let score = 0;

function startQuiz() {
    currentIndexNumber = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentIndexNumber];
    let questionNo = currentIndexNumber + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach((answer)=>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtns.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState() {
    nextBtn.style.display = 'none';
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectBtn.classList.add('correct');
        score++;
    }else{
        selectBtn.classList.add('inCorrect');
    }
    Array.from(answerBtns.children).forEach((button)=>{
       if (button.dataset.correct === 'true') {
        
           button.classList.add('correct');
       };
       button.disabled = true;

    });
    nextBtn.style.display = 'block';
    
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`; 
    nextBtn.innerHTML = 'Play Again';
    nextBtn.style.display = 'block';  
}
function handleNextBtn() {
    currentIndexNumber++;
    if (currentIndexNumber<questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener('click', ()=>{
    if (currentIndexNumber<questions.length) {
        handleNextBtn();
    }else{
        startQuiz();
    }
})
startQuiz();