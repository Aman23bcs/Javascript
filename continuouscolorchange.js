
let first = document.querySelector('.box1');

const second = document.querySelector("#id2");
const third = document.querySelector('#id3');
const fourth = document.querySelector('#id4');
const five = document.querySelector('#id5');
const button = document.querySelector("#start");
const container = document.querySelector("#container").children;
let color;
let letters;
function get_random_color() {
    var letters = 'ABCDE'.split('');
    var color = '#';
    for (var i=0; i<3; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}



  


  


  button.addEventListener("click" , ()=>{
      setInterval(() => {
        for (let box of container) {
          box.style.backgroundColor = get_random_color();
        }
        
      }, 600);
  })








//function getRandomColor() {
   // letters = '0123456789ABCDEF';
   // color = '#';
   // for (var i = 0; i < 6; i++) {
  //      color += letters[Math.floor(Math.random() * 16)];
   // }
   // return color;
//}






















