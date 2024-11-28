// "use strict";
let positionI = document.getElementById("positionI");
let positionName;
let ajouter = document.querySelector(".ajouter");
console.log(ajouter);
let btn = "ajouter";
let icon = document.querySelector(".fa-solid");
let name = document.querySelector("#name");
let parName = document.querySelector(".parName");

let cardInput = document.querySelector(".cardInput");
let formulaire;
let formule;

icon.addEventListener("click", function () {
  cardInput.classList.add("hidden");
});
function formuleShow(event) {
  if (btn.textContent == "modifier") {
    formule.querySelector(".name").value =
      formulaire.querySelector("#name").textContent;
    formule.querySelector(".equipe").value =
      formulaire.querySelector("#logo").src;

    formule.querySelector(".photo").value =
      formulaire.querySelector("#photo").src;
    formule.querySelector(".nationalityI").value =
      formulaire.querySelector("#flag").src =
      formule.querySelector(".rating").value =
        formulaire.querySelector("#rate").textContent;
    formule.querySelector(".paceI").value =
      formulaire.querySelector("#pace").textContent;
    formule.querySelector(".shootingI").value =
      formulaire.querySelector("#shooting").textContent;

    formule.querySelector(".passingI").value =
      formulaire.querySelector("#passing").textContent;

    formule.querySelector(".dribblingI").value =
      formulaire.querySelector("#dribbling").textContent;

    formule.querySelector(".defendingI").value =
      formulaire.querySelector("#defending").textContent;
    formule.querySelector(".physicalI").value =
      formulaire.querySelector("#physical").textContent;

    // formule.querySelector(".ajouter").textContent = "ajouter";
  }
  // if(ajouter.textContent=="ajouter")
  cardInput.classList.remove("hidden");
  formulaire = event.target.parentElement;
  positionI.options[0].textContent =
    formulaire.querySelector("#position").textContent;
  positionName = positionI.options[0].textContent;
  btn = event.target;

  return formulaire;
}

function inputAdd(event) {
  formule = event.target.parentElement;
  positionName = positionI.options[0].textContent;
  if (btn.textContent == "ajouter") {
    formulaire.querySelector("#name").textContent =
      formule.querySelector(".name").value;
    formulaire.querySelector("#logo").src =
      formule.querySelector(".equipe").value;
    formulaire.querySelector("#photo").src =
      formule.querySelector(".photo").value;
    formulaire.querySelector("#flag").src =
      formule.querySelector(".nationalityI").value;
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
    btn.textContent = "modifier";
  }
  // for (i = 1; i < 11; i++) {
  //   event.target.parentElement.children[i].children[1].value = "";
  // }
  console.log(formulaire.querySelector("#logo"));
}
