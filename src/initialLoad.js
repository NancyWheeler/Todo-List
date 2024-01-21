// Create an example instance of the application
import { creatListListeners } from './createList.js';
import { creatTodoListeners } from './createTodo.js';
import { editListListeners } from './editList.js';
import {  } from './editTodo.js';

let lists = [];

const initialLoad = () => {
    lists = addList(lists, "Groceries");
    addTodo(lists[0].list, "eggs", "large", "22/1/24", "0", "0");
    console.log(lists);
};

function clearUI() {
    const content = document.querySelector('.items');
};

export default initialLoad;