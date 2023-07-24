const openLogin = document.getElementById('user-login');
const signUp = document.getElementById('sign-up');
const signupMobile = document.getElementById('signup-mobile');
const verification = document.getElementById('Verification');
const verificationMobile = document.getElementById('Verification-mobile');
const login = document.getElementById('login');
const loginMobile = document.getElementById('login-mobile');
const closeSignup = document.getElementById('close-signup');



// event
openLogin.addEventListener("click",()=>{
    signUp.style.display = "flex";
    signupMobile.style.display = "flex";
});
closeSignup.addEventListener("click",()=>{
    signUp.style.display = "none";
});
login.addEventListener("click",()=>{
    signUp.style.display = "none";
    verification.style.display ="flex";
});
loginMobile.addEventListener("click",()=>{
    signupMobile.style.display = "none";
    verificationMobile.style.display = "flex";
});
