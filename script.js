
// Sets Enter key to trigger submit 
const userInput = document.getElementById('User-Input');
userInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('Submit-Input').click();
    }
})

// Submits event
const submitUserInput = (event) => {
    event.preventDefault();
    console.log("hello");
}
const formID = document.getElementById('form-control');
formID.addEventListener('submit', submitUserInput)

// Clears list
const clearList = (event) => {
    event.preventDefault();
    console.log('byeee');
}
const clearListID = document.getElementById('Clear-List');
clearListID.addEventListener('click', clearList)

// Creates <li>