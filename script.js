const userInput = document.getElementById("UserInput");
const submit = document.getElementById("Submit");
const clearList = document.getElementById("ClearList");


//const DIV = document.createElement('div')



const handleSubmit = () => {
    if (userInput.value.trim() === '') return
    const divContainer = document.getElementById('container');
    const OL = document.createElement('OL');
    OL.setAttribute('id', 'ToDoList');
    divContainer.appendChild(OL)
    const LI = document.createElement('LI');
    LI.setAttribute('class', 'ListItems')
    const userInputSubmited = document.createTextNode(userInput.value);
    LI.appendChild(userInputSubmited);
    document.getElementById('ToDoList').appendChild(LI);

    userInput.value = '';


}

const handleClearList = () => {
    const divContainer = document.getElementById('container');
    const message = 'Are you sure you want to delete the whole list?'
    if (window.confirm(message)) {
        const element = document.querySelector('#ToDoList');
        divContainer.removeChild(element);
    }
}

submit.addEventListener('click', handleSubmit);
clearList.addEventListener('click', handleClearList);