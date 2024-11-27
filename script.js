// "use strict";
let positionI = document.getElementById("positionI");
let positionName;
let ajouter = document.querySelector(".ajouter");
console.log(ajouter);
let icon = document.querySelector(".fa-solid");
let name = document.querySelector("#name");
let parName = document.querySelector(".parName");

let cardInput = document.querySelector(".cardInput");
let formulaire;

icon.addEventListener("click", function () {
  cardInput.classList.add("hidden");
});
function formuleShow(event) {
  // if(ajouter.textContent=="ajouter")
  cardInput.classList.remove("hidden");
  formulaire = event.target.parentElement;
  positionI.options[0].textContent =
    formulaire.querySelector("#position").textContent;
  positionName = positionI.options[0].textContent;
  console.log(formulaire.querySelector("button").textContent);
  return formulaire;
}

function inputAdd(event) {
  positionName = positionI.options[0].textContent;
  {
    let formule = event.target.parentElement;
    {
      let div = document.createElement("div");
      // let statistiq=document.createElement("div")
      //  document.body.appendChild(div)

      //  formulaire.children[0].textContent=event.target.parentElement
      formulaire.querySelector("#name").textContent =
        formule.querySelector(".name").value;
      // formulaire.querySelector("#nationality").textContent =
      //   formule.querySelector(".nationalityI").value;
      formulaire.querySelector("#rate").textContent =
        formule.querySelector(".rating").value;
      formulaire.querySelector("#pace").textContent =
        formule.querySelector(".paceI").value;
      formulaire.querySelector("#shooting").textContent =
        formule.querySelector(".shootingI").value;
      formulaire.querySelector("#passing").textContent =
        formule.querySelector(".passingI").value;
      formulaire.querySelector("#dribbling").textContent =
        formule.querySelector(".dribblingI").value;
      formulaire.querySelector("#defending").textContent =
        formule.querySelector(".defendingI").value;
      formulaire.querySelector("#physical").textContent =
        formule.querySelector(".physicalI").value;
      //  formulaire.children[21].textContent=formule.querySelector(".defending").value
      //  formulaire.children[23].textContent=formule.querySelector(".physical").value

      for (i = 1; i < 11; i++) {
        event.target.parentElement.children[i].children[1].value = "";
      }

      // event.target.parentElement.children[2].children[1].value = "position";
    }
  }
  console.log(formulaire);
  if (formulaire.querySelector("button").textContent == "ajouter") {
  }
  if (formulaire.querySelector("button").textContent == "click") {
    alert("rr");
  }

  formulaire.querySelector("button").textContent = "modifier";
}
