const eclatee = document.querySelector(".tangram")
const boutton_basic = document.querySelector(".btn-basic")
const boutton_dim = document.querySelector(".btn-dim")
const boutton_surprise= document.querySelector(".btn-surprise")

boutton_basic.addEventListener("click",
function(){
    eclatee.classList.add("tangram--basic")
    eclatee.classList.remove("tangram--dim")
    eclatee.classList.remove("tangram--surprise")

})

boutton_dim.addEventListener("click",
function(){
    eclatee.classList.add("tangram--dim")
    eclatee.classList.remove("tangram--basic")
    eclatee.classList.remove("tangram--surprise")
    

})
boutton_surprise.addEventListener("click",
function(){
    eclatee.classList.add("tangram--surprise")
    eclatee.classList.remove("tangram--basic")
    eclatee.classList.remove("tangram--dim")
})






