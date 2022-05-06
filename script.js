
// Sets Enter key to trigger submit 
const userInput = document.getElementById('User-Input');
userInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('Submit-Input');

    }
})

// Submits event
const submitUserInput = (event) => {
    event.preventDefault();
    appendLi()
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
    console.log('byeee');
}
const clearListID = document.getElementById('Clear-List');
clearListID.addEventListener('click', clearList)
