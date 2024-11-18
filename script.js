function addTask() {
    const taskInput = document.getElementById('task-input');
    // Obtener el elemento de la lista de tareas donde se mostrarán las tareas
    const taskList = document.getElementById('task-list');
    const taskText = taskInput.value;


    // Crear el elemento de la tarea
    const li = document.createElement('li');
    li.textContent = taskText;

    // Crear el botón de eliminar
    const deleteBtn = document.createElement('button');
    // Decimos lo que va a decir el bttn
    deleteBtn.textContent = 'Eliminar';
    // añadimos una clase al bttn
    deleteBtn.classList.add('delete-btn');
    // borramos el elemento padre que acompaña este boton
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Añadir el botón de eliminar a la tarea
    li.appendChild(deleteBtn);

    // Añadir la tarea a la lista
    taskList.appendChild(li);

    // Limpiar el campo de entrada
    taskInput.value = '';

}