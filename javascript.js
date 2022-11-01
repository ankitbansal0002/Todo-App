// https://github.com/florinpop17/10-projects-10-hours/tree/master/todo-apps

const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("TODO-API"));

if(todos){
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});


function addTodo(todo){
    let todoText = input.value;

    if(todo){
        todoText = todo.text;
    }

    if(todoText){
        const todoE1 = document.createElement("li");
        
        if (todo && todo.completed) {
            todoE1.classList.add("completed");
        }
        
        todoE1.innerText = todoText;

        todoE1.addEventListener("click", () => {
            todoE1.classList.toggle('completed');
            updateLS();
        })
        
        todoE1.addEventListener("contextmenu", (el) => {
            el.preventDefault();
            todoE1.remove();
            updateLS();
        })
        
        todosUL.appendChild(todoE1);
        input.value = '';
    }

    updateLS();
}

function updateLS(){
    const todoE1 = document.querySelectorAll('li');

    const todosLS = []; // creating an array

    todoE1.forEach((todoE1) => {
        todosLS.push({
            text : todoE1.innerText,
            completed: todoE1.classList.contains("completed")  // .contains check whether their is completed class in todoE1 or not
        });
    });

    localStorage.setItem("TODO-API", JSON.stringify(todosLS));
}