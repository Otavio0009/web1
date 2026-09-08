let tasks = []


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

    tasks.push(newTask)
    renderList()
}

function renderList () {

    taskList.innerText = ""
    tasks.forEach(task => {
        const li = document.createElement("li")

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = task.checked

        checkbox.addEventListener("change", function() {
            task.checked = checkbox.checked

            if(task.checked) {
                text.classList.add("completed")

            } else {
                text.classList.remove("completed")
            }
        })

        li.appendChild(checkbox)

        const text = document.createElement("span")
        text.textContent = task.description

        if(task.checked) {
                text.classList.add("completed")

        }
        li.appendChild(text)

        const button = document.createElement("button")
        button.textContent = "Remover"

        button.addEventListener("click", function() {
            tasks = tasks.filter(t => t != task)
            renderList()
        })
        li.appendChild(button)

        taskList.appendChild(li)
    })
}