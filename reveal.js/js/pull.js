// const questions = [
//     { 
//         question: 'Сколько слов в букве "Яблоко"?',
//         answers: ['3', 'Нет', 'Носорог', '3км/с'],
//         correctAnswer: 'Нет'
//     },
//     { 
//         question: 'Как переводиться слово "Apple"?',
//         answers: ['Аэробус', 'Микротранзакция', 'Биткоин', 'Груша'],
//         correctAnswer: 'Груша'
//     },
//     {
//         question: 'Кто лучший?',
//         answers: ['Не мы', 'Мы'],
//         correctAnswer: 'Мы'
//     }
// ];

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// function showQuestion() {
//     const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
//     document.getElementById('question').textContent = randomQuestion.question;

//     const shuffledAnswers = shuffleArray(randomQuestion.answers.slice());
//     shuffledAnswers.forEach(answer => {
//         const button = document.createElement('button');
//         button.className = 'btn btn-primary'
//         button.textContent = answer;
//         button.onclick = function() {
//             if (answer === randomQuestion.correctAnswer) {
//                 alert('Верно!');
//             } else {
//                 alert('Неверно, правильный ответ: ' + randomQuestion.correctAnswer);
//             }
//         };
//         document.getElementById('answers').appendChild(button);
//     });
// }

// function showAnswers() {
//     const answersDiv = document.getElementById('answers');
//     while (answersDiv.firstChild) {
//         answersDiv.removeChild(answersDiv.firstChild);
//     }
//     showQuestion();
// }
let answersCounter1 = 0;
let answersCounter2 = 0;


const questions = [
    { 
        question: 'В каких сферах используется ИИ?',
        answers: ['Судебная система', 'Озвучка персонажей', 'При решении дискриминантом', 'Медицина'],
        correctAnswer: 'Медицина'
    },
    { 
        question: 'Из каких слоёв НЕ СОСТОИТ нейросеть?',
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
        answers: ['Python', 'C++', 'JavaScript', 'Go'],
        correctAnswer: 'Python'
    },
    {
        question: 'Какой слой нейронов является общим для всех типов нейросетей?',
        answers: ['Выходной', 'Скрытый', 'Входной', 'Промежуточный'],
        correctAnswer: 'Входной'
    },
    {
        question: 'В чём заключается основное отличие однослойной нейронной сети от многослойной?',
        answers: ['Однослойная сеть содержит только один слой', 'Многослойная сеть имеет только один скрытый слой', 'Многослойная сеть содержит несколько скрытых слоёв', ' В однослойной сети используются только сигналы прямого распространения'],
        correctAnswer: 'Многослойная сеть содержит несколько скрытых слоёв'

    },
    {
        question: 'Какие нейронные сети относятся к нейросетям прямого распространения?',
        answers: ['Только однослойные сети', 'Только многослойные сети', 'Оба типа сетей'],
        correctAnswer: 'Оба типа сетей'
    }, 
    {
        question: 'В чём особенность рекуррентных нейронных сетей?',
        answers: ['Сигнал перемещается только в прямом направлении', 'Сигнал перемещается как в прямом, так и в обратном направлении', 'Эти сети не имеют скрытых слоёв', 'Результат выхода не возвращается на вход' ],
        correctAnswer: 'Сигнал перемещается как в прямом, так и в обратном направлении'
    },
    {
        question: 'Какая функция используется в радиально-базисных функциях?',
        answers: ['Функция активации', 'Линейная функция', 'Логистическая функция', 'Радиальная функция'],
        correctAnswer: 'Радиальная функция'
    },
    {
        question: 'Какие типы нейросетей имеют возможность работы с кратковременной памятью?',
        answers: ['Однослойные', 'Многослойные', 'Рекуррентные', 'Радиально-базисные'],
        correctAnswer: 'Рекуррентные'
    },
    { 
        question: 'Какие нейросети обладают большими возможностями обработки данных?',
        answers: ['Однослойные', 'Многослойные', 'Рекуррентные', 'Радиально-базисные'],
        correctAnswer: 'Многослойные'
    },
    {
        question: 'Какие типы нейронных сетей существуют в зависимости от типов нейронов?',
        answers: ['Однородные и гетероассоциативные', 'Гибридные и автоассоциативные', 'Однородные и гибридные', 'Гетероассоциативные и автоассоциативные'],
        correctAnswer: 'Однородные и гибридные'
    },
    {
        question: 'Какие методы нейронных сетей существуют по обучению?',
        answers: ['Обучение с учителем, без учителя, с подкреплением', 'Обучение с контролем, без контроля, с наградой', 'Обучение с участием экспертов, без участия экспертов, с самообучением', 'Обучение с алгоритмами, без алгоритмов, с рандомизацией'],
        correctAnswer: 'Обучение с учителем, без учителя, с подкреплением'
    },
    {
        question: 'Какие типы входной информации могут использоваться в нейронных сетях?',
        answers: ['Аналоговые, двоичные, образные', 'Числовые, текстовые, графические', 'Аудио, видео, текст', 'Графовые, табличные, изображения'],
        correctAnswer: 'Аналоговые, двоичные, образные'
    },
    {
        question: 'Какие характеристики могут иметь синапсы в нейронных сетях?',
        answers: ['С фиксированными связями, с адаптивными связями', 'Статические, динамические', 'С жесткими связями, с гибкими связями', 'С короткими связями, с длинными связями'],
        correctAnswer: 'Статические, динамические'
    },
    {
        question: 'Что такое гетероассоциативные или автоассоциативные нейросети?',
        answers: ['Нейросети с неоднородными типами нейронов', 'Нейросети с различными методами обучения', 'Нейросети с разными типами входной информации', 'Нейросети с различными характерами настройки синапсов'],
        correctAnswer: 'Нейросети с различными характерами настройки синапсов'
    }
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
        const buttonSpan = document.createElement('span')
        buttonSpan.appendChild(button)
        button.textContent = answer;
        button.id = 'button'
        button.className = 'answer-button custom-btn btn-2'
        button.onclick = function() {
            if (answer === randomQuestion.correctAnswer) {
                alert('Верно!');
            } else {
                alert('Неверно, правильный ответ: ' + randomQuestion.correctAnswer);
            }
            //надо прервать тестик лол
            //location.reload() // window.location.reload() эт перезагрузка
            showAnswers();
            Reveal.left();
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

function checkAnswers() {
    let correctAnswers = ["paris"]; // Правильные ответы
    let userAnswers = Array.from(document.querySelectorAll('input[name=answer]:checked')).map(ans => ans.value);

    let correct = correctAnswers.every(ans => userAnswers.includes(ans));
    
    if (correct) {
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Incorrect. Try again!";
    }
}


//Вторая практика

function showQuestion2() {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('question2').textContent = randomQuestion.question;

    const shuffledAnswers = shuffleArray(randomQuestion.answers.slice());
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        const buttonSpan = document.createElement('span')
        buttonSpan.appendChild(button)
        button.textContent = answer;
        button.id = 'button'
        button.className = 'answer-button custom-btn btn-2'
        button.onclick = function() {
            if (answer === randomQuestion.correctAnswer) {
                alert('Верно!');
                if(answersCounter1 !== 3) {
                    answersCounter1 += 1;
                } else {
                    Reveal.next();
                }
            } else {
                alert('Неверно, правильный ответ: ' + randomQuestion.correctAnswer);
            }
            //надо прервать тестик лол
            //location.reload() // window.location.reload() эт перезагрузка
            showAnswers2();
        };
        document.getElementById('answers2').appendChild(button);
    });
}

function showAnswers2() {
    const answersDiv = document.getElementById('answers2');
    while (answersDiv.firstChild) {
        answersDiv.removeChild(answersDiv.firstChild);
    }
    showQuestion2();
}

function checkAnswers2() {
    let correctAnswers = ["paris"]; // Правильные ответы
    let userAnswers = Array.from(document.querySelectorAll('input[name=answer]:checked')).map(ans => ans.value);

    let correct = correctAnswers.every(ans => userAnswers.includes(ans));
    
    if (correct) {
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Incorrect. Try again!";
    }
}

//Третья практика

function showQuestion3() {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('question3').textContent = randomQuestion.question;

    const shuffledAnswers = shuffleArray(randomQuestion.answers.slice());
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        const buttonSpan = document.createElement('span')
        buttonSpan.appendChild(button)
        button.textContent = answer;
        button.id = 'button'
        button.className = 'answer-button custom-btn btn-2'
        button.onclick = function() {
            if (answer === randomQuestion.correctAnswer) {
                alert('Верно!');
                if(answersCounter2 !== 2) {
                    answersCounter2 += 1;
                } else {
                    Reveal.right();
                    Reveal.right();
                    while(text !== "Но… Как вы это сделали? Это знали только вечные!")
                    {
                        reInitText();
                    }
                }
            } else {
                alert('Неверно, правильный ответ: ' + randomQuestion.correctAnswer);
                Reveal.right();
            }
            //надо прервать тестик лол
            //location.reload() // window.location.reload() эт перезагрузка
            showAnswers3();
        };
        document.getElementById('answers3').appendChild(button);
    });
}

function showAnswers3() {
    const answersDiv = document.getElementById('answers3');
    while (answersDiv.firstChild) {
        answersDiv.removeChild(answersDiv.firstChild);
    }
    showQuestion3();
}

function checkAnswers3() {
    let correctAnswers = ["paris"]; // Правильные ответы
    let userAnswers = Array.from(document.querySelectorAll('input[name=answer]:checked')).map(ans => ans.value);

    let correct = correctAnswers.every(ans => userAnswers.includes(ans));
    
    if (correct) {
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Incorrect. Try again!";
    }
}