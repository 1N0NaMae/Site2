var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {    //цикл по нажатию открытия и закрытия "рамок" с текстом
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



var mass = ["Русскоговорящий сотрудник школы","Удобное расположение школы в спокойном и тихом районе города Йокогама, всего 25 минут до центра Токио на поезде","Подготовка к экзаменам JLPT и EJU","Выездные мероприятия и культурная программа","Поддержка от школы в бытовых вопросах", "Онлайн курс от школы, который позволит познакомиться с преподавателями и программой до приезда в Японию"];
document.getElementById("demo").innerHTML = mass[0];
document.getElementById("demo1").innerHTML = mass[1];
document.getElementById("demo2").innerHTML = mass[2];
document.getElementById("demo3").innerHTML = mass[3];  // массив с определенным текстом.
document.getElementById("demo4").innerHTML = mass[4];
document.getElementById("demo5").innerHTML = mass[5];


