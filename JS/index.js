document.addEventListener('DOMContentLoaded', function(){
    let counter = 0;

    function getInputText(){
        return document.querySelector('.newTask').value.trim();
    }
    
    function addCheckbox(newTaskElement){
        const newTaskCheck = document.createElement('input');
        newTaskCheck.type = 'checkbox';
    
        newTaskCheck.classList.add('newTaskInput');
        newTaskElement.appendChild(newTaskCheck);
    }
    
    function addSpan(newTaskElement){
        const textSpan = document.createElement('span');
        textSpan.appendChild(document.createTextNode(getInputText()));
        newTaskElement.appendChild(textSpan);
    }
    
    function addTask(event){
        if(getInputText()){
            if(counter < 28){
                counter++;
                const newTaskElement = document.createElement('li');
        
                addCheckbox(newTaskElement);
                addSpan(newTaskElement);
            
                document.querySelector('.task-list').appendChild(newTaskElement);
                toggleStrikethrough(newTaskElement);
            }
            else{
                alert('Limite de itens atingindo.');
            }
        }
    }
    
    document.querySelector('#formTask').addEventListener('submit', function(event) {
        event.preventDefault();
        addTask();
    });
    
    function clearTask(){
        document.querySelectorAll('li').forEach(function(task){
            task.remove();
        });
    }
    
    function toggleStrikethrough(checkbox){
        checkbox.addEventListener('click', function() {
            const text = checkbox.querySelector('span');
            text.style.textDecoration = text.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        });
    }
    
    document.querySelector('.add-task-btn').addEventListener('click', addTask);
    document.querySelector('.clear-tasks-btn').addEventListener('click', clearTask);
});