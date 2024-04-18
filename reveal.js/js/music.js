function createSoundtrack(url,{volume=0.5, timeUp=1}){
    let audio = new Audio(); // Создание элемента аудие
    audio.src = url; // путь к самой мелодии
    audio.autoplay = true; //Автозапуск
    audio.volume = 0; //Громкость
    audio.loop = true;
    const l = setInterval(()=>{
        audio.volume+=0.01*volume;
    },timeUp*10);
    setTimeout(()=>{
        clearInterval(l);
    },(1000*volume-10)*timeUp);
}

function createSound(url,{volume=0.5}){
    let audio = new Audio(); // Создание элемента аудие
    audio.src = url; // путь к самой мелодии
    audio.autoplay = true; //Автозапуск
    audio.volume = volume; //Громкость
}

// createSound("music/name.mp3", 0.5, 1);
createSoundtrack("music/Vopna.mp3", 1);