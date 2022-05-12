const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validUsername = false;
let validPhone = false;

$('#failure').hide();
$('#success').hide();


username.addEventListener('blur',()=>{
    //validate username here
    let regex = /^[a-zA-Z]([0-9A-Za-z]){2,10}$/;
    let str = username.value;

    console.log(str, regex);

    if(regex.test(str)){
        username.classList.remove('is-invalid');
        validUsername = true;
    }
    else{
        username.classList.add('is-invalid');
        validUsername = false;
    }
});

phone.addEventListener('blur',()=>{
    //validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;

    console.log(str, regex);

    if(regex.test(str)){
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        phone.classList.add('is-invalid');
        validPhone = false;
    }
});

email.addEventListener('blur',()=>{
    //validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;

    console.log(str, regex);

    if(regex.test(str)){
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        email.classList.add('is-invalid');
        validEmail = false;
    }
});


let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(validUsername, validPhone, validEmail);

    //submit your form
    if(validEmail && validUsername && validPhone){
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');

        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();
    }
    else{
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');

        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }
    
});

