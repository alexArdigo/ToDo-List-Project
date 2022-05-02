const userInput = document.getElementById("UserInput");
const submit = document.getElementById("Submit");
const clearList = document.getElementById("ClearList");

//const placeHolder = document.getElementById("UserInput").placeholder = 'Add your item here'

const handleSubmit = () => {
    const OL = document.createElement('OL');
    OL.setAttribute('id', 'ToDoList');
    document.body.appendChild(OL);

    const LI = document.createElement('LI');
    const userInputSubmited = document.createTextNode(userInput.value);
    LI.appendChild(userInputSubmited)
    document.getElementById('ToDoList').appendChild(LI);

    document.getElementById("UserInput").placeholder = 'Add your item here'


}

const handleClearList = () => {
    const element = document.getElementById('OL')
    element.remove()
}

submit.addEventListener('click', handleSubmit)
clearList.addEventListener('click', handleClearList)