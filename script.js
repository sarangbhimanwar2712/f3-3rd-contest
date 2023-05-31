// Links
const signupLink = document.getElementById("sign-up-link") ;
const profileupLink = document.getElementById("profile-up-link") ;

// form details
const userName = document.getElementById("username") ;
const email = document.getElementById("email") ; 
const password =document.getElementById("password") ;
const password2 = document.getElementById("password-2") ;
const signUpBtn = document.getElementById("signUp-btn") ;

//error/success text
const errorText = document.getElementById("error-text") ;
const successText = document.getElementById("success-text") ;

//Function to check mail
function checkMail(email){
    //skipping this method
}
//token func
function tokenGenerator(){
    const characters = 'ABCDEFGHIJKLMNOPQrsTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyx0123456789' ;
    let res = "" ;
    let length = characters.length ;
    for(let i=1 ;i<=16 ;i++){
        res+= characters.charAt(Math.floor(Math.random()*length)) ;
    }
    return res ;
}

//Sign Up Btn
signUpBtn.addEventListener("click" , (event)=>{
    event.preventDefault() ;
    if(userName.value ==="" || 
    email.value ==="" || 
    password.value === "" || 
    password2.value === "")
    {
        errorText.innerHTML = "All fields are manadatory" ;
        return ;
    }

    if(password.value.length < 8){
        errorText.innerHTML = "Password length must be greater than 8" ;
        password.focus() ;
        return ;
    }

    if(password.value !== password2.value){
        errorText.innerHTML = `Password deosn't match` ;
        password2.focus() ;
        return ;
    }

    errorText.innerHTML = "" ;
    let user ={
        username : userName.value ,
        email : email.value ,
        // password :  password.value ,
        token : tokenGenerator() ,
    }

    localStorage.setItem('user' ,JSON.stringify(user)) ;
    successText.innerHTML = `Successfully sign up` ;

    const link = document.createElement('a') ;
    link.href = './profile.html' ;
    document.body.appendChild(link) ;
    link.click() ;
    document.body.removeChild(link) ;
})

//Profile Up link
profileupLink.addEventListener("click" ,()=>{
    if(!localStorage.getItem('user')){
        //we are in the sign up page
       // then we click profile link
       
       profileupLink.href = '#' ;
       window.alert("You are already in your profile") ;
    }else{
        profileupLink.href = './profile.html' ;
        
    }
});

//Sign Up link
signupLink.addEventListener('click',()=>{
    if(localStorage.getItem('user')){
        signupLink.href = '#' ;
        alert("You  are already signed up") ;
    }else{
        signupLink.href ='./index.html' ;
    }
});