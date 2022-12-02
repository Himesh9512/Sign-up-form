const password = document.getElementById("user_password");
const confirmPassword = document.getElementById("confirm_password");

confirmPassword.addEventListener('input',(e)=>{
    let currentPassword = password.value.toString();
    let checkPassword = confirmPassword.value.toString();
    if(currentPassword === '' || currentPassword === checkPassword || checkPassword == '') {
        confirmPassword.classList.remove('error');
    }else {
        confirmPassword.classList.add('error');
    }
})
