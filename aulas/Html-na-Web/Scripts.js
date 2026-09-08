const task = []

//
const taskDescription = document.getElementById("task-description")
const taskButton = document.getElementById("task-button")
const taskList = document.getElementById("task-list")

// registra eventos
taskButton.addEventListener("click", addTasck)

function addTasck() {

    const description = taskDescription.value

    const newTask = {
        description,
        checked: false
    }

    task.push(newTask)
    console.log("Task: ", task)
    renderList()
}

function renderList () {

    taskList.innerText = ""
    task.forEach(task => {
        const li = document.createElement("li")

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = task.checked
        li.appendChild(checkbox)

        const text = document.createElement("span")
        text.textContent = task.description
        li.appendChild(text)

        const button = document.createElement("button")
        button.textContent = "Remover"
        li.appendChild(button)

        taskList.appendChild(li)
    })
}