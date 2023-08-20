var score = 0
var hitnum;
var btm = document.querySelector("#btm")
var maxscr=0


function timer(){
    var time=5
    makebubble()
    document.querySelector("#timer").innerHTML = time
    setInterval(function(){
       
        
    
    if(time>0){
        time--
        document.querySelector("#timer").innerHTML = time
    }
    else{
        clearInterval()
        document.querySelector("#btm").innerHTML = ""
        document.querySelector("#btm").innerHTML += "<h1>Game Over</h1>"
        if(maxscr<score){
            maxscr = score
            score=0
        }
        
        document.querySelector("#btm").innerHTML += `<h2>your highest score till now is ${maxscr}</h2>`
        document.querySelector("#btm").innerHTML += `<button id ="abc" onclick="rep()">replay</button>`
    }
},1000)
}
function makebubble(){
    document.querySelector("#btm").innerHTML = ""
    for(i=0;i<152;i++){
        var rn = Math.floor(Math.random()*10)
        document.querySelector("#btm").innerHTML += `<div class = "bbl">${rn}</div>`
    }
}
function increasescr(){
    score = score+10;
    document.querySelector("#score").innerHTML = score;
}
function hit(){
    hitnum = Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent = hitnum
}


hit()
timer()
btm.addEventListener("click",function(dets){
    if(Number(dets.target.textContent)===hitnum){
        increasescr();
        hit()
        makebubble()

    }
    else{
        makebubble()
        hit()
       
    }
})

function rep(){
    
    hit()
    timer()
}