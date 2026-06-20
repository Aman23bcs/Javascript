//184
let timerb=document.querySelector("#timer");
let score=document.querySelector("#score");
document.querySelector("#hit").innerHTML=Math.floor(Math.random()*10);
let hit=document.querySelector("#hit");
let container=document.querySelector(".circles");
let button=document.querySelector("#button");
function makebubble(){
    for (let index = 1; index < 185; index++) {
    var rn = Math.floor(Math.random()*10);
    container.innerHTML=container.innerHTML+`<div class="circle">${rn}</div>`;
        
}
}
makebubble();
let currentscore=0;
container.addEventListener("click",(e)=>{
    if(e.target.textContent == hit.textContent){
        currentscore=currentscore+10;
          score.innerText=currentscore;
    }
    container.innerHTML="";
    makebubble();
});
function setTime(){
    let timer=60;
    var timerint=setInterval(function() {
        timer--;
        if(timer>=0){
             timerb.innerText=timer;
        }
       else{
        container.innerHTML=`Your Score is ${currentscore}`;   
        clearInterval(timerint);
       }
    },1000);
}
button.addEventListener("click",(e)=>{
    window.location.reload();
})
setTime();


