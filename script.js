
// Sets Enter key to trigger submit 
const userInput = document.getElementById('User-Input');
userInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('Submit-Input');
    }
})

// Submits event
const submitUserInput = event => {
    event.preventDefault();
    appendLi();
    addXBTN();
    userInput.value = '';
}
const formID = document.getElementById('form-control');
formID.addEventListener('submit', submitUserInput)

// Appends <li> to <ol> 
const appendLi = () => {
    const LI = document.createElement('li');
    LI.setAttribute('id', `item${liID}`);
    LI.appendChild(document.createTextNode(userInput.value))
    OL.append(LI);
    liID += 1
}

// Clears list
const clearList = (event) => {
    event.preventDefault();
    if (window.confirm(message)){
        const clearListEvent = document.querySelector('#Clear-List');
        clearListEvent.addEventListener('click', 
            document.getElementById('Ordered-List').innerHTML = ''
        )
    }
}
const clearListBTN = document.querySelector('#Clear-List');
clearListBTN.addEventListener('click', clearList);


// Adds delete (X) <button> to <li>
const addXBTN = () => {
    const liXBTN = document.createElement('button');
    liXBTN.setAttribute('id', `item${liBtnID}`);
    liXBTN.innerText = 'X';
    OL.append(liXBTN);
}

const deleteItem = () => {

}
const deleteItemBTN = document.querySelector('button');
deleteItemBTN.addEventListener('click', deleteItem);