// "use strict";
let ajouter=document.getElementById('.ajouter')
let icon=document.querySelector(".fa-solid")

let cardInput=document.querySelector(".cardInput")
console.log(cardInput)
let formulaire;

icon.addEventListener("click",function(){
 
    cardInput.classList.add("hidden")
})
function inputShow(event){
    // if(ajouter.textContent=="ajouter")
    cardInput.classList.remove("hidden")
     formulaire= event.target.parentElement
    return formulaire;
}

function inputAdd(event){
    {
           let div=document.createElement("div")
    // let statistiq=document.createElement("div")
//  document.body.appendChild(div)
//  console.log(event.currentTarget)
 formulaire.children[0].textContent=event.target.parentElement.children[1].children[1].value
 formulaire.children[1].textContent=event.target.parentElement.children[2].children[1].value
 formulaire.children[2].textContent=event.target.parentElement.children[3].children[1].value
 formulaire.children[3].textContent=event.target.parentElement.children[4].children[1].value

formulaire.children[4].textContent="modifier"
for(i=1;i<8;i++){
     event.target.parentElement.children[i].children[1].value=""
}
   
    event.target.parentElement.children[2].children[1].value="position"
    
} 
    }



