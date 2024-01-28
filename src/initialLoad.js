// Create an example instance of the application
import { lists } from './createList.js';
// import { addTodo } from './createTodo.js';
// import {  } from './editTodo.js';

const initialLoad = () => {
    const firstList = document.querySelector('.list');
    firstList.classList.add('selected');
    firstList.querySelector('.icon-edit').style.display = 'flex';
};

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

export { initialLoad, clearUI, displayTasks };