
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
    LI.appendChild(document.createTextNode(userInput.value + ' '));
    LI.append(doneBTN());
    LI.append(addXBTN());
    OL.append(LI);
    liID += 1
}

// Adds Done <button> to <li>
const doneBTN = () => {
    const liDoneBTN = document.createElement('button');
    liDoneBTN.innerHTML = 'Done!';
    return liDoneBTN
}

// Adds delete (X) <button> to <li>
const addXBTN = () => {
    const liXBTN = document.createElement('button');
    liXBTN.setAttribute('id', `item${liBtnID}`);
    liXBTN.setAttribute('onClick', 'deleteItem(this.id)')
    liXBTN.innerText = 'X';
    return liXBTN
}

// TRY TO MAKE IT WORK WITH TARGET.VALUE
const deleteItem = (item) => {
    
    const itemToDelete = document.getElementById(item);
    OL.remove(itemToDelete)
}

//const deleteItemBTN = document.getElementById();
//deleteItemBTN.addEventListener('click', () => deleteItem());




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
