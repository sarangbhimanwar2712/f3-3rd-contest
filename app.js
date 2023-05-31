const fullName = document.getElementById("fullname") ;  
const emailId = document.getElementById("email") ;
const logOutBtn = document.getElementById("logout-btn") ;
const signupLink = document.getElementById("sign-up-link") ;
const profileupLink = document.getElementById("profile-up-link") ;


if(localStorage.getItem('user')){
    const user = JSON.parse(localStorage.getItem('user')) ;
    fullName.innerHTML = user.username ;
    emailId.innerHTML = user.email ;
}

logOutBtn.addEventListener("click" ,()=>{
    localStorage.clear() ;
    const link = document.createElement('a') ;
    link.href = './index.html' ;
    document.body.appendChild(link) ;
    link.click() ;
    document.body.removeChild(link);
});

//Profile Up link
profileupLink.addEventListener("click" ,()=>{
    if(!localStorage.getItem('user')){
        //we are in the sign up page
       // then we click profile link
       
       profileupLink.href = './index.html' ;
    }else{
        profileupLink.href = '#' ;
        alert("You are already in your profile");  
    }
});

//Sign Up link
signupLink.addEventListener('click',()=>{
    if(localStorage.getItem('user')){
        signupLink.href = '#' ;
        alert("you are already signed up");
    }else{
        signupLink.href ='./index.html' ;
    }
});