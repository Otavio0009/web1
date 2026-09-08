let tasks = []

// Seleção de elementos do DOM
const taskDescription = document.getElementById("task-description")
const taskButton = document.getElementById("task-button")
const taskList = document.getElementById("task-list")

// Registra eventos
taskButton.addEventListener("click", addTask)

function addTask() {
    const description = taskDescription.value.trim()

    // Impede adicionar tarefas sem texto
    if (description === "") return

    const newTask = {
        description,
        checked: false
    }

    tasks.push(newTask)
    taskDescription.value = "" // Limpa o campo de texto
    renderList()
}

function renderList() {
    taskList.innerHTML = ""

    tasks.forEach(task => {
        const li = document.createElement("li")

        // Checkbox
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = task.checked

        checkbox.addEventListener("change", function() {
            task.checked = checkbox.checked
            if (task.checked) {
                text.classList.add("completed")
            } else {
                text.classList.remove("completed")
            }
        })

        li.appendChild(checkbox)

        // Texto da tarefa
        const text = document.createElement("span")
        text.textContent = task.description

        if (task.checked) {
            text.classList.add("completed")
        }
        li.appendChild(text)

        // Botão de remover
        const button = document.createElement("button")
        button.textContent = "Remover"

        button.addEventListener("click", function() {
            tasks = tasks.filter(t => t !== task)
            renderList()
        })
        li.appendChild(button)

        taskList.appendChild(li)
    })
}