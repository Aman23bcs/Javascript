let buttons = document.getElementsByClassName('id');
let display=document.querySelector('.display');


let count=0;

for (let index = 0; index < buttons.length; index++) {
  
  buttons[index].addEventListener('click',(e)=>{
   count++;
    if(count%2==0)
      {
        buttons[index].innerText="X";
      }
      else{
       buttons[index].innerText="O";
      }
      let y=buttons[index].innerText
      console.log(y);
     if(buttons[0].innerText=="O" && buttons[1].innerText=="O" && buttons[2].innerText=="O" || buttons[3].innerText=="O" && buttons[4].innerText=="O" && buttons[5].innerText=="O" || buttons[6].innerText=="O" && buttons[7].innerText=="O" && buttons[8].innerText=="O" || buttons[0].innerText=="O" && buttons[3].innerText=="O" && buttons[6].innerText=="O" || buttons[1].innerText=="O" && buttons[4].innerText=="O" && buttons[7].innerText=="O" || buttons[2].innerText=="O" && buttons[5].innerText=="O" && buttons[8].innerText=="O" || buttons[0].innerText=="O" && buttons[4].innerText=="O" && buttons[8].innerText=="O" || buttons[2].innerText=="O" && buttons[4].innerText=="O" && buttons[6].innerText=="O")
     {
      display.innerText="Player 1 won";
      document.querySelector('.hero').classList.add('display2');
      document.querySelector('.hero').classList.remove('display');
     }
     else if (buttons[0].innerText=="O" && buttons[1].innerText=="O" && buttons[2].innerText=="O" || buttons[3].innerText=="O" && buttons[4].innerText=="O" && buttons[5].innerText=="O" || buttons[6].innerText=="X" && buttons[7].innerText=="X" && buttons[8].innerText=="X" || buttons[0].innerText=="X" && buttons[3].innerText=="X" && buttons[6].innerText=="X" || buttons[1].innerText=="X" && buttons[4].innerText=="X" && buttons[7].innerText=="X" || buttons[2].innerText=="X" && buttons[5].innerText=="X" && buttons[8].innerText=="X" || buttons[0].innerText=="X" && buttons[4].innerText=="X" && buttons[8].innerText=="X" || buttons[2].innerText=="X" && buttons[4].innerText=="X" && buttons[6].innerText=="X") {
      display.innerText="Player 2 won";
      document.querySelector('.hero').classList.add('display2');
      document.querySelector('.hero').classList.remove('display');

     } 
    }
    
    
  )
  

}

  //if(buttons[1].innerHTML=="O")
   // {
     // display.innerHTML="Congratulations Player 1 won!!";
    //} 
    //let y=display.innerHTML;
 // console.log(y);



  

    
