const openLogin = document.getElementById('user-login');
const signUp = document.getElementById('sign-up');


// event
openLogin.addEventListener('click',()=>{
    window.location.href= 'pop-up.html';
    signUp.style.opacity = "1";


});

