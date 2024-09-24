
document.getElementById( "form-validate" ).addEventListener( 'submit', function(event){

    event.preventDefault();

    let userName = document.getElementById("userName").value.trim()
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()
    let confirmPassword = document.getElementById("confirmPassword").value.trim()

    let uNameError = document.getElementById("uName-error")
    let emailError = document.getElementById("mail-error")
    let passError = document.getElementById( "password-error")
    let cPassError = document.getElementById( "cPassword-error")


    let isValid = true;

    //Kesavan Murugesan
    //abc@gmail.com
    let uNamePattern = /^[A-Za-z]+ [A-Za-z]+$/;
    let emailPattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/

    if( userName === "" ){
        uNameError.innerText = "*Name is Required"
        isValid = false
    }
    else if( !uNamePattern.test(userName)  ){
        uNameError.innerText = "*Enter Your Full Name"
        isValid = false
    }
    else if( uNamePattern.test(userName) ){
        uNameError.innerText = "";
        isValid = true;
    }

    if( email === "" ){
        emailError.innerText = "*Email is Required"
        isValid = false
    }
    else if( !emailPattern.test( email ) ){
        emailError.innerText = "Enter a valid email"
        isValid = false
    }
    else if( emailPattern.test( email ) ){
        emailError.innerText = ""
        isValid = true
    }

    if( password === "" ){
        passError.innerText = "*Password is Required"
        isValid = false
    }
    else if( password.length <3 || password.length>10 ){
        passError.innerText = "Enter a password Char between 3 to 10"
        isValid = false
    }
    else if( password.length >3 || password.length<10 ){
        passError.innerText = ""
        isValid = true
    }

    if( confirmPassword === "" ){
        cPassError.innerText = "*Confirm Password is Required"
        isValid = false
    }
    else if( confirmPassword !== password ){
        cPassError.innerHTML = "*Password Not Match"
        isValid = false
    }
    else if( confirmPassword === password ){
        cPassError.innerHTML = ""
        isValid = true
    }

    if( isValid ){
        alert( `Hi ${userName}, Welcome to Our Website`  )
        console.log( userName, email, password ); 
    }
    

} )
