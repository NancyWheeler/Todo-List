import { id } from './createTodo.js';

/*
    - retrieve lists from storage else create placeholder data
    - Event listener for:
        - displaying new list form
            - function to display input form
        - cancelling adding new list
            - function to revert displaying form
        - adding new list (submit event)
            - function to push new list to lists and update storage
            - function to add newly created list to html 
            - call function to hide form
        - selecting a list
            - update html to show list is selected
            - call display tasks (createTodo.js)
        - display all lists from storage
            - function to display all tasks in html
    - Create list factory function
*/

let defaultLists = [];
let lists = localStorage.getItem('savedLists');
    lists = JSON.parse(lists || JSON.stringify(defaultLists));

const createListListeners = () => {

    // Event listener to display list form
    const addListBtn = document.querySelector('.add-list-btn');
    addListBtn.addEventListener('click', ToggleForm);

    // Event listener to hide/cancel list form
    const hideList = document.querySelector('.btn-cancelList');
    hideList.addEventListener('click', ToggleForm);

    // Event listener to submit list form
    const submitList = document.querySelector('.btn-saveList');
    submitList.addEventListener('click', processInput);

    // Check if list is selected
    const listSelected = document.querySelector('.lists');
    listSelected.addEventListener('click', selectList);

    displayLists();
}

// Default constructor for List
const CreateList = (listId, name) => {
    const taskList = [];
    const taskNum = taskList.length;
    return {
        listId,
        name,
        taskList,
        taskNum
    }
};

// Toggle displaying the form
const ToggleForm = () => {
    const form = document.getElementById('editListForm');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'flex';
    } else {
        document.getElementById('editList-title').value = '';
        form.style.display = 'none';
    }
};

// Handle processing form data & adding new list
const processInput = (e) => {
    let listTitle = document.getElementById('editList-title').value;
    let listID = document.querySelectorAll('[data-list-id]').length;
    const newList = CreateList(listID, listTitle);

    lists.push(newList);
    // saveToStorage();

    addList(listID, listTitle);
    ToggleForm();

    // let newItem = document.querySelectorAll('.list');
    // selectList(newItem[newItem.length - 1]);

    e.preventDefault();
};

function saveToStorage() {
    localStorage.setItem('savedLists', JSON.stringify(lists));
    localStorage.setItem('id', id.toString());
};

// DOM manipulation
const addList = (listId, listName) => {
    const listsNav = document.querySelector('.lists');
    const newList = document.createElement('div');
    newList.classList.add('list');
    newList.setAttribute('data-list-id', listId);

    const title = document.createElement('div');
    title.classList.add('list-name');
    title.textContent = listName;
    newList.appendChild(title);

    const editBtn = document.createElement('img');
    editBtn.classList.add('icon-edit');
    editBtn.src = 'icons/edit.svg';
    newList.appendChild(editBtn);

    listsNav.insertBefore(newList, listsNav.lastElementChild);
};

// display all lists
const displayLists = () => {
    lists.forEach(list => {
        addList(list.name);
    });
};

// Handle selection of list
const selectList = (e) => {
    let selectedList = e.target.closest('.lists .list');
    console.log(e);
    console.log(selectedList);
    if (selectedList != null) {
        const listTitle = selectedList.querySelector('.list-name');
        let listItem = selectedList.dataset.list;

        toggleSelected(selectedList);
        // displayTodos(listItem);
        // updateTitle(listTitle);
    } else {
        return;
    }
};

// Apply CSS to selected list
const toggleSelected = (node) => {
    const selectedList = document.querySelector('.selected');
    const selectedListEdit = document.querySelector('.selected .icon-edit');
    selectedList.classList.remove('selected');
    selectedListEdit.style.display = 'none';

    node.classList.add('selected');
    node.querySelector('.icon-edit').style.display = 'flex';
};

export { lists, createListListeners, saveToStorage };