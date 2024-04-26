    //        const textOfButton = document.getElementById("rscTextofButton")
    // const button1 = document.getElementById('rscButton1')
    // const button2 = document.getElementById('rscButton2')
    // const ball = document.getElementById("rscBall")
    // let framesPerSec = 10;
    // let i = 100
    // let needRAF = true
    // let sF = true
    // let canEnd = true
    // function switchFunc(){
    //   if(sF){
    //     startAnim()
    //     sF = false
    //     console.log('switchToStop')
    //     textOfButton.textContent = 'Бежать!'
    //   }else{
    //     stop()
    //     console.log('switchToStart')
    //   }
    // }
    // function startAnim(){    
    //   needRAF = true
    //   function update(now){
        
    //     if(parseInt(ball.style.left) <=1000){
    //       if(needRAF){
    //     i += framesPerSec;
    //     ball.style.left = i+'px'
    //     requestAnimationFrame(update)
    //     console.log('шар движется')
    //       }
    //     }
    //     else{
    //     console.log('шар остановился' + parseInt(ball.style.left))
        
    //     Reveal.next()
    //     console.log('reveal.next - endAnim')
    //     restart()
    //     } 
    //   }
    //   requestAnimationFrame(update)
    // }
    // function stop(){
    //         needRAF = false
    //         console.log('stop')
            
    //         if(parseInt(ball.style.left) >= 600 && parseInt(ball.style.left) <= 1000){
              
    //           Reveal.prev()
    //           console.log('reveal.prev - stop')
              
    //         }
    //         else{
    //         Reveal.next()
    //         console.log('reveal.next - stop')
    //         }
    //         restart()
    //       }
    // function restart(){
    //  i = 100
    //  ball.style.left = 100+"px"
    //  sF = true
    //  textOfButton.textContent = 'Попытаться сбежать'
    //  console.log('restart')
    // }