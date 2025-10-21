const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const left = document.createElement("div");
    left.classList.add("taskLeft");

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add("check");

    const li = document.createElement('li');

    const nameSpan = document.createElement("span");
    nameSpan.classList.add("taskName");
    nameSpan.textContent = taskText;

    left.appendChild(checkbox);
    left.appendChild(nameSpan);

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(left);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
}