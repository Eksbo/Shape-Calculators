'use script' ;

// Сделайте калькулятор, который будет находить площадь и периметр квадрата. 

    let a =document.querySelector('#inpSq');
    let btn = document.querySelector('#btnSq');
    let p = document.querySelector('#pSq');

a.addEventListener('blur' , function(event){
    event.preventDefault()
    let res1 = Number(a.value) * 4 ;
    let res2 = Number(a.value) ** 2 ;
    p.textContent = `Периметр квадрата : ${res1} , Площадь квадрата : ${res2} `
}) ;


// Сделайте калькулятор, который будет находить площадь и периметр прямоугольника. 


let b = document.querySelector('#inpPr');
let c = document.querySelector('#inpPr1');
let p1 = document.querySelector('#pPr');
let btnPr = document.querySelector('#btnPr');

btnPr.addEventListener('click', function(){
    console.log("=");
    let resPr = (Number(b.value) * 2) +( Number(c.value) * 2 ) ;
    let resPr1 = Number(b.value) * Number(c.value) ;
    p1.textContent = `Периметр прямоугольникa : ${resPr} , Площадь прямоугольникa : ${resPr1} `

});

// Сделайте калькулятор, который будет находить площадь круга и длину окружности. 

let r = document.querySelector('#inpKr');
let btnKr = document.querySelector('#btnKr');
let pKr = document.querySelector('#pKr');

btnKr.addEventListener('click', function()
{
resKr =  Math.round(Math.PI *( Number(r.value) **2));
resKr1 =  Math.round(Math.PI *( Number(r.value) * 2));
pKr.textContent = `Площадь окружности : ${resKr} , Длинa окружности : ${resKr1} `

});

// Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам. 
let a1 = document.querySelector('#inpTr1');
let a2 = document.querySelector('#inpTr2');
let a3 = document.querySelector('#inpTr3');
let pTr = document.querySelector('#pTr');
let btnTr = document.querySelector('#btnTr');
btnTr.addEventListener('click' , function ()
{
    let per = (Number(a1.value) + Number(a2.value) + Number(a3.value))/2
    let sum = (per*(per - Number(a1.value)) * (per - Number(a2.value))* (per - Number(a3.value)));
    let resPer = Math.round(Math.sqrt(sum));
    console.log(resPer);
    pTr.textContent = `Площадь треугольника : ${resPer} `
});

