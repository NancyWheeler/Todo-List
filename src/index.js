import { displayTasks, initialLoad } from './initialLoad.js';
import createTodo from './createTodo.js';
import { createListListeners } from './createList.js';

initialLoad();
createListListeners();
displayTasks();
