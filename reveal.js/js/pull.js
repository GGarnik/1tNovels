const questions = [
    { 
        question: 'Сколько слов в букве "Яблоко"?',
        answers: ['3', 'Нет', 'Носорог', '3км/с'],
        correctAnswer: 'Нет'
    },
    { 
        question: 'Как переводиться слово "Apple"?',
        answers: ['Аэробус', 'Микротранзакция', 'Биткоин', 'Груша'],
        correctAnswer: 'Груша'
    },
    {
        question: 'Кто лучший?',
        answers: ['Не мы', 'Мы'],
        correctAnswer: 'Мы'
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