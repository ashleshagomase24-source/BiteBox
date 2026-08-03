function login(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let error=document.getElementById("error");

    if(email=="admin@1234" && password=="123456"){
        localStorage.setItem("IsLoggedIn" , "true");
        localStorage.setItem("user" , email , true);

        window.location.href="BiteBox.html"
    }else{
        error.innerText="Invalid Email or password";
    }
}
function togglePassword(){
    let passwordInput =document.getElementById("password")

    if(passwordInput.type === "password"){
        passwordInput.type = "text";
    }else{
        passwordInput.type = "password";
    }
}