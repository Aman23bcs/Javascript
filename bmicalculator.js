const form=document.querySelector('form');

form.addEventListener('submit',(e) =>{
e.preventDefault();

const h=parseInt(document.querySelector('#height').value);
const w=parseInt(document.querySelector('#weight').value);
const r=document.querySelector('#result');
const bmi = ((h/w)*10).toFixed(2);
r.innerHTML=`<span>${bmi}</span>`;
if(bmi>=24.90 || bmi<=18.50)
{
    document.querySelector('#result').setAttribute("style","background-color:red;");
}
else{
    document.querySelector('#result').setAttribute("style","background-color:green;");
}
})