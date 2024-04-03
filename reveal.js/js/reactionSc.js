    const textOfButton = document.getElementById("rscTextofButton")
    const button1 = document.getElementById('rscButton1')
    const button2 = document.getElementById('rscButton2')
    const ball = document.getElementById("rscBall")
    //var slideMap = document.getElementById('SlideMap');
    //var slideMapInd = Reveal.getIndices(slideMap)
    var canEnd = true
    var i = 100;
    var needRAF = false
    var badEnd = false
    var sF = true
    function switchFunc(){
        alert('ФУНКЦИЯ ГОВНА')
      if(sF) {
        timeDisplay()
        sF = false
        textOfButton.textContent =  "БЕЖАТЬ"
      }
      else{
        stopButton()
        sF= true
        textOfButton.textContent =  "Попытаться сбежать"
        canEnd = true
      }
    }

    function timeDisplay() {
        needRAF = true;       
     function update(now){
            if(parseInt(ball.style.left) >= 1000){needRAF = false}
            if(needRAF){
                i += 10;
                ball.style.left = i+'px'
            requestAnimationFrame(update)    
            }
            else{
            badEnd = true
            if(canEnd){
            end()
            }
            
            }
        } 
        requestAnimationFrame(update)  
        
        console.log(parseInt(ball.style.left))
    }

    function stopButton(){
        alert('ФУНКЦИЯ КОНЦА ВСЕГО')
        needRAF = false
        if(canEnd){
          end();
        }
        
        if(parseInt(ball.style.left) <= 1000 && parseInt(ball.style.left) >= 600)
        {badEnd= false} 
        else
        {badEnd= true}    
    }

    function end(){
        alert('ФУНКЦИЯ ХУЙ ПИЗДА ГОВНО')
        i = 100
        needRAF = false
        ball.style.left = 100+'px'
        canEnd = false
      
        if(badEnd)
        {
        alert("к грнк")
        }
        else
        {
        Reveal.next();
        } 
    }