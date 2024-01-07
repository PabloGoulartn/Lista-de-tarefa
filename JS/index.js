function getInputText(){
    return document.querySelector('.newTask').value.trim();
}

function addTask(){
    if(getInputText()){
        const newTaskElement = document.createElement('li');
        const newTaskCheck = document.createElement('input');
        newTaskCheck.type = 'checkbox';

        newTaskCheck.classList.add('newTaskInput');
        newTaskElement.appendChild(newTaskCheck);

        const textSpan = document.createElement('span');
        textSpan.appendChild(document.createTextNode(getInputText()));
        newTaskElement.appendChild(textSpan);
    
        document.querySelector('.task-list').appendChild(newTaskElement);
        teste(newTaskElement);
    }
}

function clearTask(){
    document.querySelectorAll('li').forEach(function(task){
        task.remove();
    });
}

function teste(checkbox){
    checkbox.addEventListener('click', function() {
        const text = checkbox.querySelector('span');
        text.style.textDecoration = text.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    });
}

document.querySelector('.add-task-btn').addEventListener('click', addTask);
document.querySelector('.clear-tasks-btn').addEventListener('click', clearTask);