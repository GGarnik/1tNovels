const questions = [
    { 
        question: 'Какого вида нейронных сетей НЕ СУЩЕСТВУЕТ?',
        answers: ['Сверточные нейронные сети', 'Рекуррентные нейронные сети', 'Автоэнкодеры', 'САБАКА'],
        correctAnswer: 'САБАКА'
    },
    { 
        question: 'В каких сферах используется ИИ',
        answers: ['Судебная система', 'Озвучка персонажей', 'При решении дискриминантом', 'Медицина'],
        correctAnswer: 'Медицина'
    },
    {
        question: 'Кто лучший',
        answers: ['не мы', 'мы'],
        correctAnswer: 'мы'
    },
    { 
        question: 'Кого уволят в ближайшее время',
        answers: ['Некобоя', 'ЛИДЕРА', 'Виета', 'Юпитер'],
        correctAnswer: 'Некобоя'
    },
    { 
        question: 'Из каких слоёв НЕ СОСТОИТ нейросеть',
        answers: ['Из входных', 'Из выходных', 'Из нейтральных', 'Из скрытых'],
        correctAnswer: 'Из нейтральных'
    },
    { 
        question: 'С какого века началась история развития ИИ?',
        answers: ['с 19 века', 'с 20 века', 'с 21 века', 'с 18 века'],
        correctAnswer: 'с 19 века'
    },
    { 
        question: 'Какой язык самый популярный для создания нейросетей?',
        answers: ['Python', 'C++', 'JabaScript', 'Go'],
        correctAnswer: 'Python'
    },
    
];
//растасовка вопросов и ответов(рифл-шафл)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
//сука я сам не знаю, что это за параша, это нагенерила ии, я не виноват
function showQuestion() {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('question').textContent = randomQuestion.question;

    const shuffledAnswers = shuffleArray(randomQuestion.answers.slice());
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'examplebtn'
        button.textContent = answer;
        button.classList.add("button");
       
        button.onclick = function() {
            if (answer === randomQuestion.correctAnswer) {
                alert('Верно!');
            } else {
                alert('Неверно, правильный ответ: ' + randomQuestion.correctAnswer);
            }
            //надо прервать тестик лол
            location.reload() // window.location.reload() эт перезагрузка 

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