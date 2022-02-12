document.getElementById('login-submit').addEventListener('click', function(){
    const inputEmail = document.getElementById('inputEemail').value;
    const inputPassword = document.getElementById('inputPassword').value;
    if(inputEmail == 'admin@mail.com' && inputPassword == 'admin'){
        console.log('Vaild user')
        console.log(inputEmail, inputPassword)
           window.location.href = 'acount.html'
    }else{
        document.getElementById('errorMassage').innerText = 'Invalid user!! Try again';
    }
})
