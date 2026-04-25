function addTask() {
    let input = document.getElementById("taskInput");
    if (input.value === "") return;

    let taskList = document.getElementById("taskList");
    let newTask = document.createElement("div");
    newTask.className = "task-item";
    newTask.innerHTML = `
        <input type="checkbox"> ${input.value}
        <div class="actions">
            <span class="edit-btn">✎</span>
            <span class="delete-btn" onclick="this.parentElement.parentElement.remove()">🗑</span>
        </div>
    `;
    
    taskList.appendChild(newTask);
    input.value = "";
}