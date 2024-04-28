let prizonFO = document.getElementById('prizonFrontOpen');
let prizonFC = document.getElementById('prizonFrontClose');
let prizonB = document.getElementById('prizonBack');

let textReact = document.getElementById('textReact');
let reactArea = document.getElementById('reactionRightArea');
let playerReact = document.getElementById('playerReact');
let buttonStartText = document.getElementById('buttonStartText');
let buttonStart = document.getElementById('buttonStart');
let framesPerSec = 1500;
let sF = true;
let reactASW = 200;
let leftSuccses = false;
let rightSuccses = false;
let criticalSuccses = false;
let animatePRTime;
let animatePR = {transform: "translateX(800px)"}

let arrTestView = [prizonB, prizonFC, prizonFO, reactArea, playerReact, buttonStart];
// 
// 
// 

let startAnim = false;

let canClickRightButton = false;
let canClickLeftButton = true;
let canClickUpButton = false;
let canClickDownButton = false;
let numOfMove = 0;
let falseCounter = 0;

let sleepCancle = false;

let arrows = [
 arrowD = document.getElementById('downArrow'),
 arrowU = document.getElementById('upArrow'),
 arrowR = document.getElementById('rightArrow'),
 arrowL = document.getElementById('leftArrow'),
]

let gear = document.getElementById('g1');
let gear2 = document.getElementById('g2');
let gear3 = document.getElementById('g3');
let gear4 = document.getElementById('g4');
let gear5 = document.getElementById('g5');
let gear6 = document.getElementById('g6');
let gear7 = document.getElementById('g7');

let wall1 = document.getElementById('ss1');
let wall2 = document.getElementById('ss2');
let wall3 = document.getElementById('ss3');
let wall4 = document.getElementById('ss4');

let angleWithWall1 = document.getElementById('us1');
let angleWithWall2 = document.getElementById('us2');
let angleWithWall3 = document.getElementById('us3');
let angleWithWall4 = document.getElementById('us4');

let angleAlt1 = document.getElementById('ua1');
let angleAlt2 = document.getElementById('ua2');
let angleAlt3 = document.getElementById('ua3');
let angleAlt4 = document.getElementById('ua4');

let angleSmall1 = document.getElementById('u1');
let angleSmall2 = document.getElementById('u2');
let angleSmall3 = document.getElementById('u3');
let angleSmall4 = document.getElementById('u4');


let playerMap = document.getElementById('playerMap');
let map = document.getElementById('map');


window.onload = function() {
    hideTest();
    canClickInit();
    showAnswers();
    showAnswers2();
    showQuestion3();
}

const correctSide = ["l", "u", "u", "l", "u", "r", "r", "u", "l", "u", "u", "l", "l"
, "d", "d", "l", "l", "l", "u", "r", "u", "r", "u", "l", "l", "l", "d", "d"
, "l", "l", "d", "d", "l"] //33
const canClickSides = ["l", "lur", "du", "rdl", "udrl", "rud", "rl", "ul", "uld", "ur", "ud", "udlr"
, "rl", "rud", "ud", "dul", "rl", "dlr", "rdu", "rud", "lur", "dr", "ul", "ld", "rl", "rl", "drl", "ud", "lud", "lr"
, "rud", "ud", "udl", ""]

function arrowRight() {
    if(canClickRightButton && !sleepCancle && numOfMove !== 33) {
        if(correctSide[numOfMove] == "r") {
            console.log("Всё нормально.");
            numOfMove++;
            canClickInit();
        } else {
            console.log("НЕПРАВИЛЬНО");
            startTest();
            falseCounter++
        }
    }
}

function arrowUp() {
    if (!startAnim){
    if(canClickUpButton && !sleepCancle && numOfMove !== 33) {
        if(correctSide[numOfMove] == "u") {
            console.log("Всё нормально.");
            numOfMove++;
            canClickInit();
        } else {
            console.log("НЕПРАВИЛЬНО");
            startTest();
            falseCounter++
        }
    }
    }
}

function arrowDown() {
    if (!startAnim){
    if(canClickDownButton && !sleepCancle && numOfMove !== 33) {
        if(correctSide[numOfMove] == "d") {
            console.log("Всё нормально.");
            numOfMove++;
            canClickInit();
        } else {
            console.log("НЕПРАВИЛЬНО");
            startTest();
            falseCounter++
        }
    }
    }
}

function arrowLeft() {
    if (!startAnim){
    if(canClickLeftButton && !sleepCancle && numOfMove !== 33) {
        if(correctSide[numOfMove] == "l") {
            console.log("Всё нормально.");
            numOfMove++;
            canClickInit();
        } else {
            console.log("НЕПРАВИЛЬНО");
            startTest();
            falseCounter++
        }
    }
    }
}

function canClickInit() {
    invisibleSet();
    if(canClickSides[numOfMove].search("r") != -1) {
        canClickRightButton = true;
    } else {
        canClickRightButton = false;
    }
    if(canClickSides[numOfMove].search("l") != -1) {
        canClickLeftButton = true; 
    } else {
        canClickLeftButton = false;
    }
    if(canClickSides[numOfMove].search("d") != -1) {
        canClickDownButton = true;
    } else {
        canClickDownButton = false;
    }
    if(canClickSides[numOfMove].search("u") != -1) {
        canClickUpButton = true;
    } else {
        canClickUpButton = false;
    }
    if(numOfMove == 33) {
        console.log(`Вы победили! Количество неправильных ходов: ${falseCounter}`);
        canClickLeftButton = false;
        canClickUpButton = false;
        canClickDownButton = false;
        canClickRightButton = false;
        Reveal.right();
        Reveal.right();
    }

    if(!canClickLeftButton) {
        document.getElementById("leftArrow").style.display = "none";
    } else {
        document.getElementById("leftArrow").style.display = "block";
    }
    if(!canClickRightButton) {
        document.getElementById("rightArrow").style.display = "none";
    } else {
        document.getElementById("rightArrow").style.display = "block";
    }
    if(!canClickUpButton) {
        document.getElementById("upArrow").style.display = "none";
    } else {
        document.getElementById("upArrow").style.display = "block";
    }
    if(!canClickDownButton) {
        document.getElementById("downArrow").style.display = "none";
    } else {
        document.getElementById("downArrow").style.display = "block";
    }

    setVisibilityArrows();
    textReact.textContent = '';

    if(!isSpeedUp) {
        isSpeedUp = true;
        sleepCancle = true;
        randomRotationAngle = Math.round(Math.random() * 5);
        tmpRotationMap = rotationAngleMap;
        setTimeout(() => {  isSpeedUp = false; smartRound(); map.style.transform = `rotate(${rotationAngleMap}deg)`; sleepCancle = false;  }, 2000);
    }
}
function setVisibilityArrows(){
    if(!canClickLeftButton) {
        document.getElementById("leftArrow").style.display = "none";
    } else {
        document.getElementById("leftArrow").style.display = "block";
    }
    if(!canClickRightButton) {
        document.getElementById("rightArrow").style.display = "none";
    } else {
        document.getElementById("rightArrow").style.display = "block";
    }
    if(!canClickUpButton) {
        document.getElementById("upArrow").style.display = "none";
    } else {
        document.getElementById("upArrow").style.display = "block";
    }
    if(!canClickDownButton) {
        document.getElementById("downArrow").style.display = "none";
    } else {
        document.getElementById("downArrow").style.display = "block";
    }
};

const lerp = (a, b, t) => a * (1 - t) + b * t;

const durationNormal = 20;
const durationActive = 2;
const inertFactor = 0.1;

let isSpeedUp = false;
let currentDuration = durationNormal;
let rotationAngle = 0;
let rotationAngleMap = 0;
let randomRotationAngle = 0;
let currentRotationMap = 0;
let tmpRotationMap = 0;
let tmpRotationMap2 = 0;

function update(now) {
    const duration = isSpeedUp ? durationActive : durationNormal;
    currentDuration = lerp(currentDuration, duration, inertFactor);
    rotationAngle += 360 / currentDuration / 60;
    gear.style.transform = `rotate(${rotationAngle}deg)`;
    gear2.style.transform = `rotate(${-rotationAngle}deg)`;
    gear3.style.transform = `rotate(${-rotationAngle}deg)`;
    gear4.style.transform = `rotate(${rotationAngle}deg)`;
    gear5.style.transform = `rotate(${-rotationAngle}deg)`;
    gear6.style.transform = `rotate(${rotationAngle}deg)`;
    gear7.style.transform = `rotate(${rotationAngle}deg)`;

    if(isSpeedUp) {
    switch (randomRotationAngle) {
        case 0:
            currentRotationMap = 90;
            break;
        case 1:
            currentRotationMap = 180;
            break;
        case 2:
            currentRotationMap = 270;
            break;
        case 3:
            currentRotationMap = -90;
            break;
        case 4:
            currentRotationMap = -180;
            break;
        case 5:
            currentRotationMap = -270;
            break;
    }
    }

    if(isSpeedUp && currentRotationMap < 0) {
        tmpRotationMap2 = tmpRotationMap + currentRotationMap;
        currentRotationMap = Math.round(currentRotationMap);

        if(rotationAngleMap > tmpRotationMap2 && currentRotationMap == -90) {
            rotationAngleMap -= 0.3;
            map.style.transform = `rotate(${rotationAngleMap}deg)`;
        }
        else if(rotationAngleMap > tmpRotationMap2 && currentRotationMap == -180) {
            rotationAngleMap -= 0.6;
            map.style.transform = `rotate(${rotationAngleMap}deg)`;
        } else if(rotationAngleMap > tmpRotationMap2 && currentRotationMap == -270) {
            rotationAngleMap -= 0.9;
            map.style.transform = `rotate(${rotationAngleMap}deg)`;
        }

    } else if(isSpeedUp && currentRotationMap > 0) {
        tmpRotationMap2 = tmpRotationMap + currentRotationMap;
        currentRotationMap = Math.round(currentRotationMap);

        if(rotationAngleMap < tmpRotationMap2 && currentRotationMap == 90) {
            rotationAngleMap += 0.3;
            map.style.transform = `rotate(${rotationAngleMap}deg)`;
        }
        else if(rotationAngleMap < tmpRotationMap2 && currentRotationMap == 180) {
            rotationAngleMap += 0.6;
            map.style.transform = `rotate(${rotationAngleMap}deg)`;
        } else if(rotationAngleMap < tmpRotationMap2 && currentRotationMap == 270) {
            rotationAngleMap += 0.9;
            map.style.transform = `rotate(${rotationAngleMap}deg)`;
        }
    }

    // if(isSpeedUp && rotationAngleMap < currentRotationMap) {
    //     rotationAngleMap += 0.3;
    //     map.style.transform = `rotate(${rotationAngleMap}deg)`;
    // } else {
    //     map.style.transform = `rotate(90deg)`;
    // }
        
    requestAnimationFrame(update);
}

requestAnimationFrame(update);


function smartRound() {
    rotationAngleMap -= rotationAngleMap - tmpRotationMap2;
}

function invisibleSet() {
    // Добавляем переход в невидимость невидимость всем элементам
    if(wall1.className.search("dontdeleteit") !== -1) {
        wall1.className -= "dontdeleteit";
        wall1.className -= ' fade-in-down';
    }
    if (wall1.className.search("invisible") == -1) {
        wall1.className += ' fade-out-up';
    }

    if(wall2.className.search("dontdeleteit") !== -1) {
        wall2.className -= "dontdeleteit";
        wall2.className -= "fade-in-up";
    }
    if (wall2.className.search("invisible") == -1) {
        wall2.className += ' fade-out-down';
    }

    if(wall3.className.search("dontdeleteit") !== -1) {
        wall3.className -= "dontdeleteit";
        wall3.className -= "fade-in-left";
    }
    if (wall3.className.search("invisible") == -1) {
        wall3.className += ' fade-out-right';
    }
    
    if(wall4.className.search("dontdeleteit") !== -1) {
        wall4.className -= "dontdeleteit";
        wall4.className -= "fade-in-right";
    }
    if (wall4.className.search("invisible") == -1) {
        wall4.className += ' fade-out-left';
    }

    if(angleWithWall1.className.search("dontdeleteit") !== -1) {
        angleWithWall1.className -= 'dontdeleteit';
        angleWithWall1.className -= 'fade-in-down';
    }
    if (angleWithWall1.className.search("invisible") == -1) {
        angleWithWall1.className += ' fade-out-up';
    }
    if(angleWithWall2.className.search("dontdeleteit") !== -1) {
        angleWithWall2.className -= 'dontdeleteit';
        angleWithWall2.className -= 'fade-in-up-small';
    }
    if (angleWithWall2.className.search("invisible") == -1) {
        angleWithWall2.className += ' fade-out-down-small';
    }
    if(angleWithWall3.className.search("dontdeleteit") !== -1) {
        angleWithWall3.className -= 'dontdeleteit';
        angleWithWall3.className -= 'fade-in-up-small2';
    }
    if (angleWithWall3.className.search("invisible") == -1) {
        angleWithWall3.className += ' fade-out-down-small2';
    }

    if(angleWithWall4.className.search("dontdeleteit") !== -1) {
        angleWithWall4.className -= 'dontdeleteit';
        angleWithWall4.className -= 'fade-in-down-small';
    }
    if (angleWithWall4.className.search("invisible") == -1) {
        angleWithWall4.className += ' fade-out-up-small';
    }

    if(angleSmall1.className.search("dontdeleteit") !== -1) {
        angleSmall1.className -= 'dontdeleteit';
        angleSmall1.className -= 'fade-in-down';
    }
    if (angleSmall1.className.search("invisible") == -1) {
        angleSmall1.className += ' fade-out-up';
    }

    if(angleSmall2.className.search("dontdeleteit") !== -1) {
        angleSmall2.className -= 'dontdeleteit';
        angleSmall2.className -= 'fade-in-up-small';
    }
    if (angleSmall2.className.search("invisible") == -1) {
        angleSmall2.className += ' fade-out-down-small';
    }

    if(angleSmall3.className.search("dontdeleteit") !== -1) {
        angleSmall3.className -= 'dontdeleteit';
        angleSmall3.className -= 'fade-in-up-small2';
    }
    if (angleSmall3.className.search("invisible") == -1) {
        angleSmall3.className += ' fade-out-down-small2';
    }

    if(angleSmall4.className.search("dontdeleteit") !== -1) {
        angleSmall4.className -= 'dontdeleteit';
        angleSmall4.className -= 'fade-in-down-small';
    }
    if (angleSmall4.className.search("invisible") == -1) {
        angleSmall4.className += ' fade-out-up-small';
    }

    // СТАРАЯ ВЕРСИЯ АНИМАЦИЙ (настраивалось вручную, уж сорян :( ))

    // if(numOfMove == 0) {
    //     wall1.className = 'fade-in-down';
    //     wall2.className = 'fade-in-up';
    // } else if(numOfMove == 1) {
    //     wall2.className = 'dontdeleteit';
    //     angleSmall1.className = 'fade-in-down';
    //     angleSmall4.className = 'fade-in-down-small';
    // } else if(numOfMove == 2) {
    //     wall3.className = 'fade-in-left';
    //     wall4.className = 'fade-in-right';
    // } else if(numOfMove == 3) {
    //     wall1.className = 'fade-in-down';
    //     angleSmall2.className = 'fade-in-up-small';
    //     angleSmall3.className = 'fade-in-up-small2';
    // } else if(numOfMove == 4) {
    //     angleSmall1.className = 'fade-in-down'
    //     angleSmall2.className = 'dontdeleteit';
    //     angleSmall3.className = 'dontdeleteit';
    //     angleSmall4.className = 'fade-in-down-small'
    // } else if(numOfMove == 7) {
    //     wall2.className = 'dontdeleteit';
    //     angleSmall1.className = 'fade-in-down'
    //     angleWithWall3.className = 'fade-in-up-small2';
    //     wall4.className = 'fade-in-right'; 
    // } else if(numOfMove == 8) {
    //     angleSmall1.className = 'dontdeleteit'
    //     angleSmall2.className = 'fade-in-up-small'
    //     wall4.className = 'fade-in-right';
    // } else if(numOfMove == 9) {
    //     angleWithWall2.className = 'fade-in-up-small';
    //     wall2.className = 'fade-in-up';
    //     wall3.className = ' fade-in-left';
    //     angleSmall4.className = 'fade-in-down-small';
    // } else if(numOfMove == 11) {
    //     angleSmall1.className = 'fade-in-down';
    //     angleSmall2.className = 'fade-in-up-small';
    //     angleSmall3.className = 'fade-in-up-small2';
    //     angleSmall4.className = 'fade-in-down-small';
    // } else if(numOfMove == 13) {
    //     angleSmall3.className = 'fade-in-up-small2';
    //     angleSmall4.className = 'fade-in-down-small';
    //     wall3.className = 'fade-in-left';
    // } else if(numOfMove == 15) {
    //     wall4.className = 'dontdeleteit';
    //     angleSmall1.className = 'fade-in-down';
    //     angleSmall2.className = 'fade-in-up-small';
    // } else if(numOfMove == 17) {
    //     wall1.className = 'dontdeleteit';
    //     angleSmall2.className = 'fade-in-up-small';
    //     angleSmall3.className = 'fade-in-up-small2';
    // } else if(numOfMove == 18) {
    //     angleSmall3.className = 'dontdeleteit';
    //     angleSmall4.className = 'fade-in-down-small';
    //     wall3.className = 'fade-in-left';
    // } else if(numOfMove == 19) {
    //     angleSmall3.className = 'dontdeleteit';
    //     angleSmall4.className = 'dontdeleteit';
    //     wall3.className = 'dontdeleteit';
    // } else if(numOfMove == 20) {
    //     wall2.className = 'fade-in-up';
    //     angleSmall1.className = 'fade-in-down';
    //     angleSmall4.className = 'fade-in-down-small';
    // } else if(numOfMove == 21) {
    //     angleSmall3.className = 'fade-in-up-small2';
    //     wall1.className = 'fade-in-down';
    //     wall3.className = 'fade-in-left';
    //     angleWithWall1.className = 'fade-in-down';
    // } else if(numOfMove == 22) {
    //     wall2.className = 'fade-in-up';
    //     angleSmall1.className = 'fade-in-down'
    //     angleWithWall3.className = 'fade-in-up-small2';
    //     wall4.className = 'fade-in-right'; 
    // } else if(numOfMove == 23) {
    //     wall1.className = 'fade-in-down';
    //     angleSmall2.className = 'fade-in-up-small';
    //     angleWithWall4.className = 'fade-in-down-small';
    //     wall4.className = 'fade-in-right'; 
    // } else if(numOfMove == 26) {
    //     wall1.className = 'fade-in-down';
    //     angleSmall2.className = 'fade-in-up-small';
    //     angleSmall3.className = 'fade-in-up-small2';
    // } else if(numOfMove == 27) {
    //     wall3.className = 'fade-in-left';
    //     wall4.className = 'fade-in-right'; 
    // } else if(numOfMove == 28) {
    //     wall4.className = 'dontdeleteit';
    //     angleSmall2.className = 'fade-in-up-small';
    //     angleSmall1.className = 'fade-in-down';
    // } else if(numOfMove == 29) {
    //     wall1.className = 'fade-in-down';
    //     wall2.className = 'fade-in-up';
    // } else if(numOfMove == 30) {
    //     angleSmall3.className = 'fade-in-up-small2';
    //     angleSmall4.className = 'fade-in-down-small';
    //     wall3.className = 'fade-in-left';
    // } else if(numOfMove == 32) {
    //     wall4.className = 'fade-in-right';
    //     angleSmall1.className = 'fade-in-down';
    //     angleSmall2.className = 'fade-in-up-small';
    // } else if(canClickSides[numOfMove].search("rud") !== -1) {
    //     angleSmall3.className = 'dontdeleteit';
    //     angleSmall4.className = 'dontdeleteit';
    //     wall3.className = 'fade-in-left';
    // } else if(canClickSides[numOfMove].search("rl") !== -1) {
    //     wall1.className = 'fade-in-down';
    //     wall2.className = 'fade-in-up';
    // } else if(canClickSides[numOfMove].search("ud") !== -1) {
    //     wall3.className = 'dontdeleteit';
    //     wall4.className = 'fade-in-right'; 
    // }

    //switch case версия

    switch(numOfMove) {
        case 0:
            wall1.className = 'fade-in-down';
            wall2.className = 'fade-in-up';
            break;
        case 1:
            wall2.className = 'dontdeleteit';
            angleSmall1.className = 'fade-in-down';
            angleSmall4.className = 'fade-in-down-small';
            break;
        case 2:
            wall3.className = 'fade-in-left';
            wall4.className = 'fade-in-right';
            break;

        case 3:
            wall1.className = 'fade-in-down';
            angleSmall2.className = 'fade-in-up-small';
            angleSmall3.className = 'fade-in-up-small2';
            break;
        
        case 4:
            angleSmall1.className = 'fade-in-down'
            angleSmall2.className = 'dontdeleteit';
            angleSmall3.className = 'dontdeleteit';
            angleSmall4.className = 'fade-in-down-small'
            break;
        case 4:
            angleSmall1.className = 'fade-in-down'
            angleSmall2.className = 'dontdeleteit';
            angleSmall3.className = 'dontdeleteit';
            angleSmall4.className = 'fade-in-down-small'
            break;
        case 7:
            wall2.className = 'dontdeleteit';
            angleSmall1.className = 'fade-in-down';
            angleWithWall3.className = 'fade-in-up-small2';
            wall4.className = 'fade-in-right'; 
            break;
        case 8:
            angleSmall1.className = 'dontdeleteit'
            angleSmall2.className = 'fade-in-up-small'
            wall4.className = 'fade-in-right';
            break;
        case 9:
            angleWithWall2.className = 'fade-in-up-small';
            wall2.className = 'fade-in-up';
            wall3.className = ' fade-in-left';
            angleSmall4.className = 'fade-in-down-small';
            break;
        case 11:
            angleSmall1.className = 'fade-in-down';
            angleSmall2.className = 'fade-in-up-small';
            angleSmall3.className = 'fade-in-up-small2';
            angleSmall4.className = 'fade-in-down-small';
            break;
        case 13:
            angleSmall3.className = 'fade-in-up-small2';
            angleSmall4.className = 'fade-in-down-small';
            wall3.className = 'fade-in-left';
            break;
        case 15:
            wall4.className = 'dontdeleteit';
            angleSmall1.className = 'fade-in-down';
            angleSmall2.className = 'fade-in-up-small';
            break;
        case 17:
            wall1.className = 'dontdeleteit';
            angleSmall2.className = 'fade-in-up-small';
            angleSmall3.className = 'fade-in-up-small2';
            break;
        case 18:
            angleSmall3.className = 'dontdeleteit';
            angleSmall4.className = 'fade-in-down-small';
            wall3.className = 'fade-in-left';
            break;
        case 19:
            angleSmall3.className = 'dontdeleteit';
            angleSmall4.className = 'dontdeleteit';
            wall3.className = 'dontdeleteit';
            break;
        case 20:
            wall2.className = 'fade-in-up';
            angleSmall1.className = 'fade-in-down';
            angleSmall4.className = 'fade-in-down-small';
            break;
        case 21:
            angleSmall3.className = 'fade-in-up-small2';
            wall1.className = 'fade-in-down';
            wall3.className = 'fade-in-left';
            angleWithWall1.className = 'fade-in-down';
            break;
        case 22:
            wall2.className = 'fade-in-up';
            angleSmall1.className = 'fade-in-down'
            angleWithWall3.className = 'fade-in-up-small2';
            wall4.className = 'fade-in-right'; 
            break;
        case 23:
            wall1.className = 'fade-in-down';
            angleSmall2.className = 'fade-in-up-small';
            angleWithWall4.className = 'fade-in-down-small';
            wall4.className = 'fade-in-right'; 
            break;
        case 26:
            wall1.className = 'fade-in-down';
            angleSmall2.className = 'fade-in-up-small';
            angleSmall3.className = 'fade-in-up-small2';
            break;
        case 27:
            wall3.className = 'fade-in-left';
            wall4.className = 'fade-in-right'; 
            break;
        case 28:
            wall4.className = 'dontdeleteit';
            angleSmall2.className = 'fade-in-up-small';
            angleSmall1.className = 'fade-in-down';
            break;
        case 29:
            wall1.className = 'fade-in-down';
            wall2.className = 'fade-in-up';
            break;
        case 30:
            angleSmall3.className = 'fade-in-up-small2';
            angleSmall4.className = 'fade-in-down-small';
            wall3.className = 'fade-in-left';
            break;
        case 32:
            wall4.className = 'fade-in-right';
            angleSmall1.className = 'fade-in-down';
            angleSmall2.className = 'fade-in-up-small';
            break;
        default:
            if(canClickSides[numOfMove].search("rud") !== -1) {
                angleSmall3.className = 'dontdeleteit';
                angleSmall4.className = 'dontdeleteit';
                wall3.className = 'fade-in-left';
            } else if(canClickSides[numOfMove].search("rl") !== -1) {
                wall1.className = 'fade-in-down';
                wall2.className = 'fade-in-up';
            } else if(canClickSides[numOfMove].search("ud") !== -1) {
                wall3.className = 'dontdeleteit';
                wall4.className = 'fade-in-right'; 
            }
            break;
    }
}

//часть с реакцией lc_mln


function hideGgarnik(){
    playerMap.style.display = "none";
    arrows.forEach((arr) => {arr.style.display = "none"});
    startAnim = true;
}
function viewGgarnik(){
    playerMap.style.display = "block";
    setVisibilityArrows();
    startAnim = false;
}
function viewTest(){
    arrTestView.forEach((arr)=>{arr.style.display = "block"})
    // buttonStart.style.display = "block";
    buttonStartText.textContent = 'Попытаться сбежать';
    // playerReact.style.display = "block";
    // reactArea.style.display = "block";
}
function hideTest(){
    arrTestView.forEach((arr)=>{arr.style.display = "none"})
    // buttonStart.style.display = "none";
    buttonStartText.textContent = '';
    buttonStartText.className = ''
    // playerReact.style.display = "none";
    // reactArea.style.display = "none";
}
function setTimeLength(){
    if(framesPerSec >= 1000){
    framesPerSec -= falseCounter*20;
    }else if(framesPerSec >= 800){
        framesPerSec -= falseCounter*10
    }else if(framesPerSec >= 500){
        framesPerSec -= falseCounter*5
    }
}
function startTest(){
    setTimeLength();
    animatePRTime = {duration: framesPerSec, iterations: 1};
    viewTest();
    hideGgarnik();
    // console.log('startTest');
}

function switchFunc(){
  console.log('switchFunc');        
  if(sF){
    sF = false;
    // console.log('switchToStop')
    buttonStartText.className = 'textRun'
    buttonStartText.textContent = 'БЕЖАТЬ!';
    startAnimate();

  }else{
    sF = true;
    stop();
    // console.log('switchToStart')
  }
}
function startAnimate(){
playerReact.animate(animatePR, animatePRTime);
prizonFC.style.display = "none";
startAnim = true;
}

//   addEventListener("animationend", (playerReact) => {stop(); alert('сработала остановка');})

function stop(){
endReaction();    
hideTest();
viewGgarnik();

}

function checkUp(num){
    console.log('checkUp');
    // console.log('player: '+ playerReact.getBoundingClientRect + "\n area: " + reactArea.getBoundingClientRect);
    console.log('cord player: \nleft: ' + playerReact.getBoundingClientRect().x + "\nright: " + playerReact.getBoundingClientRect().right);
    console.log('cord area: \nleft: ' + reactArea.getBoundingClientRect().x + "\nright: " + reactArea.getBoundingClientRect().right);
    switch (num){
    case 1: 
    
    if ((playerReact.getBoundingClientRect().x >= reactArea.getBoundingClientRect().x) && (playerReact.getBoundingClientRect().x <= reactArea.getBoundingClientRect().right))
    {
        leftSuccses = true;
    }
    else{
        leftSuccses = false;
    }
    // console.log('leftSuccses = ' + leftSuccses);
    
    return leftSuccses;

    case 2:
    
    if((playerReact.getBoundingClientRect().right >= reactArea.getBoundingClientRect().x) && (playerReact.getBoundingClientRect().right <= reactArea.getBoundingClientRect().right))
    {
        rightSuccses = true;
    }
    else{
        rightSuccses = false;
    }
    // console.log('RightSuccses = ' + rightSuccses);
    
    return rightSuccses;

    // case 3:
    
    // if(leftSuccses && rightSuccses){
    //     criticalSuccses = true;
    // }
    // console.log('criticalSuccses = ' + criticalSuccses);
    
    // return criticalSuccses;

 }
 
}


function endReaction(){
    console.log(checkUp(1) + checkUp(2));
    if (checkUp(1) && checkUp(2)){
            // alert('ПОБЕДА');
            reactASW -= 10;
            reactArea.style.width = `${reactASW}px`;
            textReact.textContent = 'Критический успех! Вы сбежали.'
    } else if (checkUp(1) || checkUp(2)){
        // alert('победа');
        
            if(parseInt(reactArea.getBoundingClientRect().width) >= 80)
            {
            reactASW -= 20;
            reactArea.style.width = `${reactASW}px`;
            textReact.textContent = 'Вы сбежали, споткнувшись об угол. Маневренность уменьшилась.'
            } else
            {
            textReact.textContent = 'Из-за сильной усталости вас смогли догнать легионеры.' 
            }
    } else {
        textReact.textContent = 'Вас поймали и пытают!'
        Reveal.next();
        // alert('проигрыш')
    }
    // console.log('endReaction');
    startAnim = false;
}
function restart(){

}