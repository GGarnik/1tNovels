const questions = [
    { 
        question: 'Когда мы начали разрабатывать новеллы',
        answers: ['в октябре 2023', 'динаху', 'хз', 'хз'],
        correctAnswer: 'в октябре 2023'
    },
    { 
        question: 'Как называется 1т',
        answers: ['1т', '1т', '1т', '1т'],
        correctAnswer: '1т'
    },
    {
        question: 'Кто лучший',
        answers: ['не мы', 'мы'],
        correctAnswer: 'мы'
    }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showQuestion() {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('question').textContent = randomQuestion.question;

    const shuffledAnswers = shuffleArray(randomQuestion.answers.slice());
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'btn btn-primary'
        button.textContent = answer;
        button.onclick = function() {
            if (answer === randomQuestion.correctAnswer) {
                alert('Верно!');
            } else {
                alert('Неверно, правильный ответ: ' + randomQuestion.correctAnswer);
            }
        };
        document.getElementById('answers').appendChild(button);
    });
}

function showAnswers() {
    const answersDiv = document.getElementById('answers');
    while (answersDiv.firstChild) {
        answersDiv.removeChild(answersDiv.firstChild);
    }
    showQuestion();
}

window.onload = showAnswers;