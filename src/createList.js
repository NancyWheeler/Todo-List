/*
    - retrieve lists from storage else create placeholder data
    - Event listener for:
        - displaying new list form
            - function to display inout form
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
    
}

const createList = (lists, name) => {
    const taskList = [];
    return {
        lists,
        name,
        taskList
    }
};

const getStorageData = () => {
    
};