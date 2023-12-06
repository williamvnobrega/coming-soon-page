const result = document.querySelector("#result");
const email = document.querySelector("#email")

function validateEmail(){
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(email.value === ''){
        result.textContent = "Whoops! It looks like you forgot to add your email";
        email.style.borderColor = 'var(--light-red)';
        return false;
    }
    if (reg.test(email.value) == false) 
    {
        result.textContent = 'Please provide a valid email address';
        email.style.borderColor='var(--light-red)';
    }

    return true;

}