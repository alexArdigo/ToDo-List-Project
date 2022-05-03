const userInput = document.getElementById("UserInput");
const submit = document.getElementById("Submit");
const clearList = document.getElementById("ClearList");


// handleSubmit() checks if input field has been written, if so, 
// creates a new OL with id(ToDoList) and appends to div#container. Next, 
// creates a new LI with class(ListItems), adds userInput.value to it 
// and appends to OL.
const handleSubmit = () => {
    if (userInput.value.trim() === '') return
    const divContainer = document.getElementById('container');
    const OL = document.createElement('OL');
    OL.setAttribute('id', 'ToDoList');
    divContainer.appendChild(OL);
    const LI = document.createElement('LI');
    LI.setAttribute('class', 'ListItems')
    const userInputSubmited = document.createTextNode(userInput.value);
    LI.appendChild(userInputSubmited);
    document.getElementById('ToDoList').appendChild(LI);

    userInput.value = '';


}

// handleClearList() triggers a confirm message to weither 
// clear div#container's content or not. The action is unreversible.
const handleClearList = () => {
    const divContainer = document.getElementById('container');
    const message = 'Are you sure you want to delete the whole list?'
    if (window.confirm(message)) {
        const element = document.querySelector('#ToDoList');
        divContainer.removeChild(element);
    }
}

const handleItem = () => {
    const getsLI = document.querySelector('.ListItems');
    const deleteItemButton = document.createElement("button");
    deleteItemButton.innerHTML('X');
     
}

submit.addEventListener('click', handleSubmit);
clearList.addEventListener('click', handleClearList);