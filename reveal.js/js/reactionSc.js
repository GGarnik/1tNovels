

function End(){
    ball.style.left = 100+'px';
    Reveal.next();
}

function timeDisplay(){  
    //здесь нужные объекты находятся по id в свойствах
    let textOfButton = document.getElementById("textButtonQuestion")
    let button1 = document.getElementById('imageButtonQuestion2')
    let button2 = document.getElementById('imageButtonQuestion2')
    let ball = document.getElementById("ball")
    let reactionCheck = document.getElementById("reactionCheck")
    //i - здесь координата ball.left;
    let i =  1
    //здесь при вызове этой функции кнопка становится прозрачной и не рабочей
    button2.onclick="return false";
    textOfButton.style.opacity = 0;
    button1.style.opacity = 0;
    
    //функция вызывающаяся каждую ms
        function update(now){
            //значение показывающее необходимость обновления кадра с шаром (true - шар движется)
            let needRAF = false
            //значение i += n, где n - то, с какой скоростью будет двигаться шар (шар совершит столько передвижений, сколько будет 1000/n; - каждое движение - 1ms) 
            i += 10;
            ball.style.left = i+'px';
            //проверка на то, завершил ли шар свое движение (если завершил - бесконечный цикл обновления кадра завершается)
            if(i<= 1000){
                needRAF = true
            }
            if(needRAF){requestAnimationFrame(update)}
            else{
            end();
            }
            
        }
    requestAnimationFrame(update)
}
    function stopBall(){
        needRAF = false
        //НЕ РАБОТАЕТ Т.К. b.s.l - px, а нужны числа. Пробуй GetANum
        if(ball.style.left <= 500+'px' && ball.style.left >= 100+'px'){
            reactionCheck.textContent = "сбежали";
        } else{ reactionCheck.textContent = "были пойманы"}
    }


