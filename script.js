// "use strict";
let positionI = document.getElementById("positionI");
let positionName;
let ajouter = document.querySelector(".ajouter");
console.log(ajouter);
let btn = "";
let icon = document.querySelector(".fa-solid");
// let name = document.querySelector("#name");
// let parName = document.querySelector(".parName");
let arrayIN;
let deleteButton = document.createElement("button");
deleteButton.textContent = "delete";
deleteButton = document.createElement("button");
deleteButton.textContent = "Supprimer";
deleteButton.classList.add("deleteButton");

let cardInput = document.querySelector(".cardInput");
let formulaire;
let formule;

icon.addEventListener("click", function () {
  cardInput.classList.add("hidden");
});
function formuleShow(event) {
  formulaire = event.target.parentElement;
  const formInputs = cardInput.querySelectorAll("input");
  formInputs.forEach((input) => (input.value = ""));

  btn = event.target;
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
    deleteButton.classList.remove("hidden");

    // formule.querySelector(".ajouter").textContent = "ajouter";
  }
  // if(ajouter.textContent=="ajouter")
  cardInput.classList.remove("hidden");
  positionI.options[0].textContent =
    formulaire.querySelector("#position").textContent;
  positionName = positionI.options[0].textContent;
  temp = btn.textContent;

  return formulaire;
}

function inputAdd(event) {
  formule = event.target.parentElement;
  cardInput.classList.add("hidden");
  formule.appendChild(deleteButton);
  deleteButton.addEventListener("click", function () {
    formulaire.querySelector("#badge").src = "./";
    cardInput.classList.add("hidden");
  });
  arrayIN = [
    formule.querySelector(".name").value,
    formule.querySelector(".physicalI").value,
    formule.querySelector(".defendingI").value,
    formule.querySelector(".dribblingI").value,
    formule.querySelector(".passingI").value,
    formule.querySelector(".shootingI").value,
    formule.querySelector(".paceI").value,
    formule.querySelector(".rating").value,
    formule.querySelector(".nationalityI").value,
    formule.querySelector(".equipe").value,
    formule.querySelector(".photo").value,
  ];
  if (formule.querySelector(".name").value.trim() == "") {
    event.preventDefault();
    alert("remplire les champ");
    return;
  }

  for (let i = 8; i < 11; i++) {
    if (!URL.canParse(arrayIN[i])) {
      alert("URL est invalide");
      // formule.reset();
      return;
    } else {
      break;
    }
  }
  for (let i = 1; i < 7; i++) {
    if (Number(arrayIN[i]) >= 100 || Number(arrayIN[i]) < 1) {
      alert("choisir une nombre entre 1 et 99 ");
      return;
    } else {
      continue;
    }
  }

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

  deleteButton.classList.add("hidden");
}
