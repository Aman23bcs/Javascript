let x=Math.round(Math.random()*100);
const form=document.querySelector('#f');
const button=document.querySelector('#button');
const num=document.querySelector('#rest');
const arrr=document.querySelector('#arr');
const n=parseInt(num.innerText);
let arr=[];
const output=document.querySelector('#output');
//let a=9;
let b=9;

    button.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let input=document.querySelector('#guess').value;
    //output.innerText=input+" "+x;
    if(input==x)
    {   
        output.innerText="YOU  WON";
        return;
    }
    if(b<0)
        {   
            output.innerText=`Chances are over better luck next time The number was ${x}`;
            return;
        }
    arr.push(input);
    arrr.innerText=`${arr}`;
    
   
   //b=Math.round(a);
    num.innerHTML=`${b}`;
    //a=a-1;
    b=b-1;


    
    
   
})
    