document.addEventListener('DOMContentLoaded', function () {
    let counter = 0;

    function getInputText() {
        return document.querySelector('.newTask').value.trim();
    }

    function addCheckbox(newTaskElement) {
        const newTaskCheck = document.createElement('input');
        newTaskCheck.type = 'checkbox';
        newTaskCheck.classList.add('newTaskInput');
        newTaskElement.appendChild(newTaskCheck);
    }

    function addSpan(newTaskElement) {
        const textSpan = document.createElement('span');
        textSpan.appendChild(document.createTextNode(getInputText()));
        newTaskElement.appendChild(textSpan);
    }

    function addSection(newTaskElement) {
        const section = document.createElement('section');
        section.classList.add('delete-task-btn');
        newTaskElement.appendChild(section);
        addImg(section);
    }

    function addImg(newTaskElement) {
        const img = document.createElement('img');
        img.src = 'img/Garbage.png';
        img.alt = 'Excluir item';
        img.classList.add('btn');
        newTaskElement.appendChild(img);
    }

    function addTask(event) {
        if (getInputText()) {
            if (counter < 28) {
                counter++;
                const newTaskElement = document.createElement('li');
                addCheckbox(newTaskElement);
                addSpan(newTaskElement);
                addSection(newTaskElement);
                document.querySelector('.task-list').appendChild(newTaskElement);
                toggleStrikethrough(newTaskElement);
                addImgEvent(newTaskElement); // Adiciona o ouvinte de evento para a imagem
            } else {
                alert('Limite de itens atingindo.');
            }
        }
    }

    function addImgEvent(newTaskElement) {
        const img = newTaskElement.querySelector('img');
        img.addEventListener('click', function () {
            newTaskElement.remove();
            counter--;
        });
    }

    document.querySelector('#formTask').addEventListener('submit', function (event) {
        event.preventDefault();
        addTask();
    });

    function clearTask() {
        document.querySelectorAll('li').forEach(function (task) {
            task.remove();
        });
    }

    function toggleStrikethrough(task) {
        const checkbox = task.querySelector('.newTaskInput');
        checkbox.addEventListener('click', function () {
            const text = task.querySelector('span');
            text.style.textDecoration = text.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        });
    }

    document.querySelector('.add-task-btn').addEventListener('click', addTask);
    document.querySelector('.clear-tasks-btn').addEventListener('click', clearTask);

    document.querySelectorAll('.newTaskInput').forEach(function (checkbox) {
        toggleStrikethrough(checkbox.parentElement);
    });
});
