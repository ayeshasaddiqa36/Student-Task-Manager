let tasks = [];

const taskForm = document.getElementById("task-form");
const taskTitle = document.getElementById("task-title");
const taskDescription = document.getElementById("task-description");
const taskList = document.getElementById("task-list");
const searchInput = document.getElementById("search-input");

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = taskTitle.value;
    const description = taskDescription.value;

    const task = {
        title: title,
        description: description,
        completed: false
    };

    tasks.push(task);

    displayTasks();

    taskTitle.value = "";
    taskDescription.value = "";
});

function displayTasks(searchText = "") {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        const title = tasks[i].title.toLowerCase();
        const description = tasks[i].description.toLowerCase();
        const search = searchText.toLowerCase();

        if (title.includes(search) || description.includes(search)) {

            const taskCard = document.createElement("div");
            taskCard.className = "task-card";

            taskCard.innerHTML = `
                <h3>${tasks[i].title}</h3>
                <p>${tasks[i].description}</p>
            `;

            taskList.appendChild(taskCard);
        }
    }
}

searchInput.addEventListener("input", function() {
    displayTasks(searchInput.value);
});