const BODY = document.body

// DIV
const DIV1 = document.createElement('div');
DIV1.setAttribute('class', 'To-Do-List')
BODY.append(DIV1);

// H1
const H1 = document.createElement('h1');
H1.setAttribute('id', 'h1');
H1.innerHTML = 'ToDo List';
DIV1.append(H1);

// FORM
const FORM = document.createElement('form');
FORM.setAttribute('id', 'form-control');
DIV1.append(FORM);

// INPUTS

// USER INPUTS
const USERINPUT = document.createElement('input');
USERINPUT.setAttribute('id', 'User-Input');
USERINPUT.setAttribute('placeholder', 'Add your to do\'s here...');
USERINPUT.setAttribute('value', '');
FORM.append(USERINPUT);

// SUBMIT BUTTON
const SUBMIT = document.createElement('input');
SUBMIT.setAttribute('type', 'submit');
SUBMIT.setAttribute('id', 'Submit-Input');
SUBMIT.setAttribute('value', 'Submit');
FORM.append(SUBMIT);

// CLEAR LIST
const CLEARLIST = document.createElement('button');
CLEARLIST.setAttribute('id', 'Clear-List');
CLEARLIST.innerText = 'Clear List'
FORM.append(CLEARLIST);

// 
const DIV2 = document.createElement('div');
DIV2.setAttribute('class', 'To-Do-List')
BODY.append(DIV2);
