function addTask(){
    const text = document.querySelector('.newTask').value.trim();
    
    if(text){
        const newTaskElement = document.createElement('li');
        newTaskElement.textContent = text;
        document.querySelector('.task-list').appendChild(newTaskElement);
    }
}

function clearTask(){
    document.querySelectorAll('li').forEach(function(task){
        task.remove();
    });
}

document.querySelector('.add-task-btn').addEventListener('click', addTask);
document.querySelector('.clear-btn').addEventListener('click', clearTask);