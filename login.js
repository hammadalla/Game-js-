let inputEmaill = document.getElementById("inputEmaill")
let inputPassw = document.getElementById("inputPassw")
let checkdata = document.getElementById("checkdata")
let alretEma = document.getElementById("alretEma")
let alretSuccess = document.getElementById("alretSuccess")
let alretpassw = document.getElementById("alretpassw")
let loginlist;

if(localStorage.getItem("loginlist")!=null ){
    loginlist = JSON.parse(localStorage.getItem("loginlist"))
}
else {
    loginlist  = [];
}

checkdata.addEventListener("click" , check)
function check() {
if(validEmail() ==  true && validPass() == true ){
    let result = loginlist.find((el)=>{
        return  el.Email == inputEmaill.value
    })

        if(result == undefined){
            alretEma.add("d-none","d-block")
        } else{
            alretEma.remove("d-block","d-none")
            location.href="home.html"
            localStorage.setItem("userName",JSON.stringify(result.Name))
        }
}
    

}

inputEmaill.addEventListener("blur", validEmail)

function validEmail(){
    let reg =/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/
    if(reg.test(inputEmaill.value) == true){
        inputEmaill.classList.add("is-valid")
        inputEmaill.classList.remove("is-invalid")
        return true
    } else{
        inputEmaill.classList.remove("is-valid")
        inputEmaill.classList.add("is-invalid")
        return false
    }
}

inputPassw.addEventListener("blur", validPass)
function validPass(){
    let reg = /^[A-Za-z-0-9!@#$%^&*()]{2,15}$/
    if(reg.test(inputPassw.value) == true){
        inputPassw.classList.add("is-valid")
        inputPassw.classList.remove("is-invalid")
        return true
    } else{
        inputPassw.classList.remove("is-valid")
        inputPassw.classList.add("is-invalid")
        return false
    }
}

function cleardata(){
    inputEmaill.value=""
    inputPassw.value=""
}


new WOW().init();