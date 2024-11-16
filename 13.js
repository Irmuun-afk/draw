const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
const clrs = document.querySelectorAll('.clr');
console.log(clrs);
// document -> html dotor baiga buh code
// window -> ajluulsan huudas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// zuraasiin urgun
ctx.lineWidth = 1;
let prevX=null;
let prevY=null;
let draw= false;
// addEventlistener -> mousemove
let clrArr = Array.from(clrs);
console.log(clrArr);
// forEach -> array/massive
clrArr.forEach(clr=>{
    clr.addEventListener('click', ()=>{
        ctx.strokeStyle=clr.dataset.clr; //zuraasiin ungu uurchluh
    });
});
//mousedown - mouse deer darah ued
window.addEventListener('mousedown', ()=>{
    draw=true;
});
window.addEventListener('mouseup', ()=>{
    draw=false;
})
window.addEventListener('mousemove', (e)=>{
    if(draw==false || prevX==null || prevY==null){
        prevX=e.clientX;
        prevY=e.clientY;
    }
    console.log(e.clientX);
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    ctx.beginPath(); //( zuraasiin zamiig ehluuleh
    ctx.moveTo(prevX,prevY); // mouse hudluh bairshil
    ctx.lineTo(mouseX,mouseY); // mousenii bairsil zurah
    ctx.stroke(); // zursan zuraasiig gargaj ireh
    prevX = e.clientX;
    prevY = e.clientY;

});
let clerBtn = document.querySelector('.clear');
clerBtn.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
});
let sBtn = document.querySelector('.save');
sBtn.addEventListener('click',()=>{
    let data = canvas.toDataURL('imag/jpg');
    let a = document.createElement('a');
    a.href=data;
    a.download="test.jpg";
    a.click();
});
let selBtn = document.querySelector('.select');
let Select = document.querySelector('.sel');
selBtn.addEventListener('click',()=>{
    ctx.lineWidth=Select.value;
})
let input = document.querySelector('.input');
console.log(input.value); 
let seleBtn=document.querySelector('.sele');
seleBtn.addEventListener('click', ()=>{
   ctx.strokeStyle=input.value;
   console.log(input.value);
})