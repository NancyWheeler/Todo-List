// Create an example instance of the application
import { lists } from './createList.js';
import { addTodo } from './createTodo.js';
import {  } from './editTodo.js';

// const initialLoad = () => {
//     lists = addList(lists, "Groceries");
//     addTodo(lists[0].list, "eggs", "large", "22/1/24", "0", "0");
//     console.log(lists);
// };

function clearUI() {
    const content = document.querySelector('ul');
    content.textContent = '';
};

function displayTasks() {
    clearUI();
    lists.forEach(list => {
        list.taskList.forEach(task => {
            addTodo();
        });
    });
};

export default { displayTasks };