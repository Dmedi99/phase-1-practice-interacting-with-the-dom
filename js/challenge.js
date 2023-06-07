document.addEventListener("DOMContentLoaded", function(){
    let counterElement = document.getElementById('counter')
    let counterValue = parseInt(counterElement.textContent)

    setInterval(function(){ 
        counterValue++
        counterElement.textcontent = counterValue
    }, 100) 

    function incrementTimer(){ 
        counterValue++
        counterElement.textContent = counterValue
        }

        document.getElementById('plus').addEventListener('click', incrementTimer)
})



//will decrement the time when - button is clicked  
function decrementTimer(){ 

}

//will pause the timer 
function pauseTimer(){ 

}

//will like the number that is displayed on the timer
function likingANumber(){ 

}

//Will increase the timer every second
function Handletimer(){ 

}

//Will submit and post the comment on the site
function handleComment(){ 


}

//will restart the timer and delete likes/comments
function handleRestart(){ 

}

//document.querySelector('restart').addEventListener('click', )

