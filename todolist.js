// добавление задачи через форму 
function createTask(){
    const taskInput = document.getElementById("taskInput"); //инициируем поле ввода по Id
    const task = taskInput.value; // инициируем перменную для получения значения из введеного поля
    if (!task) return; // проверяем что значение не пустое
    const taskList = document.getElementById("taskList"); // инициируем список зкдач
    const newTask = document.createElement("ul"); // инициируем подэелмент ul списка задач
    newTask.classList.add("task");// добавляем задачу в список
    const taskText = document.createElement("li"); //инициируем подэелмент li списка задач
    taskText.classList.add("task-text");//добавляем текст задачи в список
    taskText.innerHTML = task;// выводим задачу на экран
    newTask.appendChild(taskText);//добавляем новую задачу в конец списка
    taskList.appendChild(newTask);//добавляем новую задачу в конец списка
    taskInput.value = "";//очищаем поле ввода после добавления задач
}
//функция зачеркивания задач по клику мыши
taskList.onclick = function(event) {
    if (event.target.tagName != "LI") return; //проверяем кликнутый объект на li если нет то возврашаем первоначальное состояние

    else {
      singleSelect(event.target);// если кликнутый объект li возвразаем функцию single select ниже и тестируем все
    }

  }

  function singleSelect(li) {
    li.classList.add('selected');// добавляем класс selected щелкнутому объекту li
  }
