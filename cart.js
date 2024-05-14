//подсчет стоимости всех товаров по классу, класс у цены у всех один
function sumByClass(){
    let elements = document.getElementsByClassName("price_book"); // инициализируем поиск по классу price_book всех стоиомстей на странице
    let i, sum = 0; //  инициализируем перменные i-отдеьный элемент из полученного списка, sum-сумма всех элементов до вычисления сумма 0
    for(i = elements.length; i--;) // циклом по длинне списка, длинна списка количество объектов 
        sum += parseInt(elements[i].innerText || elements.textContent, 10) // находим сумму элементов, parseInt преобразует в число строку

    return document.getElementById('total_sum').innerHTML = `${sum.toLocaleString('ru-RU')} руб.` // возвращаем сумму в итоговый результат на странице
}
sumByClass() // вызываем функцию что бы работала
// функция расчета суммы при применении купона/нажатия на кнопку
function sumDiscount(){
    this.removeEventListener('click', sumDiscount); // нужен что бы кнопка могла быть тиспользована только один раз с купоном, удалет ранее назначенный метод по щелчку при повторном использовании
    let prices=document.querySelectorAll('.price_book'); // ищем элементы по классу
    prices.forEach(item=>{item.innerHTML=parseFloat(item.innerHTML)*0.8}); // расчитываем новыю сумму и заменяем значания по классу
    let els = document.getElementsByClassName("price_book"); // остальное скопировано с предыдущей функции ищем аналогично сумму, только с новыми значениями
    let i, sum_disc = 0;
    for(i = els.length; i--;)
        sum_disc += parseInt(els[i].innerText || els.textContent, 10);

    return document.getElementById('total_sum').innerHTML = `${sum_disc.toLocaleString('ru-RU')} руб.`     
}
let prices_new=document.getElementById('button_id');// ищем кнопку которую будем кликать
prices_new.addEventListener('click', sumDiscount);// вызываем функцию при клике мышке по кнопке

//стиль кнопки при наведении
button_effect=document.getElementById('button_id')
function buttonMouseOver(){
    document.querySelector("#button_id").style.backgroundColor='rgb(242, 174, 174)';
}
button_effect.addEventListener('mouseover', buttonMouseOver);