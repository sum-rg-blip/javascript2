let tasbihs =document.querySelector("#tasbih")
let increment=document.querySelector("#Incrementbtn")
let set =document.querySelector("#Resetbtn")
let initial=0
increment.addEventListener("click",function(){
initial++
tasbihs.innerHTML=initial
if(initial==4){
document.body.style.backgroundColor = "red"
}
else if(initial==5){
  document.body.style.backgroundColor="blue"
}
else if(initial==6){
  document.body.style.backgroundColor="green"
}
else if(initial==7){
  document.body.style.backgroundColor="orange"
}
else if(initial==8){
  document.body.style.backgroundColor="yellow"
}
else {
  document.body.style.backgroundColor = "white"
}
})
let reset=0
set.addEventListener("click",function(){
tasbihs.innerHTML=reset
})