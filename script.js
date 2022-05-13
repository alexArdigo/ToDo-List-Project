
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
    if (userInput.value != ''){
    appendLi();
    addXBTN();
    }
    userInput.value = '';
}
const formID = document.getElementById('form-control');
formID.addEventListener('submit', submitUserInput)

// Appends <li> to <ol> 
const appendLi = () => {
    const LI = document.createElement('li');
    LI.setAttribute('id', `item${liIdCount}`);
    LI.classList.add('todo-list')
    LI.appendChild(document.createTextNode(userInput.value + ' '));
    LI.append(doneCheckBox(LI.id));
    LI.append(addXBTN(LI.id));
    OL.append(LI);
    liIdCount += 1
}

// Adds Done checkbox to <li>
const doneCheckBox = item => {
    const doneCB = document.createElement('input');
    doneCB.setAttribute('type', 'checkbox')
    doneCB.setAttribute('style', 'textDecoration: none')
    doneCB.addEventListener('click', () => itemDone(item, doneCB))

    return doneCB
}
const itemDone = (item, checkbox) => {
    const itemDone = document.getElementById(item)
    console.log(itemDone)
    if (checkbox.checked){
        itemDone.style.textDecoration = 'line-through';
    } else {
        itemDone.style.textDecoration = 'none';
    }
}

// Adds delete (X) <button> to <li>
const addXBTN = item => {
    const liXBTN = document.createElement('button');
    liXBTN.innerText = 'X';
    liXBTN.addEventListener('click', () => deleteItem(item))
    
    return liXBTN
}

const deleteItem = item => {
    
    const itemToDelete = document.getElementById(item);
    itemToDelete.remove()
    
}





// Clears list
const clearList = (event) => {
    event.preventDefault();
    if (window.confirm(message)){
        document.getElementById('Ordered-List').innerHTML = ''
    }
}
const clearListBTN = document.querySelector('#Clear-List');
clearListBTN.addEventListener('click', clearList);
