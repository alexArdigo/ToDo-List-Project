// next: 
//  shift positions of handleClearList and itemDeleteButton[?]



const userInput = document.getElementById('UserInput');
const submit = document.getElementById('Submit');
const clearList = document.getElementById('ClearList');




// handleSubmit() checks if input field has been written, if so,
// calls handleOL() and handleLI() 
 
const handleSubmit = () => {
    if (userInput.value.trim() === '') return
    handleOL();
    handleLI();
    itemDeleteButton();
}

// creates a new OL with id(ToDoList) and appends to div#container.


// creates a new LI with class(ListItems) and id(itemN), adds userInput.value to it 
// and appends to OL. Resets userInput.value at the end.
const handleLI = () => {
    const LI = document.createElement('LI');
    const OL = document.getElementById('ToDoList');
    LI.setAttribute('class', 'ListItems');
    let OLLength = `item${OL.childNodes.length+1}`;
    LI.id = OLLength;
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

// creates a delete button for each item added. 

const itemDeleteButton = () => {
    const OL = document.getElementById('ToDoList');
    let OLLength = `item${OL.childNodes.length}`;
    const LI = document.getElementById(OLLength);
    let deleteItemButton = document.createElement('button')
    deleteItemButton.innerHTML = 'X';
    deleteItemButton.addEventListener('click', () => handleDeleteItem(OLLength));
    LI.appendChild(deleteItemButton)
    //const deleteItem = document.getElementById(OLLength);
}

const handleDeleteItem = (item) => {
    const OL = document.getElementById('ToDoList');
    let OLLength = `item${OL.childNodes.length}`;
    const LI = document.getElementById(item);
    OL.removeChild(LI);
}

submit.addEventListener('click', handleSubmit);
clearList.addEventListener('click', handleClearList);
