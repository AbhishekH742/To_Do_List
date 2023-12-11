// Variables

const addTask = document.querySelector('.add-task');
const taskContainer = document.querySelector('.task-container');
const inputTask = document.querySelector('#input-task');

// Event Listner

addTask.addEventListener('click', function(){

    let task = document.createElement('div');
    task.classList.add('task');
    
    let li  = document.createElement('li');
    li.innerHTML = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.classList.add('check-btn');
    checkBtn.innerHTML = '<img src="check-button.png " width="25px">';
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '<img src="trash-can.png" width="25px">';
    task.appendChild(deleteBtn);

    if(inputTask.value === ""){
        alert("Please enter a task");
    }
    else{
        taskContainer.appendChild(task);
    }

    inputTask.value = "";


    checkBtn.addEventListener('click', function(){

        checkBtn.parentElement.style.textDecoration="line-through";
    });

    deleteBtn.addEventListener('click', function(e){

        let target = e.target;
        target.parentElement.parentElement.remove();
    })
})