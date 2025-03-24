const submit = document.querySelector('#form')

const taskList = document.querySelector('.tareas')
const input = document.querySelector('input');

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim() == "") {
        input.value = ""
    }
    else {
        const newTask = document.createElement('li')
        newTask.innerText = input.value
        taskList.appendChild(newTask)
        input.value = ""
        newTask.addEventListener("click", (e) =>
            newTask.classList.toggle('completada')
        )
        newTask.addEventListener("contextmenu", (e) => {
            e.preventDefault;
            newTask.remove()
        })
    }
})

