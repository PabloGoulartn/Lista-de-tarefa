document.querySelector('.add-task-btn').addEventListener('click', function(){
    const text = document.querySelector('.newTask').value.trim();
    
    if(text){
        const newTaskElement = document.createElement('li');
        newTaskElement.textContent = text;
        document.querySelector('.task-list').appendChild(newTaskElement);
    }
});