function addTask() {
    let taskInput = document.getElementById("todo-input");
    let taskValue = taskInput.value;
    if (taskValue.trim() !== "") {
        let todoList = document.getElementById("todo-list");
        let newTask = document.createElement("li");
        newTask.innerHTML = `
            <span>${taskValue}</span>
            <button onclick="completeTask(this)">Complete</button>
        `;
        todoList.appendChild(newTask);
        taskInput.value = "";
    }
}

function completeTask(button) {
    let taskItem = button.parentElement;
    taskItem.classList.toggle("completed");
}
