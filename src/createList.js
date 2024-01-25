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
    submitList.addEventListener('submit', processInput);

    // Check if list is selected
    const selectList = document.querySelector('.lists');
    selectList.addEventListener('click', selectList);

    displayLists();
}

// Default constructor for List
const createList = (lists, name) => {
    const taskList = [];
    return {
        lists,
        name,
        taskList
    }
};

// Toggle displaying the form
const ToggleForm = () => {
    const form = document.querySelector('#editItemForm');
    if (form.style.display === 'none') {
        form.style.display('grid');
        document.getElementById('editList-title').focus;
    } else {
        document.querySelector('').value = '';
        document.querySelector('').value = '';
        document.querySelector('').value = '';
        document.querySelector('').value = '';
        form.style.display('none');
    }
};

// Handle processing form data & adding new list
const processInput = (e) => {
    let listTitle = document.querySelector('listTitle').value;
    const newList = createList(lists, listTitle);

    lists.push(newList);
    addList(listTitle);
};

function saveToStorage() {
    localStorage.setItem('savedLists', JSON.stringify(lists));
};

const addList = (listName) => {
    // const listsDiv = document.querySelector('#lists');
    const newList = document.createElement('div');
    newList.classList.add('list');

    const title = document.createElement('div');
    title.classList.add('name');
    title.textContent = listName;
    newList.appendChild(title);

    const editBtn = document.createElement('img');
    editBtn.classList.add('icon-edit');
    editBtn.src = 'icons/edit.svg';
    newList.appendChild(editBtn);

    newList.insertAfter('.list');
};

const displayLists = () => {
    lists.forEach(list => {
        addList(list.name);
    });
};

const selectList = (e) => {
    let selectedList = e.target.closest('.list');
};

export default { lists, createListListeners };