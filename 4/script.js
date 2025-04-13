let inputs = document.getElementsByTagName("input")
let form = document.querySelector("form")
let answers = document.getElementsByClassName("answer")
let inForm = document.getElementsByClassName("form")
let after = document.getElementById("after")
let er = document.getElementsByClassName("error")
inputs[1].addEventListener("focus",()=>{
    setInterval(()=>{
     if(inputs[1].value.length%5==0 && inputs[1].value.length<=16){ 
        inputs[1].value +=" "
    }   
    },100)
    
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    answers[0].textContent = inputs[1].value
    answers[1].textContent = inputs[0].value
    answers[2].textContent = `${inputs[2].value}/${inputs[3].value}`
    answers[3].textContent = inputs[4].value
    inForm[0].style.display = "none" 
    after.style.display = "flex" 
    inputs[5].value = "Continue"
})

