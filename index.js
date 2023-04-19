let inputName = document.getElementById("inputName")
let inputEmail = document.getElementById("inputEmail")
let inputPass = document.getElementById("inputPass")
let alretError = document.getElementById("alretError")
let alretSuccess = document.getElementById("alretSuccess")
// let checkdata = document.getElementById("checkdata")
let loginlist;

if(localStorage.getItem("loginlist")!=null ){
    loginlist = JSON.parse(localStorage.getItem("loginlist"))
}
else {
    loginlist  = [];
}

function addName() {
if(validName() == true && validEmail() ==  true && validPass() ==true ){
    let result = loginlist.find((el)=>{
        return  el.Email == inputEmail.value
    })

        if(result == undefined){
            let registration = {
                Name:inputName.value,
                Email:inputEmail.value,
                password:inputPass.value
            }
            loginlist.push(registration)
            localStorage.setItem("loginlist",JSON.stringify(loginlist))
            cleardata()
            alretError.classList.replace("d-block","d-none")
            alretSuccess.classList.replace("d-none","d-block")
            inputEmail.classList.add("is-valid")
            inputEmail.classList.remove("is-invalid")
            location.href="login.html"
        } else{
            alretError.classList.replace("d-none","d-block")
            alretSuccess.classList.replace("d-block","d-none")
            inputEmail.classList.remove("is-valid")
            inputEmail.classList.add("is-invalid")
        }
    
}
    

}

inputName.addEventListener("blur", validName)

function validName(){
    let reg = /^[a-zA-Z]{3,10}[0-9]?$/ 
    if(reg.test(inputName.value) == true){
        inputName.classList.add("is-valid")
        inputName.classList.remove("is-invalid")
        return true
    } else{
        inputName.classList.remove("is-valid")
        inputName.classList.add("is-invalid")
        return false
    }
}


inputEmail.addEventListener("blur", validEmail)

function validEmail(){
    let reg =/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/
    if(reg.test(inputEmail.value) == true){
        inputEmail.classList.add("is-valid")
        inputEmail.classList.remove("is-invalid")
        return true
    } else{
        inputEmail.classList.remove("is-valid")
        inputEmail.classList.add("is-invalid")
        return false
    }
}

inputPass.addEventListener("blur", validPass)

function validPass(){
    let reg = /^[A-Za-z-0-9!@#$%^&*()]{2,15}$/
    if(reg.test(inputPass.value) == true){
        inputPass.classList.add("is-valid")
        inputPass.classList.remove("is-invalid")
        return true
    } else{
        inputPass.classList.remove("is-valid")
        inputPass.classList.add("is-invalid")
        return false
    }
}

function cleardata(){
    inputName.value=""
    inputEmail.value=""
    inputPass.value=""
}

new WOW().init();