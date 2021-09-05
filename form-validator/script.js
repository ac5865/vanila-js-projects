const form= document.getElementById('form');
const username= document.getElementById('username');
const email = document.getElementById('email');
const password= document.getElementById('password');
const password2= document.getElementById('password2');
const feedback= document.getElementById('feedback');

function showError(input, message){
    const formElement = input.parentElement;
    formElement.className = 'form-element error';
    const small = formElement.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formElement = input.parentElement;
    formElement.className = 'form-element success';
}

// check email
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input, 'Email is not valid');
    }
}

//check required fields
function checkRequired(inputArr){
    let isRequired = false;
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input, `${getFieldName(input)} is required`);
            isRequired=true;
        }
        else{
            showSuccess(input);
        }
    });
    return isRequired;
}

//check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }
    else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be at moxt ${max} characters`);
    }
    else{
        showSuccess(input);
    }
}

//check password match
function checkPassword(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match');
    } 
}

// get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!checkRequired([username,email, password, password2, feedback])){
        checkLength(username, 3, 20);
        checkLength(password, 6, 20);
        checkEmail(email);
        checkPassword(password, password2);
    }
});
  