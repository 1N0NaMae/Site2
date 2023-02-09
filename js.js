

window.alert("Добро пожаловать!"); // всплывающее окно с надписью.
//ниже идет присвоение по id
document.getElementById("Us1").innerHTML = "Наша компания занимается помощью приезжающим в Японию с абсолютно разными целями,  начиная от туризма, заканчивая переездом в страну навсегда. Если вы собираетесь приехать в страну на долгосрочной перспективе, то перевод документов и прочие оформления бесплатно!";
document.getElementById("Us2").innerHTML = "Также мы можем оказать вам и другие услуги например регистрация в банке, покупка сим карты, создание вашей печати и так далее. Подробнее с ценами и самими услугами вы можете ознакомиться здесь: ЗДЕСЬ ДОБАВИТЬ ССЫЛКУ Услуги.";
document.getElementById("Us3").innerHTML = "Свой путь студенты могут начать как со школы японского языка так и с университета при должном знании языка. Если же вы сомневаетесь или не знаете с чего вам следует начать или куда пойти проконсультируйтесь с нашим менеджером, номер которого указан ниже.";



const textElement  = document.querySelector('.HH1');  //замена объекта тега
const textElementContent = textElement.innerHTML;
const newElement = document.createElement('div');
textElement.innerHTML = 'О нашей компании:';
newElement.innerHTML = '<h2><center>Добавление тега абзац!</center></h2>';
textElement.after(newElement);
//newElement.remove();      //удаление элемента. 

const HH = document.querySelector('.HH');   //Заголовки (STYLE)
HH.style.fontStyle = "italic";
HH.style.fontWeight = "bold";
const HH1 = document.querySelector('.HH1');
HH1.style.color = "#ed1d70";
HH1.style.textAlign = "center";
HH1.style.fontStyle = "italic";
HH1.style.fontWeight = "bold";

const Text = document.querySelector('.Text');        //Основной текст (STYLE)
Text.style.marginLeft = "3cm";
Text.style.marginRight = "1cm";
Text.style.marginTop ="2cm";
Text.style.marginBottom = "2cm";
Text.style.textIndent = "1.5cm";


let list = document.querySelector('.list');
let items = document.querySelectorAll('.list li');
let button = document.querySelector('.button111');
button.addEventListener('click', function() {
let sorted = [...items].sort(function(a,b){
return a.innerHTML - b.innerHTML;
});
list.innerHTML = ' ';
for(let li of sorted){
list.appendChild(li);
console.log(sorted);
}
});



