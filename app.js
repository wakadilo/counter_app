const value = document.getElementById("value")
const btns = document.querySelectorAll(".btn")

let num = 0

btns.forEach(function (btn){
    btn.addEventListener("click", function(event){
        const currentBtn = event.currentTarget.classList
        if(currentBtn.contains("decrease")){
            num --
            value.textContent = num
        }else if(currentBtn.contains("reset")){
            num = 0
            value.textContent = num
        }else{
            num ++
            value.textContent = num
        }
    })
})
