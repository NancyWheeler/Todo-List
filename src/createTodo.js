// import { lists, saveToStorage } from './createList.js';
import { clearUI } from './initialLoad.js';
// import { editTodo } from './editTodo.js';

/*
    - create todo factory function
    - eventlisteners
        - addtodo - show add todo form
        - cancel addtodo - hide todo form
        - submit addtodo - process form submission by adding todo
        - edit todo - handle click events for each list item (calls functions from editTodo.js)
            - edit title
            - edit description
            - edit status (completed/incomplete)
            - change priority
            - change date
        - display tasks - function to display all tasks in list
            - function to display all tasks in html
*/

const createTodoListeners = () => {
    
    // Add todo button clicked
    const addTodo = document.querySelector('.add-item-btn');
    addTodo.addEventListener('click', addTodo);

    // Submit new todo form
    const submitTodo = document.querySelector('.btn-saveItem');
    submitTodo.addEventListener('click', toggleForm);

    // Cancel adding new todo
    const cancelTodo = document.querySelector('.btn-cancelItem');
    cancelTodo.addEventListener('click', toggleForm);

    // Edit Todo button clicked (expand/dropdown)
    const editTodoForm = document.querySelector('.icon-expand');
    editTodo.addEventListener('click', toggleForm);
};

// Add list item to list
const CreateTodo = (listId, id, title, desc, status, prio, date) => {
    return {
        listId,
        id,
        title,
        desc,
        status: status,
        prio: prio,
        date: date
    }
};

let defaultId = 0;
let id = Number(localStorage.getItem('id')) || defaultId;

// Display todos when list is clicked
const displayTodos = (listId) => {
    clearUI();
    lists[listId].taskList.forEach(todo => {
        addTodo(todo.listId, todo.title, todo.desc, todo.status, todo.prio, todo.date);
    });
};

// Add todo to DOM 
// const addTodo = (listId, title, desc, status, prio, date) => {
//     const todoList = document.querySelectorAll('ul');

//     const item = document.createElement('li');
//     item.classList.add('list');

//     const prio = document.createElement('div');
//     prio.classList.add('item-prio');
//     prio.classList.add('item-prio');

//     const title = document.createElement('div');
//     const desc = document.createElement('div');
//     const date = document.createElement('div');
//     const expand = document.createElement('img');

//     todoList.appendChild(item);
// };

export { id, displayTodos };